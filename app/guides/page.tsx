import type { Metadata } from "next";
import { GuideGroupList, GuideItemCard } from "@/components/guide-catalog";
import { listGuideGroups } from "@/lib/guides";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Guides",
  description: "How people actually run Grok Bot.",
  alternates: { canonical: "/guides" },
};

export default async function GuidesPage() {
  const teams = await listGuideGroups("teams");
  const more = await listGuideGroups("also");
  const extra = more
    .flatMap((section) => section.items)
    .filter((item) => item.slug !== "share-templates");

  return (
    <div className="px-5 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="font-[family-name:var(--font-display)] text-[40px] font-[550] leading-[40px] tracking-[-1.2px] text-jet sm:text-[60px] sm:leading-[60px] dark:text-paper">
          Guides
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-fog">
          How people actually run Grok Bot.
        </p>
        <GuideGroupList sections={teams} />
        {extra.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-[family-name:var(--font-display)] text-[28px] font-[550] tracking-[-0.5px] text-jet dark:text-paper">
              More
            </h2>
            <ul className="mt-5 space-y-4">
              {extra.map((item) => (
                <li key={item.slug}>
                  <GuideItemCard item={item} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
