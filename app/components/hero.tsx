"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { HERO_SLIDES } from "../constants";

const SLIDE_MS = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const slideCount = HERO_SLIDES.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, slideCount]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Campaign highlights"
      className="relative h-[29rem] w-full overflow-hidden md:h-[42rem]"
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;

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
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{
                scale: isActive && !reduceMotion ? 1.06 : 1,
              }}
              transition={{
                duration: isActive && !reduceMotion ? SLIDE_MS / 1000 : 0.35,
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
          </Link>
        );
      })}

      <div className="absolute bottom-6 left-5 z-10 flex flex-col items-start gap-3 md:bottom-8 md:left-10">
        <span className="rounded-full bg-khushii-gold px-4 py-1.5 text-sm font-medium tracking-wide text-white">
          {HERO_SLIDES[activeIndex].caption}
        </span>
        <div className="flex items-end gap-2">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center gap-1"
            >
              <span
                className={`h-2 rounded-full ${
                  isActive ? "w-10 bg-khushii-donate" : "w-5 bg-white"
                }`}
              />
              <span className="h-0.5 w-8 overflow-hidden rounded-full bg-white/50">
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
    </section>
  );
}
