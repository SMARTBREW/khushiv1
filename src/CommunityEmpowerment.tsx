import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import Link from "./components/link";
import { COMMUNITY, COMMUNITY_PROGRAMMES } from "./constants";

const PAGE_TITLE =
  "Community Development NGO | Social Welfare Society in Delhi | Khushii";

export default function CommunityEmpowerment() {
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
          src="/images/community/community-top-image.jpg"
          alt="Women learning to write on small chalkboards"
          width={1900}
          height={897}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-[46%] items-center px-6 md:px-14">
          <div>
            <p className="text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {COMMUNITY.stat}
            </p>
            <p className="mt-3 text-sm tracking-[0.14em] text-white md:text-base">
              {COMMUNITY.statCredit}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            {COMMUNITY.title}
          </h1>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/community/sewing.jpg"
            alt="A woman smiling beside a sewing machine"
            width={700}
            height={500}
            className="h-auto min-w-0 w-full rounded-2xl"
          />
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
            {COMMUNITY.poverty}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="min-w-0 rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8 lg:order-1">
            {COMMUNITY.skills}
          </p>
          <Image
            src="/images/community/self-help.jpg"
            alt="Students in a beauty-skills class watching a facial demonstration"
            width={1106}
            height={905}
            className="h-auto min-w-0 w-full rounded-2xl lg:order-2"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            ACCOMPLISHMENTS
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-8 text-base leading-8 text-khushii-gray">
            {COMMUNITY.accomplishments}
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-2xl">
          <Image
            src="/images/community/community-tree.png"
            alt="Community empowerment impact graphic"
            width={1900}
            height={2101}
            className="mx-auto block h-auto w-full"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            OUR PROGRAMMES
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {COMMUNITY_PROGRAMMES.map((programme) => (
            <li
              key={programme.href}
              className="min-w-0 overflow-hidden border border-[#f0e2c4] bg-[#fbf7f0]"
            >
              <Image
                src={programme.image}
                alt={programme.alt}
                width={1106}
                height={905}
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

      <DonateBanner />
    </>
  );
}
