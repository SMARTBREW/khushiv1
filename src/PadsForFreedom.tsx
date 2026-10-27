import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import Link from "./components/link";

const PAGE_TITLE = "HELP KEEP CHILDREN IN SCHOOL ! Donate to Khushii";
const DONATE_HREF = "https://rzp.io/rzp/padsforfreedom";

const GIFTS = [
  { girls: "3 Girls", amount: "₹3,600" },
  { girls: "5 Girls", amount: "₹6,000" },
  { girls: "10 Girls", amount: "₹12,000" },
  { girls: "Classroom", amount: "₹48,000" },
] as const;

const PILLARS = [
  {
    src: "/images/pads/women.png",
    label: "100% Women In Workforce",
  },
  {
    src: "/images/pads/quality.png",
    label: "Top Quality Manufacturing",
  },
  {
    src: "/images/pads/nature.png",
    label: "Nature Friendly 100% Biodegradable",
  },
] as const;

export default function PadsForFreedom() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  return (
    <>
      <section className="w-full">
        <Image
          src="/images/pads/ppf-donatemm.jpg"
          alt="Girls in school uniforms holding sanitary pads"
          width={500}
          height={619}
          priority
          className="h-auto w-full md:hidden"
        />
        <Image
          src="/images/pads/ppf-donated.jpg"
          alt="Help us empower disadvantaged girls to access their right to education and equality"
          width={1920}
          height={854}
          priority
          className="hidden h-auto w-full md:block"
        />
      </section>

      <section id="donate" className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <Image
              src="/images/pads/pads-for-freedom.png"
              alt="Pads for Freedom"
              width={700}
              height={103}
              className="h-auto w-full max-w-md"
            />
            <h1 className="mt-8 text-3xl font-medium leading-tight text-khushii-brown md:text-4xl">
              Help Girls Continue Their Education
            </h1>
            <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            <p className="mt-8 text-base leading-8 text-khushii-gray">
              For just INR 100 a month, you can help keep a girl in school. Give
              one time or monthly. How many girls would you like to support?
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {GIFTS.map((gift) => (
                <li
                  key={gift.girls}
                  className="border border-[#f0e2c4] bg-[#fbf7f0] px-4 py-5"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-khushii-gold-dark">
                    {gift.girls}
                  </p>
                  <p className="mt-2 text-2xl font-medium text-khushii-brown">
                    {gift.amount}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href={DONATE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-khushii-gold px-8 py-3 text-sm font-medium uppercase tracking-[0.14em] text-khushii-brown"
            >
              Donate now
            </Link>
            <p className="mt-6 text-sm leading-6 text-khushii-gray">
              KHUSHII bears no responsibility for donations made in cash, or
              transferred to any individual’s bank account, mobile number, or
              UPI.
            </p>
          </div>
          <Image
            src="/images/pads/side.jpg"
            alt="A student holding a sanitary pad"
            width={600}
            height={742}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="bg-[#fbf7f0] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-medium leading-snug text-khushii-brown md:text-3xl">
            <strong className="font-medium">23 million girls</strong> in India
            drop out of school every year when they start menstruating, and
            many of them end up facing acute health problems.
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-medium leading-snug text-khushii-brown md:text-3xl">
            Menstruation is one of the key reasons girls from disadvantaged
            communities drop out of school.
          </h2>
          <p className="mt-6 text-base leading-8 text-khushii-gray">
            Lack of sanitary pads, functional toilets, and low awareness of
            menstrual hygiene result in early school dropouts.
          </p>
          <Image
            src="/images/pads/12percent.png"
            alt="Only 12 percent"
            width={575}
            height={160}
            className="mt-8 h-auto w-full max-w-md"
          />
          <p className="mt-6 text-lg font-medium leading-8 text-khushii-brown">
            Only 12% of menstruating women have access to sanitary pads, largely
            because of their financial condition.
          </p>
          <p className="mt-6 text-base leading-8 text-khushii-gray">
            <strong className="font-medium text-khushii-brown">
              #PadsForFreedom
            </strong>{" "}
            is an initiative that allows disadvantaged girls to carry out a
            regular life, go to school, and be free of the taboos that girls
            face because of periods.
          </p>
        </div>
      </section>

      <section className="bg-[#ecd1be] px-5 py-14 text-center md:px-10 md:py-16">
        <Image
          src="/images/pads/support.png"
          alt=""
          width={130}
          height={130}
          className="mx-auto h-24 w-24 object-contain"
        />
        <h2 className="mt-4 text-3xl font-medium text-[#851619]">
          Your Support Is Crucial
        </h2>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-8 text-khushii-brown md:text-xl">
            Being an on-ground NGO we know that providing{" "}
            <strong className="font-medium">
              free sanitary pads helps keep girls in school
            </strong>
            .
          </p>
          <p className="mt-6 text-lg leading-8 text-khushii-gray md:text-xl">
            To reach more adolescent girls, we set up a sanitary pad
            manufacturing unit with support from the Embassy of Israel to
            produce low-cost, high-quality, environment-friendly sanitary pads.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {PILLARS.map((item) => (
            <li
              key={item.label}
              className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-8 text-center"
            >
              <Image
                src={item.src}
                alt=""
                width={130}
                height={130}
                className="mx-auto h-20 w-20 object-contain"
              />
              <p className="mt-4 text-lg font-medium leading-7 text-khushii-brown">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-8 text-khushii-brown md:text-xl">
          Help us manufacture and distribute{" "}
          <strong className="font-medium">
            free sanitary pads to 20,000 adolescent girls every month
          </strong>{" "}
          so that they do not drop out of school.
        </p>
        <div className="mt-8 text-center">
          <Link
            href={DONATE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#851619] px-8 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white"
          >
            Donate now
          </Link>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
