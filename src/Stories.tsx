import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import Link from "./components/link";
import { STORY_CARDS } from "./constants";

const PAGE_TITLE =
  "Our Success Stories | Best NGO for Child Development | Khushii";

export default function Stories() {
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
          src="/images/stories/storiesbanner.jpg"
          alt="A smiling student with classmates blurred behind her"
          width={1920}
          height={519}
          priority
          className="h-auto w-full"
        />
        <div className="px-5 py-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-1/2 md:items-center md:px-14">
          <h1 className="text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-khushii-brown md:text-5xl md:tracking-[0.08em] md:text-white">
            Stories of Change
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STORY_CARDS.map((story) => (
            <li key={story.href} className="min-w-0">
              <article className="h-full overflow-hidden border border-[#f0e2c4] bg-[#fbf7f0]">
                <Link href={story.href} className="block h-full">
                  <Image
                    src={story.image}
                    alt=""
                    width={story.width}
                    height={story.height}
                    className="h-auto w-full"
                  />
                  <div className="px-6 py-7 text-left">
                    <span className="block h-1 w-16 bg-khushii-gold" />
                    <h2 className="mt-4 text-xl font-medium leading-7 text-khushii-brown">
                      {story.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-khushii-gray">
                      {story.excerpt}
                    </p>
                    <p className="mt-4 text-sm text-khushii-gold-dark">Read More</p>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <DonateBanner />
    </>
  );
}
