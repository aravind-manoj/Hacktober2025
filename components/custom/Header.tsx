"use client";

import Image from "next/image";
import CustomButton from "@/components/buildup/CustomButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Custom smooth scroll animation
const smoothScrollTo = (targetY: number, duration = 800) => {
  const startY = window.scrollY;
  const distanceY = targetY - startY;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distanceY * eased);

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.scrollY - 60; // offset for header height
      smoothScrollTo(elementTop, 800); // 800ms for slower, smoother scroll
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className="flex w-full h-24 items-center justify-between relative z-[100] px-8 py-4">
        <Image
          src={"/logo.png"}
          width={120}
          height={120}
          alt="Hacktober 2025"
          className="w-24 h-auto shrink-0"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[5vw]">
          <button
            onClick={() => handleScrollTo("#about")}
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo("#schedule")}
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            Schedule
          </button>
          <button
            onClick={() => handleScrollTo("#sponsors")}
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            Sponsors
          </button>
          <button
            onClick={() => handleScrollTo("#contact")}
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CustomButton text="Join Event" variant="dark" className="pl-6 pr-2 py-7" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#FCE9FF] z-[101]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[99] md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/85 backdrop-blur-lg flex flex-col items-center gap-6 py-8 rounded-t-[80px] border-t border-[#222] md:hidden z-[100] transition-transform duration-300 ease-out ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={() => handleScrollTo("#about")}
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
        >
          About
        </button>
        <button
          onClick={() => handleScrollTo("#schedule")}
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
        >
          Schedule
        </button>
        <button
          onClick={() => handleScrollTo("#sponsors")}
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
        >
          Sponsors
        </button>
        <button
          onClick={() => handleScrollTo("#contact")}
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
        >
          Contact
        </button>
        <CustomButton text="Join Event" variant="dark" className="pl-6 pr-2 py-7" />
      </div>
    </>
  );
};

export default Header;
