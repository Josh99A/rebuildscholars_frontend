"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/galleryData";

const filters = [
  { label: "All", value: "all" },
  { label: "Images", value: "image" },
  { label: "Videos", value: "video" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

type GalleryMasonryProps = {
  items: GalleryItem[];
  filter: FilterValue;
  onFilterChange: (value: FilterValue) => void;
  onSelect: (index: number) => void;
};

export default function GalleryMasonry({
  items,
  filter,
  onFilterChange,
  onSelect,
}: GalleryMasonryProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => onFilterChange(item.value)}
            aria-pressed={filter === item.value}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
              filter === item.value
                ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--on-primary)]"
                : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Open ${item.title}`}
            className={cn(
              "group mb-3 w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-left transition",
              "break-inside-avoid",
              "hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_36px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            )}
          >
            <div className="relative w-full">
              <Image
                src={item.type === "video" ? item.thumbnail || item.src : item.src}
                alt={item.title}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[var(--overlay)] opacity-0 transition group-hover:opacity-100" />
              {item.type === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--bg) 90%, transparent)] text-[var(--text)] shadow">
                    <Play size={20} />
                  </span>
                </div>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 px-4 pb-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-sm font-semibold text-[var(--on-overlay)]">
                  {item.title}
                </div>
                {item.program ? (
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--on-overlay)] opacity-70">
                    {item.program}
                  </div>
                ) : null}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
