"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useId, useState } from "react";

import {
  DONATE_OPTIONS,
  NAV_ITEMS,
  type NavChild,
  type NavItem,
} from "../constants";

function DesktopDropdown({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="whitespace-nowrap border-b-2 border-transparent px-2 py-2 text-sm uppercase text-white hover:border-white xl:px-3 xl:text-base"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="whitespace-nowrap border-b-2 border-transparent px-2 py-2 text-sm uppercase text-white hover:border-white xl:px-3 xl:text-base"
      >
        {item.label}
      </Link>
      <ul className="invisible absolute left-0 top-full z-50 mt-3 min-w-52 bg-white opacity-0 shadow-md group-hover:visible group-hover:opacity-100">
        {item.children.map((child) => (
          <li key={child.href} className="group/sub relative">
            <Link
              href={child.href}
              className="block px-5 py-2.5 text-sm text-khushii-gray hover:bg-gray-200"
            >
              {child.label}
            </Link>
            {child.children?.length ? (
              <ul className="invisible absolute left-full top-0 z-50 min-w-52 bg-white opacity-0 shadow-md group-hover/sub:visible group-hover/sub:opacity-100">
                {child.children.map((grandChild) => (
                  <li key={grandChild.href}>
                    <Link
                      href={grandChild.href}
                      className="block px-5 py-2.5 text-sm text-khushii-gray hover:bg-gray-200"
                    >
                      {grandChild.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileNavBranch({
  item,
  onNavigate,
}: {
  item: NavChild;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  return (
    <li>
      <div className="flex items-center justify-between border-b border-white/20">
        <Link
          href={item.href}
          className="flex-1 px-4 py-3 text-base uppercase text-white"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
        {hasChildren ? (
          <button
            type="button"
            aria-label={isOpen ? `Collapse ${item.label}` : `Expand ${item.label}`}
            aria-expanded={isOpen}
            className="px-4 py-3 text-xl text-white"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "−" : "+"}
          </button>
        ) : null}
      </div>
      {hasChildren && isOpen ? (
        <ul className="bg-black/20 pl-4">
          {item.children?.map((child) => (
            <MobileNavBranch
              key={child.href}
              item={child}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-khushii-gold shadow-sm">
      {/* Mobile + tablet */}
      <div className="flex items-center justify-between px-5 py-2 lg:hidden">
        <button
          type="button"
          id="mainNavBurger"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls={drawerId}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-white ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <Link href="/" onClick={closeMenu} className="flex items-center">
          <Image
            src="/images/main-logo.png"
            alt="KHUSHII logo"
            width={120}
            height={104}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <Link
          href="/donation"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium uppercase text-black"
        >
          Donate
        </Link>
      </div>

      <nav
        id={drawerId}
        aria-label="Mobile navigation"
        className={`overflow-y-auto bg-khushii-gold lg:hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <MobileNavBranch
              key={item.label}
              item={item}
              onNavigate={closeMenu}
            />
          ))}
        </ul>
      </nav>

      {/* Desktop from lg (1024px) */}
      <div className="mx-auto hidden max-w-7xl px-6 lg:block xl:px-8">
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-6 py-3"
        >
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/main-logo.png"
              alt="KHUSHII logo"
              width={140}
              height={120}
              className="h-[4.75rem] w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex flex-1 items-center justify-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </div>

          <div
            className="relative shrink-0"
            onMouseEnter={() => setIsDonateOpen(true)}
            onMouseLeave={() => setIsDonateOpen(false)}
          >
            <Link
              href="/donation"
              className={`rounded-full px-5 py-2 text-sm uppercase xl:text-base ${
                isDonateOpen
                  ? "bg-white/20 text-white"
                  : "bg-white text-black"
              }`}
            >
              Donate
            </Link>
            {isDonateOpen ? (
              <ul className="absolute right-0 top-full z-50 mt-1 min-w-48 overflow-hidden rounded-md bg-white shadow-lg">
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
        </nav>
      </div>
    </header>
  );
}
