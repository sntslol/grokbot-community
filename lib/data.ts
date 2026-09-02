export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export type Meetup = {
  id: string;
  title: string;
  date: string;
  time: string;
  city: string;
  venue: string;
  href: string;
};

const posts: NewsPost[] = [
  {
    slug: "introducing-grok-bot",
    title: "Grok Bot is here",
    date: "2026-08-26",
    excerpt:
      "The community site is live: news, a newsletter, Discord, and Arizona meetups when we have them.",
    body: [
      "Grok Bot is an always-on teammate with its own computer. This site is the public square for people who run one.",
      "Online and in Arizona. Join Discord, get the newsletter, and come to a meetup when one is on the calendar.",
    ],
  },
];

const meetups: Meetup[] = [];

export async function listNewsPosts() {
  return posts.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNewsPost(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function listMeetups() {
  return meetups.slice().sort((a, b) => (a.date > b.date ? 1 : -1));
}
