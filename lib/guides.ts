export type GuideCollection = "teams" | "templates" | "also";

export type TeamGroupId =
  | "engineering"
  | "support"
  | "design"
  | "gtm"
  | "product"
  | "field";
export type TemplateGroupId = "builders" | "engineering" | "ops";
export type AlsoGroupId = "more";
export type GuideGroupId = TeamGroupId | TemplateGroupId | AlsoGroupId;

export type Guide = {
  slug: string;
  title: string;
  kind: "official" | "template" | "guide";
  collection: GuideCollection;
  group: GuideGroupId;
  href: string;
  source: string;
  date: string;
  excerpt: string;
};

type GuideGroupMeta = {
  collection: GuideCollection;
  id: GuideGroupId;
  title: string;
  blurb: string;
};

export const teamGuideGroups: GuideGroupMeta[] = [
  {
    collection: "teams",
    id: "engineering",
    title: "Engineering",
    blurb: "How engineers run a Bot team.",
  },
  {
    collection: "teams",
    id: "support",
    title: "Support",
    blurb: "Tickets and talking to users.",
  },
  {
    collection: "teams",
    id: "design",
    title: "Design",
    blurb: "More ideas. Taste stays yours.",
  },
  {
    collection: "teams",
    id: "gtm",
    title: "GTM",
    blurb: "Prospecting, decks, and a GTM roster.",
  },
  {
    collection: "teams",
    id: "product",
    title: "Product",
    blurb: "A PM with a team that reports to them.",
  },
  {
    collection: "teams",
    id: "field",
    title: "Field Engineering",
    blurb: "Last call, and what product is building.",
  },
];

export const templateGuideGroups: GuideGroupMeta[] = [
  {
    collection: "templates",
    id: "builders",
    title: "Builders",
    blurb: "Bots that make Bots, and the plugins they need.",
  },
  {
    collection: "templates",
    id: "engineering",
    title: "Engineering",
    blurb: "Who runs the agents, who owns the board.",
  },
  {
    collection: "templates",
    id: "ops",
    title: "Ops",
    blurb: "Mail, money, and the rest of the roster.",
  },
];

export const alsoGuideGroups: GuideGroupMeta[] = [
  {
    collection: "also",
    id: "more",
    title: "Also vetted",
    blurb: "How to share, and how teams run.",
  },
];

export const guideCollections = [
  { id: "teams" as const, title: "Guides", groups: teamGuideGroups },
  { id: "templates" as const, title: "Templates", groups: templateGuideGroups },
  { id: "also" as const, title: "Also vetted", groups: alsoGuideGroups },
];

const allGuideGroups = [
  ...teamGuideGroups,
  ...templateGuideGroups,
  ...alsoGuideGroups,
];

