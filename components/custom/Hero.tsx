"use client";
import Image from 'next/image';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import CustomButton from '../buildup/CustomButton';
import { useIsMobile } from '@/lib/hooks/mobile';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-[url('/assets/hero-bg.png')] bg-contain w-full h-screen relative overflow-hidden max-h-[1000px]">
      <Header />

      {!isMobile ? (
        <div
          className="flex w-full items-center justify-between px-[7vw] mb-[5vw] absolute bottom-0"
        >
          <div
            className="flex flex-col items-center md:w-[35vw] lg:w-[40vw]"
          >
            {/* Main title */}
            <Image
              src={"/assets/hacktober.png"}
              width={800}
              height={400}
              alt="Main title"
              className="md:w-[45vw] lg:w-[50vw] max-w-[500px] h-auto"
            />

            {/* Subtitle */}
            <h2 className="text-[#FF7620] text-xl md:text-xl lg:text-2xl font-bold mt-5">
              Spooktacular Hacks Await
            </h2>

            {/* Action buttons */}
            <div className="flex py-5 gap-4">
              <Button className="px-4 py-4 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full border-4 border-orange-500 bg-transparent text-orange-500 font-bold text-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
                More Info
              </Button>

              <CustomButton variant="light" className="pl-4 pr-1 py-5 sm:pl-4 sm:pr-1 sm:py-5 md:pl-5 md:pr-2 md:py-6" />
            </div>
          </div>

          {/* Mansion */}
          <Image
            src={"/assets/hero-item-1.png"}
            width={800}
            height={800}
            alt="Item 1"
            className="w-0 md:w-[29vw] lg:w-[30vw] max-w-[500px] h-auto z-10"
          />
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-center mt-[250px] gap-3">
            {/* Main title */}
            <Image
              src={"/assets/hacktober.png"}
              width={800}
              height={400}
              alt="Main title"
              className="h-auto w-[90vw] min-w-[420px]"
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

              <CustomButton variant="light" className="pl-5 pr-2 py-7" />
            </div>
        </div>
      )}

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
