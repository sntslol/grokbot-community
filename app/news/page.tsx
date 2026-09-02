import type { Metadata } from "next";
import Link from "next/link";
import { listNewsPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News",
  description: "Latest Grok Bot community news.",
  alternates: { canonical: "/news" },
};

export default async function NewsPage() {
  const posts = await listNewsPosts();

  return (
    <div className="px-5 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="font-[family-name:var(--font-display)] text-[40px] font-[550] leading-[40px] tracking-[-1.2px] text-jet sm:text-[60px] sm:leading-[60px] dark:text-paper">
          News
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-fog">
          Launch notes, meetup dates, and community drops.
        </p>
        <ul className="mt-12 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/news/${post.slug}`}
                className="block rounded-3xl bg-ivory p-6 transition-colors hover:bg-cream/40 dark:bg-card dark:hover:bg-white/5"
              >
                <p className="text-sm text-fog">{formatDate(post.date)}</p>
                <h2 className="mt-2 text-xl font-medium text-jet dark:text-paper">
                  {post.title}
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-fog">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
