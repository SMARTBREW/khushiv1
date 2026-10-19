import Image from "next/image";

import Reveal from "./reveal";

export default function Impact() {
  return (
    <section className="w-full bg-gray-100 px-4 py-10 md:px-8 md:py-[3.125rem]">
      <Reveal>
        <p className="mx-auto mb-6 w-full max-w-3xl text-center text-base leading-[1.875rem] text-[#989898] md:mb-8 md:text-lg">
          Students performed twice as better on test scores after
          KHUSHII&apos;s intervention
        </p>
      </Reveal>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch">
        <Reveal className="flex min-h-[14rem] items-center justify-center bg-white px-4 py-5 md:min-h-[18rem] lg:min-h-[22rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full max-h-[20rem] w-full object-contain"
          >
            <source src="/images/impact/graph.mp4" type="video/mp4" />
          </video>
        </Reveal>
        <Reveal className="flex min-h-[14rem] items-center bg-[#818286] md:min-h-[18rem] lg:min-h-[22rem]">
          <Image
            src="/images/impact/n-imapct.jpg"
            alt="KHUSHII impact numbers"
            width={1200}
            height={800}
            className="h-full max-h-[22rem] w-full object-cover lg:max-h-none"
            sizes="(min-width: 1024px) 36rem, 100vw"
          />
        </Reveal>
        <p className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-khushii-gold px-5 py-2 text-sm font-medium tracking-[0.12em] text-white lg:block">
          The Impact
        </p>
      </div>
    </section>
  );
}
