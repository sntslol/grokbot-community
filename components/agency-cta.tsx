import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AgencyCta() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-ivory px-6 py-10 dark:bg-card sm:flex-row sm:items-center sm:px-10">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] tracking-[0.08em] text-fog uppercase">
            Workshops and the course
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[28px] font-[550] leading-[30px] tracking-[-0.6px] text-jet dark:text-paper">
            Go further on bots.how
          </h2>
          <p className="mt-2 text-[15px] leading-6 text-fog">
            Workshops, the course, and the agency live on the official site. This page stays community.
          </p>
        </div>
        <a
          href={site.tails}
          className={cn(buttonVariants({ size: "lg" }), "shrink-0")}
        >
          bots.how
          <ArrowUpRight className="size-4" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
