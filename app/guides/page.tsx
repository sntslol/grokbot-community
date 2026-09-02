import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { listAlsoGroups, listTeamGuideGroups, listTemplateGroups, type Guide } from "@/lib/guides";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Templates and guides",
  description: "Vetted Grok Bot templates and six-team guides, grouped by type.",
  alternates: { canonical: "/guides" },
};

const kindLabel = {
  official: "Official",
  template: "Template",
  guide: "Guide",
} as const;

function ItemCard({ item }: { item: Guide }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-3xl bg-ivory p-6 transition-colors hover:bg-cream/40 dark:bg-card dark:hover:bg-white/5"
    >
      <p className="font-mono text-[11px] tracking-[0.08em] text-fog uppercase">
        {kindLabel[item.kind]} · {formatDate(item.date)}
      </p>
      <h3 className="mt-2 text-xl font-medium text-jet dark:text-paper">
        {item.title}
        <ArrowUpRight className="ml-1 inline size-4 align-[-2px]" strokeWidth={2} />
      </h3>
      <p className="mt-1 text-sm text-fog">{item.source}</p>
      <p className="mt-2 text-[15px] leading-6 text-fog">{item.excerpt}</p>
    </a>
  );
}

export default async function GuidesPage() {
  const teams = await listTeamGuideGroups();
  const templates = await listTemplateGroups();
  const also = await listAlsoGroups();

  return (
    <div className="px-5 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="font-[family-name:var(--font-display)] text-[40px] font-[550] leading-[40px] tracking-[-1.2px] text-jet sm:text-[60px] sm:leading-[60px] dark:text-paper">
          Templates and guides
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-fog">
          Guides follow{" "}
          <a
            href="https://x.com/benln/status/2094775808602546335"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            Ben Lang’s six-team index
          </a>
          . Templates stay grouped by type. We do not list marketplaces.
        </p>

        <h2 className="mt-16 font-[family-name:var(--font-display)] text-[32px] font-[550] tracking-[-0.6px] text-jet dark:text-paper">
          Guides
        </h2>
        <div className="mt-8 space-y-14">
          {teams.map((section) => (
            <section key={`teams-${section.id}`}>
              <h3 className="font-[family-name:var(--font-display)] text-[28px] font-[550] tracking-[-0.5px] text-jet dark:text-paper">
                {section.title}
              </h3>
              <p className="mt-1 text-[15px] leading-6 text-fog">{section.blurb}</p>
              <ul className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <ItemCard item={item} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <h2 className="mt-20 font-[family-name:var(--font-display)] text-[32px] font-[550] tracking-[-0.6px] text-jet dark:text-paper">
          Templates
        </h2>
        <div className="mt-8 space-y-14">
          {templates.map((section) => (
            <section key={`templates-${section.id}`}>
              <h3 className="font-[family-name:var(--font-display)] text-[28px] font-[550] tracking-[-0.5px] text-jet dark:text-paper">
                {section.title}
              </h3>
              <p className="mt-1 text-[15px] leading-6 text-fog">{section.blurb}</p>
              <ul className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <ItemCard item={item} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-20 space-y-14">
          {also.map((section) => (
            <section key={`also-${section.id}`}>
              <h2 className="font-[family-name:var(--font-display)] text-[32px] font-[550] tracking-[-0.6px] text-jet dark:text-paper">
                {section.title}
              </h2>
              <p className="mt-1 text-[15px] leading-6 text-fog">{section.blurb}</p>
              <ul className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <ItemCard item={item} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
