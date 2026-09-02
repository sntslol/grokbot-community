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
];

export async function listGuides() {
  return guides.slice();
}
