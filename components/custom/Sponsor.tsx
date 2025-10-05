import Image from "next/image";

const SponsorsSection: React.FC = () => {
  return (
    <section className="bg-[url('/assets/sponsor-bg.png')] bg-contain w-full h-screen relative overflow-hidden max-h-[900px]">
      {/* Title */}
      <h2 className="text-[#62FF00] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 z-10">
        SPONSORS
      </h2>

      {/* Content */}
      

      {/* Ground Decoration */}
      <Image
        src={"/assets/sponsor-item-1.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
      <Image
        src={"/assets/sponsor-item-2.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 right-0"
      />
    </section>
  );
};

export default SponsorsSection;
