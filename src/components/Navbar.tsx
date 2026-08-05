"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="VR Agri Blooms logo"
            width={55}
            height={55}
            priority
            className="h-12 w-12 object-contain"
          />

          <span className="text-xl font-bold text-green-700 sm:text-2xl">
            VR Agri Blooms
          </span>
        </a>

        <ul className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <li>
            <a className="hover:text-green-700" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="hover:text-green-700" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="hover:text-green-700" href="#services">
              Services
            </a>
          </li>

          <li>
            <a className="hover:text-green-700" href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a className="hover:text-green-700" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+917036106812"
            className="hidden rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 sm:block"
          >
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 text-2xl text-gray-700 md:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-md md:hidden">
          <ul className="flex flex-col gap-5 font-medium text-gray-700">
            <li>
              <a onClick={closeMenu} href="#home">
                Home
              </a>
            </li>

            <li>
              <a onClick={closeMenu} href="#about">
                About
              </a>
            </li>

            <li>
              <a onClick={closeMenu} href="#services">
                Services
              </a>
            </li>

            <li>
              <a onClick={closeMenu} href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a onClick={closeMenu} href="#contact">
                Contact
              </a>
            </li>

            <li>
              <a
                href="tel:+917036106812"
                className="inline-block rounded-lg bg-green-700 px-5 py-3 text-center text-white"
              >
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}