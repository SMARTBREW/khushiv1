import { useEffect } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";
import Link from "./components/link";

const PAGE_TITLE = "Privacy Policy - Khushii";

export default function Privacy() {
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
          src="/images/privacy/khushii1.jpg"
          alt="KHUSHII students and volunteers"
          width={1601}
          height={320}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-[42%] items-center px-6 md:px-14">
          <h1 className="text-2xl font-medium text-khushii-brown md:text-4xl">
            Privacy Policy
            <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          </h1>
        </div>
      </section>

      <article className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-[#5f5f5f]">
          <p>
            KHUSHII- Kinship for Humanitarian Social and Holistic Intervention
            in India; herein referred as KHUSHII NGO is an independent, Not for
            Profit Organisation founded in 2003, having its office at C-120,
            3rd Floor, Okhla Industrial Area Phase – 1, Behind Crowne Plaza,
            New Delhi – 110020, which has its online portal at{" "}
            <Link
              href="https://khushii.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-khushii-gold-dark"
            >
              https://khushii.org
            </Link>{" "}
            (the “Website”) By using (browsing or making a donation or shopping
            on) our Website or by subscribing to or using any of our services
            (“Services”), you agree to comply with and be bound by the
            following terms of the Privacy Policy (The “Privacy Policy”)
          </p>
          <p>
            Please review the following provisions carefully. If you do not
            agree to any of these provisions, please do not use this Website.
          </p>
          <p>
            The term “KHUSHII NGO” or “us”, “our” or “we” refers to the owner of
            the Website, i.e. KHUSHII NGO. The term “you” refers to you, the
            user or viewer of our Website or any of the Services.
          </p>
          <p>
            KHUSHII NGO takes your privacy seriously and does not compromise on
            taking stringent measures in protecting your information including
            user, payment and order data. We do not share your information with
            any third party systems.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            1) Personal Data Privacy
          </h2>
          <p>
            KHUSHII NGO keeps track of your information to offer you the best
            possible browsing experience. We may change this privacy policy from
            time to time by updating this posting. Please check this page
            periodically for changes. Your continued use of this site following
            the posting of changes to this policy will mean you accept those
            changes.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              KHUSHII NGO does not collect any personal information about
              users, except that which is knowingly and specifically supplied
              to us by the user.
            </li>
            <li>
              KHUSHII NGO is committed to ensuring the privacy of your personal
              information.
            </li>
            <li>
              We will not sell or pass on your information to any other
              organization outside of KHUSHII NGO unless you specifically and
              expressly give us permission to do so.
            </li>
            <li>
              We always give you the option to unsubscribe from our mailing
              lists.
            </li>
            <li>
              If you are under 18 years old, we suggest that you ask your
              parents or guardian before signing up on this site.
            </li>
          </ul>
          <p>
            We do not collect/store your banking information like credit/debit
            card/net banking information on our server. Our Payment gateway
            processes the transaction through the respective banking system.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            What information do we collect?
          </h2>
          <p>
            <strong className="font-medium text-khushii-brown">
              a) Personal information
            </strong>{" "}
            such as name, address, telephone number, e-mail address, and date
            of birth (where appropriate). We collect this information only in
            connection with specific activities, such as donations asks,
            campaigns, feedback, surveys, email newsletter subscriptions, etc.
            You don’t have to disclose any of this information if you do not
            wish to.
          </p>
          <p>
            <strong className="font-medium text-khushii-brown">
              b) Non-personal information:
            </strong>{" "}
            KHUSHII NGO collects data such as IP address (the location of the
            computer on the internet), pages accessed and files downloaded.
            This helps us to determine how many individuals use our site, how
            many people visit on a regular basis, which pages are most popular,
            and which pages are least popular. This information doesn’t tell us
            anything about who you are, it simply allows us to monitor and
            improve our service.
          </p>
          <p>
            We use Google Analytics including Display Advertising (e.g.
            Remarketing, Google Display Network Impression Reporting. Visitors
            can opt-out of Google Analytics for Display Advertising and
            customize Google Display Network ads using the{" "}
            <Link
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-khushii-gold-dark"
            >
              Ads Settings
            </Link>
            .
          </p>
          <p>
            <strong className="font-medium text-khushii-brown">
              Where will the information be held?
            </strong>{" "}
            Personal information submitted through the forms on this site is
            held only in a KHUSHII NGO database. We confirm that KHUSHII NGO
            will not share the information you give to us on this website with
            any other organization outside of KHUSHII NGO unless you have
            specifically given us permission to do so.
          </p>
          <p>
            <strong className="font-medium text-khushii-brown">
              Information from under 18s.
            </strong>{" "}
            If you are under 18, be sure to obtain your parent’s or guardian’s
            permission before you send any information about yourself (your
            name, address, e-mail address, etc.) to us or anyone else over the
            internet. We encourage parents to get involved with their
            children’s use of the internet and to be aware of the activities in
            which they are participating.
          </p>
          <p>
            <strong className="font-medium text-khushii-brown">
              Your Right to access the information:
            </strong>{" "}
            At any time, you can ask us for a copy of the personal information
            that we hold about you or request a correction or deletion of
            information.
          </p>
          <p>
            <strong className="font-medium text-khushii-brown">
              External links:
            </strong>{" "}
            There are links on this Website that take you to other websites
            outside of our service. Any links provided to third-party websites
            outside of this site are provided solely for your convenience. The
            operation and content of such third-party websites is beyond our
            control, and we do not endorse in any manner whatsoever or accept
            any responsibility for the content or other material that may be
            contained on such websites, the use of such websites, or any
            products or services advertised on or sold through any such web
            sites. We will not be liable under any circumstances for any
            damages whatsoever, direct or indirect, resulting from any use of
            this website or any other third party website linked to this
            website, whether or not we are advised of the possibility of such
            damages.
          </p>
          <p>
            Emails are sent only to KHUSHII NGO supporters/ users who have
            chosen to receive them (opted-in) or who have made a purchase or
            made a donation on our website. At any time, you can notify us that
            you wish to stop receiving these emails. In addition, we keep a
            record of your past donations, purchases, returns, and credits. We
            may also ask you for information regarding your personal
            preferences and demographics to help us better meet your needs.
          </p>
          <p>
            If we are required to intercept, disclose, monitor and/or store
            your personal information: (a) by law; (b) to conduct our business;
            (c) to secure our systems, or (d) to enforce our own rights, we
            will do so in the manner as prescribed by law.
          </p>
          <p>
            Such interception, disclosure, monitoring and storage may take
            place without your knowledge. In that case, we will not be liable
            to you or any third party for any damages howsoever arising from
            such interception, disclosure, monitoring and storage. In order to
            ensure that all our Users comply with the Terms of Use, we may
            monitor your personal information to the extent that this may be
            required to determine compliance and/or to identify instances of
            non-compliance. To ensure that the security and integrity of our
            Site/ products/ services are safeguarded, we may monitor your
            personal information. This monitoring may include (without
            limitation) the filtering of incoming and outgoing electronic data
            messages to identify, limit and/or prevent the transmission of
            spam, viruses and/or unlawful, defamatory, obscene or otherwise
            undesirable material or content.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            2) Cookies
          </h2>
          <p>
            Like many other transactional websites, we use “Cookies” to improve
            your browsing experience and to save you time. Cookies are little
            tags that we place onto your computer. We assign a cookie to your
            computer when you first visit us in order to enable us to recognize
            you each time you return. Cookies are used to store user preferences
            and to track user trends, so as to enhance your interactive
            experience and to generally provide you with our better services.
            You can set your browser to notify you whenever you receive a
            Cookie, thus giving you the chance to accept or reject the same.
            When you accept a Cookie, you agree to our use of any personal
            information collected by us using that Cookie.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            3) Exceptions
          </h2>
          <p>
            KHUSHII NGO may be forced to disclose information in order to
            comply with a subpoena, court order, administrative or governmental
            order, or any other requirement of law, or when KHUSHII NGO, in its
            sole discretion, deems it necessary in order to protect our rights
            or the rights of others, to prevent harm to persons or property, to
            fight fraud and credit risk, or to enforce or apply our Site’s
            Terms of Use.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            4) Our Limitations
          </h2>
          <p>
            KHUSHII NGO always strives to respect the privacy of its users.
            However, in a complex technology environment like ours, a defect or
            error in our software/ hardware might disclose your data in ways
            inconsistent with this Privacy Policy. In these situations, we will
            try to rectify the situation to the best of our ability.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            5) Security
          </h2>
          <p>
            We follow generally accepted industry standards to protect your
            personal information submitted to us, both during transmission and
            once we receive it. However, no method of transmission over the
            Internet or via mobile device, or method of electronic storage, is
            100% secure. Therefore, while we strive to use commercially
            acceptable means to protect your personal information, we cannot
            guarantee its absolute security.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            6) Changes in policy
          </h2>
          <p>
            You acknowledge that this Privacy Policy is part of the Terms of
            Use and you unconditionally agree that using KHUSHII NGO Site
            signifies your assent to KHUSHII NGO’s Privacy Policy. If you do
            not agree with this Privacy Policy, please do not use our Site.
            Your visit and any dispute over privacy are subject to this Privacy
            Policy and our Terms of Use, including limitations on damages.
            KHUSHII NGO reserves the right to modify the Terms of Use and this
            Privacy Policy, at any time.
          </p>

          <h2 className="pt-6 text-xl font-medium text-khushii-brown after:mt-3 after:block after:h-1 after:w-16 after:bg-khushii-gold after:content-['']">
            7) Contact Information
          </h2>
          <p>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to or email us at{" "}
            <a href="mailto:contact@khushii.org" className="text-khushii-gold-dark">
              contact@khushii.org
            </a>
            . We will promptly correct any information found to be incorrect.
            You can also speak to us at{" "}
            <a href="tel:+911141410075" className="text-khushii-gold-dark">
              +91 11 41410075 / 76
            </a>
          </p>
        </div>
      </article>

      <DonateBanner />
    </>
  );
}
