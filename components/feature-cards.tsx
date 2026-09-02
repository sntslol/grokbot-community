const cards = [
  {
    title: "Online, every day",
    body: "Discord and the newsletter are the home base. Ask, show work, and catch what shipped.",
    kicker: "Discord",
  },
  {
    title: "Arizona, in person",
    body: "A local Grok Bot community in the Valley. Meetups when we have them. Empty calendar stays empty.",
    kicker: "AZ",
  },
  {
    title: "News that is actually news",
    body: "Latest posts live at /news, from the same list as the newsletter.",
    kicker: "News",
  },
  {
    title: "Bots in the wild",
    body: "This site is for people running Grok Bot. Compare notes. Steal prompts. Show up.",
    kicker: "Community",
  },
];

export function FeatureCards() {
  return (
    <section id="community" className="px-5 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] font-[550] leading-[36px] tracking-[-0.8px] text-jet sm:text-[48px] sm:leading-[48px] dark:text-paper">
          A community, not a storefront
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-7 text-fog">
          Online plus Arizona. Centered on Grok Bot.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-3xl bg-ivory p-6 dark:bg-card"
            >
              <p className="font-mono text-[11px] tracking-[0.08em] text-fog uppercase">
                {card.kicker}
              </p>
              <h3 className="mt-3 text-xl font-medium text-jet dark:text-paper">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-fog">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
