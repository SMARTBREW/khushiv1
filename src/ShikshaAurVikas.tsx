import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import {
  SHIKSHA_AUR_VIKAS,
  SHIKSHA_AUR_VIKAS_PARTNERS,
  SHIKSHA_AUR_VIKAS_STATS,
  SHIKSHA_AUR_VIKAS_VIDEOS,
} from "./constants";

const PAGE_TITLE =
  "Improving Children's Lives | Best NGO for Poor Child Education | Khushii";

export default function ShikshaAurVikas() {
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
          src="/images/shiksha/banner.jpg"
          alt="A parent and a teacher meeting a student beside a gold panel"
          width={1920}
          height={385}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-[42%] items-center px-6 md:px-12">
          <div>
            <p className="text-sm font-light tracking-[0.16em] text-khushii-brown md:text-lg">
              {SHIKSHA_AUR_VIKAS.eyebrow}
            </p>
            <h1 className="mt-2 text-xl font-medium leading-tight text-khushii-brown md:text-3xl lg:text-4xl">
              {SHIKSHA_AUR_VIKAS.title}
              <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/shiksha/counselling-desk.jpg"
            alt="Women and children gathered at a KHUSHII counselling desk"
            width={1050}
            height={809}
            className="h-auto min-w-0 w-full rounded-2xl"
          />
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {SHIKSHA_AUR_VIKAS.communities}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8 lg:order-1">
            {SHIKSHA_AUR_VIKAS.groups}
          </p>
          <Image
            src="/images/shiksha/classroom.jpg"
            alt="A teacher standing with a student during a classroom counselling session"
            width={1050}
            height={809}
            className="h-auto min-w-0 w-full rounded-2xl lg:order-2"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            ACCOMPLISHMENTS
            <sup className="text-lg">*</sup>
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-8 text-base leading-8 text-khushii-gray">
            {SHIKSHA_AUR_VIKAS.accomplishments}
          </p>
        </div>

        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SHIKSHA_AUR_VIKAS_STATS.map((item) => (
            <li key={item.label} className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-7">
              <Image
                src={item.icon}
                alt=""
                width={96}
                height={96}
                className="h-16 w-16 object-contain"
              />
              <h3 className="mt-4 text-2xl font-medium tracking-wide text-khushii-gold">
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
            {SHIKSHA_AUR_VIKAS.partnershipsIntro}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/shiksha/map.png"
            alt="Map of India marking Shiksha aur Vikas partner locations"
            width={1206}
            height={1345}
            className="h-auto min-w-0 w-full"
          />
          <ul className="min-w-0 space-y-3">
            {SHIKSHA_AUR_VIKAS_PARTNERS.map((partner) => (
              <li
                key={partner}
                className="flex items-start gap-3 border border-[#f0e2c4] bg-[#fbf7f0] px-4 py-3 text-khushii-gray"
              >
                <Image
                  src="/images/education/polygon.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="mt-1.5 h-3 w-3 shrink-0"
                />
                <span className="text-base leading-7">{partner}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 md:px-10 md:pb-24">
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
          {SHIKSHA_AUR_VIKAS_VIDEOS.map((video) => (
            <li key={video.id} className="min-w-0 border border-[#f0e2c4] bg-[#fbf7f0] p-4">
              <iframe
                className="aspect-video w-full rounded-2xl"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="mt-4 text-base text-khushii-brown">
                {video.title}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <DonateBanner />
    </>
  );
}
