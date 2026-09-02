export type Guide = {
  slug: string;
  title: string;
  kind: "official" | "template" | "guide";
  href: string;
  source: string;
  date: string;
  excerpt: string;
};

const guides: Guide[] = [
  {
    slug: "share-templates",
    title: "Share templates",
    kind: "official",
    href: "https://x.com/bot/status/2093376523919323618",
    source: "@bot",
    date: "2026-08-28",
    excerpt:
      "The official Grok Bot post on sharing a Bot as a template. Start here.",
  },
  {
    slug: "loops",
    title: "Loops",
    kind: "template",
    href: "https://x.ai/bot/Ub3T7usX-c6yRQibQq83P",
    source: "Matt Palmer",
    date: "2026-08-28",
    excerpt:
      "Engineering outer loop over coding agents. Gather, prompt, launch, review, merge. You name the repo; it never guesses.",
  },
  {
    slug: "dr-eggbot",
    title: "dr eggbot",
    kind: "template",
    href: "https://x.ai/bot/93gOz3op1UQdBdbekQFLK",
    source: "@poteto",
    date: "2026-08-30",
    excerpt:
      "Builds other Bots. Coding ones get the poteto-mode bar. Posted on X Aug 30.",
  },
  {
    slug: "loom",
    title: "loom",
    kind: "template",
    href: "https://x.ai/bot/cElGnAaR55iPHK2DGdPdu",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Drafts Gmail replies. Never sends.",
  },
  {
    slug: "porshe",
    title: "porshe",
    kind: "template",
    href: "https://x.ai/bot/BXDRX1jaURkI4Tx70zLg6",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Finds money already owed. Never send, never pay.",
  },
  {
    slug: "jobs",
    title: "jobs",
    kind: "template",
    href: "https://x.ai/bot/LqFDQ8zlNLQqlFP_vvzs_",
    source: "Lauren · @poteto",
    date: "2026-08-30",
    excerpt: "Feature editor. 1–3 ideas. Never code.",
  },
  {
    slug: "benln-internal-use-cases",
    title: "Internal use cases",
    kind: "guide",
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
