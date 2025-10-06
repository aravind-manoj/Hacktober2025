"use client";
import Image from 'next/image';
import CustomButton from '@/components/buildup/CustomButton';
import { useIsMobile } from '@/lib/hooks/mobile';

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="relative bg-[#2B0032] min-h-screen w-full px-4 py-20 overflow-hidden">
      {!isMobile ? (
        <div
          className="w-full flex items-center justify-between pl-10 pr-0 mr-0"
        >
          <div
            className='w-[65%] flex flex-col justify-between'
          >
            <h2
              className='text-[#62FF00] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left mb-10 z-10'
            >
              ABOUT
            </h2>
            <span
              className='text-white text-lg md:text-xl lg:text-2xl mb-16'
            >
              Why keep tech serious? <span className="text-[#FF7620]">Hacktober 2025</span> is Kerala’s first Halloween-themed open-source cultural tech-fest, designed to bring youths, developers, and innovators together. It’s a one-day celebration filled with hackathons, cybersecurity challenges, robotics, and a spooky-cool party that makes open-source fun and unforgettable. Expect themed exhibits, fun games, and a community-driven vibe that makes learning both fun and memorable.
            </span>

            <CustomButton text="Book Your Ticket" variant="light" className="pl-6 pr-2 py-7" />
          </div>

          <Image
            src={"/assets/about-item-1.png"}
            width={800}
            height={400}
            alt="About"
            className="w-[30%] min-w-[350px] max-w-[450px] h-auto mt-10 z-10"
          />
        </div>
      ) : (
        <div
          className="w-full flex flex-col items-center justify-between px-10"
        >
          <h2
            className='text-[#62FF00] text-5xl font-extrabold mb-16 z-10'
          >
            ABOUT
          </h2>
          <span
            className='text-white text-xl mb-20'
          >
            Why keep tech serious? <span className="text-[#FF7620]">Hacktober 2025</span> is Kerala’s first Halloween-themed open-source cultural tech-fest, designed to bring youths, developers, and innovators together. It’s a one-day celebration filled with hackathons, cybersecurity challenges, robotics, and a spooky-cool party that makes open-source fun and unforgettable. Expect themed exhibits, fun games, and a community-driven vibe that makes learning both fun and memorable.
          </span>

          <CustomButton text="Book Your Ticket" variant="light" className="pl-6 pr-2 py-7" />
        </div>
      )}

      {/* Web Decoration */}
      <Image
        src={"/assets/about-item-4.svg"}
        width={300}
        height={300}
        alt=""
        className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-auto z-10"
      />

      {/* Ground Decoration */}
      <Image
        src={"/assets/about-item-2.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
      <Image
        src={"/assets/about-item-3.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 right-0"
      />
    </section>
  );
};

export default AboutSection;