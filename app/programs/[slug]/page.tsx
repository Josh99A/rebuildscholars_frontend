import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/animations/Reveal";
import { programs } from "@/lib/data/programs";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export default function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = programs.find((item) => item.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-4xl space-y-8 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Program details</p>
            <h1 className="section-title">{program.title}</h1>
            <p className="text-lg text-[var(--muted)]">{program.description}</p>
          </Reveal>
          <Reveal className="grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Duration
              </p>
              <p className="mt-2 text-lg font-semibold">{program.duration}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold">{program.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Focus
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {program.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
          >
            Back to programs
          </Link>
        </div>
      </section>
    </div>
  );
}

