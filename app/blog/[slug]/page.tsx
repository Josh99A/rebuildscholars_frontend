import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Reveal from "@/components/animations/Reveal";
import MediaImage from "@/components/media/MediaImage";
import { getPostBySlug, getPostSlugs, mdxOptions } from "@/lib/mdx";
import type { PostWithContent } from "@/lib/mdx";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: PostWithContent | null = null;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-3xl space-y-8 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Blog</p>
            <h1 className="section-title">{post.title}</h1>
            <p className="text-lg text-[var(--muted)]">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
              <span>{post.readingTime}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.author || "Re-build Scholars"}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(post.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          {post.cover ? (
            <MediaImage
              src={post.cover}
              alt={post.title}
              width={1200}
              height={700}
              className="h-72 w-full object-cover"
              priority
            />
          ) : null}
          <article className="mdx-content space-y-6">
            <MDXRemote
              source={post.content}
              options={mdxOptions as any}
              components={{
                img: (props) => (
                  <MediaImage
                    {...props}
                    src={props.src || ""}
                    alt={props.alt || ""}
                    width={1200}
                    height={700}
                    className="my-6 h-64 w-full object-cover"
                  />
                ),
                a: (props) => (
                  <a {...props} className="text-[var(--primary)] underline" />
                ),
              }}
            />
          </article>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
          >
            Back to blog
          </Link>
        </div>
      </section>
    </div>
  );
}

