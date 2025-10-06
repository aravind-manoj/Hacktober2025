"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/buildup/CustomButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className="hidden md:flex items-center gap-[5vw]">
          <Link
            href="#about"
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            About
          </Link>
          <Link
            href="#schedule"
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            Schedule
          </Link>
          <Link
            href="#sponsors"
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            Sponsors
          </Link>
          <Link
            href="#contact"
            className="text-[#FCE9FF] text-xl font-normal cursor-pointer hover:text-[#FF7620] transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <CustomButton text="Join Event" variant="dark" className="pl-6 pr-2 py-7" />
        </div>
        <button
          className="md:hidden text-[#FCE9FF] z-[101]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>
      <div
        className={`fixed inset-0 bg-black/50 z-[99] md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/85 backdrop-blur-lg flex flex-col items-center gap-6 py-8 rounded-t-[80px] border-t border-[#222] md:hidden z-[100] transition-transform duration-300 ease-out ${menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <Link
          href="#about"
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="#schedule"
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Schedule
        </Link>
        <Link
          href="#sponsors"
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Sponsors
        </Link>
        <Link
          href="#contact"
          className="text-[#FCE9FF] text-lg hover:text-[#FF7620] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <CustomButton
          text="Join Event"
          variant="dark"
          className="pl-6 pr-2 py-7"
        />
      </div>
    </>
  );
};

export default Header;