import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import Link from "./components/link";
import Reveal, { DrawLine } from "./components/reveal";
import {
  EDUCATION,
  EDUCATION_IMPROVEMENTS,
  EDUCATION_PROGRAMMES,
} from "./constants";

const PAGE_TITLE =
  "Sponsor A Child For Education | Child Education NGO in Delhi | Khushii";

function EducationGraphic() {
  return (
    <div className="mx-auto mt-12 w-full max-w-3xl">
      <Image
        src="/images/education/khushi-education%20copy.svg"
        alt="KHUSHII education from 2003 to today: 94,199 students outreached, 30 percent more parental participation, and 5,361 teachers trained"
        width={1898}
        height={1088}
        className="mx-auto block h-auto w-full"
        style={{ aspectRatio: "1898 / 1088" }}
      />
    </div>
  );
}

export default function Education() {
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
          src="/images/education/education-top-image.jpg"
          alt="Schoolgirls in a classroom, the child in front smiling at the camera"
          width={1900}
          height={897}
          priority
          className="h-auto w-full"
        />
        <div className="px-5 py-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-[46%] md:items-center md:px-14">
          <div>
            <p className="text-xl font-bold leading-tight text-khushii-brown md:text-4xl md:text-white lg:text-5xl">
              {EDUCATION.unicef}
            </p>
            <p className="mt-3 text-sm tracking-[0.14em] text-khushii-gray md:text-base md:text-white">
              {EDUCATION.unicefCredit}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <Reveal className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
            {EDUCATION.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-medium leading-tight text-khushii-brown md:text-4xl">
            {EDUCATION.title}
          </h1>
          <DrawLine className="mt-4 block h-1 w-16 origin-left rounded-full bg-khushii-gold" />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/education/classroom-students.jpg"
            alt="Boys seated at desks in a KHUSHII classroom"
            width={1050}
            height={688}
            className="h-auto min-w-0 w-full rounded-2xl"
          />
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {EDUCATION.dropouts}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8 lg:order-1">
            {EDUCATION.remedial}
          </p>
          <Image
            src="/images/education/classroom-lesson.jpg"
            alt="A teacher leading a naming-words lesson"
            width={1050}
            height={688}
            className="h-auto min-w-0 w-full rounded-2xl lg:order-2"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            ACCOMPLISHMENTS
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-8 text-[1.0625rem] leading-[1.875rem] tracking-wide text-khushii-gray">
            {EDUCATION.accomplishments}
          </p>
          <h2 className="mt-16 text-3xl font-medium text-khushii-brown md:text-4xl">
            KHUSHII IN EDUCATION
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-khushii-gray">
            2003 - Today
          </p>
        </div>

        <EducationGraphic />
      </section>

      <section className="bg-white px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            OUR PROGRAMMES
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {EDUCATION_PROGRAMMES.map((programme) => (
            <li
              key={programme.href}
              className="min-w-0 overflow-hidden border border-[#f0e2c4] bg-[#fbf7f0]"
            >
              <Image
                src={programme.image}
                alt={programme.alt}
                width={800}
                height={640}
                className="h-auto w-full"
              />
              <div className="px-6 py-8 md:px-8">
                <h3 className="text-2xl font-medium text-khushii-brown">
                  {programme.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-khushii-gold-dark">
                  {programme.subtitle}
                </p>
                <p className="mt-4 text-base leading-7 text-khushii-gray">
                  {programme.body}
                </p>
                <Link
                  href={programme.href}
                  className="mt-6 inline-block text-sm text-khushii-gold-dark"
                >
                  KNOW MORE
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            INFRASTRUCTURAL IMPROVEMENTS
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-khushii-gray">
            2019-20
          </p>
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {EDUCATION_IMPROVEMENTS.map((item) => (
            <li key={item.value} className="min-w-0 border border-[#f0e2c4] bg-[#fbf7f0] px-4 py-6 md:px-6 md:py-7">
              <Image
                src={item.icon}
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
              <h3 className="mt-4 break-words text-lg font-medium leading-tight tracking-wide text-khushii-gold md:text-xl">
                {item.value}
              </h3>
              <p className="mt-2 text-sm leading-6 text-khushii-gray">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <DonateBanner />

      <section className="bg-white px-5 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.16em] text-khushii-gray">
            Online Education Partner
          </p>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <Image
            src="/images/education/just-learn.png"
            alt="Just Learn"
            width={120}
            height={120}
            className="mt-4 h-24 w-24 object-contain"
          />
        </div>
      </section>
    </>
  );
}
