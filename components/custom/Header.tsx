import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/buildup/CustomButton";

const Header: React.FC = () => {
  return (
    <header className="flex w-full h-24 items-center justify-between relative z-[100] px-8 py-4">
      <Image
        src={"/logo.png"}
        width={120}
        height={120}
        alt="Hacktober 2025"
        className="w-24 h-auto shrink-0"
      />
      <nav className="flex items-center gap-[5vw]">
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

      <CustomButton text="Join Event" variant="dark" className="pl-6 pr-2 py-7" />
    </header>
  );
};

export default Header;
