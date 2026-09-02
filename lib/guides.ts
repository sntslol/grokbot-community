export type Guide = {
  slug: string;
  title: string;
  kind: "official" | "template" | "guide";
  group: "builders" | "engineering" | "ops" | "guides";
  href: string;
  source: string;
  date: string;
  excerpt: string;
};

export const guideGroups = [
  {
    id: "builders" as const,
    title: "Builders",
    blurb: "Make Bots and plugins.",
  },
  {
    id: "engineering" as const,
    title: "Engineering",
    blurb: "Outer loop and project teams.",
  },
  {
    id: "ops" as const,
    title: "Ops",
    blurb: "Inbox, money, and the rest of the roster.",
  },
  {
    id: "guides" as const,
    title: "Guides",
    blurb: "How to share, and how teams run.",
  },
];

const guides: Guide[] = [
  {
    slug: "tinkabot",
    title: "tinkabot",
    kind: "template",
    group: "builders",
    href: "https://x.ai/bot/br5f3C4mc75QCMEHaszXd",
    source: "Lauren · @poteto",
    date: "2026-09-01",
    excerpt:
      "Wraps an API into a Cursor/Agent Plugin (MCP + skills). Data shape first, smallest scaffold that works.",
  },
  {
    slug: "dr-eggbot",
    title: "Dr Eggbot",
    kind: "template",
    group: "builders",
    href: "https://x.ai/bot/93gOz3op1UQdBdbekQFLK",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt:
      "Designs high-quality Grok Bots. Coding ones get the poteto-mode bar. Routine health check in v0.2.",
  },
  {
    slug: "loops",
    title: "Loops",
    kind: "template",
    group: "engineering",
    href: "https://x.ai/bot/Ub3T7usX-c6yRQibQq83P",
    source: "Matt Palmer",
    date: "2026-08-28",
    excerpt:
      "Engineering outer loop over coding agents. Gather, prompt, launch, review, merge. You name the repo; it never guesses.",
  },
  {
    slug: "projects-manager",
    title: "Projects Manager",
    kind: "template",
    group: "engineering",
    href: "https://x.ai/bot/FU-Ev6_Ju4lFGWwWRD0GD",
    source: "Eric Zakariasson",
    date: "2026-08-28",
    excerpt:
      "Notion is source of truth. One project row, one channel, specialists claim work. Does not do specialist work.",
  },
  {
    slug: "loom",
    title: "loom",
    kind: "template",
    group: "ops",
    href: "https://x.ai/bot/cElGnAaR55iPHK2DGdPdu",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Drafts Gmail replies. Never sends.",
  },
  {
    slug: "porshe",
    title: "porshe",
    kind: "template",
    group: "ops",
    href: "https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Finds money already owed. Never send, never pay.",
  },
  {
    slug: "jobs",
    title: "jobs",
    kind: "template",
    group: "ops",
    href: "https://x.ai/bot/LqFDQ8zlNLQqlFP_vvzs_",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Feature editor. 1–3 ideas. Never code.",
  },
  {
    slug: "share-templates",
    title: "Share templates",
    kind: "official",
    group: "guides",
    href: "https://x.com/bot/status/2093376523919323618",
    source: "@bot",
    date: "2026-08-28",
    excerpt:
      "The official Grok Bot post on sharing a Bot as a template. Start here.",
  },
  {
    slug: "benln-internal-use-cases",
    title: "Internal use cases",
    kind: "guide",
    group: "guides",
    href: "https://x.com/benln/status/2087929147406299313",
    source: "@benln",
    date: "2026-08-25",
    excerpt:
      "Starlink flights, recipe-to-Whole Foods, film EXIF, contractor quotes, and the rest of that list.",
  },
  {
    slug: "benln-team-tips",
    title: "Team tips",
    kind: "guide",
    group: "guides",
    href: "https://x.com/minchoi/status/2092819922426474737",
    source: "@benln via @minchoi",
    date: "2026-08-25",
    excerpt:
      "Chief of staff, channels, approval gates. Personal account, Aug 25. Not an @bot permalink.",
  },
];

export async function listGuides() {
  return guides.slice();
}

export async function listGuideGroups(ids?: Array<Guide["group"]>) {
  const items = await listGuides();
  const wanted = ids ?? guideGroups.map((group) => group.id);
  const sections = [];
  for (const id of wanted) {
    const meta = guideGroups.find((group) => group.id === id);
    if (!meta) continue;
    const grouped = items.filter((item) => item.group === id);
    if (grouped.length === 0) continue;
    sections.push({ ...meta, items: grouped });
  }
  return sections;
}
