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
          <ProgramsGrid programs={programs} />
        </div>
      </section>
    </div>
  );
}

