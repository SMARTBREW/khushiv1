import Image from "./image";

import { useEffect, useRef, useState } from "react";

import { PARTNER_LOGOS } from "../constants";

export default function PartnerLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let offset = 0;

    const step = () => {
      if (!isPaused) {
        offset -= 0.4;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(offset) >= halfWidth) {
          offset = 0;
        }
        track.style.transform = `translateX(${offset}px)`;
      }
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [isPaused]);

  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      id="award-slider"
      aria-label="Partner logos"
      className="flex w-full flex-col items-stretch gap-4 bg-white py-8 md:flex-row md:items-center md:py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <p className="shrink-0 px-6 text-sm font-medium uppercase tracking-[0.2em] text-khushii-gold-dark md:w-40 md:px-8">
        Partners
      </p>
      <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div ref={trackRef} className="flex w-max items-center">
          {logos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="mx-3 flex h-[5.625rem] w-[11.5rem] shrink-0 items-center justify-center border border-[#f0e2c4] bg-[#fbf7f0] py-5"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={50}
                className="h-[3.125rem] w-[9.375rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
