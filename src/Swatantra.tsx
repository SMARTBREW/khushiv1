import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import { SWATANTRA, SWATANTRA_STATS, SWATANTRA_VIDEOS } from "./constants";

const PAGE_TITLE =
  "Remedial Education Program | Best Educational NGO in Delhi | Khushii";

export default function Swatantra() {
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
          src="/images/education/swatantra-main-image-1.jpg"
          alt="Students writing in class beside a gold panel"
          width={1900}
          height={381}
          priority
          className="h-auto w-full"
        />
        <div className="px-5 py-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-[42%] md:items-center md:px-12">
          <div>
            <p className="text-sm font-light tracking-[0.16em] text-khushii-brown md:text-lg">
              {SWATANTRA.eyebrow}
            </p>
            <h1 className="mt-2 text-xl font-medium leading-tight text-khushii-brown md:text-3xl lg:text-4xl">
              {SWATANTRA.title}
              <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/education/swatantra-shikshaantra1-1.jpg"
            alt="Students in KHUSHII uniforms standing with their hands together"
            width={500}
            height={500}
            className="h-auto min-w-0 w-full rounded-2xl"
          />
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {SWATANTRA.origin}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8 lg:order-1">
            {SWATANTRA.support}
          </p>
          <Image
            src="/images/education/swatantra-shikshaantra2-1.jpg"
            alt="A volunteer serving a mid-day meal to children seated on the floor"
            width={500}
            height={500}
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
          {SWATANTRA_STATS.map((item) => (
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

      <section className="bg-white px-5 pb-16 md:px-10 md:pb-24">
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
          {SWATANTRA_VIDEOS.map((video) => (
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
