import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";
import PostCard from "@/components/blog/PostCard";
import GalleryGuide from "@/components/home/GalleryGuide";
import HeroVideo from "@/components/home/HeroVideo";
import { programs } from "@/lib/data/programs";
import { getAllPosts } from "@/lib/mdx";

const miniGallery = [
  { src: "/images/gallery-tree-planting.jpg", alt: "Tree planting activity" },
  { src: "/images/gallery-classroom.jpg", alt: "Classroom learning session" },
  { src: "/images/gallery-outreach.jpg", alt: "Outdoor workshop" },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <HeroVideo
        videoSrc="/videos/Home_hero.mp4"
        posterSrc="/images/hero-group.jpg"
        fallbackSrc="/images/hero-group.jpg"
        startTime={5}
      >
        <div className="absolute inset-0 bg-[var(--overlay-strong)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl items-center px-6 py-20">
          <div className="max-w-2xl space-y-6 text-[var(--on-overlay)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Educate. Empower. Elevate.
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Re-build Scholars
            </h1>
            <p className="text-lg opacity-80 md:text-xl">
              We partner with families, educators, and volunteers to rebuild
              learning confidence through tutoring, mentorship, and access.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--on-primary)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-[0_16px_30px_-20px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
              >
                Donate <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--on-overlay) 60%, transparent)] px-6 py-3 text-sm font-semibold text-[var(--on-overlay)] transition hover:-translate-y-0.5 hover:border-[var(--on-overlay)] hover:bg-[color-mix(in_oklab,var(--on-overlay)_12%,transparent)]"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </HeroVideo>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <GalleryGuide />
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
                className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_36px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)]"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
                  <span className="rounded-full border border-[color-mix(in_oklab,var(--secondary)_30%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_12%,transparent)] px-3 py-1">
                    {program.category}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
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
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
                >
                  View details <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <Reveal className="space-y-3">
            <p className="section-kicker">Impact snapshot</p>
            <h2 className="section-title">Measure progress in real time.</h2>
            <p className="text-[var(--muted)]">
              We track growth across academics, confidence, and family
              engagement.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Scholars served", value: 860, suffix: "+" },
              { label: "Volunteer mentors", value: 220, suffix: "+" },
              { label: "Hours of tutoring", value: 12400, suffix: "" },
            ].map((metric) => (
              <Reveal
                key={metric.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_36px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {metric.label}
                </p>
                <div className="mt-4 text-3xl font-semibold">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
          <Reveal className="space-y-3">
            <p className="section-kicker">Community partners</p>
            <h2 className="section-title">
              Building a learning ecosystem together.
            </h2>
          </Reveal>
          <Reveal className="grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 text-sm text-[var(--muted)] md:grid-cols-4">
            {[
              "City Schools",
              "Youth Alliance",
              "STEM Forward",
              "BrightPath",
              "Arts Council",
              "Community Health",
              "Library Network",
              "FutureReady",
            ].map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-6 transition hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--secondary)]"
              >
                {partner}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="section-kicker">Mini gallery</p>
              <h2 className="section-title">Moments that matter.</h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
            >
              View full gallery <ArrowUpRight size={16} />
            </Link>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {miniGallery.map((item) => (
              <Link
                key={item.src}
                href="/gallery"
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_20px_40px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)]"
                aria-label={`View gallery: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={700}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--secondary)_65%,transparent)] via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pb-4">
                  <div className="space-y-1 text-[var(--on-overlay)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                      Program moment
                    </p>
                    <p className="text-sm font-semibold">{item.alt}</p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--on-overlay)_55%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_25%,transparent)] text-[var(--on-overlay)] transition group-hover:scale-105">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
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
