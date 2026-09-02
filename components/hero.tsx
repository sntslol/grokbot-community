import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GrokBotMark } from "@/components/grok-bot-mark";
import { HeroViewport } from "@/components/hero-viewport";
import { NewsletterForm } from "@/components/newsletter-form";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="px-5 pb-8 pt-16 sm:pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <Link
          href="/meetups"
          className="mb-8 inline-flex items-center overflow-hidden rounded-full border border-dove bg-ivory text-[13px] dark:border-white/10 dark:bg-card"
        >
          <span className="bg-sunset px-2.5 py-1 font-[family-name:var(--font-text)] text-[11px] font-medium tracking-[0.06em] text-white">
            AZ + ONLINE
          </span>
          <span className="flex items-center gap-2 px-3 py-1 text-fog">
            Meetups in Arizona, Discord everywhere
            <span className="inline-flex size-5 items-center justify-center rounded-full border border-dove dark:border-white/15">
              <ArrowUpRight className="size-3" strokeWidth={2} />
            </span>
          </span>
        </Link>

        <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-[family-name:var(--font-display)] text-[40px] font-[550] leading-[40px] tracking-[-1.2px] text-jet sm:text-[60px] sm:leading-[60px] dark:text-paper">
          <span>Meet</span>
          <GrokBotMark
            className="size-10 text-jet sm:size-[60px] dark:text-paper"
            title="Grok Bot mark"
          />
          <span>Grok Bot</span>
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-[17px] leading-7 text-fog">
          The community for people who run Grok Bot. Online, and on the ground in
          Arizona. News, meetups, the newsletter, and a Discord that actually talks
          about the work.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href={site.discord} className={cn(buttonVariants({ size: "lg" }))}>
            <DiscordGlyph />
            Join the Discord
          </a>
          <Link href="/#newsletter" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
            Get the newsletter
          </Link>
        </div>

        <a
          href={site.tails}
          className={cn(buttonVariants({ variant: "gold", size: "lg" }), "mt-3")}
        >
          Go further on bots.how
        </a>
        <p className="mt-2 max-w-sm text-center text-[13px] leading-5 text-fog">
          Workshops, the course, agency work, and membership. Community stays free.
        </p>

        <div className="mt-8 w-full max-w-md">
          <NewsletterForm id="hero-email" compact />
        </div>

        <HeroViewport />
      </div>
    </section>
  );
}

function DiscordGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.11.05c-.43.76-.9 1.75-1.23 2.54-1.57-.24-3.15-.24-4.73 0-.33-.79-.81-1.78-1.24-2.54A.1.1 0 0 0 7.58 4c-1.5.26-2.93.71-4.27 1.33a.09.09 0 0 0-.04.03C.53 9.05-.32 12.66.1 16.23c0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65a.1.1 0 0 0 .11-.03c.4-.55.76-1.13 1.07-1.74a.1.1 0 0 0-.05-.13 10.2 10.2 0 0 1-1.47-.7.1.1 0 0 1 0-.16l.29-.23a.1.1 0 0 1 .1-.01c3.09 1.41 6.44 1.41 9.5 0a.1.1 0 0 1 .1.01l.3.23a.1.1 0 0 1 0 .16c-.47.27-.96.5-1.48.7a.1.1 0 0 0-.05.13c.31.61.67 1.19 1.07 1.74a.1.1 0 0 0 .11.03c1.72-.53 3.45-1.33 5.25-2.65a.1.1 0 0 0 .03-.05c.5-4.13-.84-7.7-3.55-10.87a.07.07 0 0 0-.03-.03ZM8.52 14.18c-.93 0-1.7-.85-1.7-1.9 0-1.04.76-1.9 1.7-1.9.95 0 1.71.86 1.7 1.9 0 1.05-.76 1.9-1.7 1.9Zm6.97 0c-.93 0-1.7-.85-1.7-1.9 0-1.04.76-1.9 1.7-1.9.95 0 1.71.86 1.7 1.9 0 1.05-.75 1.9-1.7 1.9Z"
      />
    </svg>
  );
}
