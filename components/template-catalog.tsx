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

export function TemplateCatalog({ items }: { items: Guide[] }) {
  const [active, setActive] = useState<ChipId>("all");

  const visible = useMemo(() => {
    if (active === "all") return items;
    return items.filter((item) => item.group === active);
  }, [active, items]);

  const activeGroup =
    active === "all"
      ? undefined
      : templateGuideGroups.find((group) => group.id === active);

  return (
    <div className="mt-12">
      <div
        className="flex flex-wrap gap-2"
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
                  variant: pressed ? "primary" : "outline",
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
      <ul className="mt-6 grid gap-5 md:grid-cols-2">
        {visible.map((item) => {
          const showAuthor = item.source && item.source !== "—";
          const addHref =
            item.kind === "template" && item.href.startsWith("https://x.ai/bot/")
              ? item.href
              : null;
          return (
            <li
              key={item.slug}
              className="flex flex-col rounded-3xl bg-ivory p-6 dark:bg-card"
            >
              <GrokBotMark className="size-8 text-primary" />
              <h3 className="mt-4 text-xl font-medium text-jet dark:text-paper">
                {item.title}
              </h3>
              {showAuthor ? (
                <p className="mt-1 text-sm text-fog">{item.source}</p>
              ) : null}
              <p className="mt-2 text-[15px] leading-6 text-fog">{item.excerpt}</p>
              {addHref ? (
                <a
                  href={addHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "sm" }), "mt-6 w-fit")}
                >
                  Add to Grok Bot
                </a>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
