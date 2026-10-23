import { useEffect, useRef, useState } from "react";

import DonateBanner from "./components/donate-banner";
import Image from "./components/image";

const PAGE_TITLE =
  "Our Galleries | Khushii NGO Social Activities and Integrations | Khushii";

const TABS = [
  { id: "all", label: "View all" },
  { id: "shikshaantra", label: "Shikshaantra Plus" },
  { id: "swatantra", label: "Swatantra Shikshaantra" },
  { id: "kala", label: "Kala" },
] as const;

type TabId = (typeof TABS)[number]["id"];

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  tab: Exclude<TabId, "all">;
};

const PHOTOS: Photo[] = [
  {
    src: "/images/gallery/gallery-1.jpg",
    width: 973,
    height: 1068,
    alt: "A student in a KHUSHII uniform",
    tab: "swatantra",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    width: 638,
    height: 519,
    alt: "Students working at computers",
    tab: "swatantra",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    width: 637,
    height: 519,
    alt: "Students raising their hands in class",
    tab: "swatantra",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    width: 638,
    height: 518,
    alt: "A student writing in a notebook",
    tab: "swatantra",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    width: 637,
    height: 518,
    alt: "Students gathered outside Swatantra Shikshaantra",
    tab: "swatantra",
  },
  {
    src: "/images/gallery/image2.jpg",
    width: 700,
    height: 600,
    alt: "Students holding small boxes in class",
    tab: "shikshaantra",
  },
  {
    src: "/images/gallery/image3.jpg",
    width: 700,
    height: 600,
    alt: "Students in a Shikshaantra Plus classroom",
    tab: "shikshaantra",
  },
  {
    src: "/images/gallery/image4.jpg",
    width: 700,
    height: 600,
    alt: "A student serving a meal to classmates",
    tab: "shikshaantra",
  },
  {
    src: "/images/gallery/image5.jpg",
    width: 700,
    height: 600,
    alt: "Students cheering with their hands raised",
    tab: "shikshaantra",
  },
  {
    src: "/images/gallery/image1.jpg",
    width: 700,
    height: 600,
    alt: "A teacher with students in a classroom",
    tab: "kala",
  },
  {
    src: "/images/gallery/image11.jpg",
    width: 700,
    height: 600,
    alt: "Students examining a test tube",
    tab: "kala",
  },
  {
    src: "/images/gallery/image12.jpg",
    width: 700,
    height: 600,
    alt: "Students using a microscope",
    tab: "kala",
  },
];

export default function Galleries() {
  const [tab, setTab] = useState<TabId>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const photos = PHOTOS.filter((photo) => tab === "all" || photo.tab === tab);
  const openPhoto = openIndex === null ? null : photos[openIndex];

  useEffect(() => {
    document.title = PAGE_TITLE;
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    audio?.addEventListener("ended", handleEnded);
    return () => {
      audio?.pause();
      audio?.removeEventListener("ended", handleEnded);
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openPhoto && !dialog.open) dialog.showModal();
    if (!openPhoto && dialog.open) dialog.close();
  }, [openPhoto]);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const showPhoto = (index: number) => {
    setOpenIndex(index);
  };

  const closePhoto = () => {
    setOpenIndex(null);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/gallery/gallerybanner.jpg"
          alt="A student watering young plants"
          width={1920}
          height={519}
          priority
          className="h-auto w-full"
        />
        <div className="absolute inset-y-0 left-0 flex w-1/2 items-center px-6 md:px-14">
          <h1 className="text-3xl font-bold uppercase tracking-[0.08em] text-white md:text-5xl">
            Khushii Gallery
          </h1>
        </div>
      </section>

      <section id="tabsforimages" className="bg-white px-5 pb-14 md:px-10 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-10">
            {TABS.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setTab(item.id);
                    closePhoto();
                  }}
                  className={`border-b-2 pb-1 text-sm uppercase tracking-wide ${
                    active
                      ? "border-khushii-gold text-khushii-brown"
                      : "border-transparent text-khushii-gold-dark"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={toggleAudio}
              className={`border-b-2 pb-1 text-sm uppercase tracking-wide ${
                isPlaying
                  ? "border-khushii-gold text-khushii-brown"
                  : "border-transparent text-khushii-gold-dark"
              }`}
            >
              {isPlaying ? "Pause Khushii Tarana" : "Play Khushii Tarana"}
            </button>
          </div>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <li
                key={photo.src}
                className="overflow-hidden rounded-[1.25rem] border border-[#f0e2c4] bg-[#fbf7f0]"
              >
                <button
                  type="button"
                  onClick={() => showPhoto(index)}
                  className="block w-full"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="h-[18.75rem] w-full rounded-[1.25rem] object-cover object-top"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DonateBanner />

      <audio ref={audioRef} preload="none">
        <source src="/audio/khushi-tarana-audio.mpeg" type="audio/mpeg" />
      </audio>

      <dialog
        ref={dialogRef}
        onClose={closePhoto}
        className="m-auto max-h-[90vh] max-w-4xl bg-transparent p-4 backdrop:bg-black/70"
      >
        {openPhoto ? (
          <div>
            <Image
              src={openPhoto.src}
              alt={openPhoto.alt}
              width={openPhoto.width}
              height={openPhoto.height}
              className="mx-auto h-auto max-h-[80vh] w-auto max-w-full"
            />
            <div className="mt-3 flex justify-center gap-5 bg-[#fbf7f0] px-4 py-3">
              <button
                type="button"
                className="text-sm text-khushii-gold-dark"
                onClick={() =>
                  setOpenIndex((index) =>
                    index === null ? 0 : (index - 1 + photos.length) % photos.length,
                  )
                }
              >
                Previous
              </button>
              <button
                type="button"
                className="text-sm text-khushii-gold-dark"
                onClick={closePhoto}
              >
                Close
              </button>
              <button
                type="button"
                className="text-sm text-khushii-gold-dark"
                onClick={() =>
                  setOpenIndex((index) =>
                    index === null ? 0 : (index + 1) % photos.length,
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
