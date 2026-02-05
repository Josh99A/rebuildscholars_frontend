import Reveal from "@/components/animations/Reveal";

const cards = [
  {
    title: "Sponsor a scholar",
    text: "Provide tutoring, learning tools, and family resources for a full term.",
  },
  {
    title: "Volunteer",
    text: "Mentor a learner, support workshops, or share a professional skill.",
  },
  {
    title: "Partner with us",
    text: "Collaborate with schools, employers, or community organizations.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-5xl space-y-10 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Get involved</p>
            <h1 className="section-title">Your time and resources fuel impact.</h1>
            <p className="text-lg text-[var(--muted)]">
              Join our movement to rebuild learning confidence across New York
              City.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <Reveal
                key={card.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{card.text}</p>
                <button className="mt-6 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--text)]">
                  Learn more
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

