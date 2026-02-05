import Reveal from "@/components/animations/Reveal";

export default function AboutPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-5xl space-y-10 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">About us</p>
            <h1 className="section-title">Our mission, vision, and values.</h1>
            <p className="text-lg text-[var(--muted)]">
              Re-build Scholars is a community-led nonprofit committed to
              restoring learning confidence for students affected by disrupted
              education.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Mission",
                text: "Provide equitable tutoring, enrichment, and mentorship so every scholar can thrive.",
              },
              {
                title: "Vision",
                text: "A city where families, schools, and community partners co-create learning recovery.",
              },
              {
                title: "Values",
                text: "Belonging, rigor, collaboration, and joy guide how we show up for learners.",
              },
            ].map((item) => (
              <Reveal
                key={item.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

