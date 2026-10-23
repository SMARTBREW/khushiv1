import Image from "../image";

import { WHO_WE_ARE } from "../../constants";
import Reveal from "../reveal";

const CARDS = [
  {
    heading: WHO_WE_ARE.vision.heading,
    body: WHO_WE_ARE.vision.body,
    image: WHO_WE_ARE.vision.image,
    alt: "Students smiling in a KHUSHII classroom",
  },
  {
    heading: WHO_WE_ARE.mission.heading,
    body: WHO_WE_ARE.mission.body,
    image: WHO_WE_ARE.mission.image,
    alt: "A teacher supporting a student at the blackboard",
  },
  {
    heading: WHO_WE_ARE.values.heading,
    items: WHO_WE_ARE.values.items,
    image: WHO_WE_ARE.values.image,
    alt: "Students studying together outdoors",
  },
] as const;

export default function VisionMission() {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {CARDS.map((card, index) => (
          <Reveal key={card.heading} delay={index * 0.08}>
            <article className="overflow-hidden border border-[#f0e2c4] bg-[#fbf7f0]">
              <div className="relative h-52 w-full md:h-60">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-6 md:px-8">
                <h3 className="text-lg font-medium uppercase tracking-[0.12em] text-khushii-brown">
                  {card.heading}
                </h3>
                <span className="mt-3 block h-1 w-16 bg-khushii-gold" />
                {"body" in card ? (
                  <p className="mt-4 text-sm leading-7 text-khushii-gray md:text-base">
                    {card.body}
                  </p>
                ) : (
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-khushii-gray md:text-base">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
