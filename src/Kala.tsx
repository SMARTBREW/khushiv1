import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import {
  KALA,
  KALA_PARTNERS,
  KALA_SHG_PARTNERS,
  KALA_SHG_STATS,
  KALA_STATS,
} from "./constants";

const PAGE_TITLE =
  "Skills Development NGO | Child Skills Development Programs | Khushii";

function StatPartners({
  stats,
  partners,
}: {
  stats: readonly { icon: string; value: string; label: string }[];
  partners: readonly string[];
}) {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
        {stats.map((item) => (
          <li key={item.label} className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-7">
            <Image
              src={item.icon}
              alt=""
              width={120}
              height={120}
              className="mx-auto h-16 w-16 object-contain lg:mx-0"
            />
            <h3 className="mt-4 text-2xl font-medium tracking-wide text-khushii-gold">
              {item.value}
            </h3>
            <p className="mt-2 text-sm leading-6 text-khushii-gray">{item.label}</p>
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-xl font-medium text-khushii-brown">
          Partnerships forged
        </h3>
        <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        <ul className="mt-6 space-y-4">
          {partners.map((partner) => (
            <li
              key={partner}
              className="border border-[#f0e2c4] bg-[#fbf7f0] px-5 py-4 text-base leading-7 text-khushii-gray"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Kala() {
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
          src="/images/kala/banner.jpg"
          alt="Students in a skills class beside a gold panel"
          width={1920}
          height={385}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-[42%] items-center px-6 md:px-12">
          <div>
            <p className="text-sm font-light tracking-[0.16em] text-khushii-brown md:text-lg">
              {KALA.eyebrow}
            </p>
            <h1 className="mt-2 text-xl font-medium leading-tight text-khushii-brown md:text-3xl">
              {KALA.title}
              <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/kala/clinic.jpg"
            alt="A health worker treating a student seated in a clinic chair"
            width={1280}
            height={961}
            className="h-auto min-w-0 w-full rounded-2xl"
          />
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {KALA.workforce}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8 lg:order-1">
            {KALA.training}
          </p>
          <Image
            src="/images/kala/counselling.jpg"
            alt="Women and a student talking at a Shikshaantra Plus counselling table"
            width={1280}
            height={961}
            className="h-auto min-w-0 w-full rounded-2xl lg:order-2"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            ACCOMPLISHMENTS
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-8 text-base leading-8 text-khushii-gray">
            {KALA.employability}
          </p>
        </div>
        <StatPartners stats={KALA_STATS} partners={KALA_PARTNERS} />
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            ACCOMPLISHMENTS
            <sup className="text-lg">*</sup>
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>
        <StatPartners stats={KALA_SHG_STATS} partners={KALA_SHG_PARTNERS} />
        <p className="mx-auto mt-10 max-w-6xl text-sm text-khushii-gray">
          <span className="mr-1 align-middle">*</span>
          Last Year
        </p>
      </section>

      <DonateBanner />
    </>
  );
}
