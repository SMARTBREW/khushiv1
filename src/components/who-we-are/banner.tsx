import Image from "../image";

export default function AboutBanner() {
  return (
    <section className="w-full overflow-hidden">
      <Image
        src="/images/about/about-top-banner.jpg"
        alt="KHUSHII classroom, a teacher with students holding Hindi letter cards"
        width={1600}
        height={700}
        priority
        className="h-auto w-full object-cover"
      />
    </section>
  );
}
