import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import joinbtn from "@/public/assets/joinbtn.svg";
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav className="px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={"/logo.png"}
              width={104}
              height={84}
              alt="Hacktober 2025"
              className="h-20 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-12">
          <Link
            href="#about"
            className="text-white text-lg font-medium hover:text-orange-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#schedule"
            className="text-white text-lg font-medium hover:text-orange-400 transition-colors duration-200"
          >
            Schedule
          </Link>
          <Link
            href="#sponsors"
            className="text-white text-lg font-medium hover:text-orange-400 transition-colors duration-200"
          >
            Sponsors
          </Link>
          <Link
            href="#contact"
            className="text-white text-lg font-medium hover:text-orange-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Button className="bg-gray-900 hover:bg-gray-800 text-orange-500 font-bold pl-8 pr-2 py-8 rounded-full flex items-center space-x-3 transition-all duration-200 shadow-lg cursor-pointer">
            <span className="text-lg">Join Event</span>
            <div className="bg-orange-500 rounded-full p-4">
              <Image src={joinbtn} width={24} height={24} alt="Join" />
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
}