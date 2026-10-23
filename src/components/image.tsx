import type { ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
  sizes?: string;
};

export default function Image({
  fill,
  priority,
  unoptimized: _unoptimized,
  sizes: _sizes,
  className = "",
  alt = "",
  ...props
}: ImageProps) {
  return (
    <img
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={
        fill ? `absolute inset-0 h-full w-full ${className}` : className
      }
      {...props}
    />
  );
}
