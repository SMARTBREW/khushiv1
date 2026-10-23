import { useEffect, useState } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import Link from "./components/link";

const PAGE_TITLE =
  "Careers in NGO | Best NGO in India for Child | Khushii";

const JOBS = [
  {
    title: "Manager-Corporate Partnerships",
    place: "Delhi & Mumbai",
    href: "https://khushii.org/wp-content/themes/khushii/pdf/carrer/JD-Manager-CP-Delhi&Mumbai.pdf",
  },
] as const;

const LIFE = [
  "/images/careers/banner-1.jpg",
  "/images/careers/banner-2.jpg",
  "/images/careers/banner-3.jpg",
  "/images/careers/banner-4.jpg",
  "/images/careers/banner-5.jpg",
  "/images/careers/banner-6.jpg",
] as const;

export default function Careers() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % LIFE.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (next: number) => {
    setSlide((next + LIFE.length) % LIFE.length);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/careers/careerbanner.jpg"
          alt="KHUSHII colleagues standing together"
          width={1920}
          height={519}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-1/2 items-center bg-gradient-to-r from-black/40 to-transparent px-6 md:px-14">
          <h1 className="text-3xl font-bold uppercase tracking-[0.12em] text-white md:text-5xl">
            Join our team
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
            Start your career with KHUSHII NGO
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-6 text-lg leading-8 text-khushii-gray">
            KHUSHII offers significant opportunities for personal growth and
            social impact. We are an equal opportunity employer and offer an
            environment that is inclusive, respectful and focused on
            collaboration and harmony.
          </p>
        </div>
      </section>

      <section id="Vacancies" className="bg-white px-5 pb-14 md:px-10">
        <div className="mx-auto max-w-4xl border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-8 md:px-10">
          <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
            Vacancies
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-5 text-lg leading-8 text-khushii-gray">
            We are always on the lookout for talented and committed
            professionals. Please drop us a line at{" "}
            <a href="mailto:hr@khushii.org" className="text-khushii-gold-dark">
              hr@khushii.org
            </a>{" "}
            in case you are seeking a career with us.
          </p>
        </div>
      </section>

      <section id="pdfs" className="bg-white px-5 pb-14 md:px-10">
        <ul className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {JOBS.map((job) => (
            <li key={job.href} className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-7">
              <h2 className="text-xl font-medium text-khushii-brown">
                {job.title}
              </h2>
              <p className="mt-2 text-sm text-khushii-gray">
                {job.place}
              </p>
              <Link
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-khushii-gold-dark"
              >
                <Image
                  src="/images/careers/pdf-icon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
                Download
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white px-5 pb-14 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="flex min-h-64 flex-col justify-center border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-12 text-khushii-gray">
            <h2 className="text-2xl font-medium text-khushii-brown">Head Office</h2>
            <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            <p className="mt-4 leading-8">
              C-120, 3rd Floor, Okhla
              <br />
              Industrial Area Phase – 1,
              <br />
              Behind Crown Plaza, New
              <br />
              Delhi – 110020
            </p>
          </div>
          <div className="flex min-h-64 flex-col justify-center border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-12 text-khushii-gray">
            <h2 className="text-2xl font-medium text-khushii-brown">Programmes</h2>
            <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            <p className="mt-4 font-medium">Counselors</p>
            <p className="mt-2 leading-8">
              New Delhi (Sangam Vihar)
              <br />
              Hyderabad (Borabanda)
            </p>
          </div>
        </div>
      </section>

      <section id="lifekhushii" className="bg-white px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-5xl">
            Life @ KHUSHII
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>
        <div className="relative mx-auto mt-10 max-w-5xl">
          <Image
            src={LIFE[slide]}
            alt="Life at KHUSHII"
            width={1440}
            height={800}
            className="h-auto w-full"
          />
          <button
            type="button"
            aria-label="Previous"
            onClick={() => showSlide(slide - 1)}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#f0e2c4] bg-[#fbf7f0] text-lg text-khushii-brown"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => showSlide(slide + 1)}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#f0e2c4] bg-[#fbf7f0] text-lg text-khushii-brown"
          >
            ›
          </button>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
