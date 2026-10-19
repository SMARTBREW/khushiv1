import Reveal, { DrawLine } from "./reveal";

export default function VideoBanner() {
  return (
    <section
      aria-label="KHUSHII story video"
      className="w-full bg-gray-100 px-5 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-8 text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9d9c9c]">
            Our film
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-[0.04em] text-khushii-gray md:text-5xl">
            Help India Heal
          </h2>
          <DrawLine className="mt-3 block h-px w-24 origin-left bg-khushii-gold" />
          <p className="mt-4 max-w-2xl text-base leading-7 text-khushii-gray md:text-lg">
            Watch how KHUSHII stands with children so they can stay in school,
            stay healthy, and build a brighter future.
          </p>
        </Reveal>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-4 border-khushii-gold bg-khushii-gold shadow-sm">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/PTVsCfbkl-4?rel=0"
            title="KHUSHII story video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
