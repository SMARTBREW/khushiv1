import { useEffect, useState } from "react";

import Image from "./components/image";
import Reveal, { DrawLine } from "./components/reveal";
import {
  LEADERSHIP,
  LEADERSHIP_BOARD,
  LEADERSHIP_FOUNDER,
} from "./constants";

const PAGE_TITLE =
  "NGO Leadership | Best Non-Governmental Organisation in Delhi | Khushii";

export default function Leadership() {
  const [openNote, setOpenNote] = useState<string | null>(null);

  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = "Khushii | NGO for Children | Child Welfare NGO in India";
    };
  }, []);

  return (
    <>
      <section className="w-full overflow-hidden">
        <Image
          src="/images/leadership/leadershipbanner.jpg"
          alt="KHUSHII leadership"
          width={1600}
          height={700}
          priority
          className="h-auto w-full object-cover"
        />
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-khushii-gold-dark">
              {LEADERSHIP.eyebrow}
            </p>
            <h1 className="mt-3 max-w-md text-3xl font-medium leading-tight text-khushii-brown md:text-4xl">
              {LEADERSHIP.title}
            </h1>
            <DrawLine className="mt-4 block h-1 w-16 origin-left rounded-full bg-khushii-gold" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="rounded-3xl border border-[#f0e2c4] bg-[#fbf7f0] p-6 text-base leading-8 text-[#5f5f5f] md:p-8">
              {LEADERSHIP.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 md:px-10">
        <div className="mx-auto max-w-sm border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-10 text-center">
          <Image
            src={LEADERSHIP_FOUNDER.image}
            alt={LEADERSHIP_FOUNDER.name}
            width={450}
            height={450}
            className="mx-auto size-72 rounded-full object-contain"
          />
          <h2 className="mt-6 text-2xl font-medium text-khushii-brown">
            {LEADERSHIP_FOUNDER.name}
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 bg-khushii-gold" />
          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-khushii-gray">
            {LEADERSHIP_FOUNDER.role}
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <h2 className="text-3xl font-medium text-khushii-brown md:text-4xl">
            GOVERNING BOARD
          </h2>
          <span className="mt-4 block h-1 w-16 bg-khushii-gold" />
        </div>

        <ul className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {LEADERSHIP_BOARD.map((person) => {
            const isOpen = openNote === person.name;
            const noteId = `note-${person.name.replace(/\s+/g, "-").toLowerCase()}`;

            return (
              <li key={person.name} className="border border-[#f0e2c4] bg-[#fbf7f0] px-6 py-8 text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={450}
                  height={450}
                  className="mx-auto size-72 rounded-full object-contain"
                />
                <h3 className="mt-6 text-xl font-medium text-khushii-brown">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-khushii-gray">
                  {person.role}
                </p>
                {"note" in person ? (
                  <div className="mt-6 text-left">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={noteId}
                      className="border border-[#f0e2c4] border-l-4 border-l-khushii-gold bg-white px-5 py-2 text-sm text-khushii-brown"
                      onClick={() =>
                        setOpenNote(isOpen ? null : person.name)
                      }
                    >
                      {isOpen ? "HIDE NOTE" : person.noteLabel.toUpperCase()}
                    </button>
                    {isOpen ? (
                      <div
                        id={noteId}
                        className="mt-6 space-y-4 text-sm leading-7 text-khushii-gray md:text-base"
                      >
                        {person.note.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
