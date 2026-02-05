"use client";

import Image from "next/image";

type HeroVideoProps = {
  videoSrc: string;
  posterSrc: string;
  fallbackSrc: string;
  startTime?: number;
  children: React.ReactNode;
};

export default function HeroVideo({
  videoSrc,
  posterSrc,
  fallbackSrc,
  startTime = 0,
  children,
}: HeroVideoProps) {
  const source = startTime ? `${videoSrc}#t=${startTime}` : videoSrc;

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <Image
        src={fallbackSrc}
        alt="Re-build Scholars community gathering"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        preload="auto"
      >
        <source src={source} type="video/mp4" />
      </video>
      {children}
    </section>
  );
}
