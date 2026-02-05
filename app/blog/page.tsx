import BlogFilter from "@/components/blog/BlogFilter";
import Reveal from "@/components/animations/Reveal";
import { getAllCategories, getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Blog</p>
            <h1 className="section-title">Updates from the field.</h1>
            <p className="text-lg text-[var(--muted)]">
              Insights, stories, and resources from the Re-build Scholars
              community.
            </p>
          </Reveal>
          <BlogFilter posts={posts} categories={categories} />
        </div>
      </section>
    </div>
  );
}

