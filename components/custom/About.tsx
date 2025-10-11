"use client";
import Image from 'next/image';
import CustomButton from '@/components/buildup/CustomButton';
import { useIsMobile } from '@/lib/hooks/mobile';
import localFont from "next/font/local";
import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const infiniteBeyond = localFont({
  src: "../../app/fonts/infinite_beyond.ttf"
});

const AboutCard = ({ heading, index, children }: {
  heading: string,
  index: string,
  children: ReactNode
}) => {
  return (
    <div className='flex flex-col w-full rounded-md bg-[#25002b7f] p-4 gap-2 z-10'>
      <span className={`text-2xl flex flex-row justify-between items-center ${infiniteBeyond.className}`}>
        <h1>{heading}</h1>
        <h1>/{index}</h1>
      </span>
      <p>
        {children}
      </p>
    </div>
  )
}

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="relative bg-[#2B0032] min-h-screen w-full overflow-hidden gap-4 flex flex-col text-white md:pb-40">
      <div className=' px-4 pt-20 flex flex-col md:flex-row gap-4'>
        <div className='flex flex-col gap-4 md:min-w-[50%]'>
          <h1 className={`${infiniteBeyond.className} text-3xl md:text-5xl/normal text-[#62FF00] text-center`}>What's BREWING AT hacktober ?</h1>
          <p className='text-center'>How a wild idea became Kerala’s first Halloween-themed tech fest</p>
          <CustomButton text="Join Event" variant="light" className="pl-4 pr-1 py-5 sm:pl-4 sm:pr-1 sm:py-5 md:pl-5 md:pr-2 md:py-6 mx-auto" />
        </div>
        <div className='flex flex-col gap-3'>
          <AboutCard heading='About' index="01">
            <p className='text-justify'>
              Why keep tech serious?
              <ul className='list-disc pl-3'>
                <li>Hacktober 2025 is Kerala’s first Halloween-themed open-source cultural tech-fest, designed to bring youths, developers, and innovators together.</li>
                <li>It’s a one-day celebration filled with hackathons, cybersecurity challenges, robotics, and a spooky-cool party that makes open-source fun and unforgettable.</li>
                <li>Expect themed exhibits, fun games, and a community-driven vibe that makes learning both fun and memorable.</li>
              </ul>
            </p>
          </AboutCard>
          <AboutCard heading='Purpose & Vision' index="02">
            <ul className='list-disc pl-3 text-justify'>

              <li>Create a day where six different stories come together to begin one new chapter.</li>
              <li>To showcase what open source truly means - visually, socially, and technically.</li>

            </ul>
          </AboutCard>
          <AboutCard heading='Our Story' index="03">
            <p>

              We’re just a bunch of students - from different corners, different stories, but chasing the same dream: to build something that actually matters. to create something truly worthwhile and to mark history.
              <br />
              <br />
              It all kicked off with a pen, a paper, and a wild idea - to create a name that would echo for generations. Our vision is to establish a day where diverse communities can unite and embark on a new chapter.
              <br />
              <br />
              Hacktober is more than just a tech festival; it's an unparalleled opportunity. Every participant gains invaluable experiences through new connections, extensive networking, and access to essential resources.
              <br />
              <br />
              We believe Hacktober will be the most significant event you've encountered, not in sheer size, It’s about being unforgettable..
            </p>
          </AboutCard>
        </div>
      </div>

      <Image
        src={"/assets/about-item-2.svg"}
        width={300}
        height={300}
        alt="Mansion"
        className="absolute w-0 md:w-[30vw] max-w-xl bottom-[7vw] left-0 z-10"
      />
      <Image
        src={"/assets/about-item-3.svg"}
        width={300}
        height={300}
        alt="3 pillars"
        className="absolute w-0 md:w-[20vw] max-w-xl bottom-[-1vw] right-10 z-10"
      />
      <Image
        src={"/assets/objects/about/bat-1.svg"}
        width={300}
        height={300}
        alt="Bat"
        className="absolute w-0 md:w-32 max-w-xl bottom-[18vw] left-[28%] animate-alive-motion-1"
      />
      <Image
        src={"/assets/objects/about/bat-2.svg"}
        width={300}
        height={300}
        alt="Bat"
        className="absolute w-0 md:w-24 max-w-xl bottom-[12vw] left-[40%] animate-alive-motion-2"
      />
      <Image
        src={"/assets/objects/about/bat-3.svg"}
        width={300}
        height={300}
        alt="Bat"
        className="absolute w-0 md:w-24 max-w-xl bottom-[10vw] left-[45%] animate-alive-motion-3"
      />
      <Image
        src={"/assets/about-item-1.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
    </section>
  );
};

export default AboutSection;