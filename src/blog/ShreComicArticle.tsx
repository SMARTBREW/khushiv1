import { POSTS } from "../Blog";
import Image from "../components/image";
import { ArticleEnd, ArticleTitle } from "./frame";

const PAGES = [
  "/images/blog/shre-comic-001.jpg",
  "/images/blog/shre-comic-002.jpg",
  "/images/blog/shre-comic-003.jpg",
  "/images/blog/shre-comic-004.jpg",
  "/images/blog/shre-comic-005.jpg",
  "/images/blog/shre-comic-006.jpg",
  "/images/blog/shre-comic-007.jpg",
];

export default function ShreComicArticle() {
  const newer = POSTS.find((post) => post.title.startsWith("A LOST GENERATION"));
  const older = POSTS.find((post) => post.title.startsWith("KHUSHII places women"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/image-000.jpg"
          alt="KHUSHII SH&RE comic strip"
          width={1499}
          height={2159}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="KHUSHII’s Sexual Health & Reproductive Education (SH&RE)"
            category="Comic Strip in Hindi"
            date="April 20, 2021"
          />
          <p>
            SH&RE (Sexual Health and Reproduction Education) is an initiative
            that seeks to build opportunities for training and awareness in
            sexual and reproductive healthcare for women from disadvantaged
            communities, particularly the anganwadi workers and adolescents from
            local communities.
          </p>
          <p>
            SH&RE is led by Noor Sawhney, student of Wellington College, UK,
            chosen over a pool of applicants in this year’s Open Call for Social
            And Rural Development Initiatives (SRDI) by KHUSHII. Noor is deeply
            passionate about leading initiatives towards gender equality in India
            and is an active member of the Wellington Politics Society and the
            Diversity and Inclusion Committee at her school. A student of
            Political Science, History, and Mathematics, Noor hopes to take an
            interdisciplinary and intersectional approach towards gender
            sensitization in India, which she is currently implementing through
            SH&RE.
          </p>
          {PAGES.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={711}
              height={1024}
              className="mx-auto h-auto w-full max-w-[711px]"
            />
          ))}
        </div>
      </article>

      <ArticleEnd
        title="KHUSHII’s Sexual Health & Reproductive Education (SH&RE)"
        older={older}
        newer={newer}
      />
    </>
  );
}
