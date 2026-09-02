import Link from "next/link";
import { GrokBotMark } from "@/components/grok-bot-mark";
import { SpaceXaiWordmark } from "@/components/spacexai-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

const groups = [
  {
    title: "Community",
    links: [
      { href: "/news", label: "News" },
      { href: "/meetups", label: "Meetups" },
      { href: "/#newsletter", label: "Newsletter" },
      { href: site.discord, label: "Discord", external: true },
    ],
  },
  {
    title: "Grok Bot",
    links: [
      { href: "/#features", label: "How it works" },
      { href: "/#download", label: "Download" },
      { href: "/#guides", label: "Guides" },
    ],
  },
  {
    title: "Tails",
    links: [
      { href: site.tails, label: "bots.how", external: true },
      { href: site.tails, label: "Workshops", external: true },
      { href: site.tails, label: "Agency", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "https://x.ai", label: "SpaceXAI", external: true },
      { href: "https://x.ai/bot", label: "x.ai/bot", external: true },
      { href: "https://x.ai/news", label: "Newsroom", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/#legal", label: "Terms" },
      { href: "/#legal", label: "Privacy" },
      { href: "/#legal", label: "Cookies" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-dove dark:border-white/10">
      <GrokBotMark className="pointer-events-none absolute -top-24 right-[-4rem] size-[28rem] text-jet/[0.035] dark:text-paper/[0.04]" />
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-16 md:grid-cols-[14rem_1fr]">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <SpaceXaiWordmark />
            <p className="mt-3 text-sm text-fog">© {new Date().getFullYear()} SpaceXAI LLC</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://x.ai/grok"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-dove px-3 text-sm text-jet dark:border-white/15 dark:text-paper"
            >
              <GrokBotMark className="size-4 text-jet dark:text-paper" />
              Built with Grok
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-sm font-medium text-jet dark:text-paper">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-fog transition-colors hover:text-jet dark:hover:text-paper"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-fog transition-colors hover:text-jet dark:hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
