"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { AMBASSADOR_SLIDES } from "../constants";
import Reveal, { DrawLine } from "./reveal";

export default function Ambassadors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = AMBASSADOR_SLIDES.length;
  const slide = AMBASSADOR_SLIDES[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex, slideCount]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slideCount);
  };

  return (
    <section className="w-full bg-gray-100 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 pb-6 text-left md:px-8">
        <Reveal>
          <p className="mb-2 text-sm font-light uppercase tracking-[0.28em] text-[#9e9c9d]">
            Ambassadors
          </p>
          <h2 className="text-[2.1875rem] font-bold leading-tight tracking-normal text-khushii-gold md:text-5xl">
            HEARTSPEAK
          </h2>
          <DrawLine className="mt-3 block h-px w-24 origin-left bg-khushii-gold" />
        </Reveal>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div
          aria-roledescription="carousel"
          aria-label="Ambassador testimonials"
          className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
              <span
                aria-hidden="true"
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-khushii-gold text-2xl leading-none text-white"
              >
                “
              </span>
              <blockquote className="text-lg leading-8 text-khushii-gray md:text-xl">
                {slide.quote}
              </blockquote>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-khushii-gray">
                {slide.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#9e9c9d]">
                {slide.role}
              </p>
            </div>
            <div className="relative min-h-[16rem] md:min-h-[22rem]">
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 768px) 40rem, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous ambassador slide"
          onClick={goToPrev}
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd] bg-white text-xl text-khushii-gray shadow-md md:left-4"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next ambassador slide"
          onClick={goToNext}
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd] bg-white text-xl text-khushii-gray shadow-md md:right-4"
        >
          ›
        </button>

        <div className="mt-5 flex gap-2">
          {AMBASSADOR_SLIDES.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-khushii-gold" : "w-2 bg-[#d0d0d0]"
              }`}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/ambassadors"
            className="inline-block rounded-[1.875rem] bg-khushii-gold px-[2.8125rem] py-[0.9375rem] text-[1.1875rem] leading-8 tracking-[0.2em] text-white transition-transform hover:translate-x-1 hover:bg-khushii-gray"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
