import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "./image";

import { useEffect, useRef, useState } from "react";

import { KAPIL_NOTE } from "../constants";

export default function KapilDev() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const reduceMotion = useReducedMotion();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

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

  return (
    <section id="kapildev" className="w-full bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[22rem] w-full md:h-[28rem] lg:h-[34rem]">
          <Image
            src="/images/kapil/Kapil-Dev.jpg"
            alt="Kapil Dev, Chairman Emeritus of KHUSHII"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-14 md:px-16 lg:py-20">
          <h2 className="text-[2rem] font-medium uppercase text-khushii-brown md:text-[3.25rem]">
            KAPIL DEV
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-3 text-sm tracking-[0.084em] text-khushii-gold-dark md:text-base">
            A MESSAGE FROM CHAIRMAN EMERITUS, KHUSHII
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-khushii-gray md:text-lg">
            Dearest friends of Khushii, it was in the early 2000s when I, along
            with like-minded people, came together with the sole purpose of
            wanting to utilise our time to do a greater good - an activity which
            was truly “needed” for society.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:gap-0">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="mr-[0.9375rem] text-sm text-khushii-gold-dark"
            >
              {isExpanded ? "READ LESS" : "READ MORE"}
            </button>
            <motion.button
              type="button"
              onClick={toggleAudio}
              className={`text-sm ${
                isPlaying ? "text-khushii-gold" : "text-khushii-gold-dark"
              }`}
              animate={
                isPlaying && !reduceMotion
                  ? { scale: [1, 1.04, 1] }
                  : { scale: 1 }
              }
              transition={
                isPlaying && !reduceMotion
                  ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.2 }
              }
            >
              {isPlaying ? "PAUSE KHUSHII TARANA" : "PLAY KHUSHII TARANA"}
            </motion.button>
          </div>
        </div>
      </div>

      <audio ref={audioRef} preload="none">
        <source src="/audio/khushi-tarana-audio.mpeg" type="audio/mpeg" />
      </audio>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            key="kapil-note"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#f0e2c4] bg-[#fbf7f0]"
          >
            <div className="mx-auto max-w-[87.5rem] space-y-[1.125rem] px-6 py-10 text-left text-lg leading-8 text-khushii-gray md:px-12">
              {KAPIL_NOTE.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
