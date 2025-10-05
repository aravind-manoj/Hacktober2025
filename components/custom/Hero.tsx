import Image from 'next/image';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import CustomButton from '../buildup/CustomButton';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[url('/assets/hero-bg.png')] bg-contain w-full h-screen relative overflow-hidden">
      <Header />

      <div
        className="flex flex-col items-center w-[500px] ml-[6vw] mt-[10vw]"
      >
        {/* Main title */}
        <Image
          src={"/assets/hacktober.png"}
          width={800}
          height={400}
          alt="Main title"
          className="w-[50vw] h-auto"
        />

        {/* Subtitle */}
        <h2 className="text-[#FF7620] text-2xl font-bold mt-5 ">
          Spooktacular Hacks Await
        </h2>

        {/* Action buttons */}
        <div className="flex py-5 gap-4">
          <Button className="px-8 py-6 rounded-full border-4 border-orange-500 bg-transparent text-orange-500 font-bold text-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
            More Info
          </Button>

          <CustomButton variant="light"/>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
