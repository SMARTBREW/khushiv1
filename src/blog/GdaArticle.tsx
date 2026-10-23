import Image from "../components/image";
import { ArticleEnd, ArticleTitle } from "./frame";

export default function GdaArticle() {
  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <Image
          src="/images/blog/gda-banner.jpg"
          alt="General Duty Attendant course"
          width={2560}
          height={1280}
          priority
          className="h-auto w-full"
        />
      </section>

      <article className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5 text-lg leading-8 text-black">
          <ArticleTitle
            title="Skill building of Youth through General Duty Attendant Course"
            category="Health"
            date="November 3, 2020"
          />
          <p className="italic">
            “Youth like us cannot afford the expensive courses like nursing,
            hotel management. GDA gave us the opportunity to earn a decent income
            in medical field and save for future studies” Muskan,18
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Image
              src="/images/blog/gda-1.jpg"
              alt=""
              width={580}
              height={387}
              className="h-auto w-full"
            />
            <Image
              src="/images/blog/gda-2.jpg"
              alt=""
              width={1024}
              height={683}
              className="h-auto w-full"
            />
          </div>
          <p className="font-medium">
            General Duty Attendant (GDA) Course and its scope
          </p>
          <blockquote className="font-medium">
            General Duty Attendants, commonly known as Nursing Care Attendants,
            Nursing Attendant, Nursing Aides, Bedside Assistants or Orderlies are
            required to take care of patients’ daily care, medication, health and
            hygiene.
          </blockquote>
          <p>
            This programme is designed to provide quality care to patients
            admitted in nursing homes and hospitals. As part of the curriculum,
            students learn how to provide basic nursing care and manage ill
            patients. A GDA works in close collaboration with doctors, nurses and
            other healthcare providers laying special emphasis on inculcating
            empathetic and ethical behaviour beyond patient care. Their daily job
            is to maintain a suitable environment for patients during their
            recovery period.
          </p>
          <p className="font-medium">Need for the GDA course:</p>
          <p>
            Rising skill gap has emerged to be one of the key barriers in
            healthcare sector. Skill gap in healthcare is approximately 97.9%
            across various health workforce categories in India. (Source:
            Ministry of Health and Family Welfare) The burden of rising
            healthcare costs and rapidly increasing population has further
            widened this gap, making it difficult for country to equate healthcare
            needs with existing means.
          </p>
          <p>
            This lack of qualified professionals is one of the major challenges
            for the Indian health care industry. The notion behind proposed
            course is to skill and enhance the quality of healthcare
            professionals primarily in “care giving” in India because there is no
            such concept of patient caregiving at the moment in India.
          </p>
          <p>
            A six months diploma in the GDA course includes classroom teaching
            and practical training provides hands on exposure of medical health
            sector and patient caregiving.
          </p>
          <p className="font-medium">Who can be General Duty Attendant?</p>
          <p>
            The course is ideal for students from vulnerable and marginalized
            families who aspire to have career in hospitals, nursing home
            settings and provide care to patients. The project outcomes
            demonstrated economic empowerment of youth from low-income families
            along with the increased bargaining power in the workplace.
          </p>
          <p>
            General Duty Attendant have overabundance of career options to choose
            from and can progress by taking more responsibilities.
          </p>
          <p className="font-medium">Course Structure</p>
          <p>
            The course provides accredited skill building for 12th Standard pass
            eligible students and it is a skill enhancement programs for existing
            healthcare professionals. We cover approx. 100 to 120 students at one
            project location in a year.
          </p>
          <Image
            src="/images/blog/gda-desc.jpeg"
            alt=""
            width={1040}
            height={493}
            className="mx-auto h-auto w-full"
          />
          <p>
            Our Course methodology employed both theory and practical classes
            followed by on-job training to enable students to become certified
            GDAs. Students are trained in the particular domain of patient care.
            We focus on guiding students with the required employability skills
            like English speaking, personality development & IT skills to match
            the industry demands.
          </p>
          <p>
            Placement targets are determined by the training cycle that starts
            from the mobilization of the students, to profiling, pre enrolment
            counselling, training methodology, course content, job readiness
            training and placement.
          </p>
          <p>
            Understanding employer’s perspective and internalization of their
            demand in the course structure has become one of the prominent
            aspects of the placement.
          </p>
          <p className="font-medium">Employability</p>
          <p>
            New entrants to the labour force will have to be skilled and made
            employable. Approximately 70 million additional individuals of
            working age (15-59 years) are expected to enter the country’s labour
            force by 2023. Strategies for reskilling and increasing the skills of
            the current workforce, as well as formal recognition of informally
            acquired skills, will also have to be reinforced.
          </p>
          <p>
            For the quality training it becomes really significant to ensure
            strengthening of duties and procedures of any skill development that
            makes it more credible in the eyes of the industry, such that each
            certified person is employable as per industry standards.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The organization has successfully trained more than 200 GDAs
              including both men and women, however men opting for this course is
              really low as compared to women
            </li>
            <li>
              The organization has placed 70% of the trained GDAs and others are
              still pursuing the course.
            </li>
            <li>
              Students are placed in reputed hospitals such as Saroj Hospital,
              ILBS Delhi, Ganga Ram Hospital etc.
            </li>
          </ul>
          <p className="font-medium">Our Placement Partners</p>
          <p>
            Greater collaboration brings greater economic development this is
            evident with the placement partners in Delhi, Mumbai like Council of
            Education and Development Programmes <em>(CEDP)</em>, Click to Care,
            Ajjicare, care 24, Portea addressing the issues of employability.
            Students are getting placed at the appropriate workplace setting and
            performing expectedly well. There has been an increase in the
            salaries of many students. They have been instrumental in fulfilling
            our goal of providing employment opportunities to our students
            matching the healthcare industry norms.
          </p>
          <p>
            Our existing skilling initiatives are complemented with women
            empowerment by taking the families involved into the entire process
            of training to placement. 94% of our beneficiaries are women and
            first time job seekers. Along with the skilling we create an enabling
            environment for them by creating social support through gender
            sensitization, family support, and capacity building sessions on
            confidence, communication etc. for effective and uninterrupted women
            participation into the workforce.
          </p>
          <p>
            “I enrolled myself in General Duty Attendant course. After
            successfully completing the course, I got a job placement in Saroj
            hospital, Delhi. I am now earning Rs. 15,000 a month and am able to
            financially support my family” shares Saroj, 25.
          </p>
        </div>
      </article>

      <ArticleEnd
        title="Skill building of Youth through General Duty Attendant Course"
      />
    </>
  );
}
