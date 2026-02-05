import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";
import PostCard from "@/components/blog/PostCard";
import { programs } from "@/lib/data/programs";
import { getAllPosts } from "@/lib/mdx";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="section">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-6">
            <p className="section-kicker">Re-build Scholars</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Rebuilding learning confidence through mentorship and community.
            </h1>
            <p className="text-lg text-[var(--muted)]">
              We partner with families, educators, and volunteers to close
              opportunity gaps with tutoring, enrichment, and wraparound
              support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
              >
                Get involved <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)]"
              >
                Donate now
              </Link>
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  2026 Snapshot
                </p>
                <h2 className="text-2xl font-semibold">Impact at a glance</h2>
              </div>
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">
                    Scholars served
                  </span>
                  <CountUp value={860} suffix="+" className="text-2xl" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">
                    Volunteer mentors
                  </span>
                  <CountUp value={220} suffix="+" className="text-2xl" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">
                    Hours of tutoring
                  </span>
                  <CountUp value={12400} suffix="" className="text-2xl" />
                </div>
              </div>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
              >
                See full impact <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <Reveal className="space-y-3">
            <p className="section-kicker">Programs</p>
            <h2 className="section-title">Learning experiences built with care.</h2>
            <p className="text-[var(--muted)]">
              Each program blends academics, mentorship, and family support to
              create sustained learning recovery.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <Reveal
                key={program.slug}
                className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {program.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {program.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/programs/${program.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
                >
                  View details <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
          <Reveal className="space-y-3">
            <p className="section-kicker">Community partners</p>
            <h2 className="section-title">
              Building a learning ecosystem together.
            </h2>
          </Reveal>
          <Reveal className="grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm text-[var(--muted)] md:grid-cols-4">
            {["City Schools", "Youth Alliance", "STEM Forward", "BrightPath"]
              .concat(["Arts Council", "Community Health", "Library Network", "FutureReady"])
              .map((partner) => (
                <div
                  key={partner}
                  className="flex items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--card)] px-4 py-6"
                >
                  {partner}
                </div>
              ))}
          </Reveal>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="section-kicker">Latest from the field</p>
              <h2 className="section-title">Stories, research, and updates.</h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
            >
              Explore the blog <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

