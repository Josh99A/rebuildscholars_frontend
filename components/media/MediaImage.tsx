import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type MediaImageProps = ImageProps & {
  rounded?: boolean;
};

export default function MediaImage({
  className,
  rounded = true,
  sizes,
  ...props
}: MediaImageProps) {
  return (
    <Image
      {...props}
      sizes={sizes || "(min-width: 1024px) 800px, 100vw"}
      className={cn(rounded && "rounded-2xl", className)}
    />
  );
}

