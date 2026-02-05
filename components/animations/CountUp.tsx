"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export default function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      element.textContent = `${value.toLocaleString()}${suffix}`;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
        onUpdate: () => {
          element.textContent = `${Math.round(counter.value).toLocaleString()}${suffix}`;
        },
      });
    }, element);

    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

