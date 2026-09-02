export function HeroViewport() {
  return (
    <div className="mt-14 w-full overflow-hidden rounded-3xl border border-dove bg-ivory dark:border-white/10 dark:bg-card">
      <div className="grid gap-px bg-dove sm:grid-cols-3 dark:bg-white/10">
        <Card
          kicker="Arizona"
          title="Show up in person"
          body="Local meetups around Phoenix and the Valley. Honest empty state when nothing is on the calendar yet."
        />
        <Card
          kicker="Online"
          title="Live in Discord"
          body="Drops, questions, and people actually running Bots. The room is the product."
        />
        <Card
          kicker="News"
          title="What shipped"
          body="The newsletter and /news. Latest Grok Bot posts, not a fake changelog."
        />
      </div>
    </div>
  );
}

function Card({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <article className="bg-ivory p-6 text-left sm:p-8 dark:bg-card">
      <p className="font-mono text-[11px] tracking-[0.08em] text-fog uppercase">{kicker}</p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-[22px] font-[550] leading-7 text-jet dark:text-paper">
        {title}
      </h2>
      <p className="mt-2 text-[15px] leading-6 text-fog">{body}</p>
    </article>
  );
}
