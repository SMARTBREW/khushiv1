import { type ReactNode } from "react";

import { POSTS } from "../Blog";
import Image from "../components/image";
import { ArticleEnd, ArticleTitle } from "./frame";

function Photo({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      className="mx-auto my-8 h-auto w-[70%]"
    />
  );
}

function Box({
  note,
  title = "Let’s Talk!",
  children,
}: {
  note?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-8 border border-black px-6 py-8 md:px-8">
      {note ? <p className="mb-6 block text-sm italic">{note}</p> : null}
      <h3 className="mb-4 text-center text-2xl font-medium">{title}</h3>
      <div className="space-y-4 font-medium">{children}</div>
    </div>
  );
}

function Q({ children }: { children: string }) {
  return <p>{children}</p>;
}

export default function ShreArticle() {
  const relatedHrefs = [
    "/manoshakti-my-moment-of-joy-illuminating-young-lives-through-a-yearlong-program-for-underprivileged-children/",
    "/yuvashree/",
    "/dignity-kits-enhance-enrolment-and-keep-girls-in-school/",
    "/education-in-covid-times-a-multi-front-issue/",
  ];
  const related = relatedHrefs
    .map((href) => POSTS.find((post) => post.href === href))
    .filter((post) => post !== undefined);
  const newer = POSTS.find((post) => post.title.startsWith("Education in COVID"));
  const older = POSTS.find((post) => post.title.startsWith("A LOST GENERATION"));

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/image4.jpg"
          alt="Sexual Health and Reproductive Education"
          width={900}
          height={475}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 text-left text-black md:px-10 md:py-16">
        <div className="mx-auto max-w-[68.75rem] space-y-5 text-[15px] font-light leading-7">
          <ArticleTitle
            title="Sexual Health and Reproductive Education"
            category="Shikshaantra Plus"
            date="August 2, 2021"
          />

          <h2 className="pt-4 text-center text-2xl font-medium">Introduction to SH&RE</h2>
          <p>
            SH&RE (Sexual Health and Reproduction Education) is an initiative that
            seeks to build access to sexual and reproductive healthcare education
            for women from underprivileged communities in India, with an emphasis
            on anganwadi workers and young women from local communities. This
            Handbook, as an extension of the initiative, serves as a guide to
            communicate about sexual and reproductive health in a sensitive,
            culturally aware, and scientifically informed perspective
          </p>
          <p>
            Through the SH&RE Handbook, we will explore topics in women’s sexual
            and reproductive health, starting from the fundamentals: our basic
            anatomy, and how we can speak about our bodies in more sensitive and
            community friendly ways. We also discuss the importance of talking,
            openly and with respect, about sexual and reproductive health in
            India, with a critical focus on consent, wellbeing, and empowerment.
          </p>
          <p>
            This Handbook is a guide to support facilitators of S&RH workshops and
            informational sessions, and can serve as a supplement for facilitators
            engaging directly with women from rural Indian backgrounds. Through
            chapters including “Common STIs and Preventative Methods” and
            “Available Contraceptives and How to Use Them”, the SH&RE Handbook is
            information-focused and individual-centric, focusing on how women can
            be more empowered to seek support, share their experiences and
            opinions, and find wellness and power in their sexual and reproductive
            wellbeing.
          </p>

          <h2 className="pt-16 text-center text-xl font-semibold">
            Chapter 1: Talking about Sexual and Reproductive Health
          </h2>
          <p>
            Sexual and reproductive health is often difficult to talk about - not
            only because of societal stigmas, but also due to a lack of
            information and awareness.
          </p>
          <p>
            But in India, with a population that is almost 25% youth and
            teenagers, it is integral to our wellbeing as a society to discuss
            sexual and reproductive health concerns for what they are: health
            concerns, important to every single individual, regardless of their
            gender or sexual orientation.
          </p>
          <Box note="Facilitator’s note: use these questions as a means of starting and encouraging open discussions. There are no right or wrong answers; the goal is to create a space in which women can share their experiences and beliefs openly and safely.">
            <Q>Why do you think that talking about sexual and reproductive health can be difficult?</Q>
            <Q>What are some experiences you have had in talking about sexual and reproductive health?</Q>
          </Box>
          <h3 className="text-left text-2xl font-medium">
            What is sexual and reproductive health?
          </h3>
          <p>
            According to the UNFPA (United Nations Population Fund), sexual and
            reproductive health can be defined as “a state of complete physical,
            mental and social well-being in all matters relating to the
            reproductive system.”
          </p>
          <p>
            The reproductive system is a set of hormones involved in reproductive
            functioning, i.e. the process by which two individuals produce
            offspring. In humans, this involves stages including menstruation,
            conception, birth, postpartum care, and general sexual wellbeing. Our
            major reproductive organs include:
          </p>
          <ul className="list-['-_'] space-y-2 pl-10">
            <li>
              In the <strong className="font-medium">male reproductive system</strong>{" "}
              the penis, the testes, the vas deferens, the prostate gland, the
              seminal vesicle, and the urethra
            </li>
            <li>
              In the <strong className="font-medium">female reproductive system</strong>
              the vagina, the cervix, the ovaries, the fallopian tube, and the uterus
            </li>
          </ul>
          <h3 className="text-left text-2xl font-medium">
            Why should we talk about sexual and reproductive health?
          </h3>
          <Photo src="/images/blog/shre-image8.jpg" width={1600} height={854} />
          <p>
            Most of our reproductive organs are located inside the body, and hence
            are imperceptible to us. But that doesn’t mean they’re not there and
            that they don’t require care!
          </p>
          <p>
            One of the most important aspects of talking about sexual and
            reproductive health is addressing what the ideal functioning of each
            organ is, and how any obstacles in that can be mitigated through
            medical and/or personal care.
          </p>
          <p>
            It is important to place an emphasis on <em>wellness</em> and{" "}
            <em>satisfaction</em> when speaking about SH&RE, particularly in the
            context of the individual
          </p>
          <Box note="Facilitator’s note: By placing an emphasis on the ‘YOU’ of these questions, you can encourage the participants to think about what is most important to them, and what is most significant about their own experiences.">
            <Q>Why do you think talking about sexual and reproductive health is important?</Q>
            <Q>What do you believe falls under sexual and reproductive health?</Q>
          </Box>
          <h3 className="text-left text-2xl font-medium">
            How can we talk about sexual and reproductive health?
          </h3>
          <p>While speaking about sexual and reproductive health, it is important to keep the following in mind:</p>
          <ul className="list-disc pl-10">
            <li>
              <em>Using language that is easy, accurate, and also community-sensitive</em>
            </li>
          </ul>
          <p>
            An introductory conversation about the agenda of SH&RE education as
            well as terminology that the local community is comfortable using is
            essential. It is important to adapt our approach in discussing
            personal information by choosing language that is unbiased in terms of
            gender and socioeconomic differences.
          </p>
          <p>
            Take adequate measures to ensure that the community is not offended or
            made uncomfortable by the terminology used through the discussions.
            For this, it is essential to <strong className="font-medium">ask</strong>,
            in a curious and respectful manner, instead of <em>making assumptions.</em>
          </p>
          <p>
            In this process, it is also important to remain specific and
            scientifically accurate. The use of infographics and illustrations (as
            above) can be very helpful in sharing information to avoid
            miscommunication.
          </p>
          <Box note="Facilitator’s note: Take note of this information and keep it in mind while discussing further concepts in S&RH.">
            <Q>What are ways in which your community refers to reproductive organs?</Q>
            <Q>What terms are you comfortable with using?</Q>
          </Box>
          <ul className="list-disc pl-10">
            <li>
              <em>Maintain a conduct of respect and confidentiality</em>
            </li>
          </ul>
          <p>
            At the beginning of every conversation, reiterate that the
            confidentiality of every participant will be maintained and that they
            should practice respect towards each other not only in the duration of
            the conversation, but also beyond it. If possible, one on one
            consultations can also be offered to create a safe space for
            participants who may not be comfortable speaking about their concerns
            and queries in public.
          </p>
          <ul className="list-disc pl-10">
            <li>
              <em>Share educational resources that can be accessed by the participants in their own time</em>
            </li>
          </ul>
          <p>
            It can be very useful to provide resources (in the form of fact
            sheets, helpline lists, and so on) that participants can read,
            understand, and learn from in their own time, considering they might
            not want to share information regarding their personal lives and
            experiences with the group. These resources should be factually
            accurate and easy to follow, and available freely to the participants.
          </p>
          <ul className="list-disc pl-10">
            <li>
              <em>Remember that the goal of S&RH education is to empower individuals</em>
            </li>
          </ul>
          <p>
            The conversations, thus, should put the individual at the center,
            while also keeping in mind that each individual is impacted by an
            ecosystem of sociological, genetic, and biological factors. It is
            helpful to employ language that is empowering rather than apprehensive
            - remind the participants that regardless of what challenge they are
            facing, there is help available, and that they have a support system
            with them to access it.
          </p>
          <Box title="Quiz">
            <ol className="list-decimal space-y-2 pl-6 font-light">
              <li>Name three parts of the female reproductive system.</li>
              <li>How can we be more sensitive while talking about sexual and reproductive health?</li>
              <li>What is the goal of talking about sexual and reproductive health?</li>
            </ol>
          </Box>

          <h2 className="pt-16 text-center text-xl font-semibold">Chapter 2: What is Consent?</h2>
          <p>
            Consent is generally defined as a free, voluntary, independent, and
            informed agreement by an individual or a party without any external,
            psychological, physical, or institutional pressure and/or threat to
            them coercing them into an action.
          </p>
          <p>A simpler way of saying this is that consent is when you freely say yes.</p>
          <Photo src="/images/blog/shre-image1.png" width={500} height={500} />
          <Box note="Facilitator’s note: Conversations about consent can be difficult and distressing for some. Please provide a warning beforehand, and allow the participants to decide whether they wish to engage with the concepts or not. In all questions, highlight feelings of safety, empowerment, and belonging.">
            <Q>Why do you think voluntary, consensual agreement is important?</Q>
            <Q>What do you think the word “freely” means for you?</Q>
            <Q>What do you think are some ways in which we can define “consent”?</Q>
          </Box>
          <h3 className="text-left text-2xl font-medium">Freely:</h3>
          <p>
            This means that consent is not borne out of obligation, marital duty,
            emotional pressure, guilt, or another person’s expectations/demands of
            you - but only when you and your partner both individually,
            independently, enthusiastically agree to intimacy.
          </p>
          <p>
            Consent is a <strong className="font-medium">voluntary agreement</strong>{" "}
            to engage in an activity - it is important to establish free and
            enthusiastic consent{" "}
            <strong className="font-medium">before, during, and throughout</strong>{" "}
            sexual activity so as to ensure that everyone involved is experiencing
            pleasure and so as to ensure that the act of physical intimacy is not
            a difficult, painful, or traumatizing act for either party.
          </p>
          <p>
            In India, with its high rates of sexual violence and sexual coercion,
            it is particularly important for young girls and women of all ages to
            be aware of their right to consent and for us to know what
            specifically it means to be a participant in the healthy, wholesome,
            free activity of intimacy that does not violate or breach individual
            boundaries - be they physical or psychological.
          </p>
          <Box>
            <Q>Why do you think boundaries - physical and psychological are important?</Q>
            <Q>How do you think we can talk about our boundaries with our friends, families, and peers?</Q>
            <Q>Do you think it is important to keep checking in and communicating with our partners about their comfort and boundaries?</Q>
          </Box>
          <p>
            Saying yes to one thing, for example, does not always mean saying yes
            to everything else that follows.{" "}
            <strong className="font-medium">
              A partner who respects the other’s boundaries is a partner capable
              of checking in, communicating, and respecting the nuances of another
              individual’s needs and desires.
            </strong>
          </p>
          <p>
            Consent explicitly means that everyone is able to demonstrate - {" "}
            <strong className="font-medium">through both actions and words</strong>{" "}
            - that they are ready to participate in sexual activity voluntarily.
            It is important for both parties to give and receive consent in order
            for physical intimacy to be pleasurable and fulfilling.
          </p>
          <div className="my-8 border border-black px-6 py-8 md:px-8">
            <p className="mb-4 text-sm italic">
              Facilitator’s note: These conversations can be made more engaging
              through activities. For instance,
            </p>
            <ul className="list-['-_'] space-y-2 pl-6 text-sm italic">
              <li>Ask the participants to draw themselves at the center of the sheet with the people in their life around them</li>
              <li>Have them draw boundaries around each one, discussing what is permissible and desired with each individual</li>
              <li>Highlight that boundaries and expectations exist in all our social interactions, and hence are equally important in physically intimate relationships</li>
            </ul>
            <h3 className="my-4 text-center text-2xl font-medium">Let’s Talk!</h3>
            <div className="space-y-4 font-medium">
              <Q>What are some ways in which you express consent in your individual interactions?</Q>
              <Q>What are some words that you think effectively express consent?</Q>
            </div>
          </div>
          <p>
            A lack of consent, or engaging in intercourse that women or girls are
            pressured into, is a form of violence that can range from passively
            coercive to actively aggressive.{" "}
            <strong className="font-medium">
              Consent is paramount to an individual’s bodily autonomy and freedom
            </strong>{" "}
            - it emphasizes that we have the final word, always, on what happens
            to or with our bodies. This is neither determined by our past
            decisions, our history, the status of our relationships, or any
            emotional burdens placed on us by anyone else’s desires or demands.
          </p>
          <Box note="Facilitator’s note: Remember to be empathetic, sensitive, and respectful of everything shared by the participants, and to manage disagreements through a strong culture of openness in the workshops.">
            <Q>Do you think consent is important in relationships as well as between two married people?</Q>
            <Q>How do you talk about marital relationships in your community?</Q>
            <Q>Do you feel like you can talk about consent with your community?</Q>
          </Box>
          <p>
            In India, it is particularly important to highlight this given the
            complex and as-yet invisibilized nature of consent in marital
            relationships and domestic spaces. It is important to know that you
            are allowed and even encouraged to say ‘no’, ‘stop’, or even ‘never’
            in these spaces and your partner and/or cohabitant must respect your
            decision.
          </p>
          <p>Consent is not determined by</p>
          <ul className="list-disc space-y-2 pl-10">
            <li>What you have consented to in the past</li>
            <li>Whether or not you have a prior relationship with your partner</li>
            <li>Whether you are married to your partner or not</li>
            <li>What you are wearing or were wearing at any point</li>
            <li>Where you were geographically or at what time</li>
          </ul>
          <h3 className="text-center text-2xl font-medium">
            It is, instead, always clearly communicable assent - to agree or to
            even say, ‘Let’s try this but we will stop if either one of us gets
            uncomfortable.’
          </h3>
          <p>
            Consent is nuanced - like most human relationships and actions, we
            must learn to discern intent and emotion while engaged in sexual
            activity, and this discernment is even more important if one person is
            in a position of power over the other.
          </p>
          <Box>
            <Q>What do you think is a breach of consent?</Q>
            <Q>What are some situations you can think of wherein an individual’s consent might be breached or neglected?</Q>
          </Box>
          <h3 className="text-center text-2xl font-medium">Breach of consent</h3>
          <p>
            Breach of consent can occur in any number of instances but can most
            easily be defined by thinking about the following points and relating
            them specifically to the individual’s experience. Coercion/harassment/or
            breach of consent is any situation of a physical act by an individual
            towards another individual that is:
          </p>
          <ul className="list-disc space-y-2 pl-10">
            <li>Not welcome</li>
            <li>Not asked for</li>
            <li>Not explicitly agreed to i.e. you did not specifically say it was okay to do this</li>
            <li>Makes you feel uncomfortable</li>
          </ul>
          <Box>
            <Q>Do you think it is always possible for an individual to give conscious consent?</Q>
            <Q>What are some situations in which you think a person should not be held to decisions because they are not able to make conscious decisions?</Q>
          </Box>
          <p>
            It is important to know that the{" "}
            <strong className="font-medium">capacity for conscious consent</strong>{" "}
            is crucial and determined by several factors for situations wherein an
            individual may inadvertently consent to something while under the
            influence of substances, ill, otherwise experiencing symptoms of
            psychological concern, or experiencing pain, traumatic episodes, and
            discomfort.
          </p>
          <ul className="list-disc space-y-2 pl-10">
            <li>
              Consenting under the influence of alcohol, for example, is a
              contentious matter because alcohol undoes the individual’s capacity
              for coherency.
            </li>
            <li>
              Similarly, survivors of date-rape assault, wherein they have been
              under the influence of a drug they consumed unknowingly and
              thereafter been coerced into sexual activity, are eligible to take
              legal action because their capacity for conscious consent was
              compromised by the perpetrator.
            </li>
            <li>
              Even in domestic situations, as covered in our chapter on
              Recognizing the Signs of Domestic Abuse, violations of consent can
              come about as individual or repeated instances of sexual coercion or
              assault, and in such cases it is often difficult for women to seek
              social or institutional help. In such situations, and if feeling
              unsafe in one’s domestic space and unable to approach a friend or a
              trusted associate, it is advisable to contact the helplines provided
              at the bottom of this handbook for confidential and legal outlets of
              aid.
            </li>
          </ul>
          <p>
            In instances of compromised consent, the survivor is{" "}
            <strong className="font-medium">completely eligible to take legal action</strong>{" "}
            against someone who has violated their consent or their boundaries in
            any way, shape, or form be it verbally or physically or through the
            enforcement of soft-power such as inappropriate advances or demanding
            physical relationships in return for institutional/monetary gain.
          </p>
          <p>
            Moreover, there are several legal options and laws that determine the
            nature of consent in India so as to protect individuals from being
            coerced or pressured.
          </p>
          <Box title="Quiz">
            <Q>Do you think that individuals have an age at which they can make fully informed decisions for their own well-being?</Q>
            <Q>Do you think children and minors should be counted as individuals capable of giving informed consent?</Q>
            <Q>What are some factors you think might prevent minors from giving informed consent?</Q>
          </Box>
          <h3 className="text-left text-2xl font-medium">What is the Age of Consent?</h3>
          <p>
            The age of consent is the age at which an individual is considered{" "}
            <strong className="font-medium">legally competent</strong> to consent to
            sexual activity of any nature. Minors (under 18 years old), for
            example, are generally legally considered too young to give
            enthusiastic and informed consent and to understand the consequence of
            their actions, particularly with regard to sexual intercourse, and
            thus the Indian law forbids sexual activities with or even amongst
            children below a certain age.
          </p>
          <p>
            The age of consent in India has seen a number of revisions and
            changes. In 1860, when the Penal Code was instituted, the age of
            consent was solely for girls and was only at 10 years old. In 1891
            this increased to 12, in 1925 it was revised once more to 14, then
            again to 16 in 1840, and yet again to{" "}
            <strong className="font-medium">18</strong> in 2013.
          </p>
          <p>
            What this means socially is that sexual activity with a minor below
            this age - known as the{" "}
            <strong className="font-medium">‘statutory minimum age’</strong> - in any
            capacity is considered ‘rape’. In 2012, the age of consent was revised
            to make the law a gender-neutral concept and to include the very real
            concept of sexual abuse of minor boys. Today, the Protection of
            Children from Sexual Offences Act has affixed the age of consent for
            all children to 18 years of age.
          </p>
          <div className="my-8 border border-black px-6 py-8 md:px-8">
            <h3 className="mb-4 text-center text-2xl font-medium">Let’s Talk!</h3>
            <div className="space-y-4 font-medium">
              <Q>Do you think that individuals have an age at which they can make fully informed decisions for their own well-being?</Q>
              <Q>Do you think children and minors should be counted as individuals capable of giving informed consent?</Q>
              <Q>What are some factors you think might prevent minors from giving informed consent?</Q>
              <Q>What is the age of consent in India?</Q>
            </div>
            <ol className="mt-3 list-decimal space-y-1 pl-6">
              <li>14</li>
              <li>16</li>
              <li>18</li>
              <li>21</li>
            </ol>
            <p className="mt-4 font-medium">What is the age of consent in India?</p>
            <ol className="mt-3 list-decimal space-y-1 pl-6">
              <li>18</li>
              <li>19</li>
              <li>14</li>
              <li>21</li>
            </ol>
            <p className="mt-4 font-medium">What is the legal age of marriage for boys in India?</p>
            <ol className="mt-3 list-decimal space-y-1 pl-6">
              <li>19</li>
              <li>21</li>
              <li>21</li>
              <li>25</li>
            </ol>
          </div>
          <p>
            At home, at workplaces, at social gatherings, or even on the street as
            sexual harassment in the form of catcalling, commenting on one’s body
            in a public space, groping, unwanted physical contact in spaces such
            as metros and crowded public transport, - {" "}
            <strong className="font-medium">
              it is important to recognise and affirm for ourselves that we are
              always and completely eligible to voice our discomfort and uphold
              our personal boundaries.
            </strong>
          </p>

          <h2 className="pt-16 text-center text-xl font-semibold">
            Chapter 3: Basic SRH Hygiene and Wellbeing
          </h2>
          <p>
            There is a prevalent, overpowering stigma attached to the term ‘sex’,
            particularly in India, which drastically reduces the scope for nuanced
            dialogue and discussion on sexual awareness and education, making
            conversation practically taboo and further perpetuating women’s
            subjugation and disenfranchisement.
          </p>
          <p>
            While sex in itself is only vaguely alluded to in common parlance,
            issues such as abortion, contraceptives, STIs, pregnancy related
            complications, and family planning are forbidden topics of
            conversation, relegated to whispers and rumours - which, in turn,
            leads to misinterpretation of facts, dissemination of incorrect
            information, polarisation of mindsets, making sex itself a deeply
            uncomfortable topic for most people. Given this, it is all the more
            necessary to treat the topic of SRH as a concrete, developmental goal,
            and to find ways of navigating the same efficiently and sensitively.
          </p>
          <Photo src="/images/blog/shre-image2.png" width={276} height={183} />
          <p>
            It is important to recognise the different areas that are covered
            within the ambit of SRH, in order to make the correct choices for
            one’s physical and mental wellbeing (which, inevitably, implies taking
            agency over one’s own body.) Taking care of SRH also implies
            addressing physical, emotional, mental and social well-being in
            relation to sexuality. These practices include:
          </p>
          <ol className="list-decimal space-y-3 pl-10">
            <li>
              <strong className="font-medium">
                Ensuring the availability of safe, functional and private toilets,
                with basic amenities
              </strong>{" "}
              in order to facilitate the disposal of menstrual hygiene products.
              Lack of safe sanitation facilities{" "}
              <strong className="font-medium">exposed women to violence,</strong>{" "}
              especially due to the nature of gender roles that demand that women
              travel long distances to bring water and other household items in
              rural communities.
            </li>
            <li>
              More often than not, young girls have difficulty{" "}
              <strong className="font-medium">
                managing menstruation without proper guidance,
              </strong>{" "}
              due to lack of awareness about the biological causes of the process
              and lack of access to sufficient resources such as running water and
              separate toilets. In rural areas in particular, girls have to resort
              to using reusable clothes (as they face difficulties in using and
              washing sanitary products; most of which are not available easily).
              This also results in prolonged absences from school and takes a
              psychological toll on their mental wellbeing - hence there is a
              strong need for sexual and reproductive health programmes,
              particularly with a focus on menstrual hygiene, to be sensitively
              implemented in rural areas.
            </li>
            <li>
              <strong className="font-medium">Maintaining psychosocial health</strong>{" "}
              includes finding ways to combat internalized misconceptions
              surrounding menstruation and sexual intercourse. It is especially
              important to provide counselling to young girls who may be
              susceptible to sexual coercion (often as favours for basic needs for
              survival), to allow them to take autonomy over their own bodies and
              understand the growing changes within them, to reduce the risk of
              unwanted pregnancies and health complications
            </li>
            <li>
              <strong className="font-medium">
                Increasing awareness and access to contraceptive methods, to
                prevent potential infections.
              </strong>{" "}
              Girls need to be provided with free resources and services, as and
              when possible, to prevent the risk of resorting to unsafe,
              makeshift, temporary material for use in private parts, and to seek
              support in the case of emergency pregnancies; they also need to be
              educated on the kind of risks that can lead to urogenital and
              vaginal infections.
            </li>
          </ol>
          <Photo src="/images/blog/shre-image7.png" width={539} height={341} />
          <Box note="Facilitator’s note: These can be noted down and addressed with supplemental information.">
            <Q>What are some misconceptions regarding sexual health that you have heard of?</Q>
            <Q>Who do you think can be done to promote awareness about menstrual health?</Q>
          </Box>
          <p>
            On an infrastructural level, there are many measures that can be taken
            on a collective basis to ensure that basic SRH standards are met for
            all individuals in the country.
          </p>
          <h3 className="text-left text-2xl font-medium underline underline-offset-4">
            Recommendations for Self-Care Interventions (as provided by WHO):
          </h3>
          <ol className="list-decimal space-y-6 pl-10">
            <li>
              <h4 className="text-left text-xl font-medium">Environmental considerations</h4>
              <ul className="mt-2 list-[circle] space-y-2 pl-6">
                <li>Promoting methods of waste disposal that are both safe and secure.</li>
                <li>
                  Working towards environmentally preferable purchasing (EPP) of
                  self-care products; this means keeping mind supplies that can be
                  recycled, are less wasteful and do not negatively impact the
                  environment.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Financing and economic considerations</h4>
              <ul className="mt-2 list-[circle] space-y-2 pl-6">
                <li>
                  Health services and self-care interventions must be, first and
                  foremost, of good quality (in accordance with medical ethics,
                  non-discriminatory, and avoiding perpetuating stigma and
                  coercion), and should be made available and affordable to
                  vulnerable populations.
                </li>
                <li>
                  It should be mandatory for all individuals and communities to
                  have access to health and self-care interventions, without
                  compromising on financial considerations.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Training needs of health-care providers</h4>
              <ul className="mt-2 list-[circle] space-y-2 pl-6">
                <li>
                  Existing good practice statement on values and competencies of
                  the health workforce to promote self-care interventions
                </li>
                <li>
                  Health-care workers should receive appropriate recurrent
                  training and sensitization to ensure that they have the skills,
                  knowledge and understanding to provide services for adults and
                  adolescents from key populations based on all persons’ right to
                  health, confidentiality and non-discrimination.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">
                Implementation considerations for vulnerable populations
              </h4>
              <ul className="mt-2 list-[circle] space-y-2 pl-6">
                <li>
                  Vulnerable populations have a right to experience pleasurable
                  and fulfilling sex lives, and hence SRHR interventions have to
                  be designed to suit people’s particular needs across
                  circumstances in a timely maner, while adhering to international
                  guidelines.
                </li>
                <li>It must be ensured that such populations have access to the full range of reproductive health options available.</li>
                <li>It must be ensured that such populations have access to the full range of reproductive health options available.</li>
                <li>
                  Governments should actively work to decriminalize behaviours
                  such as drug use/injecting, sex work, same-sex activity and
                  nonconforming gender identities.
                </li>
                <li>
                  Current consent policies must be reviewed and revised to make
                  sure they are up to date in order to best serve the needs of
                  adolescents, and reduce age-related barriers to HIV services.
                </li>
                <li>
                  Sexual and reproductive health services, including crucial
                  information about contraceptives and abortion, must be provided
                  for adolescents without mandatory guardian authorization.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            When it comes to improving and maintaining sexual and reproductive
            health, efforts can begin at home; attending to the body on a regular
            basis, taking necessary precautions and maintaining a healthy regime.
            Some simple recommendations in this regard include:
          </p>
          <ol className="list-decimal space-y-4 pl-10">
            <li>
              <h4 className="text-left text-xl font-medium">Testing</h4>
              <p>
                It is strongly recommended that sexually active people take tests
                for HIV and other sexually transmitted diseases, especially if
                they have engaged in unprotected sex (vaginal, oral or anal).
                Another factor is that most STIs don’t usually have obvious
                symptoms, and the tests available are highly accurate, and can
                immediately inform if the person is at risk.
              </p>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Knowing Birth Control Options</h4>
              <p>
                Besides the hormonal birth control, which is the most common,
                there are other options available in different forms - including
                the IUD (intrauterine device), pill, patch, shot; being well
                informed about the kind of effects they have will be beneficial in
                making the right choice for your body and circumstances. There are
                also barrier methods such as condoms, which are practically a must
                because not only do they help prevent unwanted pregnancies but
                also STIs.
              </p>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Scheduling visits to clinic</h4>
              <p>
                Be it for family planning or general wellbeing, such check-ups are
                necessary to keep track of vital signs (including services such as
                PAO tests, cervical screening tests and screening for sexually
                transmissible infections), and seek clarifications on topics such
                as birth control, sexual health or anything related to the body
                that maybe difficult to talk about in a different setting.
              </p>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Communicate with your Partner</h4>
              <p>
                When it comes to safe sex, it is extremely important that
                particpating partners are on the same page and share the same
                goals. Furthermore, it helps to be aware of each other’s bodies -
                looking out for signs of a sore, blister, rash, or discharge can
                come to be very useful in identifying potential infections.
              </p>
            </li>
          </ol>
          <Box title="Quiz">
            <ol className="list-decimal space-y-2 pl-6 font-light">
              <li>What are some policy measures that can be implemented at the state level in order to maintain good SRH?</li>
              <li>What precautions can we take to ensure good SRH hygiene and wellbeing?</li>
              <li>Why is it important to SRH practices?</li>
            </ol>
          </Box>

          <h2 className="pt-16 text-center text-xl font-semibold">
            Chapter 4: Common STIs and Preventative Methods
          </h2>
          <p>
            STIs (Sexually Transmitted Infections) are a major cause for concern
            in a country like India, where sex education is minimal at best. STIs
            are usually spread by person-to-person sexual contact, and are a cause
            for worry because of their ability to be extremely contagious, as well
            as the serious long-term consequences they can have if not treated in a
            timely manner.
          </p>
          <p>
            In addition to person-to-person sexual contact, several STIs and STDs
            (Sexually Transmitted Diseases) can also be transmitted through blood
            transfusions, tissue donations, and even from mother to child during
            pregnancy and childbirth.
          </p>
          <p>
            In 2016, the World Health Organization (WHO) estimated that{" "}
            <a
              href="https://khushii.org/sexual-health-and-reproduction-education/"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              approximately 1 million people contract STIs on a daily basis.
            </a>{" "}
            Further studies have shown that, every year,{" "}
            <a
              href="https://khushii.org/sexual-health-and-reproduction-education/"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              approximately 6% of the Indian adult population contracts STIs
            </a>{" "}
            and reproductive tract infections (RTIs). In a country of 1.36 billion
            people{" "}
            <a
              href="https://khushii.org/sexual-health-and-reproduction-education/"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              (according to a census conducted in 2019)
            </a>
            , this is an alarming figure - according to this statistic, roughly 81
            million people in India contract an STI every year. Given this, STIs
            are an incredibly serious problem in India that needs to be addressed
            immediately.
          </p>
          <Box note="Facilitator’s note: Feel free to discuss what sexually transmitted illnesses are as a part of this conversation - again, there are no right or wrong answers!">
            <Q>What are some of the STIs you might have heard of?</Q>
            <Q>Who do you think is most affected by STIs?</Q>
          </Box>
          <p>In India, the most commonly reported STIs and STDs (Sexually Transmitted Diseases) are as follows:</p>
          <ul className="list-disc space-y-4 pl-10">
            <li>
              <strong className="font-medium">Human Papillomavirus (HPV):</strong> HPV
              is one of the most commonly transmitted STIs, which spreads through
              person-to-person contact. While there are over a 100 types of HPV,
              approximately 14 of these types are known to cause serious health
              problems like cervical cancer. Additionally, non-cancerous types of
              HPV are also known to be the cause of other issues like genital
              warts, and can even cause the development of tumorous warts lining
              the respiratory tract. While there is no treatment for HPV itself,
              the HPV vaccine and the Gardasil 9 vaccine are effective in
              prevention of the disease, and the genital warts caused by HPV are
              routinely treated using standard dermatological procedures like using
              electric current or liquid nitrogen. Cancerous warts, however, are
              usually treated by chemotherapy, radiation therapy, or even surgery.
            </li>
            <li>
              <strong className="font-medium">Genital Herpes:</strong> Genital herpes
              is another STI that is fairly common. The infection is known to cause
              the formation of blisters and sores that are painful and pus-filled.
              There are two types of the herpes simplex virus that cause different
              illnesses - the HSV-1 virus which usually causes cold sores, and the
              HSV-2 virus which causes genital herpes. If left untreated, herpes
              can lead to severe health damage including swelling of lymph nodes,
              headaches, body pain, fever, and even blindness, brain damage, and
              death for babies who contract the virus during pregnancy or
              childbirth. While contemporary treatments using antiviral drugs like
              acyclovir (Zovirax), famciclovir (Famvir), and valacyclovir (Valtrex)
              helps treat symptoms of genital herpes, the herpes simplex virus
              itself cannot be cured.
            </li>
            <li>
              <strong className="font-medium">Syphilis:</strong>Unlike HPV and genital
              herpes which are viral infections (caused by a virus), syphilis is a
              common STI caused by the bacteria Treponema pallidum. Usually, the
              most common symptom of syphilis is the development of a small sore on
              the genitals, anus, or inside the mouth. This makes it easy to ignore
              for patients, and hence syphilis is an infection that is difficult to
              diagnose. If left untreated, the STI can cause severe damage to vital
              organs like the brain and the heart in the long run. However, it is
              comparatively less contagious than herpes and HPV because it only
              spreads through direct contact with the syphilitic sores, which are
              called chancres. One of the most effective treatments for syphilis is
              the use of penicillin, although doxycycline, azithromycin, and
              ceftriaxone are also used to treat patients who are allergic to
              penicillin.
            </li>
            <li>
              <strong className="font-medium">Chancroid:</strong>Another common
              bacterial STI, similar to syphilis, is chancroid. Caused by the
              bacteria <em>Haemophilus ducreyi,</em> the most telling symptom of
              chancroid is the formation of open sores in the genital region that
              are often like ulcers. These open sores may often bleed or produce
              secretions that spread the infection. Additionally, skin-to-skin
              contact with someone infected with chancroid also is a mode of
              transmission of the disease. Untreated cases of chancroid can lead to
              permanent scarring in the gential region, in addition to increasing
              the risk of contracting other STIs. Studies show that people infected
              with chancroid are more likely to contract HIV, and also pose a
              higher risk of transmission of HIV. Chancroids are usually treated
              with the use of antibiotics that kill the bacteria that causes the
              ulcers. The most commonly used antibiotics for this are azithromycin,
              ceftriaxone, ciprofloxacin, and erythromycin.
            </li>
            <li>
              <strong className="font-medium">Chlamydia:</strong> Chlamydia is another
              bacterial STI that is commonly prevalent in India. Unlike most other
              STIs, people infected with chlamydia often show no symptoms in the
              early stages of infection. However, the disease grows more deadly and
              can cause drastic health damage if left unchecked. In the later
              stages, common symptoms of chlamydia include burning sensation during
              urination, yellow/green discharge from the penis, testicular and
              abdominal pain, inflammation of the cervix, bleeding between periods,
              pain during intercourse, and vaginal discharge. In women, chlamydia
              can also reach the fallopian tubes and cause pelvic inflammatory
              disease, which requires urgent medical attention. Treating chlamydia
              is relatively simple, and antibiotics like azithromycin and
              doxycycline are routinely used to treat the infections.
            </li>
          </ul>
          <Box>
            <Q>Why do you think it’s important to learn about the symptoms of different STIs?</Q>
            <Q>Do you think STIs are dangerous? Why, or why not?</Q>
          </Box>
          <p>
            While these are the most common STIs in India, the lack of education
            about sexual and reproductive health amongst the Indian population
            makes them extremely vulnerable to less common STIs as well. A major
            example of this is India’s struggle with HIV - a disease that had
            reached peak contamination levels in the early 2000s. Studies show
            that in 2019, there were roughly 69,000 new cases of HIV, with an
            estimated national figure of 23 lakh people living with HIV in the
            country.
          </p>
          <p>
            Looking at these statistics, it is clear that the first step towards
            combating the spread of STIs and STDs in the country must necessarily
            be an increase in resources, opportunities, and access to sexual and
            reproductive health education. This is something that must not only be
            supported by the government, but must be made mandatory in school
            curriculums across the country to ensure that people are taught about
            STIs, how to recognize them, how to prevent them, how to treat them,
            and how to manage them from a young age.
          </p>
          <Box>
            <Q>What do you think are some ways to prevent STIs?</Q>
            <Q>What role does education play in preventing the spread of STIs?</Q>
          </Box>
          <p>
            When it comes to preventing STIs, there are several things that one
            can do to protect themselves and the people around them from these
            contagious diseases. Some of the most effective and common ways of
            preventing STIs are as follows:
          </p>
          <ul className="list-disc space-y-3 pl-10">
            <li>
              <strong className="font-medium">Practicing safe sex:</strong> It is
              important to remember to practice safe sex if you are sexually
              active - especially if you are engaging with multiple sexual
              partners. Using latex condoms during sexual intercourse is an
              extremely effective way of reducing the risk of both, unwanted
              pregnancy as well as STIs.
            </li>
            <li>
              <strong className="font-medium">Maintaining hygiene:</strong>Make it a
              point to always wash your genitals before and after engaging in
              sexual activity. This helps ensure that your genitals are always
              clean and healthy. Another thing to remember is to avoid sharing
              towels and undergarments as they can also cause unwanted contact
              with contagious STIs. Additionally, another effective precaution is
              to wash your hands regularly.
            </li>
            <li>
              <strong className="font-medium">Regular testing and screening:</strong>
              If you are sexually active, make it a point to regularly get
              yourself tested and screened for common STIs. Encourage your sexual
              partner(s) to do the same, and make sure to discuss test results and
              treatment strategies if needed.
            </li>
            <li>
              <strong className="font-medium">Vaccinations:</strong> Vaccinations to
              prevent common STIs are easily available and administered in most
              hospitals, clinics, OB-GYN clinics, and urologist clinics. The
              Gardasil 9 vaccine is effective in prevention of 9 types of HPV,
              penicillin has been found to be extremely effective in treating
              cases of syphilis, chancroid can be effectively treated through
              medication or surgery, and chlamydia is easily treated with
              antibiotics. The only STI that proves to be difficult is herpes,
              because there is no cure for the disease, and treatment is largely
              oriented towards treating the symptoms of herpes.
            </li>
          </ul>
          <p>
            In India, sex is a topic of conversation that is surprisingly
            considered to be taboo and better avoided in discussions - a fact that
            is all the more rich in irony when we take a moment to remember that
            India is the largest democracy in the world, the second most populous
            nation on planet. Not only is sex education largely missing from
            school curriculums and educational programs at any level in the
            country, simply engaging in conversations on sex, menstrual health,
            and reproductive health often comes with severe social ridicule and
            rebuke.
          </p>
          <Photo src="/images/blog/shre-image4b.jpg" width={900} height={475} />
          <Box>
            <Q>Why do you think people avoid talking about STIs?</Q>
            <Q>Do you think school should teach you about STIs?</Q>
          </Box>
          <p>
            With most of the Indian population lacking access to adequate
            resources and opportunities to educate themselves about safe and
            healthy sexual practices, sexual and reproductive health continues to
            be much-ignored aspect of healthcare, wellbeing, and empowerment
            initiatives - something that often disproportionately disadvantages
            women who are “traditionally” discouraged from navigating their own
            journey with menstruation, which is considered an “impure” and taboo
            topic in Indian society and culture.
          </p>
          <p>
            While the above methods are indeed extremely effective in preventing
            and treating common STIs, it is vital to understand what are sexually
            transmitted infections, how do they spread, what are the symptoms, and
            what are the risks associated in order to truly and effectively treat
            an STI. In this light, the most effective (and the most important)
            weapon against a widespread outbreak of STIs is education. In the
            absence of larger structures of support and education with regards to
            sexual and reproductive health, while it is important to adhere to the
            above preventative measures as much as possible, it is equally
            important to learn more about different sexually transmitted diseases,
            how to identify their symptoms, and how to prevent and treat them.
          </p>
          <Box title="Quiz!">
            <p className="font-light">4. What does STI stand for? What are some common STIs?</p>
            <p className="font-light">5. What precautions can we take to prevent STIs?</p>
            <p className="font-light">6. Why is it important to discuss STIs?</p>
          </Box>

          <h2 className="pt-16 text-center text-xl font-semibold">
            Chapter 5: Available Contraceptives and How to Use Them
          </h2>
          <p>
            As one becomes more educated about issues relating to sexuality and
            sexual health it becomes necessary to educate oneself about
            contraception. Growing up, a false idea regarding contraceptives
            prevails - that they are only for preventing pregnancies. While this
            is in part the truth, this view leaves out the immensely important
            point that contraceptives are key to preventing the transmission of
            STIs. In other words, knowing how to use contraceptives is key to
            maintaining your sexual health.
          </p>
          <p>
            There are a wide range of contraceptives available in India, from
            condoms and pills to IUDs and diaphragms. While preference does play a
            role in determining what contraceptive one uses, it is important to
            consider that some contraceptives are effective in different ways than
            others. Let’s take a look.
          </p>
          <Box>
            <Q>Which STIs can be prevented by the use of contraceptives?</Q>
            <Q>What contraceptives are you aware of?</Q>
          </Box>
          <h3 className="text-left text-2xl font-medium">The Condom</h3>
          <p>
            The condom is the most common contraceptive, available at supermarkets
            and pharmacies. It is also quite easy to use: simply pull it over an
            erect penis. Aside from this, condoms have other benefits as well -
            they prevent STIs, are easy to carry and unlike some other
            contraceptives, don’t have any hormonal impact. However one should be
            careful that the condom does not tear or come off during intercourse.
          </p>
          <Photo src="/images/blog/shre-image6.png" width={331} height={152} />
          <h3 className="text-left text-2xl font-medium">The Oral Contraceptive Pill</h3>
          <p>
            The oral contraceptive pill commonly used by women is the next most
            popular contraceptive. While the pill can have some benefits - it is
            highly effective and may even reduce period pains - it unfortunately
            does not prevent the transmission of STIs. Further, it can adversely
            affect one’s health by causing side effects like nausea, headaches and
            even depression. It is for this reason that a pill must be prescribed
            by a medical practitioner.
          </p>
          <h3 className="text-left text-2xl font-medium">The IUD</h3>
          <p>
            The IUD is another contraceptive that requires the expertise of a
            healthcare provider A longer term mode of contraception, the IUD can
            remain in place, inside a uterus, for upto 10 years. During this
            period, it gradually releases hormones that prevent pregnancy. The
            procedure is entirely reversible and, outside of a small chance of
            infection, there is no real downside to undertaking it.
          </p>
          <Box>
            <Q>Is it difficult for you to speak to your healthcare provider about contraceptives?</Q>
            <Q>Do contraceptives trigger side effects for you?</Q>
          </Box>
          <h3 className="text-left text-2xl font-medium">The Diaphragm</h3>
          <p>
            Finally, the diaphragm. Like the condom, the diaphragm creates a
            physical barrier between the sperm and the uterus. Unlike the condom,
            the diaphragm is reusable. The diaphragm also needs to stay in place
            for at least 6 - and no more than 24 - hours after intercourse. To put
            on a diaphragm, fold it in half and gently place it inside your
            vagina. Then, push it up and back, as far as it can go, with the dome
            facing outward. It may appear tricky so feel free to ask a medical
            professional to show you how the first time around.
          </p>
          <div className="my-8 flex flex-wrap justify-center gap-4">
            <Image
              src="/images/blog/shre-image5.png"
              alt=""
              width={500}
              height={313}
              className="h-auto w-full max-w-[25rem]"
            />
            <Image
              src="/images/blog/shre-image3.png"
              alt=""
              width={500}
              height={313}
              className="h-auto w-full max-w-[25rem]"
            />
          </div>
          <Box title="Quiz">
            <Q>Q1. What are the different contraceptives available for use?</Q>
            <Q>Q2. Why is it important to check with a doctor before using the oral contraceptive pill?</Q>
            <Q>Q3. Can IUDs be used instead of condoms? Why or why not?</Q>
          </Box>

          <h2 className="pt-16 text-center text-xl font-semibold">
            Chapter 6: Signs of Abuse in Domestic Spaces
          </h2>
          <Box note="Facilitator’s note: Please share a trigger warning with the participants before discussing domestic abuse. The participants can choose not to engage in this topic of discussion if it makes them deeply uncomfortable.">
            <Q>Why do you think people don’t speak about domestic abuse?</Q>
            <Q>Do you think you can communicate openly with your family ?</Q>
          </Box>
          <p>
            In 2018, India was named to be the most dangerous place to be a woman
            by a Thomson Reuters Foundation poll. While this was contested, it is
            also a clear indication that violence against women is prevalent in
            India. More often than we realise, these forms of violence against
            women occur within domestic places and at the hands of close family
            members.
          </p>
          <p>
            The close-knit familial structure and culturally learned behaviour in
            India - which sanctify the idea of ‘family’ with ‘honor’ and ‘status’
            - play a significant role in keeping cases of abuse under wraps. While
            cases are very rarely reported to the police, perhaps more
            significantly, victims of abuse are often too fearful to narrate their
            experiences to even their closest confidants.
          </p>
          <blockquote className="pl-10">
            “However, despite having the largest share of crimes against women,
            domestic violence is known to be a systematically under-reported
            crime. The reasons range from embarrassment, financial dependency,
            fear of retaliation, victim-blaming to following a convoluted
            bureaucratic procedure. Determining the extent of this underreporting
            is useful to understand the true state of the prevalence of domestic
            violence in India.”
          </blockquote>
          <ul className="list-['-_'] pl-10">
            <li>
              Payal Seth, excerpt from “Decoding the Extent to Which Domestic
              Violence is Underreported in India”, The Wire, 12 Feb 2021.
            </li>
          </ul>
          <p>
            It is thus important to both recognise abuse in domestic spaces, and
            create structures of safety and support for women and children. In
            this module, we will first learn about different forms of abuse that
            occur within domestic spaces, and how these are categorised according
            to Indian law. Next, we will learn to recognise signs of abuse among
            people around us; and finally, discuss the best ways in which we can
            bring up this issue with people who might be suffering abuse in a safe
            and sensitive manner.
          </p>
          <p className="text-sm italic">Different Forms of Abuse</p>
          <Box>
            <Q>Do you feel ‘safe’ in our society?</Q>
            <Q>What are some things you have been told to practice in order to maintain your safety?</Q>
          </Box>
          <p>
            A shroud of silence covers instances of domestic abuse in India, but
            this form of violence is rampant in every part of the country. A study
            in 2020 reported that 1 in 3 women in India have experienced some form
            of domestic abuse. Of these, only 1 in 10 women has reported the abuse
            to law enforcement or healthcare officials. This shows how rampant, but
            severely underreported domestic abuse is, in addition to the need for
            more proactive measures to create safe, sensitive and reliable support
            structures that are localised to the person’s immediate surroundings.
          </p>
          <p>
            While ‘domestic’ abuse can be used to mean any form of violence from a
            familial person, it is often used to mean violence inflicted on women
            and children by members of their family. The umbrella term of domestic
            abuse encapsulates physical, psychological, emotional and sexual
            abuse. These are often not singular incidents but prolonged and
            systemic forms of abuse. Oftentimes, more than one person within the
            family is either aware of, or complicit in the crime.
          </p>
          <p>
            While domestic abuse against women is relatively discussed about in
            the public sphere - through conscientious efforts by activists, NGOs
            and women’s rights organisations - another form of abuse, which is
            both widespread and occurs most often in the domestic sphere is child
            sexual abuse. As noted in the Human Rights Watch’s 2013 report
            “Breaking the Silence: Child Sexual Abuse in India,”
          </p>
          <blockquote className="pl-10">
            “As recent research has shown, it is not just within institutions that
            Indian children suffer from sexual abuse. A 2007 Indian
            government-sponsored survey, based on interviews with 12,500 children
            in 13 different states, reported serious and widespread sexual abuse,
            thereby putting the government on notice about the gravity of the
            problem. Smaller surveys conducted by nongovernmental organizations
            (NGOs) have also painted a disturbing picture. Children are sexually
            abused by relatives at home, by people in their neighborhoods, at
            school, and in residential facilities for orphans and other at-risk
            children. Most such cases are not reported.”
          </blockquote>
          <p>
            There is state legislation in India that aims to protect women and
            children from different forms of violence and abuse, and have been
            listed below. These have received criticism for the lack of
            comprehensiveness, adherence to patriarchal structures and failure of
            implementation and compliance.
          </p>
          <p className="text-sm italic">
            Legislation Against Domestic Abuse and Violence in India
          </p>
          <ul className="list-disc space-y-2 pl-10">
            <li>Legislation Against Domestic Abuse and Violence in India</li>
            <li>Section 498A of the Indian Penal Code (IPC) deals with ‘cruelty by husband or his relatives’</li>
            <li>The Protection of Women from Domestic Violence Act (PWDVA) 2005</li>
            <li>The Protection of Women from Domestic Violence Act (PWDVA) 2005</li>
          </ul>
          <Box>
            <Q>Why do you think that talking about abuse can be difficult?</Q>
            <Q>Why do you think people don’t report abuse to the police?</Q>
          </Box>
          <p className="text-sm italic">Recognising Signs of Abuse</p>
          <p>The following are some signs of abuse to look out for among adults:</p>
          <ul className="list-disc space-y-2 pl-10">
            <li>Some signs of physical abuse can be black eyes, bruises on the arms, busted lips, sprained joints, marks or scratches in different parts of the body</li>
            <li>Emotionally, look out for signs of constant apprehension or anxiety; the person can often also be extremely apologetic, underconfident, fearful and show very low self esteem</li>
            <li>Changes in sleep patterns (either too much or too little), eating patterns (refusing to eat or eating too much), and substance use (alcohol, smoking, other drugs) can be signs of concern</li>
            <li>Concerning behaviours might also include isolating themselves from friends and family, dropping out of school, work or activities they previously enjoyed, repeatedly cancelling appointments or meetings</li>
            <li>Other signs might include the person not having access to their own money, being constantly surveilled by a family member, and referring to their partner/parent as overly ‘protective’, ‘jealous’ or ‘possessive’</li>
          </ul>
          <p>In addition to the above, the following can be concerning signs among children:</p>
          <ul className="list-disc space-y-2 pl-10">
            <li>Unexplained changes in behaviour or personality, such as an outgoing child suddenly becoming reserved, or the other way around</li>
            <li>Unwarranted acts of aggression or displaying extreme negative emotions such as crying, fear, anger, frustration, indifference</li>
            <li>Poor bonding with parent, or apparent resentment towards any caregiver</li>
            <li>Lacking confidence and social skills appropriate for their age</li>
            <li>Behaviour that is either reflective of someone much older or much younger than the child’s real age</li>
            <li>The child is afraid of being alone with anyone</li>
            <li>There have been instances of the child running away or signs of self harm</li>
            <li>Issues with sleep, including nightmares, refusal to sleep on time, forcing oneself to stay awake during late hours</li>
          </ul>
          <Box>
            <Q>What would you do if you saw any of these signs in a person you work with?</Q>
            <Q>Why do you think they would not want to speak to you?</Q>
          </Box>
          <p className="text-sm italic">Having the Conversation</p>
          <p>
            If you recognise signs of abuse in an individual, do not immediately
            ask them if they are being subjected to abuse. Each individual’s
            experience is unique and complex, and it becomes important to approach
            these cases with sensitivity and care, making sure to not increase the
            threat to the person’s safety, health or wellbeing. Let them know that
            you want to help them, and that you are a safe person to talk to. Here
            are a few questions and reassuring sentences that might help in having
            the conversation:
          </p>
          <div className="space-y-2 pl-10">
            <p>“I’m here to help, we won’t do anything you don’t want to.”</p>
            <p>“You can speak to me about anything that’s troubling you. I won’t tell anyone.”</p>
            <p>“Do you feel safe at home?”</p>
            <p>“Are you scared of something?”</p>
            <p>“Is there someone you trust or go to for help?”</p>
            <p>“Your feelings are valid, I’m sorry you are going through this.”</p>
            <p>“It’s not your fault.”</p>
          </div>
          <Box title="Quiz">
            <Q>Q1. What are some common signs of domestic abuse?</Q>
            <Q>Q2. What are the laws against dowry and domestic abuse?</Q>
          </Box>

          <h2 className="pt-16 text-center text-2xl font-medium">
            Chapter 7: Women’s Reproductive Health Rights (RHR)
          </h2>
          <Box>
            <p className="font-light">What do you think the term Women’s Reproductive Health Rights means?</p>
            <p className="font-light">Why do you think rights are important?</p>
          </Box>
          <p>
            Reproductive Health Rights are, simply, the rights of women to access
            healthcare services relating to matters concerning reproductive
            systems. The reason these rights need to be understood separately and
            seriously is not that the reproductive system doesn’t come under
            general healthcare; the reason is that women’s health has been
            significantly de-prioritised from society and consequently from
            healthcare systems because of the existing patriarchal structures that
            assume that men’s standards of health are universal.
          </p>
          <p>
            The accessibility of reproductive health rights, much like that of
            other social and economic rights, depends on the many intersections of
            oppression a woman might be situated at. Generally, the poorer women
            are, the fewer the chances that they would be able to access
            gynaecological and obstetric care on time, or without social support.
            Similarly, access to these service providers is dependent on the race,
            caste, and religion of the woman in some contexts, for abortion, for
            example, is forbidden both under Islam and under Christianity. Over a
            period of time, different mechanisms of support, both at the community
            level and at the policy level, have evolved to guarantee reproductive
            health rights to women.
          </p>
          <h3 className="text-left text-2xl font-medium">
            What are the different reproductive health rights of women?
          </h3>
          <Box>
            <p className="font-light">
              Can you think of what might be the most important reproductive rights
              for women? Think in the context of a patriarchal world.
            </p>
            <p className="font-light">
              Do you think abortion needs to be made into a significant
              reproductive right? Why? Why not?
            </p>
          </Box>
          <p className="font-medium">In general, women have a right to the following:</p>
          <ul className="list-disc space-y-3 pl-10">
            <li>
              <em>Access to abortion</em> - This right is perhaps the most
              important one, and the one that needs the most rigorous
              implementation throughout all segments of the population. It is tied
              to a woman’s right to autonomy over her own body, because pregnancy,
              apart from being a physically and emotionally challenging time, has
              consequences in terms of child rearing for the woman. Society has
              distributed the burden of child rearing labour such that regardless
              of the stratum a woman belongs to, she becomes the primary caregiver
              to her children. In this context, it makes sense that the final
              decision on whether a woman keeps a child or aborts it be the
              woman’s alone. However, the society has long viewed women and their
              bodies and their children as the property of men, and it becomes
              difficult to understand this right to autonomy unless backed by
              legislation that provides this freedom to women firmly. In India,
              this is guaranteed under the Medical Termination of Pregnancy Act,
              1971.
            </li>
            <li>
              <em>Access to birth control</em> - Closely related to the right to
              abortion is the right to birth control, which works as a more
              long-term, preventive measure. It also allows women the right to
              decide how their reproductive system operates, from controlling
              their menstrual cycles to reducing their menstrual pain to planning
              future children, or in the case of hysterectomy or tubectomy,
              deciding never to have children at all.
            </li>
            <li>
              <em>Access to education - </em>In matters relating to reproductive
              healthcare and the procedures associated with it, such as
              contraceptives and surgeries, informed consent is important. No
              woman should have to undergo a procedure without a thorough,
              medically up-to-date knowledge of its pros and cons.
            </li>
            <li>
              To that end, access to education about these procedures becomes
              hyper-important. This education can start in schools, when women are
              just coming into their own, and remain accessible right upto the
              moment they reach the doctor’s office.
            </li>
            <li>
              <em>Freedom from genital mutilation - </em>In many parts of the
              world, young girls undergo genital mutilation owing to societal and
              religious beliefs. This extremely painful and unnecessary procedure
              has been widely recognized as a violation of women’s rights over
              their own bodies, and legislation in place in many countries to stop
              its practice. In India, the Constitution’s Right to Freedom has been
              interpreted to include freedom from genital mutilation.
            </li>
          </ul>
          <h3 className="text-center text-2xl font-medium">How to Implement These Rights?</h3>
          <Box>
            <p className="font-light">
              What do you think are the possible obstacles that prevent women from
              accessing their general rights in a fair manner? What about
              Reproductive Health Rights?
            </p>
            <p className="font-light">
              What might be the possible ways in which women’s rights can be made
              more accessible to them?
            </p>
          </Box>
          <p>
            Here are some ways to ensure that women’s healthcare rights are more
            effectively implemented and accessible in a society-
          </p>
          <ul className="list-disc space-y-3 pl-10">
            <li>
              <em>Overcoming stigma:</em> Depending on the social context, the
              extent of the stigma around women’s sexual health might take
              different strategies to be fought against. However, the role of
              overcoming stigma cannot be overstated because social prejudice
              causes women to hide their reproductive-system-related illnesses
              from their families, friends and even doctors. Especially in
              time-sensitive illnesses such as uterine or cervical cancer, this
              stigma literally takes lives, as the patients wait too long to bring
              up symptoms with their doctors, and treatment becomes difficult or
              impossible at later stages.
            </li>
            <li>
              <em>Normalising of conversations around reproductive health:</em>{" "}
              Conversations around reproductive health are, conventionally,
              considered taboo in nearly all spaces in a society - from the family
              to school to workplaces. Women are taught to fear their bodies and
              regard their reproductive system as something shameful, right from
              the moment they get their first period. In such a society, it
              becomes increasingly difficult for them to bring up any pains,
              abnormal bleeding, or other symptoms, simply because they know that
              they are bringing up something that’s ‘not normal’. The only reason
              these conversations are considered taboo or abnormal is that it is a
              question of women’s health, and the taboo feeds into the broader
              social stigma related to talking about sexuality generally.
            </li>
            <li>
              <em>Use of the language of rights:</em> A powerful aspect of legal
              discourse is that it can validate experiences that would otherwise
              be considered without proof or backing. Categorising women’s need
              for accessible healthcare as a ‘right’ means that even those who
              might not believe that abortion or contraception is justified by
              their personal religion would not be able to exercise that decision
              for a woman who has sought the procedure. It would also make
              gynaecological clinics safe spaces for women, for they might feel
              empowered by the knowledge that they are within their legal rights
              to ask for the birth control procedure or pill that they would want.
            </li>
            <li>
              <em>Sensitized gynaecologists:</em> Perhaps the most damaging
              misinformation about women’s reproductive health comes from
              gynaecologists, who attempt to align women’s choices as per
              patriarchal norms. For example, telling a woman who wishes to
              undergo a hysterectomy that she should not undergo it, in case their
              husband changes his mind later about having children, or dismissing
              severe menstrual pain as ‘women’s lot’ or ‘only a fraction of what
              you’d feel in childbirth - get used to it’. This kind of dismissal
              can be especially damaging given that doctors are authorities - in
              the patient’s mind they are authorities not just on the medical
              aspects of healthcare but also on its legal/moral aspects. This
              needs to be changed, for it violates women’s right to autonomy and
              consent without coercion.
            </li>
          </ul>
          <Box title="Quiz:">
            <p className="font-light">What is the status of abortion under Indian law?</p>
            <p className="font-light">What role can gynaecologists play in ensuring that women can access their reproductive rights?</p>
            <p className="font-light">How would you explain the concept of reproductive rights?</p>
          </Box>

          <h2 className="pt-16 text-center text-2xl font-medium">
            Chapter 8: Medical Services Available for Women’s SRH
          </h2>
          <p>
            Citizens of a country need access to proper healthcare systems and
            resources in order to maintain their sexual and reproductive health.
            The sexual and reproductive health of women concerns itself with
            access to medical facilities, to the establishment of knowledge
            systems that propound upon the importance of contraception, of
            fertility clinics, of maternal health, of postpartum care and the
            awareness of sexually-transmitted infections. In a country where women
            are the victims of social inequities and thereby social injustice,
            ensuring good sexual and reproductive health is a concerted effort,
            one that finds itself at the intersection of education and gender
            advocacy.
          </p>
          <p>
            According to a report published by Oxford Research Encyclopedias as a
            part of Global Public Health, India has been making significant
            improvements in its treatment of women’s sexual and reproductive
            health. Instead of focusing only on family planning, India has been
            focusing on the treatment of STIs, curbing maternal mortality,
            promoting the use of contraception and the presence of skilled doctors
            and nurses at the time of delivery. By setting up measures to
            distribute contraception, to manage the consequences of STIs or
            abortions, India is ensuring that it prioritises the lives of women
            and their wellbeing over abiding by the societal norms of procreating.
          </p>
          <p>
            In keeping with this effort to broaden the spectrum of sexual health
            and reproduction, there are both government-led and private
            initiatives that work to provide medical services to women seeking to
            maintain sexual and reproductive health. Some of them are:
          </p>
          <ul className="list-disc space-y-4 pl-10">
            <li>
              <h4 className="text-left text-xl font-medium">
                Foundation for Reproductive Health Services India: 011 - 4984 0000
              </h4>
              <ul className="list-[circle] pl-6">
                <li>
                  The FRHS is an NGO that seeks to provide family planning services
                  in India. It is associated with MSI Reproductive Choices that
                  provides contraceptives to women as well as equips them to have
                  safe abortions. The FRHS works in collaboration with the states
                  of Rajasthan, Bihar, and Uttar Pradesh.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">
                Family Planning Association of India: (91) - 22 - 4086 3101 / 2202 9080 / 22025174
              </h4>
              <ul className="list-[circle] pl-6">
                <li>
                  FPA is an organisation that works towards ensuring the sexual
                  and reproductive health of Indians in 18 states. It provides
                  sexual and reproductive healthcare through 191 clinics, 163
                  doctors, and 585 health workers. The services of the organisation
                  cover abortions, treatment of HIV+ patients, unwanted pregnancy
                  and much more.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">
                The Comprehensive Abortion Care Program in India: 022-24951648
              </h4>
              <ul className="list-[circle] pl-6">
                <li>
                  This program trains doctors in performing medical and surgical
                  abortions and equips them with legally sound knowledge
                  pertaining to abortion in India.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">
                The Sexual and Reproductive Health and Rights Alliance India: 0612-2266605
              </h4>
              <ul className="list-[circle] pl-6">
                <li>
                  This is an alliance of 6 NGOs in India with the aim of providing
                  improved SRH services through SRH resources, advocating for
                  reproductive health, and enlisting the help of stakeholders to
                  promote SRH awareness.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Sahayog India: +91-522 2310747, 2310860</h4>
              <ul className="list-[circle] pl-6">
                <li>
                  This organisation works in 2 states across 21 districts to
                  ensure that women have access to reproductive and sexual
                  healthcare. Sahayog has created the{" "}
                  <strong className="font-medium">“Women’s Health Rights Forum”</strong>{" "}
                  or{" "}
                  <strong className="font-medium">Mahila Swasthya Adhikar Manch (MSAM)</strong>{" "}
                  to work on ensuring access to medical services and health rights
                  for women.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">
                Coalition for Reproductive Health and Safe Abortion: 9309969364
              </h4>
              <ul className="list-[circle] pl-6">
                <li>
                  This organisation works to ensure that women from marginalised
                  communities have access to sexual and reproductive health care,
                  by focusing largely on maternal care and safe abortions.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">
                Pathfinder International:{" "}
                <a href="mailto:communications@pathfinder.org" className="text-khushii-gold-dark">
                  communications@pathfinder.org
                </a>
              </h4>
              <ul className="list-[circle] pl-6">
                <li>
                  This organisation works to provide women and adolescents with
                  emergency contraception and also provides access to medical
                  services in case of reproductive emergencies and prevention of
                  unwanted pregnancies.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">ARMMAN: +91 (0) 11 41708365</h4>
              <ul className="list-[circle] pl-6">
                <li>
                  Armman is committed to ensuring that pregnant women have access
                  to quality healthcare as well as maternal care. Armman also
                  focuses on reducing mortality rates of mothers and children
                  through systems such as the “Mother & Child Tracking System” and
                  “Arogya Sakhi”.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            While these are just a few of the SRH services in India, the Ministry
            of Health and Welfare in India has also set up the National Health
            Portal in India which provides access to medical services of varying
            natures: this is a useful directory of clinics, schemes, and programs
            that focus on providing effective sexual and reproductive healthcare
            resources.
          </p>
          <p>
            However, India still has a long way to go in terms of ensuring that
            each and every woman in the country is aware of her sexual and
            reproductive rights. In order to reach this goal, it is imperative to
            de-stigmatise conversation around SRH rights of women. Below are some
            of the most effective ways to promote women’s SRH rights (particularly
            the right to healthcare and medical facilities):
          </p>
          <ul className="list-disc space-y-2 pl-10">
            <li>Start small. Aim to educate children and adolescents first. Knowledgeable students make for better futures.</li>
            <li>
              A comprehensive curriculum is an effective way to ensure that
              students engage in discussions of rights, of the far-reaching
              consequences of policy making, and are aware of the role that the
              legal system has to play in increasing access to SRH healthcare.
            </li>
            <li>Implementation of effective family planning programs with a focus on reaching out to the marginalised communities of the country.</li>
            <li>Training doctors and nurses in safe and surgical reproductive procedures.</li>
            <li>Raising awareness about NGOs that are working to increase access to SRH services for women.</li>
          </ul>
          <p>How do increased and improved facilities improve the lives of women? Here’s a quick look:</p>
          <ul className="list-disc space-y-2 pl-10">
            <li>How do increased and improved facilities improve the lives of women? Here’s a quick look:</li>
            <li>India has witnessed a decline in maternal mortality as well as child marriage, with women being given more freedom to pursue their sexual and reproductive needs and desires.</li>
            <li>Women have access to safe abortions and measures to avoid unwanted pregnancies through the use of tried and tested contraceptive methods.</li>
            <li>There is an increased awareness of STIs, symptoms, and treatment in the country.</li>
          </ul>
          <h3 className="text-center text-2xl font-medium">What does the way forward look like?</h3>
          <ul className="list-disc space-y-3 pl-10">
            <li>
              <h4 className="text-left text-xl font-medium">Education:</h4>
              <ul className="list-[circle] pl-6">
                <li>The way forward for a country like India lies in educating its masses and encouraging dialogue on topics that were once deemed taboo.</li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Policy Making:</h4>
              <ul className="list-[circle] pl-6">
                <li>
                  Policy-makers need to prioritise empowerment of women with a
                  vision of building a country of equals. Policies that ensure
                  effective welfare and healthcare systems also create a
                  socioeconomically just community for women.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-left text-xl font-medium">Infrastructure:</h4>
              <ul className="list-[circle] pl-6">
                <li>
                  It is through adequate infrastructure that a country can meet
                  the healthcare needs and requirements of its citizens. SRH
                  services, too, are no different. The Ministry of Health and
                  Welfare needs to ensure that there are enough trained personnel
                  (doctors and nurses), healthcare clinics, facilities, and
                  databases that address the medical needs of women (be it
                  contraceptives, maternal care, or STIs) with expertise and
                  accountability.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="pt-16 text-center text-2xl font-medium">
            Chapter 9: National Helplines for Harassment and Abuse Support
          </h2>
          <p>
            It is imperative that victims of harassment and domestic abuse find
            support in counselling services and legal measures. For that reason,
            there are many government and non-governmental organizations that
            ensure that legal, psychological and medical aid is given to victims
            who seek their help.
          </p>
          <p>Below are a few such helplines that have been put in place to help victims of harassment and domestic abuse:</p>
          <ul className="list-disc space-y-3 pl-10">
            <li><span className="text-xl font-medium">National Commission of Women:</span> 07217735372</li>
            <li>
              <span className="text-xl font-medium">Indian Helpline:</span>{" "}
              <a
                href="https://indianhelpline.com/WOMEN-HELPLINE/"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-khushii-gold-dark"
              >
                https://indianhelpline.com/WOMEN-HELPLINE/
              </a>
            </li>
            <li><span className="text-xl font-medium">Azad Foundation (Delhi):</span> 011- 4905 3796</li>
            <li><span className="text-xl font-medium">Domestic Abuse National Helpline Number:</span> 181</li>
            <li><span className="text-xl font-medium">Women Police Helpline Number:</span> 1091, 1291</li>
            <li><span className="text-xl font-medium">NIMHANS Centre for Wellbeing (Bangalore):</span> 9480829670, 080 26685948</li>
            <li><span className="text-xl font-medium">Alternative Law Forum (Bangalore):</span> 802286875</li>
            <li><span className="text-xl font-medium">Lawyer’s collective (Delhi):</span> 011- 41666385</li>
            <li><span className="text-xl font-medium">The International Foundation for Crime Prevention and Victim Care (Chennai):</span> 044 - 43111143</li>
            <li><span className="text-xl font-medium">Shakti Shalini - Women’s Shelter:</span> 011- 24373736/ 24373737</li>
            <li><span className="text-xl font-medium">All India Women’s Conference:</span> 10921, 011 - 23389680</li>
            <li><span className="text-xl font-medium">Sakshi - Violence Intervention Center:</span> 0124 - 2562336/5018873</li>
            <li><span className="text-xl font-medium">Nirmal Niketan:</span> 011 - 27859158</li>
            <li><span className="text-xl font-medium">Nari Raksha Samiti:</span> 011 - 23973949</li>
            <li><span className="text-xl font-medium">National Human Rights Commission:</span> 011 - 23385368/9810298900</li>
            <li><span className="text-xl font-medium">Delhi Commission for Women:</span> 011 - 23379181/ 23370597</li>
          </ul>
        </div>
      </article>

      <ArticleEnd
        title="Sexual Health and Reproductive Education"
        older={older}
        newer={newer}
        related={related}
      />
    </>
  );
}
