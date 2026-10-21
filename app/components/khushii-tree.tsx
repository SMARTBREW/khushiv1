"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CLOUDS = [
  {
    label: "Spreading Smiles",
    href: "/who-we-are",
    src: "/images/tree/cloud-spreading-smiles.svg",
    width: 250,
    desktop: "absolute left-[3%] top-[20%] z-10 w-[13rem] lg:w-[15rem]",
    mobile: "w-1/2 -mt-[1.875rem] text-center",
  },
  {
    label: "Education",
    href: "/what-we-do/education",
    src: "/images/tree/cloud-education.svg",
    width: 200,
    desktop: "absolute right-[5%] top-[-1.25rem] z-10 w-[10.5rem] lg:w-[12rem]",
    mobile: "w-1/2 -mt-[1.875rem] text-center",
  },
  {
    label: "Wellbeing",
    href: "/what-we-do/wellbeing",
    src: "/images/tree/cloud-wellbeing.svg",
    width: 200,
    desktop: "absolute left-[12%] top-0 z-10 w-[10.5rem] lg:w-[12rem]",
    mobile: "w-1/2 -my-[6.25rem] text-center",
  },
  {
    label: "Community Empowerment",
    href: "/what-we-do/community-empowerment",
    src: "/images/tree/cloud-community.svg",
    width: 250,
    desktop: "absolute right-[12%] top-[20%] z-10 w-[13rem] lg:w-[15rem]",
    mobile: "w-1/2 -my-[6.25rem] text-center",
  },
] as const;

function CloudLink({
  cloud,
  className,
  delay,
}: {
  cloud: (typeof CLOUDS)[number];
  className: string;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0, 6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <Link href={cloud.href} className="block" aria-label={cloud.label}>
          <Image
            src={cloud.src}
            alt=""
            width={cloud.width}
            height={Math.round(cloud.width * 0.72)}
            unoptimized
            className="mx-auto h-auto w-full max-w-[12.5rem] md:max-w-none"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function KhushiiTree() {
  return (
    <section className="w-full overflow-hidden bg-gray-100 py-16 md:py-24">
      <div className="flex w-full flex-wrap md:hidden">
        <Image
          src="/images/tree/khushiitree.jpg"
          alt="KHUSHII tree of impact"
          width={800}
          height={180}
          className="mx-auto h-[11.25rem] w-full max-w-3xl object-contain"
        />
        {CLOUDS.map((cloud, index) => (
          <CloudLink
            key={cloud.label}
            cloud={cloud}
            className={cloud.mobile}
            delay={index * 0.12}
          />
        ))}
      </div>

      <div className="mx-auto hidden w-full max-w-6xl items-center gap-6 px-6 md:grid md:grid-cols-1 lg:grid-cols-[11rem_minmax(0,1fr)] lg:px-8">
        <p className="hidden text-sm font-medium uppercase leading-7 tracking-[0.16em] text-khushii-gray lg:block">
          Education, wellbeing, community
        </p>
        <div className="relative mx-auto w-full max-w-5xl">
          <Image
            src="/images/tree/khushiitree.jpg"
            alt="KHUSHII tree of impact"
            width={1200}
            height={700}
            className="mx-auto h-auto max-h-[26rem] w-full object-contain lg:max-h-[30rem]"
            sizes="(min-width: 1024px) 60rem, 100vw"
          />
          {CLOUDS.map((cloud, index) => (
            <CloudLink
              key={cloud.label}
              cloud={cloud}
              className={cloud.desktop}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
