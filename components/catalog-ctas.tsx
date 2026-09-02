import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const modules = [
  {
    href: "/templates",
    kicker: "Templates",
    heading: "Bots worth stealing.",
    cta: "See templates",
  },
  {
    href: "/guides",
    kicker: "Guides",
    heading: "How people actually run Grok Bot.",
    cta: "See guides",
  },
] as const;

export function CatalogCtas() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
        {modules.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col rounded-3xl bg-ivory p-6 transition-colors hover:bg-cream/40 dark:bg-card dark:hover:bg-white/5"
          >
            <p className="font-mono text-[11px] tracking-[0.08em] text-fog uppercase">
              {item.kicker}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[28px] font-[550] leading-[30px] tracking-[-0.6px] text-jet dark:text-paper">
              {item.heading}
            </h2>
            <span
              className={cn(buttonVariants({ size: "sm" }), "mt-6 w-fit")}
            >
              {item.cta}
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
