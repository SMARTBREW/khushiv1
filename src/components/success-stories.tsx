import Image from "./image";
import Link from "./link";

import { SUCCESS_STORIES } from "../constants";

export default function SuccessStories() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
          <Link href="/what-we-do/success-stories" className="text-khushii-brown">
            SUCCESS STORIES
          </Link>
        </h2>
        <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        <p className="mt-4 text-base text-khushii-gray md:text-lg">
          Our children are the change we wish to see
        </p>
      </div>

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

      <div className="mx-auto mt-12 max-w-6xl px-5 md:px-8">
        <Link
          href="/what-we-do/success-stories"
          className="inline-block text-sm text-khushii-gold-dark"
        >
          VIEW ALL
        </Link>
      </div>
    </section>
  );
}
