const agents = [
  { name: "Chief", note: "Standing by", coat: "bg-primary" },
  { name: "New agent", note: "Just created", coat: "bg-gold" },
  { name: "Inbox Manager", note: "Clearing triage", coat: "bg-sunset" },
  { name: "Account Manager", note: "Acme thread", coat: "bg-cream" },
  { name: "Talent Scout", note: "3 candidates", coat: "bg-primary-hover" },
  { name: "Expense Manager", note: "Q3 receipts", coat: "bg-gold" },
];

export function HeroViewport() {
  return (
    <div className="mt-16 w-full overflow-hidden rounded-3xl border border-dove bg-ivory text-left shadow-[0_24px_80px_-32px_rgba(10,10,10,0.35)] dark:border-white/10 dark:bg-card">
      <div className="flex items-center gap-2 border-b border-dove/80 px-4 py-3 dark:border-white/10">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="grid min-h-[28rem] md:grid-cols-[17rem_1fr]">
        <aside className="border-b border-dove/80 p-4 md:border-b-0 md:border-r dark:border-white/10">
          <div className="mb-4 h-9 rounded-full bg-paper px-3 text-sm leading-9 text-fog dark:bg-bg">
            Search agents
          </div>
          <p className="mb-2 px-1 text-[11px] font-medium tracking-[0.08em] text-fog uppercase">
            Agents
          </p>
          <ul className="space-y-1">
            {agents.map((agent, index) => (
              <li
                key={agent.name}
                className={
                  index === 1
                    ? "flex items-center gap-3 rounded-2xl bg-paper px-2 py-2 dark:bg-bg"
                    : "flex items-center gap-3 rounded-2xl px-2 py-2"
                }
              >
                <span className={`size-8 rounded-full ${agent.coat}`} />
                <span>
                  <span className="block text-sm font-medium text-jet dark:text-paper">
                    {agent.name}
                  </span>
                  <span className="block text-xs text-fog">{agent.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="relative bg-paper p-5 dark:bg-bg">
          <p className="mb-4 text-sm font-medium text-jet dark:text-paper">New agent</p>
          <div className="max-w-md rounded-2xl bg-jet px-4 py-3 text-sm leading-6 text-paper dark:bg-paper dark:text-jet">
            Overnight pipeline generation and outbound. Pick eligible prospects
            from this Google Sheet, draft the first touch in my voice, and leave
            a review list.
          </div>
          <p className="mt-3 text-xs text-fog">Renamed to Sales Outbound.</p>
          <div className="mt-6 space-y-3 text-sm text-fog">
            <p>Checking what’s connected…</p>
            <div className="rounded-2xl border border-dove bg-ivory p-3 dark:border-white/10 dark:bg-card">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-xs tracking-wide text-jet uppercase dark:text-paper">
                  Computer
                </span>
                <span className="rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-medium text-jet">
                  ✨ Working
                </span>
              </div>
              <p className="text-sm text-fog">
                Opening the sheet, scoring accounts, and drafting outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
