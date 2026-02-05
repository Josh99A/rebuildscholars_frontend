"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryItems, type GalleryItem } from "@/lib/galleryData";
import "yet-another-react-lightbox/styles.css";

type FilterType = "all" | "image" | "video";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Images", value: "image" },
  { label: "Videos", value: "video" },
];

function getFilteredItems(filter: FilterType, items: GalleryItem[]) {
  if (filter === "all") return items;
  return items.filter((item) => item.type === filter);
}

export default function GalleryClient() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [index, setIndex] = useState(-1);

  const filteredItems = useMemo(
    () => getFilteredItems(filter, galleryItems),
    [filter]
  );

  const slides = filteredItems.map((item) => ({
    ...item,
    type: item.type,
  }));

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            aria-pressed={filter === item.value}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
              filter === item.value
                ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--on-primary)]"
                : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-left"
          >
            <div className="relative h-60 w-full">
              <Image
                src={item.type === "video" ? item.thumbnail || item.src : item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--overlay)] opacity-0 transition group-hover:opacity-100" />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--bg) 90%, transparent)] text-[var(--text)]">
                    <Play size={20} />
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-2 p-5">
              <div className="text-sm font-semibold text-[var(--text)]">
                {item.title}
              </div>
              {item.program && (
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.program}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Zoom]}
        render={{
          slide: ({ slide }) => {
            if (slide.type !== "video") return undefined;
            return (
            <div className="flex h-full w-full items-center justify-center bg-[var(--overlay-strong)]">
                <div className="w-full max-w-5xl px-6">
                  <ReactPlayer
                    url={slide.src}
                    playing
                    controls
                    width="100%"
                    height="100%"
                    playsinline
                  />
                </div>
              </div>
            );
          },
          caption: ({ slide }) => (
            <div className="space-y-1 text-sm text-[var(--on-overlay)]">
              <div className="font-semibold">{slide.title}</div>
              <div className="opacity-70">{slide.description}</div>
              {slide.program ? (
                <div className="text-xs uppercase tracking-[0.2em] opacity-70">
                  {slide.program}
                </div>
              ) : null}
            </div>
          ),
        }}
      />
    </div>
  );
}
