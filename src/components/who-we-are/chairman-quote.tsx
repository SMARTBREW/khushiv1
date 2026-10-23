import Image from "../image";

import { WHO_WE_ARE } from "../../constants";

export default function ChairmanQuote() {
  return (
    <section className="w-full bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[22rem] w-full md:h-[28rem] lg:h-[34rem]">
          <Image
            src="/images/about/kapil-chaitman.jpg"
            alt="Kapil Dev, Chairman of KHUSHII, with students"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#fbf7f0] px-8 py-14 md:px-16 lg:py-20">
          <h2 className="text-3xl font-medium uppercase text-khushii-brown md:text-4xl">
            KAPIL DEV
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-3 text-sm tracking-[0.08em] text-khushii-gold-dark">
            {WHO_WE_ARE.chairmanCredit}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-khushii-gray md:text-lg">
            {WHO_WE_ARE.chairmanQuote}
          </p>
        </div>
      </div>
    </section>
  );
}
