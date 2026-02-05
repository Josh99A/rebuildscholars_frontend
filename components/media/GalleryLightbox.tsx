"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import ReactPlayer from "react-player";
import type { GalleryItem } from "@/lib/galleryData";
import "yet-another-react-lightbox/styles.css";

type GalleryLightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
};

export default function GalleryLightbox({
  items,
  index,
  onClose,
}: GalleryLightboxProps) {
  const Player = ReactPlayer as any;
  const slides = items.map((item) => ({
    ...item,
    type: item.type,
  })) as any;

  return (
    <Lightbox
      open={index >= 0}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Zoom]}
      render={{
        slide: ({ slide }) => {
          if ((slide as any).type !== "video") return undefined;
          return (
            <div className="flex h-full w-full items-center justify-center bg-[var(--overlay-strong)]">
              <div className="w-full max-w-5xl px-6">
                <Player
                  url={(slide as any).src}
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
            {slide.description ? (
              <div className="opacity-70">{slide.description}</div>
            ) : null}
            {slide.program ? (
              <div className="text-xs uppercase tracking-[0.2em] opacity-70">
                {slide.program}
              </div>
            ) : null}
          </div>
        ),
      }}
    />
  );
}
