import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import { WELLBEING, WELLBEING_STATS } from "./constants";

const PAGE_TITLE =
  "Child Care Development | Best Child Development NGO in Delhi | Khushii";

export default function Wellbeing() {
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
          src="/images/wellbeing/well-being-top-image.jpg"
          alt="A student washing her hands at a row of school taps"
          width={1900}
          height={898}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-[46%] items-center px-6 md:px-14">
          <div>
            <p className="text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {WELLBEING.unicef}
            </p>
            <p className="mt-3 text-sm tracking-[0.14em] text-white md:text-base">
              {WELLBEING.unicefCredit}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            {WELLBEING.title}
          </h1>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-khushii-gold-dark">
            {WELLBEING.programme}
          </p>
          <p className="mt-3 text-lg font-medium leading-8 text-khushii-brown">
            {WELLBEING.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
          <p className="rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {WELLBEING.distress}
          </p>
          <p className="rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {WELLBEING.champions}
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            ACCOMPLISHMENTS
            <sup className="text-lg">*</sup>
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-8 text-base leading-8 text-khushii-gray">
            {WELLBEING.accomplishments}
          </p>
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {WELLBEING_STATS.map((item) => (
            <li key={item.label} className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-7">
              <Image
                src={item.icon}
                alt=""
                width={120}
                height={120}
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

      <section className="bg-white px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <Image
            src="/images/wellbeing/new-info.jpeg"
            alt="KHUSHII wellbeing: 150 health camps, 50,306 students outreached through counselling, 10,000 women and girls reached through menstrual hygiene initiatives, 400,000 people impacted through other health work, and 60 anganwadi centers reached"
            width={1212}
            height={1280}
            className="mx-auto block h-auto w-full"
          />
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
