import Image from "next/image";

interface ScheduleItem {
  time?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  imageSrc?: string;
  imageClass?: string;
  visible?: boolean;
}

const scheduleData: ScheduleItem[] = [
  {
    time: "09 AM",
    title: "Inauguration Ceremony",
    bgColor: "#FF7426",
    imageSrc: "/assets/objects/bat.png",
    imageClass: "w-20 h-auto rotate-[-5.85deg] absolute bottom-1 right-2",
    visible: true,
  },
  {
    visible: false,
  },
  {
    time: "10 AM",
    title: "Hackathon Kickoff",
    description: "CTF (Slot 1)/ RC Zone (Slot 1)",
    bgColor: "#80FF00",
    imageSrc: "/assets/objects/chocolate.png",
    imageClass: "w-20 h-auto absolute top-0 right-0",
    visible: true,
  },
  {
    time: "11 AM",
    visible: true,
  },
  {
    time: "12 PM",
    visible: true,
  },
  {
    time: "01 PM",
    description: "CTF (Slot 2)/ RC Zone (Slot 2)",
    bgColor: "#80FF00",
    imageSrc: "/assets/objects/chemical.png",
    imageClass: "w-8 h-auto absolute bottom-2 left-0",
    visible: true,
  },
  {
    time: "02 PM",
    visible: true,
  },
  {
    time: "03 PM",
    visible: true,
  },
  {
    time: "04 PM",
    title: "Hackathon Submissions",
    bgColor: "#80FF00",
    imageSrc: "/assets/objects/chocolate.png",
    imageClass: "w-20 h-auto absolute top-0 right-1",
    visible: true,
  },
  {
    time: "05 PM",
    visible: true,
  },
  {
    time: "06 PM",
    title: "Halloween Party",
    bgColor: "#80FF00",
    imageSrc: "/assets/objects/balloons.png",
    imageClass: "w-16 h-auto absolute bottom-2 right-1",
    visible: true,
  },
  {
    time: "07 PM",
    visible: true,
  },
  {
    time: "08 PM",
    visible: true,
  },
  {
    time: "09 PM",
    title: "Hacktober Ends",
    bgColor: "#FF7426",
    imageSrc: "/assets/objects/bat-head.png",
    imageClass: "w-20 h-auto absolute top-0 right-0",
    visible: true,
  },
];

const ScheduleSection: React.FC = () => {
  const [firstItem, ...gridItems] = scheduleData;

  return (
    <section className="relative bg-[#1A001E] min-h-screen w-full px-4 py-20 overflow-hidden">
      {/* Title */}
      <h2 className="text-[#62FF00] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 z-10">
        EVENT DETAILS
      </h2>

      {/* Main Schedule Layout */}
      <div className="w-[90vw] max-w-[1500px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-0 md:items-start justify-between">
        {/* Left: 09 AM */}
        <div className="flex-shrink-0 max-w-6xl">
          <div
            className="relative rounded-xl p-6 w-[175px] h-[200px] text-center flex flex-col justify-center items-center"
            style={{ backgroundColor: firstItem.bgColor }}
          >
            <div className="text-black text-xl md:text-2xl font-extrabold mb-2">
              {firstItem.time}
            </div>
            {firstItem.title && (
              <div className="text-white font-bold text-sm md:text-base leading-snug">
                {firstItem.title}
              </div>
            )}
            {firstItem.imageSrc && (
              <Image
                src={firstItem.imageSrc}
                width={300}
                height={300}
                alt=""
                className={firstItem.imageClass}
              />
            )}
          </div>
        </div>

        {/* Right: Grid of remaining times */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
          {gridItems.map((item, index) => {
            const backgroundColor = item.bgColor || "#421C55";

            if (!item.visible) {
              return (
                <div
                  key={index}
                  className="relative rounded-xl p-4 md:p-6 w-[180px] h-[200px] text-center flex flex-col justify-center items-center bg-transparent"
                />
              )
            }

            return (
              <div
                key={index}
                className="relative rounded-xl p-4 md:p-6 w-[175px] h-[200px] text-center flex flex-col justify-center items-center z-10"
                style={{ backgroundColor }}
              >
                <div className="text-black text-xl md:text-2xl font-extrabold mb-2">
                  {item.time}
                </div>
                {item.title && (
                  <div className="text-black font-bold text-sm md:text-base leading-snug">
                    {item.title}
                  </div>
                )}
                {item.title && item.description && (
                  <div className="w-20 h-[1px] bg-black/50 my-2" />
                )}
                {item.description && (
                  <div className="text-black text-xs md:text-sm">
                    {item.description}
                  </div>
                )}
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    width={300}
                    height={300}
                    alt=""
                    className={item.imageClass || ""}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Image
        src={"/assets/objects/spider.png"}
        width={300}
        height={300}
        alt=""
        className="absolute bottom-1 md:bottom-[2vw] right-[10vw] w-20 h-auto z-10"
      />

      {/* Web Decoration */}
      <Image
        src={"/assets/schedule-item-1.svg"}
        width={300}
        height={300}
        alt=""
        className="absolute top-0 left-0 transform w-[400px] md:w-[600px] h-auto"
      />

      {/* Ground Decoration */}
      <Image
        src={"/assets/schedule-item-2.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
      <Image
        src={"/assets/schedule-item-3.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 right-0"
      />
    </section>
  );
};

export default ScheduleSection;
