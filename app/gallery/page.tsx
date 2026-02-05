"use client";

import { useMemo, useState } from "react";
import GalleryMasonry from "@/components/media/GalleryMasonry";
import GalleryLightbox from "@/components/media/GalleryLightbox";
import { galleryItems } from "@/lib/galleryData";

type FilterType = "all" | "image" | "video";

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [index, setIndex] = useState(-1);

  const filteredItems = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <section className="section">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <div className="space-y-3">
            <p className="section-kicker">Gallery</p>
            <h1 className="section-title">Gallery</h1>
            <p className="text-[var(--muted)]">
              Moments from our programs, communities, and impact.
            </p>
          </div>
          <GalleryMasonry
            items={filteredItems}
            filter={filter}
            onFilterChange={(value) => {
              setFilter(value);
              setIndex(-1);
            }}
            onSelect={(nextIndex) => setIndex(nextIndex)}
          />
          <GalleryLightbox
            items={filteredItems}
            index={index}
            onClose={() => setIndex(-1)}
          />
        </div>
      </section>
    </div>
  );
}
