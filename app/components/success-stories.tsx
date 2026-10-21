import Image from "next/image";
import Link from "next/link";

import { SUCCESS_STORIES } from "../constants";
import Reveal from "./reveal";

export default function SuccessStories() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Reveal className="mx-auto max-w-6xl px-5 pb-12 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-[0.06em] text-khushii-gray md:text-5xl">
          <Link href="/what-we-do/success-stories" className="text-khushii-gray">
            SUCCESS STORIES
          </Link>
        </h2>
        <p className="mt-3 text-base tracking-wide text-khushii-gray md:text-xl">
          Our children are the change we wish to see
        </p>
      </Reveal>

      <div className="grid w-full grid-cols-1 md:grid-cols-3">
        {SUCCESS_STORIES.map((story) => (
          <article
            key={story.title}
            className="group relative h-72 overflow-hidden md:h-[28rem]"
          >
            <Image
              src={story.image}
              alt={story.title}
              fill
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover grayscale transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 top-full bg-black/50 transition-[top] duration-500 group-hover:top-0">
              <div className="absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 text-center">
                <Link href={story.href} className="mb-5 inline-block">
                  <Image
                    src="/images/stories/stories-arrows.png"
                    alt=""
                    width={55}
                    height={55}
                    className="mx-auto h-auto w-12 md:w-14"
                  />
                </Link>
                <p className="text-base font-light uppercase leading-7 text-white md:text-[1.375rem] md:leading-8">
                  {story.title}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/what-we-do/success-stories"
          className="inline-block rounded-[1.875rem] bg-khushii-gold px-[2.8125rem] py-[0.9375rem] text-[1.1875rem] leading-8 tracking-[0.2em] text-white transition-transform hover:translate-x-1 hover:bg-khushii-gray"
        >
          VIEW ALL
        </Link>
      </div>
    </section>
  );
}
