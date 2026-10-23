import Image from "./image";

import Reveal from "./reveal";

export default function Impact() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto mb-10 max-w-6xl md:mb-12">
        <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
          The Impact
        </h2>
        <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        <p className="mt-6 max-w-3xl text-base leading-8 text-khushii-gray md:text-lg">
          Students performed twice as better on test scores after
          KHUSHII&apos;s intervention
        </p>
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        <Reveal className="flex min-h-[14rem] items-center justify-center border border-[#f0e2c4] bg-[#fbf7f0] px-4 py-5 md:min-h-[18rem] lg:min-h-[22rem]">
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
      </div>
    </section>
  );
}
