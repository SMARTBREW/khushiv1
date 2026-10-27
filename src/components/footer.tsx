import Image from "./image";
import Link from "./link";

import {
  FOOTER_QUICK_LINKS,
  FOOTER_SECONDARY_LINKS,
  GET_INVOLVED,
  SITE,
  SOCIAL_LINKS,
} from "../constants";

const EXPLORE_LINKS = [...FOOTER_QUICK_LINKS, ...FOOTER_SECONDARY_LINKS];

export default function Footer() {
  return (
    <footer>
      <div className="border-b border-[#eee] bg-white px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-between rounded-2xl bg-khushii-involved px-6 py-7 text-white shadow-sm">
            <h2 className="text-lg font-medium tracking-wide md:text-xl">
              Get involved
            </h2>
            <Image
              src="/images/footer/arrow-donate.png"
              alt=""
              width={30}
              height={30}
              className="h-7 w-7 invert"
            />
          </div>
          {GET_INVOLVED.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center rounded-2xl border border-[#ececec] bg-white px-5 py-7 text-center text-sm font-medium tracking-wide text-khushii-gray shadow-sm transition duration-300 hover:-translate-y-1 hover:border-khushii-gold hover:shadow-md md:text-base"
            >
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-khushii-gold">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#717171] px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/main-logo-white.png"
                alt="KHUSHII logo"
                width={120}
                height={104}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Image
                src="/images/badges/GSN-9568Valid-till-APR-2025.png"
                alt="GuideStar India validation badge"
                width={72}
                height={72}
                className="h-16 w-auto"
              />
              <Image
                src="/images/badges/Great-place-to-work.jpg"
                alt="Great Place to Work badge"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
              <Image
                src="/images/badges/bse-logo.png"
                alt="BSE Social Stock Exchange logo"
                width={140}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-3 text-sm font-bold text-white">BSE SSE Registered</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm uppercase text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>
            <a
              href={SITE.phoneHref}
              className="mt-5 flex items-start gap-3 text-sm text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                <Image
                  src="/images/footer/phone.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4 w-4"
                />
              </span>
              <span>
                Call us now
                <span className="mt-1 block">{SITE.phone}</span>
              </span>
            </a>
            <a
              href={SITE.emailHref}
              className="mt-5 flex items-start gap-3 text-sm text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                <Image
                  src="/images/footer/mail.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4 w-4"
                />
              </span>
              <span>
                Send an email
                <span className="mt-1 block">{SITE.email}</span>
              </span>
            </a>
            <ul className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#5f5f5f] px-5 py-2">
        <p className="text-center text-sm font-light leading-7 text-white">
          Copyright © {new Date().getFullYear()}, All Rights Reserved |{" "}
          <a
            href="https://khushii.org/"
            className="text-white hover:underline"
          >
            Digital Impressions
          </a>
        </p>
      </div>
    </footer>
  );
}
