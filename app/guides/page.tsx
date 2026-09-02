import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { listGuides } from "@/lib/guides";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Templates and guides",
  description: "Vetted Grok Bot templates and guides. Marketplace dumps stay out.",
  alternates: { canonical: "/guides" },
};

const kindLabel = {
  official: "Official",
  template: "Template",
  guide: "Guide",
} as const;

export default async function GuidesPage() {
  const items = await listGuides();

  return (
    <div className="px-5 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="font-[family-name:var(--font-display)] text-[40px] font-[550] leading-[40px] tracking-[-1.2px] text-jet sm:text-[60px] sm:leading-[60px] dark:text-paper">
          Templates and guides
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-fog">
          Vetted keepers. Official posts, installable templates, and guides worth
          reading. We do not list marketplaces.
        </p>
        <ul className="mt-12 space-y-4">
          {items.map((item) => (
            <li key={item.slug}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-3xl bg-ivory p-6 transition-colors hover:bg-cream/40 dark:bg-card dark:hover:bg-white/5"
              >
                <p className="font-mono text-[11px] tracking-[0.08em] text-fog uppercase">
                  {kindLabel[item.kind]} · {formatDate(item.date)}
                </p>
                <h2 className="mt-2 text-xl font-medium text-jet dark:text-paper">
                  {item.title}
                  <ArrowUpRight className="ml-1 inline size-4 align-[-2px]" strokeWidth={2} />
                </h2>
                <p className="mt-1 text-sm text-fog">{item.source}</p>
                <p className="mt-2 text-[15px] leading-6 text-fog">{item.excerpt}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
