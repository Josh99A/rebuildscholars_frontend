"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/blog", label: "Blog" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

const programCategories = [
  { label: "All programs", value: "All categories" },
  { label: "Health", value: "Health" },
  { label: "Education", value: "Education" },
  { label: "Climate", value: "Climate" },
  { label: "Innovation", value: "Innovation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold transition hover:text-[var(--secondary)]"
        >
          <div className="relative h-11 w-11">
            <Image
              src="/images/logo-light.png"
              alt="Re-build Scholars logo"
              fill
              sizes="44px"
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/images/logo-dark.png"
              alt="Re-build Scholars logo"
              fill
              sizes="44px"
              className="hidden object-contain dark:block"
              priority
            />
          </div>
          Re-build Scholars
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            if (link.label !== "Programs") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--muted)] transition hover:text-[var(--secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <details key={link.href} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1 text-[var(--muted)] transition hover:text-[var(--secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] [&::-webkit-details-marker]:hidden">
                  Programs <ChevronDown size={16} />
                </summary>
                <div className="absolute left-0 mt-3 w-56 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-[0_18px_40px_-24px_color-mix(in_oklab,var(--secondary)_50%,transparent)]">
                  {programCategories.map((category) => (
                    <Link
                      key={category.value}
                      href={
                        category.value === "All categories"
                          ? "/programs"
                          : `/programs?category=${encodeURIComponent(
                              category.value
                            )}`
                      }
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[color-mix(in_oklab,var(--secondary)_12%,transparent)] hover:text-[var(--secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)]"
                    >
                      {category.label}
                      {category.value !== "All categories" ? (
                        <span className="text-xs text-[var(--secondary)]">
                          {category.value}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "md:hidden",
          open ? "block" : "hidden",
          "border-t border-[var(--border)] bg-[var(--bg)]"
        )}
      >
        <nav className="flex flex-col px-6 py-4 text-sm font-medium">
          {navLinks.map((link) => {
            if (link.label !== "Programs") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-[var(--muted)] transition hover:text-[var(--secondary)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div key={link.href} className="py-2">
                <Link
                  href={link.href}
                  className="text-[var(--muted)] transition hover:text-[var(--secondary)]"
                  onClick={() => setOpen(false)}
                >
                  Programs
                </Link>
                <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 text-xs">
                  {programCategories.map((category) => (
                    <Link
                      key={category.value}
                      href={
                        category.value === "All categories"
                          ? "/programs"
                          : `/programs?category=${encodeURIComponent(
                              category.value
                            )}`
                      }
                      className="rounded-xl px-3 py-2 text-[var(--muted)] transition hover:bg-[color-mix(in_oklab,var(--secondary)_12%,transparent)] hover:text-[var(--secondary)]"
                      onClick={() => setOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

