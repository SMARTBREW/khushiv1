import Reveal from "./reveal";

export default function VideoBanner() {
  return (
    <section
      aria-label="KHUSHII story video"
      className="w-full bg-white px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-left">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
            Our film
          </p>
          <h2 className="mt-3 text-3xl font-medium text-khushii-brown md:text-4xl">
            Help India Heal
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-4 max-w-2xl text-base leading-8 text-khushii-gray md:text-lg">
            Watch how KHUSHII stands with children so they can stay in school,
            stay healthy, and build a brighter future.
          </p>
        </Reveal>

        <div className="border border-[#f0e2c4] bg-[#fbf7f0] p-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
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
      </div>
    </section>
  );
}
