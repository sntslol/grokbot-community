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
      "AI teammates with their own computer. The community site, Discord, and first meetups are live.",
    body: [
      "Grok Bot is an always-on teammate with its own computer. You give it real work — inbox, outbound, research, ops — and it stays on it.",
      "This community site is the public square: launch notes, meetups, and a newsletter so you hear about drops first. Workshops, the course, and the agency live with Tails at bots.how.",
      "Download for Linux, join Discord, and come to a Phoenix meetup if you are nearby. We will post more cities as hosts step up.",
    ],
  },
  {
    slug: "phoenix-meetups",
    title: "Phoenix-area meetups this fall",
    date: "2026-08-28",
    excerpt:
      "Two gatherings on the calendar: a Tempe weeknight and a Scottsdale Saturday lab.",
    body: [
      "The first in-person Grok Bot hangouts are Phoenix-area on purpose — that is where a lot of us already work.",
      "Bring a laptop if you want to pair. If you would rather just watch a Bot clear a queue, that is welcome too. RSVP via Discord so we size the room.",
    ],
  },
  {
    slug: "bots-how-workshops",
    title: "Workshops and the agency at bots.how",
    date: "2026-09-01",
    excerpt:
      "Community is free. If you want hands-on training or a team that will stand up Bots with you, Tails is next door.",
    body: [
      "grokbot.community is news, meetups, and Discord. The commercial funnel — workshops, course, agency — is Tails at bots.how.",
      "If you are ready to put Bots on real workflows, start there. If you just want the next drop, stay on the newsletter.",
    ],
  },
];

const meetups: Meetup[] = [
  {
    id: "tempe-sep-2026",
    title: "Grok Bot weeknight",
    date: "2026-09-17",
    time: "6:30 PM MST",
    city: "Tempe, AZ",
    venue: "Mill Ave — room TBA",
    href: "https://discord.com/invite/kqCc86jM55",
  },
  {
    id: "scottsdale-oct-2026",
    title: "Saturday Bot lab",
    date: "2026-10-11",
    time: "10:00 AM MST",
    city: "Scottsdale, AZ",
    venue: "Old Town coworking",
    href: "https://discord.com/invite/kqCc86jM55",
  },
  {
    id: "phoenix-nov-2026",
    title: "Downtown Phoenix mixer",
    date: "2026-11-05",
    time: "6:00 PM MST",
    city: "Phoenix, AZ",
    venue: "Warehouse District",
    href: "https://discord.com/invite/kqCc86jM55",
  },
];

export async function listNewsPosts() {
  return posts.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNewsPost(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function listMeetups() {
  return meetups.slice().sort((a, b) => (a.date > b.date ? 1 : -1));
}
