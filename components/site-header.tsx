import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SpaceXaiMark } from "@/components/spacexai-mark";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/news", label: "News" },
  { href: "/meetups", label: "Meetups" },
  { href: "/#newsletter", label: "Newsletter" },
  { href: "/#download", label: "Download" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-transparent bg-paper/75 backdrop-blur-[12px] dark:bg-bg/70">
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Grok Bot community home">
          <SpaceXaiMark className="size-7" />
          <span className="hidden font-[family-name:var(--font-text)] text-sm font-medium text-jet sm:block dark:text-paper">
            Grok Bot
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 font-[family-name:var(--font-text)] text-[14px] text-jet/90 transition-colors hover:text-jet dark:text-paper/80 dark:hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.tails}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:inline-flex")}
          >
            Workshops
          </a>
          <Link
            href={site.discord}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hidden lg:inline-flex")}
          >
            Discord
          </Link>
          <div className="flex overflow-hidden rounded-full bg-primary text-primary-foreground">
            <Link
              href="/#download"
              className="inline-flex h-9 items-center px-4 text-sm font-medium"
            >
              Download
            </Link>
            <span className="w-px self-stretch bg-white/25" aria-hidden />
            <Link
              href="/#download"
              aria-label="More download options"
              className="inline-flex h-9 w-9 items-center justify-center"
            >
              <ChevronDown className="size-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
