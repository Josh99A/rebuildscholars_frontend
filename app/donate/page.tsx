import Reveal from "@/components/animations/Reveal";

const tiers = [
  {
    title: "Starter",
    amount: "$50",
    text: "Learning materials for one scholar.",
  },
  {
    title: "Sustainer",
    amount: "$250",
    text: "One month of tutoring sessions.",
  },
  {
    title: "Champion",
    amount: "$1,000",
    text: "Full-term enrichment for a cohort.",
  },
];

export default function DonatePage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-5xl space-y-10 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Donate</p>
            <h1 className="section-title">Fuel the next chapter of learning.</h1>
            <p className="text-lg text-[var(--muted)]">
              Your gift powers tutoring, enrichment, and family support across our
              community.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <Reveal
                key={tier.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {tier.title}
                </p>
                <h3 className="mt-3 text-3xl font-semibold">{tier.amount}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{tier.text}</p>
                <button className="mt-6 w-full rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]">
                  Give {tier.amount}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

