const cards = [
  {
    title: "Grok Bot works where you work",
    body: "Log a Bot in once. It uses your apps and websites just like you would — including the tools that are harder to navigate.",
    mock: "computer" as const,
  },
  {
    title: "Show a Bot how it’s done",
    body: "Ask a Bot to follow along as you complete a workflow once. It saves it as a routine and runs it on its own next time.",
    mock: "teach" as const,
  },
  {
    title: "Bots get smarter over time",
    body: "Bots keep context and learn from each other. Show one a workflow today, hand off the project by Friday.",
    mock: "memory" as const,
  },
  {
    title: "Connect the Bots",
    body: "Put a few Bots in the same thread and they pass work between themselves. You watch them take action.",
    mock: "connect" as const,
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="px-5 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] font-[550] leading-[36px] tracking-[-0.8px] text-jet sm:text-[48px] sm:leading-[48px] dark:text-paper">
          Work with many Bots at once
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-7 text-fog">
          Create a Bot, give it a task, and add another when the work grows — one
          on a project, one on outbound, one on systems. They work in parallel,
          24/7.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-3xl bg-ivory p-6 dark:bg-card"
            >
              <h3 className="text-xl font-medium text-jet dark:text-paper">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-fog">{card.body}</p>
              <div className="mt-6">
                <CardMock kind={card.mock} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardMock({ kind }: { kind: (typeof cards)[number]["mock"] }) {
  if (kind === "computer") {
    return (
      <div className="rounded-2xl border border-dove bg-paper p-4 dark:border-white/10 dark:bg-bg">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-wide text-fog uppercase">Computer</span>
          <span className="rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-medium text-jet">
            Working
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-4/5 rounded-full bg-dove dark:bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-dove dark:bg-white/10" />
          <div className="h-2 w-2/3 rounded-full bg-primary/40" />
        </div>
      </div>
    );
  }

  if (kind === "teach") {
    return (
      <div className="rounded-2xl border border-dove bg-paper p-4 dark:border-white/10 dark:bg-bg">
        <p className="text-xs font-medium text-fog uppercase">Routine saved</p>
        <ol className="mt-3 space-y-2 text-sm text-jet dark:text-paper">
          <li>1. Open the sheet</li>
          <li>2. Draft first touch</li>
          <li>3. Leave a review list</li>
        </ol>
      </div>
    );
  }

  if (kind === "memory") {
    return (
      <div className="rounded-2xl border border-dove bg-paper p-4 dark:border-white/10 dark:bg-bg">
        <p className="text-xs font-medium text-fog uppercase">Shared context</p>
        <div className="mt-3 flex -space-x-2">
          <span className="size-8 rounded-full bg-primary" />
          <span className="size-8 rounded-full bg-gold" />
          <span className="size-8 rounded-full bg-sunset" />
        </div>
        <p className="mt-3 text-sm text-fog">Inbox Manager handed off to Account Manager.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-dove bg-paper p-4 dark:border-white/10 dark:bg-bg">
      <div className="flex items-center gap-2 text-sm text-jet dark:text-paper">
        <span className="size-2 rounded-full bg-gold" />
        Chief
        <span className="text-fog">→</span>
        <span className="size-2 rounded-full bg-primary" />
        Inbox
      </div>
      <p className="mt-3 text-sm text-fog">Three Bots in one thread, passing the queue.</p>
    </div>
  );
}
