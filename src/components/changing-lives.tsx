import Link from "./link";

import Reveal from "./reveal";

export default function ChangingLives() {
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
            CHANGING LIVES!
          </h3>
          <div className="mt-3 max-w-md">
            <h1 className="text-4xl font-medium leading-tight text-khushii-brown md:text-5xl">
              <Link
                href="/what-we-do/success-stories"
                className="text-khushii-brown"
              >
                THE KHUSHII STORY
              </Link>
            </h1>
            <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          </div>
          <p className="mt-4 max-w-md text-lg leading-7 text-khushii-gray md:text-xl">
            If there is a vaccine against poverty, it’s education
          </p>
        </Reveal>

        <div
          aria-hidden="true"
          className="hidden h-full min-h-[12rem] w-px bg-khushii-gold lg:block"
        />

        <Reveal delay={0.1}>
          <p className="border-l-4 border-khushii-gold pl-5 text-base leading-8 text-khushii-gray lg:border-l-0 lg:pl-0">
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
