import { WHO_WE_ARE } from "../../constants";
import Reveal from "../reveal";

export default function AboutIntro() {
  return (
    <section className="bg-white px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
            {WHO_WE_ARE.bannerTitle}
          </p>
          <h1 className="mt-3 text-3xl font-medium leading-tight text-khushii-brown md:text-4xl">
            {WHO_WE_ARE.title}
          </h1>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-8 text-base leading-8 text-khushii-gray">
            {WHO_WE_ARE.intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
