import { ArrowUpRight, Briefcase, GraduationCap, Hammer } from "lucide-react";
import { site } from "@/lib/site";

const offers = [
  {
    title: "Workshops",
    body: "Hands-on sessions that put a Bot on a real workflow before you leave the room.",
    href: site.tails,
    icon: Hammer,
  },
  {
    title: "Course",
    body: "A structured path from first Bot to a small team that actually ships work.",
    href: site.tails,
    icon: GraduationCap,
  },
  {
    title: "Agency",
    body: "Tails stands up Bots with you — hire, ops, and the messy systems in between.",
    href: site.tails,
    icon: Briefcase,
  },
];

export function OffersSection() {
  return (
    <section id="guides" className="px-5 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] font-[550] leading-[36px] tracking-[-0.8px] text-jet sm:text-[48px] sm:leading-[48px] dark:text-paper">
          Workshops, course, agency
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-7 text-fog">
          Community is here. If you want training or a team that will install
          Bots with you, that lives at bots.how.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {offers.map((offer) => (
            <a
              key={offer.title}
              href={offer.href}
              className="group flex flex-col rounded-3xl bg-ivory p-6 transition-colors hover:bg-cream/40 dark:bg-card dark:hover:bg-white/5"
            >
              <offer.icon className="size-6 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 flex items-center gap-2 text-xl font-medium text-jet dark:text-paper">
                {offer.title}
                <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-fog">{offer.body}</p>
              <span className="mt-6 text-sm font-medium text-primary">bots.how</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
