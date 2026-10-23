import Image from "../image";

import { ALLIANCE_LOGOS } from "../../constants";

export default function Alliances() {
  return (
    <section id="all-sec-sec" className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto mb-12 max-w-6xl md:mb-16">
        <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
          OUR ESTEEMED
        </h3>
        <h2 className="mt-3 text-3xl font-medium text-khushii-brown md:text-4xl">
          ALLIANCES
        </h2>
        <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
      </div>

      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {ALLIANCE_LOGOS.map((logo) => (
          <li
            key={logo.src}
            className="flex h-20 items-center justify-center border border-[#f0e2c4] bg-[#fbf7f0] px-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="max-h-14 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
