import { POSTS } from "../Blog";
import Image from "../components/image";
import Link from "../components/link";
import { ArticleEnd, ArticleTitle } from "./frame";

const PHOTOS = [
  { src: "/images/blog/bully-1.png", width: 464, height: 295 },
  { src: "/images/blog/bully-2.png", width: 408, height: 304 },
  { src: "/images/blog/bully-3.png", width: 401, height: 276 },
  { src: "/images/blog/bully-4.png", width: 449, height: 302 },
] as const;

export default function BullyingArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-my-moment-of-joy",
    "/blog/yuvashree",
    "/blog/dignity-kits",
    "/blog/education-in-covid-times",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.href === "/blog/savitri");
  const older = POSTS.find((post) => post.title.startsWith("Skill building of Youth"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/blog-2.jpg"
          alt="Standing against bullying in schools"
          width={940}
          height={470}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="Zero-tolerance for bullying KHUSHII standing against bullying in schools"
            category="Shikshaantra Plus"
            date="November 11, 2020"
          />
          <blockquote className="italic">
            Just like any regular routine, the counsellor Ms. Deepika Singh was
            keen on selecting an interesting topic for the students in
            intervention school in Mumbai. With her past two years of experience,
            many cases of bullying were reported to her. Initially she would hear
            out the cases of the victims in individual sessions. However, this
            did not yield much success. Then it struck her to address this
            concern on a bigger platform.
          </blockquote>
          <p>Let’s learn little about it…</p>
          <p>
            Bullying is an aggressive behaviour affecting individuals not only in
            their adolescent years, but also well into their adulthood. Bullying
            manifests in various forms in school context such as verbal, social,
            physical or sexual. This can lead to psychological trauma.{" "}
            <em>Bullying behaviour</em> is recognized by an imbalance of power,
            repetitiveness and the intention of bullying to harm the victim.
            Keeping this in mind, sessions were planned carefully keeping in view
            the age of the child and the learning capacity.
          </p>
          <p>
            A scar on the child’s mind and psyche can be very difficult to heal
            as it has a long-term effect on the personality. Some carry bitter
            and painful memories of such childhood scars right till the end of
            their lives.
          </p>
          <p>
            The <strong>SMHEAP</strong> - {" "}
            <strong>
              समीप (Shikshantraa Plus Mental Health Education & Awareness
              Programme)
            </strong>{" "}
            intervention of KHUSHII under the{" "}
            <Link
              href="/what-we-do/education/shikshaantra-plus"
              className="font-medium text-[#0000ff]"
            >
              Shikshaantra Plus programme
            </Link>{" "}
            works to promote the physical, psychological and social development
            of children in Government schools. It focuses on holistic development
            of children including the challenges of academic performance and
            mental wellbeing. The <strong>SMHEAP programme</strong> approaches
            the issue through modules designed to deal and eliminate bullying in
            school. These modules, explains the manifestation of such behaviour,
            through pictures and illustrations. Children are engaged to recognize
            different acts of bullying and through discussions their minds are
            opened about its occurrence in their own schools.
          </p>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {PHOTOS.map((photo) => (
              <li key={photo.src} className="flex justify-center">
                <Image
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  className="h-auto w-full"
                  style={{ maxWidth: photo.width }}
                />
              </li>
            ))}
          </ul>
        </div>
      </article>

      <ArticleEnd
        title="Zero-tolerance for bullying KHUSHII standing against bullying in schools"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}
