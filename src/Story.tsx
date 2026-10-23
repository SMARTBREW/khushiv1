import { useEffect } from "react";
import { useParams } from "react-router-dom";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import Link from "./components/link";
import { STORY_CARDS } from "./constants";

export default function Story() {
  const { slug } = useParams();
  const story = STORY_CARDS.find((item) => item.href === `/stories/${slug}`);
  const article = story && "article" in story ? story.article : null;

  useEffect(() => {
    document.title = article
      ? `${article.title} | Khushii`
      : "Khushii | NGO for Children | Child Welfare NGO in India";
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, [article]);

  if (!story || !article) {
    return (
      <section className="bg-white px-5 py-20">
        <p className="text-lg text-khushii-gray">This story is not available.</p>
        <Link
          href="/what-we-do/success-stories"
          className="mt-6 inline-block text-sm text-khushii-gold-dark"
        >
          Back to stories
        </Link>
      </section>
    );
  }

  return (
    <>
      <article className="bg-white px-5 py-14 md:px-10 md:py-16">
        <Image
          src={story.image}
          alt=""
          width={story.width}
          height={story.height}
          priority
          className="mx-auto h-auto w-full max-w-2xl"
        />
        <div className="mx-auto mt-8 max-w-5xl">
          <h1 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            {article.title}
          </h1>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <div className="mt-8 space-y-5 text-base leading-8 text-[#5f5f5f]">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <DonateBanner />
    </>
  );
}
