"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import type { Program } from "@/lib/data/programs";

type ProgramsGridProps = {
  programs: Program[];
};

const allLabel = "All categories";

export default function ProgramsGrid({ programs }: ProgramsGridProps) {
  const searchParams = useSearchParams();
  const categories = useMemo(() => {
    const unique = Array.from(new Set(programs.map((program) => program.category)));
    return [allLabel, ...unique];
  }, [programs]);

  const [selectedCategory, setSelectedCategory] = useState(allLabel);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (!categoryParam) {
      setSelectedCategory(allLabel);
      return;
    }
    const match = categories.find(
      (category) => category.toLowerCase() === categoryParam.toLowerCase()
    );
    if (match) {
      setSelectedCategory(match);
    }
  }, [categories, searchParams]);

  const filteredPrograms = useMemo(() => {
    if (selectedCategory === allLabel) {
      return programs;
    }
    return programs.filter((program) => program.category === selectedCategory);
  }, [programs, selectedCategory]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Filter by category
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
            {categories.slice(1).map((category) => (
              <span
                key={category}
                className="rounded-full border border-[var(--border)] px-3 py-1"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <label className="w-full max-w-xs text-sm font-semibold text-[var(--text)]">
          <span className="sr-only">Program category</span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredPrograms.map((program) => (
          <Reveal
            key={program.slug}
            className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_36px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)] focus-within:ring-2 focus-within:ring-[var(--primary)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg)]"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
              <span className="rounded-full border border-[color-mix(in_oklab,var(--secondary)_30%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_12%,transparent)] px-3 py-1">
                {program.category}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[var(--text)]">
              {program.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              {program.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
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
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              View details <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
