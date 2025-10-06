"use client";
import Image from 'next/image';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import CustomButton from '../buildup/CustomButton';
import { useIsMobile } from '@/lib/hooks/mobile';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-[url('/assets/hero-bg.png')] bg-contain w-full h-screen md:h-[700px] lg:h-[750px] xl:h-screen relative overflow-hidden max-h-[900px]">
      <Header />

      {!isMobile ? (
        <div
          className="flex w-full items-center justify-between px-[4vw] md:px-[7vw] lg:px-[10vw] mb-[3vw] lg:mb-[4vw] xl:mb-[5vw] absolute bottom-0"
        >
          <div
            className="flex flex-col items-center"
          >
            {/* Main title */}
            <Image
              src={"/assets/hacktober.png"}
              width={800}
              height={400}
              alt="Main title"
              className="md:w-[45vw] lg:w-[45vw] xl:w-[50vw] max-w-[500px] h-auto"
            />

            {/* Subtitle */}
            <h2 className="text-[#FF7620] text-xl md:text-xl lg:text-2xl font-bold mt-5">
              Spooktacular Hacks Await
            </h2>

            {/* Action buttons */}
            <div className="flex py-5 gap-4">
              <Button className="px-4 py-4 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-full border-4 border-orange-500 bg-transparent text-orange-500 font-bold text-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
                More Info
              </Button>

              <CustomButton text="Join Event" variant="light" className="pl-4 pr-1 py-5 md:pl-4 md:pr-1 md:py-5 lg:pl-5 lg:pr-2 lg:py-6" />
            </div>
          </div>

          <div
            className="relative z-10 md:w-[45vw] lg:w-[40vw] xl:w-[33vw] max-w-[500px] h-auto"
          >
            {/* Mansion */}
            <Image
              src={"/assets/hero-item-1.png"}
              width={800}
              height={800}
              alt="Item 1"
              className="w-full"
            />

            {/* Ghosts */}
            <Image
              src={"/assets/hero-item-4.svg"}
              width={300}
              height={300}
              alt="Ghost"
              className="absolute w-[8vw] max-w-32 bottom-20 -left-6 animate-alive-motion-1 -z-10"
            />
            <Image
              src={"/assets/hero-item-5.svg"}
              width={300}
              height={300}
              alt="Ghost"
              className="absolute w-[8vw] max-w-32 top-1/2 right-2/12 animate-alive-motion-2"
            />
            <Image
              src={"/assets/hero-item-6.svg"}
              width={300}
              height={300}
              alt="Ghost"
              className="absolute w-[5vw] max-w-24 top-2/6 left-14 animate-alive-motion-3 -z-10"
            />

            {/* Bats */}
            <Image
              src={"/assets/hero-item-7.svg"}
              width={300}
              height={300}
              alt="Bat"
              className="absolute w-[8vw] max-w-32 -right-[5vw] top-1/2 animate-alive-motion-1"
            />
            <Image
              src={"/assets/hero-item-8.svg"}
              width={300}
              height={300}
              alt="Bat"
              className="absolute w-[8vw] max-w-32 left-20 top-10 animate-alive-motion-2"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-center mt-[200px] gap-3">
          {/* Main title */}
          <Image
            src={"/assets/hacktober.png"}
            width={800}
            height={400}
            alt="Main title"
            className="h-auto w-[99vw] min-[600px]:w-[90vw] min-w-[380px]"
          />

          {/* Subtitle */}
          <h2 className="text-[#FF7620] text-xl md:text-xl lg:text-2xl font-bold mt-5">
            Spooktacular Hacks Await
          </h2>

          {/* Action buttons */}
          <div className="flex py-5 gap-5">
            <Button className="px-6 py-6 rounded-full border-4 border-orange-500 bg-transparent text-orange-500 font-bold text-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
              More Info
            </Button>

            <CustomButton text="Join Event" variant="light" className="pl-5 pr-2 py-7" />
          </div>
        </div>
      )}

      <Image
        src={"/assets/hero-item-9.svg"}
        width={300}
        height={300}
        alt="Bat"
        className="absolute w-0 md:w-[8vw] max-w-32 bottom-10 left-0 animate-alive-motion-3 z-10"
      />
      <Image
        src={"/assets/hero-item-2.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
      <Image
        src={"/assets/hero-item-3.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 right-0"
      />
    </section>
  );
};

export default HeroSection;
