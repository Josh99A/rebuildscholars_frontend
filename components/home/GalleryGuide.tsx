"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryCards = [
  {
    title: "After-school Labs",
    text: "Project-based tutoring that rebuilds academic confidence.",
    image: "/images/gallery-classroom.jpg",
  },
  {
    title: "Mentor Spotlight",
    text: "Meet volunteers who show up for scholars every week.",
    image: "/images/gallery-team.jpg",
  },
  {
    title: "Family Partnerships",
    text: "Resources that keep learning strong at home.",
    image: "/images/gallery-outreach.jpg",
  },
];

export default function GalleryGuide() {
  return (
    <div>
      <div className="space-y-3">
        <p className="section-kicker">Gallery guide</p>
        <h2 className="section-title">See the work in action</h2>
        <p className="text-[var(--muted)]">
          Explore moments from our tutoring labs, family partnerships, and
          community events to see impact in motion.
        </p>
      </div>

      <div className="hidden grid-cols-3 gap-6 md:grid">
        {galleryCards.map((card) => (
          <article
            key={card.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_36px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)]"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={1200}
              height={700}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{card.text}</p>
              </div>
              <Link
                href="/gallery"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
              >
                Visit gallery <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {galleryCards.map((card) => (
            <SwiperSlide key={card.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_18px_36px_-26px_color-mix(in_oklab,var(--secondary)_55%,transparent)]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1200}
                  height={700}
                  sizes="100vw"
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {card.text}
                    </p>
                  </div>
                      <Link
                        href="/gallery"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
                      >
                        Visit gallery <ArrowUpRight size={16} />
                      </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
