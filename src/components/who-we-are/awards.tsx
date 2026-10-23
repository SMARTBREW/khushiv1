import Image from "../image";

import { AWARD_BADGES } from "../../constants";

export default function Awards() {
  return (
    <section
      id="awards_here"
      className="bg-white px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto mb-12 max-w-6xl md:mb-16">
        <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
          OUR PRESTIGIOUS
        </h3>
        <h2 className="mt-3 text-3xl font-medium leading-tight text-khushii-brown md:text-4xl">
          AWARDS & ACCREDITATIONS
        </h2>
        <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
      </div>

      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
        {AWARD_BADGES.map((badge) => (
          <li
            key={badge.src}
            className="flex h-32 items-center justify-center border border-[#f0e2c4] bg-[#fbf7f0] p-5"
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              width={140}
              height={90}
              className="max-h-20 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
