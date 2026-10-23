import Image from "../image";

import { WHO_WE_ARE_STATS } from "../../constants";
import Reveal from "../reveal";

export default function ImpactStats() {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto mb-12 max-w-6xl md:mb-16">
        <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
          THE IMPACT
        </h2>
        <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {WHO_WE_ARE_STATS.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.06}
            className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-7"
          >
            <Image
              src={stat.icon}
              alt=""
              width={72}
              height={72}
              className="h-16 w-16 object-contain"
            />
            <p className="mt-4 text-2xl font-medium tracking-wide text-khushii-gold md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase leading-5 tracking-[0.08em] text-khushii-gray">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
