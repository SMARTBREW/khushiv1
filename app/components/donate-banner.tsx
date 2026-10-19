import Image from "next/image";
import Link from "next/link";

export default function DonateBanner() {
  return (
    <section aria-label="Donate to KHUSHII">
      {/* HTML switches at 550px (.som / .hom) */}
      <Link href="/donation" className="block min-[551px]:hidden">
        <Image
          src="/images/donate/dbann.jpg"
          alt="Donate to KHUSHII"
          width={800}
          height={400}
          className="h-auto w-full"
        />
      </Link>
      <Link href="/donation" className="hidden min-[551px]:block">
        <Image
          src="/images/donate/Donation-Banner-1.jpg"
          alt="Donate to KHUSHII"
          width={1600}
          height={400}
          className="h-auto w-full"
        />
      </Link>
    </section>
  );
}
