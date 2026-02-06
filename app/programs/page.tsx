import { Suspense } from "react";
import Reveal from "@/components/animations/Reveal";
import ProgramsGrid from "@/components/programs/ProgramsGrid";
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
          <Suspense
            fallback={
              <div className="grid gap-6 md:grid-cols-3">
                {programs.slice(0, 3).map((program) => (
                  <div
                    key={program.slug}
                    className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                  >
                    <div className="h-4 w-24 rounded-full bg-[var(--surface)]" />
                    <div className="mt-4 h-6 w-3/4 rounded-full bg-[var(--surface)]" />
                    <div className="mt-3 h-4 w-full rounded-full bg-[var(--surface)]" />
                    <div className="mt-2 h-4 w-5/6 rounded-full bg-[var(--surface)]" />
                    <div className="mt-6 h-9 w-28 rounded-full bg-[var(--surface)]" />
                  </div>
                ))}
              </div>
            }
          >
            <ProgramsGrid programs={programs} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

