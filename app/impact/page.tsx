import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";

const metrics = [
  { label: "Scholars served", value: 860, suffix: "+" },
  { label: "Caregiver workshops", value: 140, suffix: "+" },
  { label: "Volunteer hours", value: 12400, suffix: "" },
  { label: "Partner schools", value: 18, suffix: "" },
];

export default function ImpactPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Impact</p>
            <h1 className="section-title">Measuring growth with the community.</h1>
            <p className="text-lg text-[var(--muted)]">
              We track academic progress, confidence, and family engagement to
              ensure every learner has a clear pathway forward.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <Reveal
                key={metric.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
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
          <Reveal className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <h2 className="text-2xl font-semibold">What families tell us</h2>
            <p className="mt-3 text-[var(--muted)]">
              "My daughter is finally excited about math. The mentor team makes
              her feel seen and capable." — Parent partner, Crown Heights
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

