import Image from "next/image";
import localFont from "next/font/local";

const infiniteBeyond = localFont({
  src: "../../app/fonts/infinite_beyond.ttf"
});

interface partnersItem {
  name: string;
  imageSrc: string;
  className: string;
}

const partnersData: partnersItem[] = [
  {
    name: "FOSS United",
    imageSrc: "/assets/partners/foss-united.png",
    className: "w-[80px] md:w-[130px] h-auto"
  },
  {
    name: "TinkerHub",
    imageSrc: "/assets/partners/tinkerhub.png",
    className: "w-[250px] md:w-[300px] h-auto"
  },
  {
    name: "Mulearn",
    imageSrc: "/assets/partners/mulearn.png",
    className: "w-[130px] md:w-[180px] h-auto"
  },
  {
    name: "RoomNumber404",
    imageSrc: "/assets/partners/roomnumber404.png",
    className: "w-[220px] md:w-[270px] h-auto"
  },
  {
    name: "Under25",
    imageSrc: "/assets/partners/under25.png",
    className: "w-[180px] md:w-[220px] h-auto"
  },
  {
    name: "Thirivuvanthapuram",
    imageSrc: "/assets/partners/thirivananthapuram.png",
    className: "w-[80px] md:w-[130px] h-auto"
  },
]

const SponsorsSection: React.FC = () => {
  return (
    <section className="bg-[url('/assets/sponsor-bg.png')] bg-contain w-full h-screen relative overflow-hidden max-h-[1000px]">
      <div
        className="flex flex-col w-full justify-center py-10"
      >
        {/* Partners Title */}
        <h1 className={`text-[#62FF00] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 z-10 ${infiniteBeyond.className}`}>
          OUR PARTNERS
        </h1>


        {/* Partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center justify-center md:px-5 gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-[90vw] max-w-[1500px] mx-auto">
          {partnersData.map((item, index) => (
            <Image
              key={index}
              src={item.imageSrc}
              width={300}
              height={300}
              alt={item.name}
              className={`${item.className}`}
            />
          ))}
        </div>
      </div>

      <div
        className="flex flex-col w-full justify-center py-10"
      >
        {/* Sponsors Title */}
        <h2 className={`text-[#62FF00] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 z-10 ${infiniteBeyond.className}`}>
          SPONSORS
        </h2>

        {/* Content */}
      </div>

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
