import { POSTS } from "../Blog";
import Image from "../components/image";
import { ArticleEnd, ArticleTitle } from "./frame";

export default function SavitriArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-my-moment-of-joy",
    "/blog/yuvashree",
    "/blog/dignity-kits",
    "/blog/education-in-covid-times",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.title.startsWith("KHUSHII places women"));
  const older = POSTS.find((post) => post.title.startsWith("Zero-tolerance"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/blog-image-1.jpg"
          alt="Savitri"
          width={940}
          height={788}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="KHUSHII brings a glimmer of hope to Savitri’s life"
            category="Shikshaantra Plus"
            date="November 28, 2020"
          />
          <p>
            In her short life of 29 years, Savitri has seen enough tragedy and
            suffering to break the bravest of persons. She lost her father to
            cancer when she was just ten. At barely 16, an age where she should
            have been in school, her family got her married. She had three
            children. But even there, life found a way to be unkind. She lost
            her husband in 2015, leaving her and the three children alone, with
            no kith or kin to take care of them.
          </p>
          <p>
            As if that were not enough, she had to deal with another
            back-breaking blow. Her 6-year-old daughter was brutally abused. She
            was severely injured physically and also started suffering from the
            post-traumatic disorder.
          </p>
          <p>
            It is at this point of despair that Savitri came in touch with
            KHUSHII. With the intervention and support provided by KHUSHII, the
            child is showing signs of recovery and improvement in behavior and
            response.
          </p>
          <p>
            KHUSHII has also provided moral and financial support to Savitri.
            KHUSHII employed her as a caretaker in KHUSHII’s Shikshaantra School
            at Devil. Savitri shared a desire to educate herself and with
            KHUSHII’s help, she got admitted to the National Institute of Open
            Schooling. Since then her confidence has grown and she intends to
            continue her studies so that she can give a better life to her
            family.
          </p>
          <p>
            Thanks to generous donors like you, KHUSHII has brought a semblance
            of normalcy to Savitri’s life. Yet, there are many more like her
            from vulnerable families who need our help.
          </p>
          <p>
            This International Women’s Day, celebrate meaningfully by committing
            your support for the benefit of more women like Savitri.
          </p>
        </div>
      </article>

      <ArticleEnd
        title="KHUSHII brings a glimmer of hope to Savitri’s life"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}
