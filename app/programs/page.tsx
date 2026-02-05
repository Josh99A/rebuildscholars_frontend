import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { programs } from "@/lib/data/programs";

export default function ProgramsPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Programs</p>
            <h1 className="section-title">Every program meets a learner need.</h1>
            <p className="text-lg text-[var(--muted)]">
              From after-school labs to family coaching, our programs are built
              with flexibility and accountability.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <Reveal
                key={program.slug}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_36px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)]"
              >
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {program.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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
                  View program
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