const guides: Guide[] = [
  {
    slug: "how-i-run-multiple-teams-of-grok-bots",
    title: "How I run multiple teams of Grok Bots",
    kind: "official",
    collection: "teams",
    group: "engineering",
    href: "https://x.ai/bot/guides/how-i-run-multiple-teams-of-grok-bots",
    source: "Eric Zakariasson",
    date: "2026-08-27",
    excerpt: "Each project gets a channel, a roster, and a Notion board.",
  },
  {
    slug: "grok-bot-for-mobile-app-development",
    title: "Grok Bot for mobile app development",
    kind: "official",
    collection: "teams",
    group: "engineering",
    href: "https://x.ai/bot/guides/grok-bot-for-mobile-app-development",
    source: "Ryan Perry",
    date: "2026-08-25",
    excerpt:
      "Six bots, one mobile game studio. How I use Grok Bot to build, ship, and improve Rank'em.",
  },

  {
    slug: "grok-bot-for-engineering",
    title: "Grok Bot for Engineering",
    kind: "guide",
    collection: "teams",
    group: "engineering",
    href: "https://x.com/i/article/2090147220838588416",
    source: "Lingxi Li · @lingxi",
    date: "2026-08-31",
    excerpt:
      "SpaceXAI engineer building Grok Bot with Grok Bot; a highly capable engineering intern that can manage coding agents.",
  },
  {
    slug: "a-deep-dive-into-grok-bot",
    title: "A deep dive into Grok Bot",
    kind: "guide",
    collection: "teams",
    group: "engineering",
    href: "https://flaviocopes.com/grok-bot/",
    source: "Flavio Copes · community",
    date: "2026-09-02",
    excerpt:
      "A hands-on guide to Grok Bot, including shared-computer trust boundaries, failure modes, and security.",
  },
  {
    slug: "grok-bot-for-support",
    title: "Grok Bot for Support",
    kind: "guide",
    collection: "teams",
    group: "support",
    href: "https://x.com/i/article/2091670020506206209",
    source: "David Gan · @davidgan",
    date: "2026-08-28",
    excerpt:
      "Support is a time suck and the best place to talk to users; thousands of tickets a day at SpaceXAI.",
  },
  {
    slug: "designing-grok-bot-with-grok-bot",
    title: "Designing Grok Bot with Grok Bot",
    kind: "official",
    collection: "teams",
    group: "design",
    href: "https://x.ai/bot/guides/designing-grok-bot-with-grok-bot",
    source: "John Bai",
    date: "2026-08-24",
    excerpt:
      "How a designer uses always-on Grok Bot agents to explore more ideas, work with real production assets, and keep judgment in the loop.",
  },
  {
    slug: "grok-bot-for-gtm",
    title: "Grok Bot for GTM",
    kind: "official",
    collection: "teams",
    group: "gtm",
    href: "https://x.ai/bot/guides/grok-bot-for-gtm",
    source: "Krista Letz",
    date: "2026-08-16",
    excerpt:
      "How I use Grok Bot for Enterprise GTM at SpaceXAI: a Chief of Staff, prospecting and account prompts, live slides, and the rest of the team.",
  },
  {
    slug: "grok-bot-for-pms",
    title: "Grok Bot for PMs",
    kind: "official",
    collection: "teams",
    group: "product",
    href: "https://x.ai/bot/guides/grok-bot-for-pms",
    source: "@n2parko",
    date: "2026-08-15",
    excerpt:
      "For the first time, a PM can have a team that reports to them. Attention lists, shipping software, and the bots I actually run.",
  },
  {
    slug: "grok-bot-for-field-engineering",
    title: "Grok Bot For Field Engineering",
    kind: "guide",
    collection: "teams",
    group: "field",
    href: "https://x.com/i/article/2094446659380076545",
    source: "George Reyes · @inkburr",
    date: "2026-08-31",
    excerpt:
      "Field Engineering for 10 years; the role is internal aggregation of information — last call, what product is building.",
  },
  {
    slug: "tinkabot",
    title: "tinkabot",
    kind: "template",
    collection: "templates",
    group: "builders",
    href: "https://x.ai/bot/br5f3C4mc75QCMEHaszXd",
    source: "Lauren · @poteto",
    date: "2026-09-01",
    excerpt:
      "Point it at an API. Get a plugin.",
  },
  {
    slug: "dr-eggbot",
    title: "Dr Eggbot",
    kind: "template",
    collection: "templates",
    group: "builders",
    href: "https://x.ai/bot/93gOz3op1UQdBdbekQFLK",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt:
      "Designs a Grok Bot you’d actually run.",
  },
  {
    slug: "forge",
    title: "Forge",
    kind: "template",
    collection: "templates",
    group: "builders",
    href: "https://x.ai/bot/uF_uodOFUz9mdv6XDWE70",
    source: "@rryssf",
    date: "2026-09-02",
    excerpt: "Keyword in. Shippable Bot recipe out.",
  },
  {
    slug: "bouncer",
    title: "Bouncer",
    kind: "template",
    collection: "templates",
    group: "builders",
    href: "https://x.ai/bot/cGcG0msqfz7o7J3QMLhbE",
    source: "@bradshannon",
    date: "2026-09-02",
    excerpt: "CLEAN, WARN, or BLOCK a share link. Does not install.",
  },
  {
    slug: "grok-bot-coach",
    title: "Grok Bot Coach",
    kind: "template",
    collection: "templates",
    group: "builders",
    href: "https://x.ai/bot/BrjELcmSwatjRc8DYjtrT",
    source: "Amina",
    date: "2026-09-02",
    excerpt: "Audit and tighten bots you already have.",
  },
  {
    slug: "tuner",
    title: "Tuner",
    kind: "template",
    collection: "templates",
    group: "builders",
    href: "https://x.ai/bot/3n26nkAkMjk5EZcKJlo9w",
    source: "@humanmeteorite",
    date: "2026-09-02",
    excerpt: "Patches other bots. Applies nothing until you say yes.",
  },
  {
    slug: "loops",
    title: "Loops",
    kind: "template",
    collection: "templates",
    group: "engineering",
    href: "https://x.ai/bot/Ub3T7usX-c6yRQibQq83P",
    source: "Matt Palmer",
    date: "2026-08-28",
    excerpt:
      "Gather, prompt, launch, review, merge. You name the repo.",
  },
  {
    slug: "projects-manager",
    title: "Projects Manager",
    kind: "template",
    collection: "templates",
    group: "engineering",
    href: "https://x.ai/bot/FU-Ev6_Ju4lFGWwWRD0GD",
    source: "Eric Zakariasson",
    date: "2026-08-28",
    excerpt:
      "One project, one channel. Specialists claim the work.",
  },
  {
    slug: "figma-bro",
    title: "figma bro",
    kind: "template",
    collection: "templates",
    group: "engineering",
    href: "https://x.ai/bot/VHMdjIGjGpgDSJR7dW6Gz",
    source: "John Bai · @johnbai",
    date: "2026-09-02",
    excerpt: "Designs in Figma with real components.",
  },

  {
    slug: "motion-god",
    title: "Motion God",
    kind: "template",
    collection: "templates",
    group: "engineering",
    href: "https://x.ai/bot/bnmJVg0uwwUZXNXEZd1V5",
    source: "Shubham",
    date: "2026-09-02",
    excerpt: "Motion from the real animation spec. Localhost playground.",
  },
  {
    slug: "mixey",
    title: "Mixey",
    kind: "template",
    collection: "templates",
    group: "engineering",
    href: "https://x.ai/bot/2ouhKJbsp2iffYxupTD0Y",
    source: "Shubham",
    date: "2026-09-02",
    excerpt: "Mixpanel events, funnels, retention. Never invents stats.",
  },
  {
    slug: "loom",
    title: "loom",
    kind: "template",
    collection: "templates",
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
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Finds money you’re owed. Never sends, never pays.",
  },
  {
    slug: "jobs",
    title: "jobs",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/LqFDQ8zlNLQqlFP_vvzs_",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Picks 1–3 things to build. Never writes the code.",
  },
  {
    slug: "work",
    title: "Work",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/vOipeiu0AZ7CuC5ynw5h0",
    source: "Tyler Nishida · @TylerNishida",
    date: "2026-08-28",
    excerpt: "Work door. Dual inbox, clear routing.",
  },
  {
    slug: "life",
    title: "Life",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/6I-yjMRU1BmiYNfZgWXBK",
    source: "Tyler Nishida · @TylerNishida",
    date: "2026-08-28",
    excerpt: "Life door. Dual inbox, clear routing.",
  },
  {
    slug: "chief-of-staff",
    title: "Chief of Staff",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/d8OshqLZvtcKDcNluPuyo",
    source: "@Av1dlive",
    date: "2026-08-29",
    excerpt: "Hard last-yes. Specialist routing.",
  },
  {
    slug: "master",
    title: "Master",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/j7B5LHnEIPTuPQZxxQwpx",
    source: "@farzyness",
    date: "2026-09-02",
    excerpt: "Lean orchestrator. Pings only when you must act.",
  },
  {
    slug: "brake",
    title: "Brake",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/ig-dwKjUc7doBIDhiMi9Z",
    source: "—",
    date: "2026-09-02",
    excerpt: "Names the one repeating job burning usage, then stops.",
  },
  {
    slug: "rutin",
    title: "Rutin",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/o4gWkNGmffEaVtOhaEsA7",
    source: "@naoufal_elh",
    date: "2026-09-02",
    excerpt: "Monday routine trim. Waits for okay.",
  },
  {
    slug: "echo",
    title: "Echo",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/ph5mcXqVy2p176Br7BJYi",
    source: "Krista Letz · @kristaletz",
    date: "2026-09-02",
    excerpt: "Call notes to slides.",
  },

  {
    slug: "pre-call-intelligence",
    title: "Pre-Call Intelligence",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/yQRbVJ7aZL2DyPAWulXn7",
    source: "Eric Siu",
    date: "2026-09-02",
    excerpt: "Read-only meeting card. Drafts follow-ups, never sends.",
  },
  {
    slug: "talent-bot",
    title: "Talent Bot",
    kind: "template",
    collection: "templates",
    group: "ops",
    href: "https://x.ai/bot/P2cMMcajyHuHZ4OsZOWfe",
    source: "Skills Dojo",
    date: "2026-09-03",
    excerpt:
      "Evidence-first recruiting. Frozen role pack, inbound review, no ATS writes or auto-send.",
  },
  {
    slug: "share-templates",
    title: "Share templates",
    kind: "official",
    collection: "also",
    group: "more",
    href: "https://x.com/bot/status/2093376523919323618",
    source: "@bot",
    date: "2026-08-28",
    excerpt:
      "How to share a Bot as a template.",
  },
  {
    slug: "benln-internal-use-cases",
    title: "Internal use cases",
    kind: "guide",
    collection: "also",
    group: "more",
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
    collection: "also",
    group: "more",
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

export async function listGuideGroups(
  collection?: GuideCollection,
  groupIds?: readonly GuideGroupId[],
) {
  const items = await listGuides();
  const catalog = collection
    ? allGuideGroups.filter((group) => group.collection === collection)
    : allGuideGroups;
  const wanted = groupIds ?? catalog.map((group) => group.id);
  const sections = [];
  for (const meta of catalog) {
    if (!wanted.includes(meta.id)) continue;
    const grouped = items.filter(
      (item) => item.collection === meta.collection && item.group === meta.id,
    );
    if (grouped.length === 0) continue;
    sections.push({ ...meta, items: grouped });
  }
  return sections;
}
