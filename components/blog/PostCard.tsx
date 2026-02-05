"use client";

import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/mdx";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      {post.cover ? (
        <Image
          src={post.cover}
          alt={post.title}
          width={1200}
          height={700}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="h-52 w-full object-cover"
        />
      ) : null}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {(post.categories || []).map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">
            <Link href={`/blog/${post.slug}`} className="hover:text-[var(--primary)]">
              {post.title}
            </Link>
          </h3>
          <p className="text-sm text-[var(--muted)]">{post.excerpt}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-xs text-[var(--muted)]">
          <span>{post.readingTime}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
    </article>
  );
}

