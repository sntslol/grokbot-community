import Link from "next/link";
import { GrokBotMark } from "@/components/grok-bot-mark";
import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/news", label: "News" },
  { href: "/meetups", label: "Meetups" },
  { href: "/guides", label: "Guides" },
  { href: "/templates", label: "Templates" },
  { href: "/#newsletter", label: "Newsletter" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-transparent bg-paper/75 backdrop-blur-[12px] dark:bg-bg/70">
      <div className="relative mx-auto flex h-full w-full max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Grok Bot community home">
          <GrokBotMark className="size-7 text-jet dark:text-paper" />
          <span className="hidden font-[family-name:var(--font-text)] text-sm font-medium text-jet sm:block dark:text-paper">
            Grok Bot
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-text)] text-[14px] text-jet/90 transition-colors hover:text-jet dark:text-paper/80 dark:hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.discord} className={cn(buttonVariants({ size: "sm" }))}>
            Join Discord
          </a>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
