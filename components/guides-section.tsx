import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { listGuideGroups, type Guide, type GuideCollection } from "@/lib/guides";
import { formatDate } from "@/lib/utils";

const kindLabel = {
  official: "Official",
  template: "Template",
  guide: "Guide",
} as const;

function GuideCard({ item }: { item: Guide }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="flex h-full flex-col rounded-3xl bg-ivory p-6 transition-colors hover:bg-cream/40 dark:bg-card dark:hover:bg-white/5"
    >
      <p className="font-mono text-[11px] tracking-[0.08em] text-fog uppercase">
        {kindLabel[item.kind]}
      </p>
      <h3 className="mt-2 text-xl font-medium text-jet dark:text-paper">
        {item.title}
        <ArrowUpRight className="ml-1 inline size-4 align-[-2px]" strokeWidth={2} />
      </h3>
      <p className="mt-2 text-[15px] leading-6 text-fog">{item.excerpt}</p>
      <p className="mt-4 text-sm text-fog">
        {item.source} · {formatDate(item.date)}
      </p>
    </a>
  );
}

export async function GuidesSection({
  collection = "templates",
  groups,
}: {
  collection?: GuideCollection;
  groups?: Array<Guide["group"]>;
}) {
  const sections = await listGuideGroups(collection, groups);

  return (
    <section id="guides" className="px-5 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-[550] leading-[36px] tracking-[-0.8px] text-jet sm:text-[48px] sm:leading-[48px] dark:text-paper">
              Vetted templates
            </h2>
            <p className="mt-3 max-w-xl text-[17px] leading-7 text-fog">
              Grouped by type. Marketplace dumps stay out.
            </p>
          </div>
          <Link href="/guides" className="text-sm font-medium text-primary hover:underline">
            All guides
          </Link>
        </div>

        {sections.length === 0 ? (
          <p className="mt-10 rounded-3xl bg-ivory px-6 py-10 text-fog dark:bg-card">
            Nothing vetted yet. Check back after the next hunt.
          </p>
        ) : (
          <div className="mt-12 space-y-14">
            {sections.map((section) => (
              <div key={`${section.collection}-${section.id}`}>
                <h3 className="font-[family-name:var(--font-display)] text-[24px] font-[550] tracking-[-0.4px] text-jet dark:text-paper">
                  {section.title}
                </h3>
                <p className="mt-1 text-[15px] leading-6 text-fog">{section.blurb}</p>
                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item.slug}>
                      <GuideCard item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
