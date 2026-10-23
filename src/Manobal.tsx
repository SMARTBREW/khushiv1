import { useEffect } from "react";

import Image from "./components/image";
import PartnerLogos from "./components/partner-logos";
import { MANOBAL, MANOBAL_TESTIMONIALS } from "./constants";

const PAGE_TITLE = "Manobal - Khushii";

export default function Manobal() {
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
          src="/images/manobal/manobal-banner.jpg"
          alt="Teachers seated in a workshop beside a gold panel"
          width={4000}
          height={802}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-[42%] items-center px-6 md:px-12">
          <div>
            <h1 className="text-2xl font-medium leading-tight text-khushii-brown md:text-4xl">
              {MANOBAL.title}
              <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            </h1>
            <p className="mt-2 text-sm font-light tracking-[0.08em] text-khushii-brown md:text-lg">
              {MANOBAL.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl space-y-6 text-base leading-8 text-khushii-gray">
          <p>{MANOBAL.teachers}</p>
          <p>{MANOBAL.schools}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            What is Manobal?
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
          {MANOBAL.about}
        </p>
      </section>

      <section className="bg-white px-5 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-3xl">
          <Image
            src="/images/manobal/why-manobal.jpeg"
            alt="Why Manobal matters, what the workshops do, and the impact since 2022: more than 70 schools, 45,000 students, and 990 teachers in Delhi"
            width={1264}
            height={1600}
            className="mx-auto block h-auto w-full"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            TESTIMONIALS FROM OUR PARTICIPANTS
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>
        <ul className="mx-auto grid max-w-5xl gap-6">
          {MANOBAL_TESTIMONIALS.map((item) => (
            <li key={item.src} className="border border-[#f0e2c4] bg-[#fbf7f0]">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </section>

      <PartnerLogos />
    </>
  );
}
