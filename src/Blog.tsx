import { useEffect } from "react";

import Image from "./components/image";
import Link from "./components/link";

const PAGE_TITLE =
  "Khushii Blog | Non-Profit Organization | India's Most Trusted NGO";

export const POSTS = [
  {
    image: "/images/blog/BannerManoshakti.png",
    width: 2000,
    height: 1414,
    title: "ManoShakti: Early school-intervention initiative",
    category: "Education",
    date: "August 31, 2024",
    href: "/blog/manoshakti-early-school-intervention-initiative",
    excerpt:
      "In today’s fast-paced, technology-driven world, mental health awareness has become more critical than ever, especially for the most vulnerable members of society - children and adolescents. In India, mental health is still shrouded in stigma, often going unaddressed, particularly among marginalized communities. The ManoShakti school mental health project, launched in 2015, seeks to break this silence and […]",
  },
  {
    image: "/images/blog/manobal.jpg",
    width: 1920,
    height: 741,
    title: "Sensitive Teacher, Successful Student: A Look at Khushii’s ‘Manobal’",
    category: "Education",
    date: "July 19, 2024",
    href: "/blog/sensitive-teacher-successful-student",
    excerpt:
      "As a social media & digital content intern at KHUSHII, I recently had the opportunity to attend a teacher training session under the flagship programme Manobal. Before attending the session, I had read about the programme itself, and my interest was piqued as the approach was not only innovative but also grounded in reality. Manobal […]",
  },
  {
    image: "/images/blog/IMG1.jpg",
    width: 4032,
    height: 3024,
    title: "Unveiling the Menstrual Enigma: From Taboos to Empowerment",
    category: "Prakriti Pandia",
    date: "January 30, 2024",
    href: "/blog/unveiling-the-menstrual-enigma-from-taboos-to-empowerment",
    excerpt:
      "Do you remember your first periods/menarche? Did anyone tell you what periods are and why they happen? Or did you have the same fate as many girls in India that you found yourself perplexed and didn’t know, why suddenly there was blood coming out of your private part (Vagina)? Or did you see pads lying […]",
  },
  {
    image: "/images/blog/ban-mono.jpg",
    width: 1920,
    height: 780,
    title: "“Manoshakti: My Moment of Joy” - Illuminating Young Lives",
    category: "Education",
    date: "August 22, 2023",
    href: "/blog/manoshakti-my-moment-of-joy",
    excerpt:
      "Manoshakti: Illuminating Young Lives Through a Year Long Program for Underprivileged Children In a world marked by disparities, a beacon of hope shines bright through a transformative initiative - the “Manoshakti: My Moment of Joy” program. Spanning a year, this project has been silently rewriting the narratives of underprivileged children. The Global Context Globally, an […]",
  },
  {
    image: "/images/blog/ban-mono.jpg",
    width: 1920,
    height: 780,
    title: "Yuvashree - active learner and passionate about sports",
    category: "Education",
    date: "July 28, 2022",
    href: "/blog/yuvashree",
    excerpt:
      "Yuvashree, a class 8th student, the eldest in a four-member family from Padappai, Chennai, was unable to express herself and froze when asked to come up in front of her class or on stage. An active learner and passionate about sports, Yuvashree hit a brick wall because of growing anxiety. So much so that she […]",
  },
  {
    image: "/images/blog/dignity-banner.jpg",
    width: 1920,
    height: 780,
    title: "Dignity kits enrolment & keep girls in school",
    category: "Education",
    date: "October 11, 2021",
    href: "/blog/dignity-kits",
    excerpt:
      "The COVID-19 pandemic and extreme poverty have added to the challenges female students’ face living in a predominantly patriarchal society. One of the impacts is on menstruating girls. Menstrual absorbents are essential for self-respect, physical and psychosocial wellbeing. Lack of access to menstrual absorbents causes girls to miss school. They feel embarrassed going to school […]",
  },
  {
    image: "/images/blog/left-2.jpg",
    width: 1920,
    height: 755,
    title: "Education in COVID times: A multi-front issue",
    category: "Education",
    date: "September 6, 2021",
    href: "/blog/education-in-covid-times",
    excerpt:
      "School closures due to the COVID-19 pandemic has pushed lesser privileged children and families into multidimensional poverty. The schools shut down has deprived them not only of education but also healthcare, nutrition, clean water, the company of friends, and entertainment such as outdoor play. “The share of children without access to education, water, sanitation, and […]",
  },
  {
    image: "/images/blog/image4.jpg",
    width: 900,
    height: 475,
    title: "Sexual Health and Reproductive Education",
    category: "Shikshaantra Plus",
    date: "August 2, 2021",
    href: "/blog/sexual-health-and-reproduction-education",
    excerpt:
      "Introduction to SH&RE SH&RE (Sexual Health and Reproduction Education) is an initiative that seeks to build access to sexual and reproductive healthcare education for women from underprivileged communities in India, with an emphasis on anganwadi workers and young women from local communities. This Handbook, as an extension of the initiative, serves as a guide to […]",
  },
  {
    image: "/images/blog/slideb2-1.jpg",
    width: 1920,
    height: 755,
    title: "A LOST GENERATION & WHAT WE MUST DO",
    category: "Shikshaantra Plus",
    date: "July 26, 2021",
    href: "/blog/a-lost-generation",
    excerpt:
      "The COVID-19 pandemic has hit different strata of society in distinctively catastrophic ways. Impaired by disruption of education in their formative years, the young ones are the most affected by catastrophic impacts affecting an entire generation. In mid-April 2020, according to UNESCO, 192 countries abruptly shut schools across the globe to contain the spread of […]",
  },
  {
    image: "/images/blog/image-000.jpg",
    width: 1499,
    height: 2159,
    title: "KHUSHII’s Sexual Health & Reproductive Education (SH&RE)",
    category: "Comic Strip in Hindi",
    date: "April 20, 2021",
    href: "/blog/khushiis-shre",
    excerpt:
      "SH&RE (Sexual Health and Reproduction Education) is an initiative that seeks to build opportunities for training and awareness in sexual and reproductive healthcare for women from disadvantaged communities, particularly the anganwadi workers and adolescents from local communities. SH&RE is led by Noor Sawhney, student of Wellington College, UK, chosen over a pool of applicants in […]",
  },
  {
    image: "/images/blog/blog-image-2-1.jpg",
    width: 400,
    height: 300,
    title: "KHUSHII places women on the path to financial independence",
    category: "Shikshaantra Plus",
    date: "November 28, 2020",
    href: "https://khushii.org/khushii-place-women-on-the-path-to-financial-independence/",
    excerpt:
      "Empowering women with livelihood skills and opportunities as a step towards creating income security for marginalised households is a core intervention of KHUSHII’s community development programme.",
  },
  {
    image: "/images/blog/blog-image-1.jpg",
    width: 940,
    height: 788,
    title: "KHUSHII brings a glimmer of hope to Savitri’s life",
    category: "Shikshaantra Plus",
    date: "November 28, 2020",
    href: "/blog/savitri",
    excerpt:
      "In her short life of 29 years, Savitri has seen enough tragedy and suffering to break the bravest of persons. She lost her father to cancer when she was just ten. At barely 16, an age where she should have been in school, her family got her married. She had three children. But even there, life found a way to be unkind. She lost her husband in 2015, leaving her and the three children alone, with no kith or kin to take care of them.",
  },
  {
    image: "/images/blog/blog-2.jpg",
    width: 940,
    height: 470,
    title: "Zero-tolerance for bullying KHUSHII standing against bullying in schools",
    category: "Shikshaantra Plus",
    date: "November 11, 2020",
    href: "/blog/zero-tolerance-for-bullying",
    excerpt:
      "Just like any regular routine, the counsellor Ms. Deepika Singh was keen on selecting an interesting topic for the students in intervention school in Mumbai. With her past two years of experience, many cases of bullying were reported to her. Initially she would hear out the cases of the victims in individual sessions. However, this […]",
  },
  {
    image: "/images/blog/post-1.jpg",
    width: 600,
    height: 600,
    title: "Skill building of Youth through General Duty Attendant Course",
    category: "Health",
    date: "November 3, 2020",
    href: "/blog/general-duty-attendant",
    excerpt:
      "Skill building of Youth through General Duty Attendant Course “Youth like us cannot afford the expensive courses like nursing, hotel management. GDA gave us the opportunity to earn a decent income in medical field and save for future studies” Muskan,18 General Duty Attendant (GDA) Course and its scope General Duty Attendants, commonly known as…",
  },
] as const;

