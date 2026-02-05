import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <div className="mx-auto w-full max-w-5xl space-y-10 px-6">
          <Reveal className="space-y-4">
            <p className="section-kicker">Contact</p>
            <h1 className="section-title">Start a conversation with our team.</h1>
            <p className="text-lg text-[var(--muted)]">
              We will respond within two business days with next steps or
              resources.
            </p>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
            <ContactForm />
            <Reveal className="space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div>
                <h3 className="text-lg font-semibold">Office</h3>
                <p className="text-sm text-[var(--muted)]">
                  1780 Eastern Parkway, Brooklyn, NY
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm text-[var(--muted)]">hello@rebuild.org</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-sm text-[var(--muted)]">(718) 555-0198</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

