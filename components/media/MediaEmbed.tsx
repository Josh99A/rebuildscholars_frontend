"use client";

import ReactPlayer from "react-player";
import { cn } from "@/lib/utils";

type MediaEmbedProps = {
  url: string;
  className?: string;
};

export default function MediaEmbed({ url, className }: MediaEmbedProps) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl bg-[color-mix(in_oklab,var(--secondary) 12%, transparent)]",
        className
      )}
    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        className="absolute inset-0"
        controls
      />
    </div>
  );
}

