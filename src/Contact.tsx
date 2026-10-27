import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";

import Image from "./components/image";
import Link from "./components/link";
import Reveal, { DrawLine } from "./components/reveal";
import { SITE } from "./constants";

const PAGE_TITLE = "Contact Us | Donation to Khushii NGO Under 80G | Khushii";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6143909041184!2d77.2643790348877!3d28.551307999999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f654880a69%3A0xd3deb9ed864cac5b!2sKHUSHII%20NGO!5e0!3m2!1sen!2sus!4v1752469909613!5m2!1sen!2sus";

const ENQUIRIES = [
  { title: "For CSR & Projects", email: "contact@khushii.org" },
  { title: "Individual Partnerships", email: "donation@khushii.org" },
  { title: "For Careers", email: "hr@khushii.org" },
] as const;

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const FORM_TO = "himanshu@khushii.org";

const fieldClass =
  "w-full border border-[#f0e2c4] bg-[#fbf7f0] px-4 py-3 text-base text-khushii-brown placeholder:text-khushii-gray focus:border-khushii-gold focus:outline-none";

export default function Contact() {
  const [notice, setNotice] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  const onSubmit = (data: ContactForm) => {
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
    const mailto = `mailto:${FORM_TO}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setNotice(
      `Your email app is open with this message to ${FORM_TO}. Send it from there.`,
    );
  };

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/contact/contacttopbanner.jpg"
          alt="A student smiling beside a brick wall"
          width={1920}
          height={518}
          priority
          className="h-auto w-full"
        />
        <div className="px-5 py-6 md:absolute md:inset-y-0 md:left-0 md:flex md:w-1/2 md:items-center md:px-14">
          <h1 className="text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-khushii-brown md:text-5xl md:tracking-[0.08em] md:text-white">
            Contact Us - Khushii NGO
          </h1>
        </div>
      </section>

      <section id="dropus" className="relative z-10 bg-white px-5 pb-14 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal className="relative z-10 border border-[#f0e2c4] bg-[#fbf7f0] p-8 md:-mt-16 md:p-12">
            <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
              Drop us a line
            </h2>
            <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
            <p className="mt-4 leading-8 text-khushii-gray">
              Please write to us if you would like to get involved and become
              part of our journey in transforming children’s lives.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-4">
                <Image
                  src="/images/contact/address.svg"
                  alt=""
                  width={62}
                  height={62}
                  className="h-6 w-6 shrink-0"
                />
                <p className="leading-7 text-[#5f5f5f]">
                  C-120, 3rd Floor, Okhla Phase 1, Okhla Industrial Area, Delhi
                  - 110020
                </p>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/contact/phone.svg"
                  alt=""
                  width={62}
                  height={64}
                  className="h-6 w-6 shrink-0"
                />
                <a href={SITE.phoneHref} className="text-khushii-gold-dark">
                  011-41410075 / 76
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/contact/mail.svg"
                  alt=""
                  width={62}
                  height={48}
                  className="h-6 w-6 shrink-0"
                />
                <Link href={SITE.emailHref} className="text-khushii-gold-dark">
                  {SITE.email}
                </Link>
              </li>
            </ul>
          </Reveal>
          <iframe
            title="KHUSHII NGO on Google Maps"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10 h-[28.125rem] w-full rounded-2xl border-0 md:mt-4"
          />
        </div>
      </section>

      <section
        id="contactform"
        className="scroll-mt-24 bg-white px-5 py-14 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
              Send us a message
            </h2>
            <DrawLine className="mt-4 block h-1 w-16 origin-left bg-khushii-gold" />
          </Reveal>
          <form className="mt-10" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Reveal delay={0.08} className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  aria-label="Name"
                  autoComplete="name"
                  maxLength={80}
                  placeholder="Name"
                  className={fieldClass}
                  aria-invalid={errors.name ? true : undefined}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name ? (
                  <p className="mt-1 text-sm text-red-700">{errors.name.message}</p>
                ) : null}
              </div>
              <div>
                <input
                  type="email"
                  aria-label="Email"
                  autoComplete="email"
                  maxLength={120}
                  placeholder="Email"
                  className={fieldClass}
                  aria-invalid={errors.email ? true : undefined}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>
                ) : null}
              </div>
            </Reveal>
            <Reveal delay={0.14} className="mt-5">
              <input
                aria-label="Subject"
                maxLength={120}
                placeholder="Subject"
                className={fieldClass}
                aria-invalid={errors.subject ? true : undefined}
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject ? (
                <p className="mt-1 text-sm text-red-700">{errors.subject.message}</p>
              ) : null}
            </Reveal>
            <Reveal delay={0.2} className="mt-5">
              <textarea
                aria-label="Message"
                maxLength={2000}
                rows={6}
                placeholder="Message"
                className={fieldClass}
                aria-invalid={errors.message ? true : undefined}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message ? (
                <p className="mt-1 text-sm text-red-700">{errors.message.message}</p>
              ) : null}
            </Reveal>
            <Reveal delay={0.26}>
              <button
                type="submit"
                className="mt-8 border border-[#f0e2c4] border-l-4 border-l-khushii-gold bg-[#fbf7f0] px-8 py-3 text-base text-khushii-brown transition duration-300 hover:-translate-y-0.5 hover:border-khushii-gold"
              >
                Send
              </button>
              {notice ? (
                <motion.p
                  role="status"
                  className="mt-5 text-[#5f5f5f]"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {notice}
                </motion.p>
              ) : null}
            </Reveal>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {ENQUIRIES.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-7"
            >
              <h2 className="text-2xl font-medium text-khushii-brown md:text-3xl">
                {item.title}
              </h2>
              <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
              <p className="mt-5 flex items-center gap-2">
                <Image
                  src="/images/contact/mail.svg"
                  alt=""
                  width={62}
                  height={48}
                  className="h-5 w-5"
                />
                <Link href={`mailto:${item.email}`} className="text-lg text-khushii-gold-dark">
                  {item.email}
                </Link>
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
