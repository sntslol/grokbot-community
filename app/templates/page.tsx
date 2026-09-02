import type { Metadata } from "next";
import Link from "next/link";
import { GuideGroupList, GuideItemCard } from "@/components/guide-catalog";
import { listGuideGroups } from "@/lib/guides";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Templates",
  description: "Vetted Grok Bot templates, grouped by type.",
  alternates: { canonical: "/templates" },
};

export default async function TemplatesPage() {
  const templates = await listGuideGroups("templates");
  const more = await listGuideGroups("also");
  const share = more.flatMap((section) => section.items).filter((item) => item.slug === "share-templates");

  return (
    <div className="px-5 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="font-[family-name:var(--font-display)] text-[40px] font-[550] leading-[40px] tracking-[-1.2px] text-jet sm:text-[60px] sm:leading-[60px] dark:text-paper">
          Templates
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-fog">
          Grouped by type. Guides live on{" "}
          <Link href="/guides" className="text-primary hover:underline">
            /guides
          </Link>
          . We do not list marketplaces.
        </p>
        {share.length > 0 ? (
          <ul className="mt-10 space-y-4">
            {share.map((item) => (
              <li key={item.slug}>
                <GuideItemCard item={item} />
              </li>
            ))}
          </ul>
        ) : null}
        <GuideGroupList sections={templates} />
      </div>
    </div>
  );
}
