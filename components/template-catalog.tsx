"use client";

import { useMemo, useState } from "react";
import { GrokBotMark } from "@/components/grok-bot-mark";
import { buttonVariants } from "@/components/ui/button";
import {
  templateGuideGroups,
  type Guide,
  type TemplateGroupId,
} from "@/lib/guides";
import { cn } from "@/lib/utils";

type ChipId = "all" | TemplateGroupId;

const chips: { id: ChipId; title: string }[] = [
  { id: "all", title: "All" },
  ...templateGuideGroups.map((group) => ({
    id: group.id as TemplateGroupId,
    title: group.title,
  })),
];

const groupTitle: Record<TemplateGroupId, string> = {
  builders: "Builders",
  engineering: "Engineering",
  ops: "Ops",
};

function isTemplateGroup(id: Guide["group"]): id is TemplateGroupId {
  return id === "builders" || id === "engineering" || id === "ops";
}

export function TemplateCatalog({ items }: { items: Guide[] }) {
  const [active, setActive] = useState<ChipId>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (active !== "all" && item.group !== active) return false;
      if (!q) return true;
      const hay = `${item.title} ${item.excerpt} ${item.source}`.toLowerCase();
      return hay.includes(q);
    });
  }, [active, items, query]);

  const activeGroup =
    active === "all"
      ? undefined
      : templateGuideGroups.find((group) => group.id === active);

  return (
    <div className="mt-12">
      <label htmlFor="template-search" className="sr-only">
        Search templates
      </label>
      <input
        id="template-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by name, description, or author…"
        autoComplete="off"
        className="h-12 w-full rounded-full border border-dove bg-paper px-5 text-[15px] text-jet outline-none placeholder:text-fog focus:border-primary dark:border-white/15 dark:bg-card dark:text-paper"
      />
      <div
        className="mt-4 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter templates by type"
      >
        {chips.map((chip) => {
          const pressed = active === chip.id;
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(chip.id)}
              className={cn(
                buttonVariants({
                  variant: pressed ? "primary" : "secondary",
                  size: "sm",
                }),
              )}
            >
              {chip.title}
            </button>
          );
        })}
      </div>
      {activeGroup ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-6 text-fog">
          {activeGroup.blurb}
        </p>
      ) : null}
      {visible.length === 0 ? (
        <p className="mt-10 text-center text-[15px] text-fog">
          No templates match.
        </p>
      ) : (
        <ul className="mt-6 grid gap-5 lg:grid-cols-3">
          {visible.map((item) => {
            const showAuthor = item.source && item.source !== "—";
            const addHref =
              item.kind === "template" &&
              item.href.startsWith("https://x.ai/bot/")
                ? item.href
                : null;
            const tag = isTemplateGroup(item.group)
              ? groupTitle[item.group]
              : null;
            return (
              <li
                key={item.slug}
                className="flex flex-col overflow-hidden rounded-3xl bg-ivory dark:bg-card"
              >
                <div
                  className="relative flex h-40 shrink-0 items-center justify-center"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse 80% 70% at 50% 42%, color-mix(in srgb, #0094FF 16%, transparent), transparent 68%), linear-gradient(165deg, color-mix(in srgb, var(--cream) 58%, var(--ivory)), var(--ivory))",
                  }}
                >
                  {tag ? (
                    <span className="absolute top-4 left-4 rounded-full bg-white/75 px-2.5 py-1 text-[11px] font-medium text-jet backdrop-blur-sm dark:bg-white/10 dark:text-paper">
                      {tag}
                    </span>
                  ) : null}
                  <GrokBotMark className="size-14 text-primary sm:size-16" />
                </div>
                <div className="flex flex-1 flex-col items-center px-6 pt-5 pb-6 text-center">
                  <h3 className="text-xl font-[550] text-jet dark:text-paper">
                    {item.title}
                  </h3>
                  {showAuthor ? (
                    <p className="mt-1 text-sm text-fog">by {item.source}</p>
                  ) : null}
                  <p className="mt-2 text-[15px] leading-6 text-fog">
                    {item.excerpt}
                  </p>
                  {addHref ? (
                    <div className="mt-auto pt-6">
                      <a
                        href={addHref}
                        target="_blank"
                        rel="noreferrer"
                        className={buttonVariants({ size: "sm" })}
                      >
                        Add to Grok Bot
                      </a>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
