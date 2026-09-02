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
    slug: "share-install-vet",
    title: "How to share, install, and vet templates",
    kind: "guide",
    href: "https://www.aibuilderclub.com/blog/grok-bot-templates",
    source: "AI Builder Club",
    date: "2026-08-30",
    excerpt:
      "What a template carries, what it leaves behind, and how to install a third-party Bot without getting burned.",
  },
];

export async function listGuides() {
  return guides.slice();
}
