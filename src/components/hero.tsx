import { motion, useReducedMotion } from "framer-motion";
import Image from "./image";
import Link from "./link";

import { useEffect, useState } from "react";

import { HERO_MOBILE_SLIDES, HERO_SLIDES } from "../constants";

const SLIDE_MS = 5000;

type HeroSlide = {
  src: string;
  alt: string;
  href?: string;
  caption?: string;
};

function HeroCarousel({
  slides,
  frameClassName,
  controlsClassName,
  zoom = false,
}: {
  slides: readonly HeroSlide[];
  frameClassName: string;
  controlsClassName: string;
  zoom?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const slideCount = slides.length;
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, slideCount]);

  return (
    <>
      <div className={frameClassName}>
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const image = (
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{
                scale: zoom && isActive && !reduceMotion ? 1.06 : 1,
              }}
              transition={{
                duration: zoom && isActive && !reduceMotion ? SLIDE_MS / 1000 : 0.35,
                ease: "linear",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          );

          if (!slide.href) {
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                {image}
              </div>
            );
          }

          return (
            <Link
              key={slide.src}
              href={slide.href}
              className={`absolute inset-0 block overflow-hidden transition-opacity duration-500 ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
            >
              {image}
            </Link>
          );
        })}
      </div>

      <div className={controlsClassName}>
        {activeSlide.caption ? (
          <span className="border border-[#f0e2c4] border-l-4 border-l-khushii-gold bg-[#fbf7f0] px-4 py-1.5 text-sm text-khushii-brown">
            {activeSlide.caption}
          </span>
        ) : null}
        <div className="flex items-end gap-2">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive}
                onClick={() => setActiveIndex(index)}
                className="flex items-center"
              >
                <span className="h-0.5 w-8 overflow-hidden rounded-full bg-khushii-brown/20 md:bg-white/50">
                  {isActive ? (
                    <motion.span
                      key={activeIndex}
                      className="block h-full origin-left bg-khushii-gold"
                      initial={{ scaleX: reduceMotion ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: reduceMotion ? 0 : SLIDE_MS / 1000,
                        ease: "linear",
                      }}
                    />
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section
      aria-roledescription="carousel"
      aria-label="Campaign highlights"
      className="relative w-full"
    >
      <div className="md:hidden">
        <HeroCarousel
          slides={HERO_MOBILE_SLIDES}
          frameClassName="relative aspect-[819/1024] w-full overflow-hidden"
          controlsClassName="z-10 flex flex-col items-start gap-3 px-5 py-4"
        />
      </div>
      <div className="hidden md:block">
        <HeroCarousel
          slides={HERO_SLIDES}
          frameClassName="relative h-[42rem] w-full overflow-hidden"
          controlsClassName="z-10 flex flex-col items-start gap-3 md:absolute md:bottom-8 md:left-10"
          zoom
        />
      </div>
    </section>
  );
}