export default function Blog() {
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
          src="/images/blog/blog-banner-1.jpg"
          alt="KHUSHII blog"
          width={1920}
          height={519}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-1/2 flex-col justify-center px-6 md:px-14">
          <p className="text-xl font-medium uppercase tracking-[0.12em] text-white md:text-3xl">
            Khushii Blog
          </p>
          <h1 className="mt-2 text-2xl font-medium text-white md:text-4xl">
            Khushii - India’s Most Trusted NGO
          </h1>
        </div>
      </section>

      <section id="posts" className="bg-white px-5 py-16 md:px-10 md:py-24">
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => {
            const external = post.href.startsWith("http");
            return (
            <li key={post.href} className="min-w-0">
              <article className="h-full overflow-hidden border border-[#f0e2c4] bg-[#fbf7f0]">
                <Link
                  href={post.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <Image
                    src={post.image}
                    alt=""
                    width={post.width}
                    height={post.height}
                    className="h-[18.75rem] w-full object-cover object-center"
                  />
                  <div className="px-6 py-7 text-left">
                    <span className="block h-1 w-16 bg-khushii-gold" />
                    <p className="mt-4 text-sm text-khushii-gold">{post.category}</p>
                    <h2 className="mt-2 text-xl font-medium leading-7 text-khushii-brown">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-khushii-gray">{post.date}</p>
                    <p className="mt-4 line-clamp-6 text-sm leading-7 text-khushii-gray">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
