import Image from "../image";
import Link from "../link";

import { WHO_WE_ARE } from "../../constants";
import Reveal from "../reveal";

export default function LeadershipPreview() {
  return (
    <section className="w-full bg-white">
      <div className="grid lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
            {WHO_WE_ARE.leadershipEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-medium text-khushii-brown md:text-4xl">
            {WHO_WE_ARE.leadershipTitle}
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-6 max-w-xl text-base leading-8 text-khushii-gray">
            {WHO_WE_ARE.leadershipBody}
          </p>
          <div className="mt-8">
            <Link
              href="/who-we-are/leadership"
              className="inline-block text-sm text-khushii-gold-dark"
            >
              VIEW ALL
            </Link>
          </div>
        </Reveal>

        <div className="relative min-h-[22rem] w-full md:min-h-[28rem] lg:min-h-[34rem]">
          <Image
            src="/images/about/1004997d-67b9-432d-944c-32342d83f3a2.jpg"
            alt="KHUSHII leadership"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
