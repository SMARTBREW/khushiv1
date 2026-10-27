import { useEffect } from "react";

import Image from "./components/image";
import Link from "./components/link";
import { DONATE_OPTIONS, WHO_WE_ARE_STATS } from "./constants";

const PAGE_TITLE =
  "Charity Donation Online in India | Donate Money Online | Khushii";

const NOTES = [
  "Funds are directly spent on educating an underprivileged child across India. The costs include actual school fees and 10% operational costs.",
  "You may cease donations at any time if so required. Our support team will help.",
  "All tax exemptions, receipts and documents will be provided. Email contact@khushii.org for assistance.",
] as const;

export default function Donation() {
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
          src="/images/contact/contacttopbanner.jpg"
          alt="A student smiling beside a brick wall"
          width={1920}
          height={518}
          priority
          className="h-auto w-full"
        />
        <div className="px-5 py-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-1/2 md:items-center md:px-14">
          <h1 className="text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-khushii-brown md:text-5xl md:tracking-[0.08em] md:text-white">
            Donate Online - Khushii NGO
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-khushii-brown">
            Your donation will further our vision of ensuring a happy and healthy
            childhood for India’s children. Donate to make a change.
          </p>
          <span className="mt-6 block h-1 w-16 bg-khushii-gold" />
        </div>

        <h2 className="mx-auto mt-10 max-w-6xl text-sm font-medium uppercase tracking-[0.16em] text-khushii-gold-dark">
          Indian donors
        </h2>
        <ul className="mx-auto mt-4 grid max-w-6xl gap-6 md:grid-cols-3">
          {DONATE_OPTIONS.map((option) => (
            <li key={option.href} className="border border-[#f0e2c4] bg-[#fbf7f0] p-6">
              <h3 className="text-xl font-medium text-khushii-brown">
                {option.label}
              </h3>
              <Link
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-khushii-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-khushii-brown"
              >
                Donate
              </Link>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-6 max-w-6xl border border-[#f0e2c4] bg-white p-6 md:p-8">
          <h2 className="text-xl font-medium text-khushii-brown">
            NRI / Foreign donors
          </h2>
          <p className="mt-3 text-base leading-8 text-khushii-gray">
            Write to{" "}
            <a
              href="mailto:donation@khushii.org"
              className="text-khushii-gold-dark underline"
            >
              donation@khushii.org
            </a>{" "}
            and the team will help you complete a gift from outside India.
          </p>
        </div>
      </section>

      <section className="bg-khushii-brown px-5 py-14 text-white md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-medium md:text-4xl">80G tax benefits</h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-6 text-lg leading-8">
            Avail 50% tax exemption under Section 80G (5) (IV) of the Income Tax
            Act, 1961.
          </p>
          <p className="mt-4 text-base leading-7 text-white/80">
            Permanent Account Number: AAATK6911A. 80G registration number
            AAATK6911AF20210, valid till March 2026 (AY 2022-23 to AY 2026-27).
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            Donors, please note
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {NOTES.map((note) => (
              <li
                key={note}
                className="border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-khushii-gray"
              >
                {note}
              </li>
            ))}
          </ul>
          <div className="mt-10 border border-[#f0e2c4] p-6 md:p-8">
            <h3 className="text-xl font-medium text-khushii-brown">
              Cheque, DD, or NEFT
            </h3>
            <p className="mt-4 text-base leading-8 text-khushii-gray">
              Khushii Kinship For Humanitarian Social And Holistic Intervention
              (KHUSHII)
              <br />
              Bank: Axis Bank
              <br />
              A/C No: 915010002219031
              <br />
              IFSC Code: UTIB0000119
              <br />
              Branch: Vasant Kunj, Delhi 110070
            </p>
            <p className="mt-4 text-sm leading-6 text-khushii-gray">
              KHUSHII bears no responsibility for donations made in cash, or
              transferred to any individual’s bank account, mobile number, or
              UPI. An 80G certificate is issued on a donation of Rs 500 or above.
              Add your PAN if you wish to receive it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto mb-12 max-w-6xl">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            The KHUSHII impact
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>
        <ul className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {WHO_WE_ARE_STATS.map((stat) => (
            <li
              key={stat.label}
              className="min-w-0 border border-[#f0e2c4] bg-[#fbf7f0] px-4 py-6"
            >
              <Image
                src={stat.icon}
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
              <p className="mt-4 break-words text-2xl font-medium text-khushii-gold">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase leading-5 tracking-[0.08em] text-khushii-gray">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
