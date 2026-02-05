import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Organization",
    items: [
      { href: "/about", label: "About" },
      { href: "/programs", label: "Programs" },
      { href: "/impact", label: "Impact" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { href: "/get-involved", label: "Volunteer" },
      { href: "/donate", label: "Donate" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold transition hover:text-[var(--secondary)]">
            <div className="relative h-11 w-11">
              <Image
                src="/images/logo-light.png"
                alt="Re-build Scholars logo"
                fill
                sizes="44px"
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/logo-dark.png"
                alt="Re-build Scholars logo"
                fill
                sizes="44px"
                className="hidden object-contain dark:block"
              />
            </div>
            Re-build Scholars
          </div>
          <p className="text-sm text-[var(--muted)]">
            Rebuilding learning confidence through community-powered tutoring,
            mentorship, and access for every scholar.
          </p>
          <div className="text-sm text-[var(--muted)]">
            1780 Eastern Parkway, Brooklyn, NY
          </div>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
              {group.title}
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[var(--secondary)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] py-6 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Re-build Scholars. All rights reserved.
      </div>
    </footer>
  );
}

