"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
};

type MediaGallerySwiperProps = {
  images: GalleryImage[];
};

export default function MediaGallerySwiper({ images }: MediaGallerySwiperProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-4">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
      >
        {images.map((image, imageIndex) => (
          <SwiperSlide key={image.src}>
            <button
              type="button"
              onClick={() => {
                setIndex(imageIndex);
                setOpen(true);
              }}
              className="block w-full"
              aria-label={`Open image ${imageIndex + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                sizes="(min-width: 768px) 70vw, 100vw"
                className="h-80 w-full object-cover md:h-[420px]"
                priority={imageIndex === 0}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
      />
    </div>
  );
}

