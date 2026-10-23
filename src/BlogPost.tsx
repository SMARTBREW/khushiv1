import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Image from "./components/image";
import Link from "./components/link";
import { POSTS } from "./Blog";
import ShreArticle from "./blog/ShreArticle";
import LostArticle from "./blog/LostArticle";
import ShreComicArticle from "./blog/ShreComicArticle";
import SavitriArticle from "./blog/SavitriArticle";
import BullyingArticle from "./blog/BullyingArticle";
import GdaArticle from "./blog/GdaArticle";
import { ArticleEnd, ArticleTitle, Callout } from "./blog/frame";

const RELATED = [
  "/blog/sensitive-teacher-successful-student",
  "/blog/manoshakti-my-moment-of-joy",
  "/blog/yuvashree",
  "/blog/dignity-kits",
];

function ManoshaktiArticle() {
  const related = RELATED.map((href) => POSTS.find((post) => post.href === href)).filter(
    (post) => post !== undefined,
  );
  const previous = POSTS.find((post) =>
    post.title.includes("Sensitive Teacher"),
  );

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/BannerManoshakti.png"
          alt="ManoShakti school mental health programme"
          width={2000}
          height={1414}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="ManoShakti: Early school-intervention initiative"
            category="Education"
            date="August 31, 2024"
          />
          <p>
            In today’s fast-paced, technology-driven world, mental health
            awareness has become more critical than ever, especially for the
            most vulnerable members of society - children and adolescents. In
            India, mental health is still shrouded in stigma, often going
            unaddressed, particularly among marginalized communities. The
            ManoShakti school mental health project, launched in 2015, seeks to
            break this silence and ensure mental health support for
            school-going children across the country. By leveraging the World
            Health Organization’s tiered approach and working directly with
            students, parents, and teachers, ManoShakti aims to create lasting
            changes in mental health attitudes and support systems.
          </p>
          <p>
            <strong>The Crisis: Mental Health Among Marginalized Youth</strong>
          </p>
          <p>
            Children and adolescents from underprivileged backgrounds face a
            range of socio-economic challenges that profoundly affect their
            mental health. Poverty, lack of access to quality education, and
            societal pressures weigh heavily on young minds. Research led by
            Malhotra et al. reveals that an alarming 23.3% of school children
            in India suffer from psychiatric disorders, and the mental health
            crisis only worsens as children grow older. Suicide has become the
            leading cause of death among Indian youth, according to a study by
            Patel et al., making India the country with the highest youth
            suicide rate globally. These staggering statistics point to the
            urgent need for early mental health interventions and education,
            particularly within school environments.
          </p>
          <Callout title="ManoShakti’s Approach: A Holistic and Sustainable Model">
            To address this critical issue, ManoShakti adopts a comprehensive,
            evidence-based approach to mental health interventions, working
            within the school system to ensure maximum reach and impact. This
            project operates on several key pillars that are aligned with
            India’s National Education Policy (NEP) 2020, ensuring that every
            child receives the mental health support they need.
          </Callout>
          <Image
            src="/images/blog/Khushii-NGO.jpg"
            alt="Manobal"
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
          <p>
            <strong>
              1. Mental Health Events and Mental Health Awareness Sessions
            </strong>
          </p>
          <p>
            The foundation of the ManoShakti project is rooted in spreading
            awareness. Monthly mental health events are conducted at schools
            (Ecological level) to open up conversations around mental health,
            helping children understand the importance of mental well-being and
            reducing the stigma associated with seeking help. Additionally,
            mental health awareness sessions conducted regularly, aim to equip
            students with the tools they need to navigate emotional and
            psychological challenges. According to research by Smith et al.,
            life skills education is one of the most effective ways to reduce
            anxiety, stress, and depression among adolescents, creating a more
            resilient population in the long term.
          </p>
          <p>
            <strong>2. Group and Individual Counselling</strong>
          </p>
          <p>
            Beyond awareness, ManoShakti ensures direct intervention through
            group and individual counselling sessions. These sessions provide a
            safe space for students to express their struggles and work through
            their mental health challenges. A study by Williams et al.
            highlights the long-term benefits of school-based mental health
            programs, showing that early interventions can significantly reduce
            the risk of mental disorders in adulthood. By offering both group
            and individualized care, ManoShakti makes mental health support
            accessible to those who need it most.
          </p>
          <p>
            <strong>3. Engaging Parents and Teachers</strong>
          </p>
          <p>
            A child’s mental health does not exist in isolation. Parents,
            teachers, and the broader community play a crucial role in
            supporting children’s emotional well-being. ManoShakti involves
            parents and teachers in its programming, holding regular meetings
            and counselling sessions to ensure that children receive consistent
            support both at school and at home. By building this multi-layered
            support system, the initiative creates a more inclusive,
            understanding environment where mental health is prioritized.
          </p>
          <p>
            <strong>ManoShakti’s Vision for the Future</strong>
          </p>
          <p>
            ManoShakti’s vision extends far beyond short-term interventions. The
            project aims to build a sustainable mental health model that can be
            replicated across different regions and schools, ensuring that no
            child is left behind when it comes to mental health support.
          </p>
          <p>
            Sustainable Change Through Early Intervention: By focusing on early
            intervention, ManoShakti works to prevent mental health issues
            before they become more serious. Research consistently shows that
            early identification of mental health problems can significantly
            improve outcomes. The project’s focus on children ensures that they
            develop coping mechanisms and resilience from a young age, setting
            them up for a healthier future.
          </p>
          <p>
            Breaking the Cycle of Exclusion: Children from marginalized
            communities are often caught in a cycle of exclusion and mental
            health stigma. By providing mental health education and support,
            ManoShakti is not only addressing immediate concerns but also
            working to break this cycle. By empowering children, parents, and
            teachers with the knowledge and tools they need, the project is
            shifting societal narratives around mental health, reducing stigma,
            and fostering a more inclusive future.
          </p>
          <Callout title="Monitoring and Evaluation: Impact Mapping">
            The Manoshakti program’s impact on student’s mental well-being was
            quantitatively analyzed using the WHO-5 well-being index. This
            index measures emotional and psychological health across different
            score ranges, where higher scores reflect better mental health. The
            pre-and post-intervention scores from a sample size of 11,707
            students highlight a significant improvement in their well-being.
          </Callout>
          <Image
            src="/images/blog/english.png"
            alt="WHO-5 scale in English"
            width={1594}
            height={1122}
            className="h-auto w-full"
          />
          <Image
            src="/images/blog/hindi.png"
            alt="WHO-5 scale in Hindi"
            width={1598}
            height={1132}
            className="h-auto w-full"
          />
          <Image
            src="/images/blog/kannada.png"
            alt="WHO-5 scale in Kannada"
            width={1598}
            height={1066}
            className="h-auto w-full"
          />
          <p>(WHO 5 Scale, translated into two languages- Hindi, and Kannada)</p>
          <p>Scoring division of WHO 5 Scale</p>
          <Image
            src="/images/blog/impact.jpg"
            alt="WHO-5 scoring ranges"
            width={1085}
            height={1080}
            className="h-auto w-full"
          />
          <p>
            Key Findings for two years: Pre and Post-intervention comparative
            analysis
          </p>
          <Image
            src="/images/blog/graph.jpg"
            alt="Pre and post intervention WHO-5 scores"
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
          <div className="text-left">
            <p className="font-medium">
              Pre-Intervention Scores (30-70 range): The majority of students
              scored within this range initially, reflecting moderate mental
              well-being with room for improvement.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                42% of students scored between 50-60, indicating good but not
                optimal well-being.
              </li>
              <li>
                38% fell in the 60-70 range, suggesting fairly strong emotional
                health, yet still lacking a higher level of resilience and
                positivity.
              </li>
            </ul>
            <p className="mt-5 font-medium">
              Post-Intervention Scores (70-100 range): After the Manoshakti
              interventions, a considerable shift was observed:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                27% of students now scored between 70-80, representing excellent
                mental well-being, which signifies high emotional resilience and
                overall positivity.
              </li>
              <li>
                18% scored in the 80-90 range, and 14% achieved scores in the
                highest 90-100 range, reflecting the program’s effectiveness in
                fostering profound emotional and psychological growth.
              </li>
            </ul>
          </div>
          <Callout title="Interpretation:">
            This improvement underscores the success of Manoshakti in not only
            enhancing the students’ overall well-being but also elevating those
            who initially had moderate scores to a more resilient and
            emotionally positive state. The transition of scores from 30-70 to
            70-100 after the interventions validates the effectiveness of the
            program’s holistic approach to mental health, which focuses on
            providing emotional support, fostering resilience, and improving in
            overall mental health of students.
          </Callout>
          <Callout title="Conclusion: Creating a Mentally Resilient Generation">
            In a country where mental health services are often inaccessible,
            ManoShakti stands as a beacon of hope for marginalised students. By
            working within the school system, engaging parents and teachers, and
            using data-driven strategies, the project is creating a lasting
            impact on the mental health of children across India. As it
            continues to grow and evolve, ManoShakti is not only addressing the
            immediate mental health crisis but also laying the groundwork for a
            mentally resilient generation. Through early intervention,
            awareness, and support, ManoShakti is changing lives - one child at a
            time.
          </Callout>
          <hr className="border-[#ddd]" />
          <p>
            <strong>About the Author:</strong>
            <br />
            Prakriti Pandia, Head of Mental Health Department (PhD Scholar and
            RCI Registered)
            <br />
            KHUSHII NGO
          </p>
          <hr className="border-[#ddd]" />
          <div className="text-left text-xs leading-6">
            <p className="font-medium">References:</p>
            <ol className="mt-3 list-decimal space-y-3 pl-5">
              <li>
                Gururaj, G., Varghese, M., Benegal, V., Rao, G. N., Pathak, K.,
                Singh, L. K., Mehta, R. Y., Ram, D., Misra, R., & NMHS
                collaborators group. (2016). National Mental Health Survey of
                India, 2015-16. National Institute of Mental Health and
                Neurosciences (NIMHANS), Bengaluru.
              </li>
              <li>
                Malhotra, S., Kohli, A., & Kapoor, M. (n.d.). Prevalence of
                psychiatric disorders in school children and adolescents in
                India. Indian Journal of Psychiatry, 61(6), 540-544.
                doi:10.4103/psychiatry.IndianJPsychiatry_135_19.
              </li>
              <li>
                Patel, V., Ramasundarahettige, C., Vijayakumar, L., Thakur, J.
                S., Gajalakshmi, V., Gururaj, G., Suraweera, W., Jha, P., &
                Million Death Study Collaborators. (2012). Suicide mortality in
                India: A nationally representative survey. The Lancet, 379(9834),
                2343-2351. https://doi.org/10.1016/S0140-6736(12)60606-0.
              </li>
            </ol>
          </div>
        </div>
      </article>

      <ArticleEnd
        title="ManoShakti: Early school-intervention initiative"
        older={previous}
        related={related}
      />
    </>
  );
}

function ManobalArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-early-school-intervention-initiative",
    "/blog/manoshakti-my-moment-of-joy",
    "/blog/yuvashree",
    "/blog/dignity-kits",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.href.endsWith("manoshakti-early-school-intervention-initiative"));
  const older = POSTS.find((post) => post.title.startsWith("Unveiling the Menstrual"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/manobal.jpg"
          alt="A Manobal teacher training session"
          width={1920}
          height={741}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="Sensitive Teacher, Successful Student: A Look at Khushii’s ‘Manobal’"
            category="Education"
            date="July 19, 2024"
          />
          <p>
            As a social media & digital content intern at KHUSHII, I recently
            had the opportunity to attend a teacher training session under the
            flagship programme Manobal. Before attending the session, I had
            read about the programme itself, and my interest was piqued as the
            approach was not only innovative but also grounded in reality.
            Manobal aims to psycho-educate 2,000 government school teachers and
            raise awareness about their own mental health as well as their
            students’. My assignment - recording videos, photos, and
            testimonials from participants - left me with a familiar mix of
            excitement and nervousness. I was excited to understand first-hand
            the lived experiences of KHUSHII’s beneficiaries - the main reason
            I joined this NGO.
          </p>
          <p>
            On arriving at the venue, I was eagerly waiting for the event to
            start, because mental health is a topic that means a lot to me on a
            personal level. But I am also aware of its limitations in our
            contemporary times. Seventy per cent of children in India are
            enrolled in government schools (ASER survey, 2021), with most of
            them coming from underprivileged backgrounds and to a large extent,
            a person’s material condition determines their psychological
            condition. Sure, money can’t buy happiness, but it can buy therapy
            sessions, psychiatric treatment and medicines for mental illness.
            Money can also buy basic necessities - a clean home in a safe
            neighbourhood, nutritious meals and comfortable clothes - the
            absence of which leads to a higher risk of depression and anxiety.
            Add onto this the stigma and myths that envelope mental health in
            India, and one begins to understand why only 1 in 20 Indians with
            mental health concerns receive any treatment (Sagar et al., 2017).
            After all, how can we expect a construction worker or even an
            overworked government school teacher to have any time, energy, or
            awareness to tend to their mental health? And if teachers cannot
            take care of their own mental health, how can they take care of
            children?
          </p>
          <Callout>
            This question is at the very heart of Manobal. Teachers are
            frontline observers of behavioural and psychological problems in
            children, but a lack of awareness of mental health leads them to do
            nothing, or even make the issue worse - a counsellor leading the
            workshop recounted the time she asked a teacher which student was
            in need of psychological help, and the teacher pointed to a girl
            and said, “vahan ek pagal ladki baithi hai, uski maa bhi pagal hai”
            [a crazy girl is sitting there, her mother is crazy too]; the girl
            slumped into her chair and then onto the floor as the class erupted
            in laughter.
          </Callout>
          <p>
            Further, teachers have a multifaceted role that goes beyond just
            teaching - they must also be listeners, conflict resolvers,
            cleaners, librarians, doctors; on and on goes the list. Long hours,
            high stress levels, and burnout negatively impacts their mental
            health. One’s own mental state determines how we interact with
            others; you may recall a time you were stressed about an issue at
            home, and ended up taking it out on an entirely unrelated person.
            Thus, it is crucial to equip teachers with the necessary tools and
            skills to deal with their emotions in a healthy way. Emotionally
            regulated teachers are the only teachers that can create a safe
            space for their students to discover their true selves (rather than
            believing they must put on a mask to be loved), recognise their own
            individual interests, be driven by curiosity rather than fear, ask
            challenging questions, and most importantly, have an unwavering
            belief in their own worth. For example, a teacher that enters the
            class with a smile, doesn’t punish students for making honest
            mistakes, and appreciates them for little achievements is bound to
            make children feel motivated to do better in their classes and take
            a genuine interest in education. Ultimately, a good education paves
            the way for financially independent adults and informed citizens,
            who contribute to a better life for themselves and society at large.
            In short, teachers, not students, are the main beneficiaries of
            Manobal, because the benefits experienced by teachers are bound to
            seamlessly flow to their students..
          </p>
          <Image
            src="/images/blog/mano.jpg"
            alt="Manobal"
            width={1065}
            height={937}
            className="h-auto w-full"
          />
          <p>
            Students spend 6+ hours a day with teachers (often more than
            parents). Thus teachers equipped with the required skills can play
            a revolutionary role in bridging the alarming treatment gap in
            India, especially among the youth. If the parents are hesitant
            towards seeking professional help for their child, the teacher can
            refer the child to a psychologist and convince parents about its
            benefits, thus effectively transforming the child’s life for the
            better. The teacher can be the trusted adult a child turns to for
            consistent support.
          </p>
          <p>
            In such a scenario, Manobal’s efforts at raising mental health
            awareness among government school teachers and equipping them with
            tools & skills to deal with their emotions, is a small but
            significant step. The session began with a short guided meditation.
            Mindfulness has fascinated me for several years, because in our
            fast-paced capitalistic world, meditation is one space where our
            only job is to simply exist. Silence and stillness work their magic
            on us, making us aware of our thoughts and attributes that we
            didn’t even know existed.
          </p>
          <p>
            Next, the counsellors discussed coping strategies. I was struck by
            how so many of us resort to distraction, suppression or simply
            lashing out to deal with unpleasant emotions. “This shouldn’t make
            me sad/angry/scared,” “I should just be happy,” we tell ourselves.
            A big reason for our lack of healthy coping strategies is that we
            are unable to do the very first step: knowing what we feel. I
            recall my emotional state when I first arrived at the event - that
            confusing blend of excitement, nervousness, and other feelings that
            I could not even name. I remember I also felt a small fear of these
            uncomfortable feelings, which made me want to ignore their
            existence. It seems our Indian languages lack words to describe
            mental health related concepts (in a respectful or neutral way). I
            do not know any commonly-used Hindi translations of, say
            ‘depression’ or ‘burnout’, which are increasing in usage nowadays.
            This gives people the false impression that mental health issues
            are foreign concepts, or that they did not exist in the so-called
            ‘simpler times’ of the past.
          </p>
          <Callout>
            The counsellors also explained how our emotions manifest in the
            body, with teachers recounting feelings of nausea before an exam
            during their own student days. Simply being aware of our body and
            our emotional state in a non-judgemental manner goes a long way.
            Self-reflection is so important because it is only then that we can
            begin to change our patterns, and respond instead of react. A
            teacher gave the example that before giving into the impulse of
            shouting at a student, the teacher can realise that they are doing
            so because of a personal problem.
          </Callout>
          <p>
            There was one exercise that beautifully demonstrated the power of
            self-reflection in real time: teachers were first asked to list the
            expectations they have from their students. A list of over 10
            qualities emerged, including things like ‘being hygienic,’ ‘sitting
            in one place,’ ‘being obedient,’ ‘listening without getting
            distracted’ - qualities which are oftentimes at odds with
            children’s still developing brains and true natures. Only one or
            two participants said that they expected their students to be happy
            and smiling. I found my heart sinking as I thought of how children
            are burdened with so many responsibilities, and only when they
            carry them out are they deemed worthy and good. But I was lifted
            out of my disappointment when the next question was posed:
            “Teachers, how many of these qualities do you possess?” Suddenly,
            there was a shy smile on everyone’s face. No preaching, no external
            instruction, no explicit statement was required to begin a shift in
            teachers’ expectations from their students - a simple question and
            some self-reflection had done the trick.
          </p>
          <p>
            The fact of the matter is that children’s brains are physically
            different from adults. For example, children have a smaller
            prefrontal cortex (the part of the brain that controls rational
            thinking) than adults, and so they might rely more on their
            amygdala (associated with emotions, impulses, aggression). Their
            biochemistry is also wired to need adults, to help them understand
            their emotions and deal with them in a healthy manner. “Even brief
            exposure to stressful experiences (such as adverse or deprived
            caregiving) early in life can have life-long impact on brain
            development and socioemotional functioning.” For example, if a
            child lived with an unstable caregiver who could shout at them at
            any time, they might grow up to be a hypervigilant adult who puts
            others’ needs before their own to ‘keep the peace’. Thus, it is of
            utmost importance that teachers not only become aware of children’s
            mental health, but also their own. After all, if the teacher does
            not feel equipped to take care of their own well-being and have
            compassion towards their own self, how can they extend the same
            kind of care to their students?
          </p>
          <Callout>
            A well-aware, empathetic teacher can be the deciding factor in
            whether a young girl goes on to pursue her dream of being an
            engineer or not, whether she stands up to her abusive husband or
            not, whether she fights for her rights or not.
          </Callout>
          <hr className="border-[#ddd]" />
          <p>
            <strong>About the Author:</strong>
            <br />
            Lavanya Senthil,
            <br />
            Communication Intern at KHUSHII
          </p>
          <hr className="border-[#ddd]" />
          <div className="text-left text-xs leading-6">
            <p className="font-medium">References:</p>
            <ol className="mt-3 list-decimal space-y-3 pl-5">
              <li>
                In 2022, more than 13 million children in India aged 10 to 14
                years lived in extreme poverty (Rathore, 2023)
              </li>
              <li>
                According to a study at MIT, those with the lowest incomes are
                typically 1.5 to 3 times more likely than the rich to experience
                depression or anxiety.{" "}
                <a
                  href="https://economics.mit.edu/sites/default/files/2022-09/poverty-depression-anxiety-science.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-khushii-gold-dark"
                >
                  https://economics.mit.edu/sites/default/files/2022-09/poverty-depression-anxiety-science.pdf
                </a>
              </li>
              <li>
                The treatment gap for people with mental health concerns in
                India is estimated to be approximately 95%, with only 1 in 20
                receiving any treatment (Sagar et al., 2017).
              </li>
              <li>
                <a
                  href="https://raisingchildren.net.au/pre-teens/development/understanding-your-pre-teen/brain-development-teens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-khushii-gold-dark"
                >
                  https://raisingchildren.net.au/pre-teens/development/understanding-your-pre-teen/brain-development-teens
                </a>
              </li>
              <li>
                <a
                  href="https://www.pnas.org/doi/full/10.1073/pnas.1307893110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-khushii-gold-dark"
                >
                  https://www.pnas.org/doi/full/10.1073/pnas.1307893110
                </a>
              </li>
              <li>How to Be the Love You Seek by Nicole LePera</li>
            </ol>
          </div>
        </div>
      </article>

      <ArticleEnd
        title="Sensitive Teacher, Successful Student: A Look at Khushii’s ‘Manobal’"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}

function MenstrualArticle() {
  const newer = POSTS.find((post) => post.title.includes("Sensitive Teacher"));
  const older = POSTS.find((post) => post.title.includes("My Moment of Joy"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/IMG11.png"
          alt="Pads for Freedom menstrual health campaign"
          width={1920}
          height={752}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="Unveiling the Menstrual Enigma: From Taboos to Empowerment"
            category="Prakriti Pandia"
            date="January 30, 2024"
          />
          <p>
            Do you remember your first periods/menarche? Did anyone tell you
            what periods are and why they happen? Or did you have the same fate
            as many girls in India that you found yourself perplexed and didn’t
            know, why suddenly there was blood coming out of your private part
            (Vagina)? Or did you see pads lying in your house and had no idea
            what it was used for? Or your family felt uncomfortable when any
            sanitary napkin advertisement came on TV?
          </p>
          <p>
            If the answer to any question asked above was ‘Yes’, then the need
            to challenge the culture of shame and silence around menstrual
            health and hygiene is yours too! The culture of shame and silence,
            doesn’t just persist in marginalized communities but in every other
            household as well!
          </p>
          <h2 className="pt-2 text-2xl font-extrabold text-[#8dc2fb]">
            Why menstrual health and hygiene?
          </h2>
          <p>
            On an average, a woman spends 7 years of her life on periods. Yet,
            we hardly talk about it! One can question, why is talking about it
            essential? Just for the sake of awareness? No! Talking about
            menstrual health is essential as even though the onset of
            menstruation marks a crucial physiological milestone in the lives of
            adolescent girls, symbolizing their transition into reproductive
            maturity, yet, it remains a highly stigmatized and taboo subject.
          </p>
          <p>
            Adolescent girls often embark on their menstruation journey with
            significant knowledge gaps and misconceptions, primarily due to the
            adults’ reluctance, to engage in conversations about sexuality,
            reproduction, and menstruation. One common misconception that we
            witnessed on field in our ‘Pads For Freedom Campaign’ was that
            ‘Period blood is impure’ (अशद्ुध रक्त) as most of the girls and
            mothers believed this. <strong>Is period blood impure?</strong>
          </p>
          <p>
            Furthermore, cultural taboos and restrictions surrounding
            menstruation are passed down from generation to generation,
            perpetuating the same belief. In the focus-group discussion with
            mother groups in schools, they shared that they inform their girls
            about periods by saying, “This will happen every month” (ऐसा हर
            महीने होगा). When asked, do you know why biologically periods
            happen? Mothers’ kept quiet, as they themselves weren’t aware as to
            why periods take place?
          </p>
          <p>
            The research reiterates, 71% of girls report having no prior
            knowledge of menstruation before their first period. Mothers,
            typically sought after for guidance, often view menstruation as
            “dirty,” reinforcing these taboos. Research shows that only about
            23% of girls knew that the uterus was the source of menstrual
            bleeding, and just over half (55%) considered menstruation normal.
          </p>
          <figure>
            <Image
              src="/images/blog/IMG22.jpg"
              alt="awareness"
              width={1920}
              height={752}
              className="h-auto w-full"
            />
            <figcaption className="mt-2 text-xs">
              Focus Group Discussion: Mothers’ Group, (Qualitative data
              collection)
            </figcaption>
          </figure>
          <p>
            <strong>
              Twenty-three million girls in India drop out of school yearly
              when they start menstruating (Dasra and USAID). Many of them end
              up facing acute health problems.
            </strong>{" "}
            The lack of knowledge on menstruation and menstrual hygiene,
            combined with limited access to sanitary pads, leads to girls
            dropping out of school when they hit puberty (6th or 7th class).
            Moreover, inadequate menstrual hygiene can lead to a heightened
            vulnerability to Reproductive Tract Infections (RTIs),{" "}
            <strong>significantly contributing to female morbidity.</strong>
          </p>
          <Callout>
            This is the grave reality! Women all around the country are
            struggling, the struggle starts around 10 or 12 years of age. The
            girls and women from marginalized communities are at the receiving
            end. The problem is inter-sectional, which includes poverty, gender,
            class, and caste.
          </Callout>
          <h2 className="pt-4 text-2xl font-extrabold text-[#8dc2fb]">
            What are we doing to challenge the existing landscape of menstrual
            health and hygiene?
          </h2>
          <p>
            Regrettably, discussions about menstrual health and hygiene are
            seldom integrated into the curriculums, leaving many students
            uninformed and unprepared. Recognizing the importance of addressing
            this gap, we propose a campaign to empower menstruators with the
            knowledge and tools to effectively manage their menstrual health and
            hygiene.
          </p>
          <Callout>
            Through ‘Pads For Freedom Campaign’ we aim to create a more
            inclusive and informed society for all menstruators, fostering a
            healthier and dignified menstrual experience.
          </Callout>
          <p>
            In the ‘Pads for Freedom’ initiative, we conduct menstrual health
            and hygiene workshops in government schools across Delhi, NCR, Uttar
            Pradesh, and Bangalore. To amplify our impact, we’ve embraced a
            three-tiered impact approach:
          </p>
          <Image
            src="/images/blog/mid.jpg"
            alt="awareness"
            width={1920}
            height={1302}
            className="h-auto w-full"
          />
          <div className="border border-[#f0e2c4] border-l-4 border-l-khushii-gold bg-[#fbf7f0] px-5 py-5 text-left text-khushii-brown">
            <p className="font-medium">Workshop Impact:</p>
            <p className="mt-1 leading-8">
              ● Conducting impactful menstrual health and hygiene workshops to
              bridge knowledge gaps and break taboos among menstruators.
            </p>
            <p className="mt-4 font-medium">
              Empowering Rural Women through Pad Distribution:
            </p>
            <p className="mt-1 leading-8">
              ● Distributing menstrual pads crafted by women from Self-Help
              Groups, fostering a financial and identity empowerment approach
              for rural women.
            </p>
            <p className="mt-4 font-medium">Educational Resource Creation:</p>
            <p className="mt-1 leading-8">
              ● Developing educational resources for girls and others to
              disseminate essential information about menstrual health and
              hygiene.
            </p>
          </div>
          <figure>
            <Image
              src="/images/blog/campaign.jpg"
              alt="campaign"
              width={948}
              height={675}
              className="h-auto w-full"
            />
            <figcaption className="mt-2 text-xs">
              Pads for Freedom Booklet: (Prepared and distributed in Hindi,
              English and Kannada)
            </figcaption>
          </figure>
          <p>
            Furthermore, our recent initiatives involve engaging with mother
            groups and teachers. We aspire to deepen this engagement, enhancing
            the knowledge base, and dismantling taboos at their root. Our goal
            is to put an end to the generational passing on of shame and taboos
            surrounding menstruation.
          </p>
          <h2 className="pt-2 text-2xl font-extrabold text-[#8dc2fb]">
            How can you contribute to changing this narrative?
          </h2>
          <p>
            We earnestly encourage all readers to share it with others, and
            initiate conversations within their households. If you are inclined
            to support this campaign, feel free to reach out, connect with us,
            and actively participate in fostering positive change.
          </p>
          <p>
            Together, let’s be instrumental in reshaping perceptions and
            spreading awareness about * menstrual health and hygiene.
          </p>
          <Image
            src="/images/blog/blog-img.jpg"
            alt="campaign"
            width={1024}
            height={768}
            className="h-auto w-full"
          />
          <Callout>
            We are extremely grateful to EXL for their support towards KHUSHII’s
            “Pads for Freedom Campaign” which will benefit 25000 children . We
            also acknowledge the action packed participation of EXL volunteers
            to support the cause and be a part of this campaign.
          </Callout>
          <hr className="border-[#ddd]" />
          <p>
            <strong>About the Author:</strong>
            <br />
            Prakriti Pandia, Head of Mental Health Department
            <br />
            KHUSHII NGO
          </p>
          <hr className="border-[#ddd]" />
          <div className="text-left text-xs leading-6">
            <p className="font-medium">References:</p>
            <ul className="mt-3 space-y-3">
              <li>
                Dasra. (2015). Spot On: Improving Menstrual Management in India.
                Retrieved from{" "}
                <a
                  href="https://www.dasra.org/resource/improving-menstrual-health-and-hygiene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-khushii-gold-dark"
                >
                  https://www.dasra.org/resource/improving-menstrual-health-and-hygiene
                </a>
              </li>
              <li>
                FSG. (2016). Menstrual Health Landscape in India. Retrieved from{" "}
                <a
                  href="https://menstrualhygieneday.org/wp-content/uploads/2016/04/FSG-Menstrual-Health-Landscape_India.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-khushii-gold-dark"
                >
                  https://menstrualhygieneday.org/wp-content/uploads/2016/04/FSG-Menstrual-Health-Landscape_India.pdf
                </a>
              </li>
              <li>
                Kansal, S., Singh, S., Kumar, A., Kachhawa, G., Singh, T., &
                Chopra, S. (2020). Menstrual Hygiene Practices and Its
                Association with Reproductive Tract Infections and Anemia among
                Adolescent Girls in Rural Uttar Pradesh, India. Journal of
                Family Medicine and Primary Care.{" "}
                <a
                  href="https://doi.org/10.4103/jfmpc.jfmpc_1877_19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-khushii-gold-dark"
                >
                  https://doi.org/10.4103/jfmpc.jfmpc_1877_19
                </a>
              </li>
              <li>
                NDTV. (2018). 23 Million Women Drop Out of School Every Year
                When They Start Menstruating in India. Retrieved from{" "}
                <a
                  href="https://swachhindia.ndtv.com/23-million-women-drop-out-of-school-every-year-when-they-start-menstruating-in-india-17838/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-khushii-gold-dark"
                >
                  https://swachhindia.ndtv.com/23-million-women-drop-out-of-school-every-year-when-they-start-menstruating-in-india-17838/
                </a>
              </li>
              <li>
                Sivakami, M., et., al. (2019). Effect of menstruation on girls
                and their schooling, and facilitators of menstrual hygiene
                management in schools: Surveys in government schools in three
                states in India, 2015. Journal of Global Health, 9(1), 010408.
                doi: 10.7189/jogh.09.010408
              </li>
              <li>
                Sharma, P., Malhotra, C., Taneja, D. K., & Sivakami, M. (2021).
                Menstrual Hygiene Management among Adolescent Girls in India: A
                Systematic Review and Meta-analysis. Indian Journal of
                Pediatrics.{" "}
                <a
                  href="https://doi.org/10.1007/s12098-021-03741-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-khushii-gold-dark"
                >
                  https://doi.org/10.1007/s12098-021-03741-6
                </a>
              </li>
              <li>
                Singh, A. J., Singh, S., & Upadhyay, A. K. (2019). Knowledge and
                Practices Regarding Menstrual Hygiene among Adolescent Girls in
                Rural Varanasi. Indian Journal of Community Health{" "}
                <a
                  href="https://www.iapsmupuk.org/journal/index.php/IJCH/article/view/1067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-khushii-gold-dark"
                >
                  https://www.iapsmupuk.org/journal/index.php/IJCH/article/view/1067
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <ArticleEnd
        title="Unveiling the Menstrual Enigma: From Taboos to Empowerment"
        older={older}
        newer={newer}
      />
    </>
  );
}

function JoyArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-early-school-intervention-initiative",
    "/blog/sensitive-teacher-successful-student",
    "/blog/yuvashree",
    "/blog/dignity-kits",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.title.startsWith("Unveiling the Menstrual"));
  const older = POSTS.find((post) => post.title.startsWith("Yuvashree"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/ban-mono.jpg"
          alt="Manoshakti: My Moment of Joy"
          width={1920}
          height={780}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="“Manoshakti: My Moment of Joy” - Illuminating Young Lives"
            category="Education"
            date="August 22, 2023"
          />
          <p>
            <strong>Manoshakti:</strong> Illuminating Young Lives Through a Year
            Long Program for Underprivileged Children
          </p>
          <p>
            In a world marked by disparities, a beacon of hope shines bright
            through a transformative initiative - the “Manoshakti: My Moment of
            Joy” program. Spanning a year, this project has been silently
            rewriting the narratives of underprivileged children.
          </p>
          <p>
            <strong>The Global Context</strong>
            <br />
            Globally, an estimated 385 million children live in extreme poverty,
            facing not only financial hardships but also limited access to
            quality education, healthcare, and recreational activities. This
            dire situation often leads to social exclusion, diminished
            self-esteem, and a lack of opportunities.
          </p>
          <p>
            <strong>The Indian Scenario</strong>
            <br />
            In India, home to a significant portion of the world’s
            underprivileged population, approximately 30% of children live below
            the poverty line. Many of them lack access to basic needs, let alone
            avenues for personal growth and self-expression.
          </p>
          <p>
            <strong>A Program with a Purpose</strong>
            <br />
            Against this backdrop, the “Manoshakti: My Moment of Joy” program
            emerges as a lighthouse. With a goal to uplift spirits, build
            self-esteem, and promote mental well-being, this initiative offers a
            structured series of entertainment sessions, tailored to cater to
            the needs of these children.
          </p>
          <Callout title="Impact:">
            The impact is both heartwarming and measurable. Preliminary data
            indicates a noticeable increase in engagement levels among
            participating children. Self-esteem indicators have witnessed
            positive shifts, along with documented improvements in social
            interaction skills.
          </Callout>
          <p>
            <strong>Local Collaborations</strong>
            <br />
            Collaborations with artists, musicians, student volunteers are the
            backbone of its success. This collaborative model can be replicated
            in diverse contexts, contributing to the wellbeing of children
            around the world.
          </p>
          <p>
            <strong>A Glimpse into the Future</strong>
            <br />
            As the program continues to evolve, its potential becomes even more
            evident. Beyond the weekly sessions, it is fostering a culture of
            empathy and support within communities. The impact on these young
            lives is becoming a foundation for a brighter future.
          </p>
          <Callout title="Conclusion: Inspiring Change, One Child at a Time">
            The “Manoshakti: My Moment of Joy” program is not just about
            entertainment; it’s about empowerment. Its impact transcends
            geographical boundaries, reminding us of the universal truth that
            every child deserves a chance to flourish. As this initiative shines
            a light on the possibilities, it beckons us to come together -
            locally and globally - to create a world where all children can
            experience joy, growth, and a sense of belonging.
          </Callout>
        </div>
      </article>

      <ArticleEnd
        title="“Manoshakti: My Moment of Joy” - Illuminating Young Lives"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}

function YuvashreeArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-early-school-intervention-initiative",
    "/blog/sensitive-teacher-successful-student",
    "/blog/manoshakti-my-moment-of-joy",
    "/blog/dignity-kits",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.title.includes("My Moment of Joy"));
  const older = POSTS.find((post) => post.title.startsWith("Dignity kits"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/ban-mono.jpg"
          alt="Yuvashree - active learner and passionate about sports"
          width={1920}
          height={780}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="Yuvashree - active learner and passionate about sports"
            category="Education"
            date="July 28, 2022"
          />
          <p>
            Yuvashree, a class 8th student, the eldest in a four-member family
            from Padappai, Chennai, was unable to express herself and froze
            when asked to come up in front of her class or on stage.
          </p>
          <p>
            An active learner and passionate about sports, Yuvashree hit a
            brick wall because of growing anxiety. So much so that she stopped
            taking part in competitions and games. Her parents, who are daily
            wagers, did not know what was wrong with her and felt hopeless to
            see their bright spark dim.
          </p>
          <Callout>
            DYK - According to World Health Organisation (WHO) data on mental
            health, every 1 in 3 adolescents will suffer from an anxiety
            disorder.
          </Callout>
          <p>
            When Arutjothi, KHUSHII’s mental health counsellor, took an
            assessment test of the students, she realized that Yuvashree had
            high anxiety levels and enrolled her on KHUSHII’s{" "}
            <em>Mental Health Counselling programme - Manoshakti</em>.
          </p>
          <p>
            Things changed for the better ever since Yuvashree started with the
            mental health programme. KHUSHII counsellor counselled Yuvashree
            with her parents and conducted ten focused counselling sessions.
            Yuvashree, under the guidance of the expert, enthusiastically
            practised positive visualization and colour breathing exercises with
            guided imagery. After the sessions, the counsellor followed up
            regularly with Yuvashree, her teachers and her parents for her
            well-being.
          </p>
          <p>
            Following the counselling, regular follow-ups and one-to-one
            meetings, Yuvashree found new confidence in herself and, with
            vigour, started participating in competitions and games. Recently,
            she won a gold medal in the Zonal (District) level competition for
            Silambam. (Silambam is an Indian martial art originating in South
            India. It derives from the Tamil word ‘Silam’, meaning the hill.
            The term ‘Silambambu’ refers to a particular type of bamboo from the
            Kurinjimala (Kurinji hills) in present-day Kerala)
          </p>
          <p>
            Happiness (KHUSHII) is in ensuring that every child gets an
            education and an opportunity for overall development.
          </p>
          <Callout>
            “My victory in Silambam would not have been possible if Sandhar and
            KHUSHII did not support me in overcoming my fears.” - Yuvashree
          </Callout>
          <p>
            We sincerely thank Sandhar for supporting KHUSHII’s programmes for
            students in Padappai, Chennai government school.
          </p>
        </div>
      </article>

      <ArticleEnd
        title="Yuvashree - active learner and passionate about sports"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}

function DignityArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-early-school-intervention-initiative",
    "/blog/sensitive-teacher-successful-student",
    "/blog/manoshakti-my-moment-of-joy",
    "/blog/yuvashree",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.title.startsWith("Yuvashree"));
  const older = POSTS.find((post) => post.title.startsWith("Education in COVID"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/dignity-banner.jpg"
          alt="Dignity kits for schoolgirls"
          width={1920}
          height={780}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="Dignity kits enrolment & keep girls in school"
            category="Education"
            date="October 11, 2021"
          />
          <p>
            The COVID-19 pandemic and extreme poverty have added to the
            challenges female students’ face living in a predominantly
            patriarchal society. One of the impacts is on menstruating girls.
            Menstrual absorbents are essential for self-respect, physical and
            psychosocial wellbeing. Lack of access to menstrual absorbents
            causes girls to miss school. They feel embarrassed going to school
            during their periods. And use unhygienic materials such as rags
            instead of pads.
          </p>
          <p>
            Dignity kits are means of providing protection, wellbeing, mobility
            and hygiene for menstruating girls. Periods do not stop for the
            pandemic. School-aged girls face a shortage of menstrual absorbents
            as schools, the only supply chain for many, are shut.
          </p>
          <Callout>
            “We are so relieved to have these sanitary pads! I feel extremely
            confident now and am not scared to go out of my house. Before, I
            used to sit in a corner, hiding at home during my menstruation
            days” - Radhika, a student from State High school Khatawali
            district, Rewari, Haryana.
          </Callout>
          <p>
            Recognising “period poverty” as a problem, KHUSHII is helping girls
            maintain their dignity, safety and hygiene by providing them with
            “dignity kits” comprising essential items. Along with the ‘Dignity
            Kits, ‘ KHUSHII also imparts education on menstruation to
            school-going girls who are approaching puberty. So far, KHUSHII has
            delivered over 800 dignity kits to girls in two government schools
            in Mumbai and Rewari. The ‘Dignity Kits’ provide all the required
            sanitary items, including sanitary napkins, soap, hand towel,
            toothbrush etc., a total of 17 essential items.
          </p>
          <Callout>
            “Girls in my class appreciate KHUSHII’s interventions such as the
            distribution of dignity kits and sessions on menstrual hygiene. You
            have helped restore our dignity. We are now able to and get out of
            our house during menstruation. Please continue to support us.” -
            Kirti, a student from Petit Municipal school, Bandra.
          </Callout>
          <p>
            <strong>
              Together, we can make a difference, end period poverty and help
              girls stay in school.
            </strong>
          </p>
        </div>
      </article>

      <ArticleEnd
        title="Dignity kits enrolment & keep girls in school"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}

function CovidArticle() {
  const relatedHrefs = [
    "/blog/manoshakti-early-school-intervention-initiative",
    "/blog/sensitive-teacher-successful-student",
    "/blog/manoshakti-my-moment-of-joy",
    "/blog/yuvashree",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.title.startsWith("Dignity kits"));
  const older = POSTS.find((post) =>
    post.title.startsWith("Sexual Health and Reproductive"),
  );

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/left-2.jpg"
          alt="Education in COVID times"
          width={1920}
          height={755}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="Education in COVID times: A multi-front issue"
            category="Education"
            date="September 6, 2021"
          />
          <p>
            School closures due to the COVID-19 pandemic has pushed lesser
            privileged children and families into multidimensional poverty. The
            schools shut down has deprived them not only of education but also
            healthcare, nutrition, clean water, the company of friends, and
            entertainment such as outdoor play.
          </p>
          <div className="flex items-center gap-4 text-left">
            <Image
              src="/images/blog/no-remotes.png"
              alt=""
              width={70}
              height={70}
              className="h-[4.375rem] w-[4.375rem] shrink-0"
            />
            <p className="text-2xl font-semibold leading-8">
              “The share of children without access to education, water,
              sanitation, and hygiene (WASH) services increased from 47% to
              56%.”
              <br />
              <span className="text-lg font-medium italic">
                Source - UNICEF, 2020
              </span>
            </p>
          </div>
          <p>
            Loss of income and social safety nets has triggered increased
            domestic violence, sexual abuse, child labour, child marriages and
            impacted children’s mental well being and is creating downward
            spirals that may crush an entire generation.
          </p>
          <p>
            Socio-economically weaker families have had to live in a locked-down
            condition ever since the pandemic began. Increasing pressures to
            provide for the family’s essential needs often makes the child’s
            education first casualty, creating a downward spiral that has severe
            ramifications for the child, the household and the country on the
            whole.
          </p>
          <p>
            We need to strengthen efforts to ensure the revival of economic,
            physical, mental and familial health. Without support, the parents
            and caregivers from the underprivileged communities won’t be able to
            protect and provide for the children in their families.
          </p>
          <p>
            Additionally, there is a great need to empower communities with
            timely information and guidance about government schemes, benefits,
            assistance to help them cope up with new pressures and realities
            imposed by COVID-19.
          </p>
          <p>
            COVID-19 has pushed the lesser privileged families to the brink of
            hopelessness regarding the future of their children. The economic,
            physical, mental, education, learning, and psychosocial gaps are
            critical and severe. Only through a holistic approach can we raise
            hope and give a chance to a child born in a family without means.
          </p>
          <div className="border-l-4 border-khushii-gold bg-[#fbf7f0] px-5 py-5 leading-8 text-khushii-brown">
            <span className="font-bold">
              KHUSHII, a National level non-governmental organisation
            </span>
            , works towards holistic child development using a multi-pronged
            implementation strategy.
          </div>
          <p>
            Since the COVID-19 pandemic, KHUSHII’s commitment towards its
            adopted communities took the shape of a holistic and effective COVID
            response to ensure that children and their families are protected
            and supported.
          </p>
          <p>
            Our frontline workers reached out and connected with our adopted
            communities, learning about challenges that emerged on almost a
            daily basis. The team created an active network using direct
            messaging, phone calls, and social media to learn about where help
            is needed and disseminate information to empower communities.
          </p>
          <Callout title="Touched the lives of 60,000 students during COVID-19" />
          <p>
            Essential supplies such as dry rations, hygiene kits and basic
            commodities, including medicines, were distributed to the needy.
          </p>
          <Callout title="Biodegradable menstrual hygiene absorbents were distributed to 5,000 adolescent girls and women" />
          <p>
            Addressing the challenge of keeping children learning at home,
            educators at KHUSHII started online classes and outreach through
            telephone. They plan a routine together with the children, have open
            conversations and conduct online activities for them. Alongside,
            they engage with the parents to share tips for supporting
            home-schooling.
          </p>
          <p>
            KHUSHII established two “ADAPT Impact: digitally-enabled community
            learning centres” for children with no access to remote learning.
            The centres provide safe and digitally connected spaces within
            walking distance from children’s homes. Professionals with a
            credible track record manage the centres implementing high-quality
            and culturally competent programming, thus ensuring health, safety
            and continuity of learning for children.
          </p>
          <p>
            As part of the holistic COVID response strategy, we support
            communities with life skills education and mental wellbeing
            workshops through well trained and qualified psychological
            counsellors to help the child and community face new challenges and
            emerging realities.
          </p>
          <p>
            Our “Shiksha Aur Vikas” community development program continues to
            train women and youth under various skill development initiatives to
            prepare them to enter the workforce.
          </p>
          <p>
            Children education and development is impossible to achieve in
            isolation, and it needs a holistic approach, one that involves
            children, their families, the community, schools and other
            stakeholders. We at KHUSHII are working towards making this happen
            for a better future.
          </p>
          <p className="font-bold">
            Together, let’s give a chance to the future - the children of our
            nation
          </p>
        </div>
      </article>

      <ArticleEnd
        title="Education in COVID times: A multi-front issue"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}

const TITLES: Record<string, string> = {
  "manoshakti-early-school-intervention-initiative":
    "ManoShakti: Early school-intervention initiative - Khushii",
  "sensitive-teacher-successful-student":
    "Sensitive Teacher, Successful Student: A Look at Khushii’s ‘Manobal’ - Khushii",
  "unveiling-the-menstrual-enigma-from-taboos-to-empowerment":
    "Unveiling the Menstrual Enigma: From Taboos to Empowerment - Khushii",
  "manoshakti-my-moment-of-joy":
    "“Manoshakti: My Moment of Joy” - Illuminating Young Lives - Khushii",
  yuvashree: "Yuvashree - active learner and passionate about sports - Khushii",
  "dignity-kits": "Dignity kits enrolment & keep girls in school - Khushii",
  "education-in-covid-times":
    "Education in COVID times: A multi-front issue - Khushii",
  "sexual-health-and-reproduction-education":
    "Sexual Health and Reproductive Education - Khushii",
  "a-lost-generation": "A LOST GENERATION & WHAT WE MUST DO - Khushii",
  "khushiis-shre":
    "KHUSHII’s Sexual Health & Reproductive Education (SH&RE) - Khushii",
  savitri: "KHUSHII brings a glimmer of hope to Savitri’s life - Khushii",
  "zero-tolerance-for-bullying":
    "Zero-tolerance for bullying KHUSHII standing against bullying in schools - Khushii",
  "general-duty-attendant":
    "Skill building of Youth through General Duty Attendant Course - Khushii",
};

export default function BlogPost() {
  const { slug } = useParams();

  useEffect(() => {
    document.title =
      (slug && TITLES[slug]) ||
      "Khushii | NGO for Children | Child Welfare NGO in India";
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, [slug]);

  if (slug === "manoshakti-early-school-intervention-initiative") {
    return <ManoshaktiArticle />;
  }

  if (slug === "sensitive-teacher-successful-student") {
    return <ManobalArticle />;
  }

  if (slug === "unveiling-the-menstrual-enigma-from-taboos-to-empowerment") {
    return <MenstrualArticle />;
  }

  if (slug === "manoshakti-my-moment-of-joy") {
    return <JoyArticle />;
  }

  if (slug === "yuvashree") {
    return <YuvashreeArticle />;
  }

  if (slug === "dignity-kits") {
    return <DignityArticle />;
  }

  if (slug === "education-in-covid-times") {
    return <CovidArticle />;
  }

  if (slug === "sexual-health-and-reproduction-education") {
    return <ShreArticle />;
  }

  if (slug === "a-lost-generation") {
    return <LostArticle />;
  }

  if (slug === "khushiis-shre") {
    return <ShreComicArticle />;
  }

  if (slug === "savitri") {
    return <SavitriArticle />;
  }

  if (slug === "zero-tolerance-for-bullying") {
    return <BullyingArticle />;
  }

  if (slug === "general-duty-attendant") {
    return <GdaArticle />;
  }

  return (
    <section className="bg-white px-5 py-20 text-center">
      <p className="text-lg text-khushii-gray">This post is not available.</p>
      <Link
        href="/blog"
        className="mt-6 inline-block text-sm font-medium text-khushii-gold-dark"
      >
        Back to the blog
      </Link>
    </section>
  );
}

