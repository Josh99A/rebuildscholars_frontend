"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/lib/mdx";
import PostCard from "./PostCard";
import { cn } from "@/lib/utils";

type BlogFilterProps = {
  posts: Post[];
  categories: string[];
};

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((post) => post.categories?.includes(active));
  }, [active, posts]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={category === active}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
              category === active
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

