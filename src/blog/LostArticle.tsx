import { POSTS } from "../Blog";
import Image from "../components/image";
import { ArticleEnd, ArticleTitle } from "./frame";

function Quote({
  icon,
  children,
  source,
}: {
  icon: string;
  children: string;
  source: string;
}) {
  return (
    <div className="flex items-center gap-4 text-left">
      <Image
        src={icon}
        alt=""
        width={70}
        height={70}
        className="h-[4.375rem] w-[4.375rem] shrink-0"
      />
      <p className="text-2xl font-semibold leading-8">
        {children}
        <br />
        <span className="text-lg font-medium italic">{source}</span>
      </p>
    </div>
  );
}

export default function LostArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-my-moment-of-joy",
    "/blog/yuvashree",
    "/blog/dignity-kits",
    "/blog/education-in-covid-times",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) =>
    post.title.startsWith("Sexual Health and Reproductive"),
  );
  const older = POSTS.find((post) => post.title.startsWith("KHUSHII’s Sexual Health"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/lost-generation-banner.jpg"
          alt="A lost generation and what we must do"
          width={1343}
          height={627}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="A LOST GENERATION & WHAT WE MUST DO"
            category="Shikshaantra Plus"
            date="July 26, 2021"
          />
          <p>
            The COVID-19 pandemic has hit different strata of society in
            distinctively catastrophic ways. Impaired by disruption of education
            in their formative years, the young ones are the most affected by
            catastrophic impacts affecting an entire generation.
          </p>
          <div className="border-l-4 border-khushii-gold bg-[#fbf7f0] px-5 py-5 leading-8 text-khushii-brown">
            <span className="font-bold">In mid-April 2020</span>, according to
            UNESCO, <span className="font-bold">192 countries</span> abruptly{" "}
            <span className="font-bold">shut schools across the globe</span> to
            contain the <span className="font-bold">spread of COVID-19</span>.
            The required critical step to curb the spread of the virus has cast
            a dark shadow over the future of millions of children across the
            globe.
          </div>
          <Quote icon="/images/blog/no-remotes.png" source="Source - UNICEF, 2020">
            “463 million children were unable to access remote learning resources during lockdown”
          </Quote>
          <p>
            While educational institutions and schools have shifted to the
            online mode, it has been difficult for them to engage students from
            the disadvantageous segment of society. Lack of access to resources
            is accelerating inequalities and fueling a shadow pandemic.
          </p>
          <Quote icon="/images/blog/regular.png" source="Source - UNICEF, 2020">
            “Previous school shutdowns demonstrate that children who are out of school for extended periods, especially girls are less likely to return to school”
          </Quote>
          <p>
            Children living in the shadow of COVID-19 because of school closures
            face a heightened risk of domestic violence and psychosocial issues,
            sexual and gender-based violence, child marriage and child labour.
          </p>
          <Quote icon="/images/blog/cm.png" source="Source - World Bank, 2020">
            COVID-19 has resulted in an increased number of child marriages and children quitting school to join the labour market
          </Quote>
          <div className="border-l-4 border-khushii-gold bg-[#fbf7f0] px-5 py-5 leading-8 text-khushii-brown">
            <span className="font-bold">
              A world bank report predicts a loss of USD 440 billion in future
              earnings
            </span>{" "}
            due to the loss of learning opportunities among millions of children
            in India.
            <br />
            <br />
            Following the social distancing and safety guidelines, India had to
            close 1.5 million schools, affecting an estimated 286 million
            children from pre-primary to secondary grades. The number adds to
            the 6 million girls and boys not attending school since pre
            lockdown.
          </div>
          <p>
            There is an urgent need to reimagine education that is effective,
            equitable and resilient.
          </p>
          <p>
            KHUSHII, a national level NGO, has been working across the country
            towards providing unhindered education to its student beneficiaries
            through effective and inclusive remote learning systems. In its
            adopted communities, KHUSHII is working tirelessly to minimise the
            loss of learning due to COVID-19 by ensuring that disadvantaged
            children are back to school and continue quality learning.
          </p>
          <div className="border-l-4 border-khushii-gold bg-[#fbf7f0] px-5 py-5 font-bold leading-8 text-khushii-brown">
            Today, 45,000 students in 24 Govt. schools across ten states in
            India are part of the program.
          </div>
          <p>
            Among the poorest households in India, only 8.9% have access to the
            Internet, which is essential for remote learning. To solve the
            problem for the underprivileged communities, KHUSHII has, following
            COVID safety protocols, established{" "}
            <strong>Adapt Impact Community Learning Centres</strong>. These
            centres are digitally enabled safe learning spaces within the
            community, equipped with iPads and computers powered by high-speed
            Internet.
          </p>
          <p>
            Adapt Impact Centres are already making a difference amongst our
            adopted communities in Delhi and Bengaluru. Students from grades 2-8
            from the disadvantaged and economically weaker sections of society
            are able to continue education despite the insurmountable
            challenges.
          </p>
          <div className="border-l-4 border-khushii-gold bg-[#fbf7f0] px-5 py-5 font-bold leading-8 text-khushii-brown">
            By being physically present at the COVID safe KHUSHII Adapt Impact
            Community Learning Centre, children from disadvantaged communities
            are able to continue their education and participate in learning.
          </div>
          <p>
            Apart from education, as part of KHUSHII’s holistic approach, mental
            wellbeing counselling is also provided at these centres to the
            students. Currently, KHUSHII has two operational centres and are
            working towards scaling the reach.
            <br />
            <br />
            Disruption in school education has set back global development
            goals. Combined with the overhanging recession, this is one of the
            worst shocks to education systems. The economic crises globally will
            further augment poverty and lead to a human development crisis that
            will continue long after the pandemic.
            <br />
            <br />
            The time to act is now! to reimagine and rebuild education systems
            and ensure that all students can access education anywhere and
            anytime.
          </p>
          <p className="text-2xl font-bold">Let’s build back better!</p>
        </div>
      </article>

      <ArticleEnd
        title="A LOST GENERATION & WHAT WE MUST DO"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}
