import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsPost, listNewsPosts } from "@/lib/data";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await listNewsPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { url: `${site.url}/news/${post.slug}` },
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  if (!post) notFound();

  return (
    <article className="px-5 py-20">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/news" className="text-sm text-fog hover:text-jet dark:hover:text-paper">
          ← News
        </Link>
        <p className="mt-8 text-sm text-fog">{formatDate(post.date)}</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[40px] font-[550] leading-[40px] tracking-[-1.2px] text-jet sm:text-[60px] sm:leading-[60px] dark:text-paper">
          {post.title}
        </h1>
        <p className="mt-5 text-[17px] leading-7 text-fog">{post.excerpt}</p>
        <div className="mt-10 space-y-5 text-[17px] leading-7 text-jet dark:text-paper">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-12 text-sm text-fog">
          Training and agency work lives at{" "}
          <a href={site.tails} className="text-primary hover:underline">
            bots.how
          </a>
          .
        </p>
      </div>
    </article>
  );
}
