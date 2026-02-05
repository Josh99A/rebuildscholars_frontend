import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  categories?: string[];
  tags?: string[];
  cover?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type PostWithContent = Post & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "one-dark-pro",
            light: "github-light",
          },
          keepBackground: false,
        },
      ],
    ],
  },
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): PostWithContent {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug: realSlug,
    content,
    readingTime: stats.text,
    ...(data as PostFrontmatter),
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => {
      const { content: _content, ...post } = getPostBySlug(slug);
      return post;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  getAllPosts().forEach((post) => {
    post.categories?.forEach((category) => categories.add(category));
  });
  return Array.from(categories).sort();
}

