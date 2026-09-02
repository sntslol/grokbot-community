import Link from "next/link";
import { GrokBotMark } from "@/components/grok-bot-mark";
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
    title: "Here",
    links: [
      { href: "/#community", label: "About" },
      { href: "/meetups", label: "Arizona" },
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
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Grok Bot community home">
              <GrokBotMark className="size-7 text-jet dark:text-paper" />
              <span className="text-sm font-medium text-jet dark:text-paper">Grok Bot Community</span>
            </Link>
            <p className="mt-3 text-sm text-fog">
              Online and in Arizona. © {new Date().getFullYear()}
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-sm font-medium text-jet dark:text-paper">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
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
