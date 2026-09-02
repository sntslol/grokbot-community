import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function LinuxMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.2 2.1c.7 0 1.5.6 1.8 1.8.2.8.1 1.7-.2 2.6-.2.5.1.6.4.8 1.7 1.1 2.9 3 3.2 5.2.2 1.3 0 2.5-.6 3.6 1.3.5 2.2 1.5 2.5 2.8.3 1.3 0 2.6-.9 3.5-.8.8-2 1.3-3.3 1.3-.7 0-1.4-.2-2-.5-.6 1.4-1.8 2.3-3.2 2.3-1.2 0-2.2-.7-2.8-1.8-.6.3-1.3.5-2 .5-1.3 0-2.5-.5-3.3-1.3-.9-.9-1.2-2.2-.9-3.5.3-1.3 1.2-2.3 2.5-2.8-.6-1.1-.8-2.3-.6-3.6.3-2.2 1.5-4.1 3.2-5.2.3-.2.6-.3.4-.8-.3-.9-.4-1.8-.2-2.6.3-1.2 1.1-1.8 1.8-1.8.5 0 .9.3 1.1.7.2-.4.6-.7 1.1-.7Z"
      />
    </svg>
  );
}

export function DownloadSection() {
  return (
    <section id="download" className="px-5 pb-24 pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center overflow-hidden rounded-3xl bg-jet px-6 py-16 text-center text-paper dark:bg-card sm:px-12">
        <p className="text-[13px] font-medium tracking-[0.12em] text-cream uppercase">
          Linux-first
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-[36px] font-[550] leading-[36px] tracking-[-0.8px] sm:text-[48px] sm:leading-[48px]">
          Download Grok Bot
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-7 text-paper/70">
          Grok Bot ships for Linux first. Grab the client, then come back here
          for news and meetups — or go to bots.how for workshops.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href={site.download} className={cn(buttonVariants({ size: "lg" }))}>
            <LinuxMark />
            Download for Linux
          </a>
          <a
            href={site.tails}
            className={cn(buttonVariants({ variant: "gold", size: "lg" }))}
          >
            Workshops at bots.how
          </a>
        </div>
        <Link href="/#newsletter" className="mt-5 text-sm text-paper/60 hover:text-paper">
          Or get the newsletter
        </Link>
      </div>
    </section>
  );
}
