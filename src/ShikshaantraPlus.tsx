import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import {
  SHIKSHAANTRA,
  SHIKSHAANTRA_PARTNERS,
  SHIKSHAANTRA_STATS,
  SHIKSHAANTRA_VIDEO,
} from "./constants";

const PAGE_TITLE =
  "NGO for Poor Children | NGO Supporting Child Education | Khushii";

export default function ShikshaantraPlus() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/education/sikshabanner.jpg"
          alt="A parent and a teacher meeting a student beside a gold panel"
          width={1920}
          height={385}
          priority
          className="h-auto w-full"
        />
        <div className="px-5 py-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-[42%] md:items-center md:px-12">
          <div>
            <p className="text-sm font-light tracking-[0.16em] text-khushii-brown md:text-lg">
              {SHIKSHAANTRA.eyebrow}
            </p>
            <h1 className="mt-2 text-xl font-medium leading-tight text-khushii-brown md:text-3xl lg:text-4xl">
              {SHIKSHAANTRA.title}
              <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/education/shiksha-image-1.jpg"
            alt="Two schoolgirls in checked KHUSHII uniforms"
            width={1050}
            height={809}
            className="h-auto min-w-0 w-full rounded-2xl"
          />
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {SHIKSHAANTRA.scores}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8 lg:order-1">
            {SHIKSHAANTRA.schools}
          </p>
          <Image
            src="/images/education/shiksha-image-2.jpg"
            alt="Five students standing in front of a KHUSHII school building"
            width={1050}
            height={809}
            className="h-auto min-w-0 w-full rounded-2xl lg:order-2"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            ACCOMPLISHMENTS
            <sup className="text-lg">*</sup>
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {SHIKSHAANTRA_STATS.map((item) => (
            <li key={item.label} className="min-w-0 border border-[#f0e2c4] bg-[#fbf7f0] px-4 py-6 md:px-6 md:py-7">
              <Image
                src={item.icon}
                alt=""
                width={120}
                height={120}
                className="h-16 w-16 object-contain"
              />
              <h3 className="mt-4 break-words text-xl font-medium leading-tight tracking-wide text-khushii-gold md:text-2xl">
                {item.value}
              </h3>
              <p className="mt-2 text-sm leading-6 text-khushii-gray">{item.label}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-6xl text-sm text-khushii-gray">
          <span className="mr-1 align-middle">*</span>
          Last Year
        </p>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            PARTNERSHIPS FORGED
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-6 max-w-3xl text-base leading-8 text-khushii-gray">
            {SHIKSHAANTRA.partnershipsIntro}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <Image
            src="/images/education/map-n.jpg"
            alt="Map of India marking KHUSHII partner locations"
            width={1134}
            height={1280}
            className="h-auto min-w-0 w-full"
          />
          <div className="relative min-w-0">
            <ul className="flex flex-col gap-2 lg:absolute lg:inset-0 lg:justify-between lg:gap-1">
              {SHIKSHAANTRA_PARTNERS.map((partner) => (
                <li
                  key={partner}
                  className="flex items-center gap-2 border border-[#f0e2c4] bg-[#fbf7f0] px-3 py-2 text-sm leading-5 text-khushii-gray lg:py-1 lg:text-xs lg:leading-4"
                >
                  <Image
                    src="/images/education/polygon.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="h-3 w-3 shrink-0"
                  />
                  <span>{partner}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-4">
          <iframe
            className="aspect-video w-full rounded-2xl"
            src={`https://www.youtube-nocookie.com/embed/${SHIKSHAANTRA_VIDEO.id}`}
            title={SHIKSHAANTRA_VIDEO.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="mt-4 text-base text-khushii-brown">
            {SHIKSHAANTRA_VIDEO.title}
          </p>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
