import Image from "./image";
import Link from "./link";

import { useState } from "react";

import { DONATE_OPTIONS } from "../constants";

export default function DonateSticky() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed right-0 top-2/3 z-40 hidden lg:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`rounded-l-3xl py-1.5 shadow-lg ${
          isOpen ? "bg-khushii-gray" : "bg-khushii-donate"
        }`}
      >
        <Link
          href="/donation/"
          className="flex items-center gap-2 px-3 py-1 pr-4 text-sm text-white"
        >
          <Image
            src="/images/donation-hand.png"
            alt=""
            width={32}
            height={32}
            className={`h-8 w-8 ${isOpen ? "invert" : ""}`}
          />
          DONATE
        </Link>
      </div>
      {isOpen ? (
        <ul className="absolute right-0 top-full mt-1 min-w-48 overflow-hidden rounded-md bg-white shadow-lg">
          {DONATE_OPTIONS.map((option) => (
            <li key={option.href}>
              <Link
                href={option.href}
                className="block px-4 py-2.5 text-sm text-khushii-gray hover:bg-gray-200"
              >
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
