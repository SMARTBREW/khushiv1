import Link from "next/link";

import Reveal, { DrawLine } from "./reveal";

export default function ChangingLives() {
  return (
    <section className="bg-white px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.1fr)] lg:gap-10">
        <Reveal>
          <h3 className="text-[1.125rem] font-light leading-8 tracking-[0.2em] text-[#9d9c9c]">
            CHANGING LIVES!
          </h3>
          <div className="mt-2 max-w-md">
            <h1 className="text-4xl font-bold leading-tight tracking-[0.04em] text-khushii-gray md:text-5xl">
              <Link
                href="/what-we-do/success-stories"
                className="text-khushii-gray"
              >
                THE KHUSHII STORY
              </Link>
            </h1>
            <DrawLine className="mt-3 block h-px w-24 origin-left bg-khushii-gold" />
          </div>
          <p className="mt-4 max-w-md text-lg leading-7 tracking-wide text-khushii-gray md:text-xl">
            If there is a vaccine against poverty, it’s education
          </p>
        </Reveal>

        <div
          aria-hidden="true"
          className="hidden h-full min-h-[12rem] w-px bg-khushii-gold lg:block"
        />

        <Reveal delay={0.1}>
          <p className="border-l-2 border-khushii-gold pl-5 text-[1.0625rem] font-normal leading-[1.875rem] tracking-wide text-[#5f5f5f] lg:border-l-0 lg:pl-0">
            <strong className="font-bold">KHUSHII</strong> was set up by
            cricketing icon, <strong className="font-bold">Kapil Dev</strong>,
            in 2003, to help children transform their lives through education.
            That’s why KHUSHII works across at a national level to ensure that{" "}
            <strong className="font-bold">children</strong> complete their{" "}
            <strong className="font-bold">schooling</strong>. Additionally, we
            help them stay <strong className="font-bold">healthy</strong> and
            empower their families{" "}
            <strong className="font-bold">economically</strong>, so children can
            stay focused on learning.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
