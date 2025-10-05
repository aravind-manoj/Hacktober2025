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
      <h2 className="text-[#62FF00] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20">
        EVENT DETAILS
      </h2>

      {/* Decoration (Web) */}
      <svg
        width="503"
        height="342"
        viewBox="0 0 503 342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-6px] top-[-211px] w-[507px] h-[549px]"
      >
        <path
          d="M2.64205 338L86.1818 259.359M2.64205 338L66.5211 239.425M2.64205 338L13.4706 220.717M52.3338 -200.207L41.4388 -82.2045M358.406 -211L235.777 -21.7641M501 -131.132L341.122 19.3696M86.1818 259.359C80.9965 260.389 69.805 257.845 66.5211 239.425M86.1818 259.359L131.818 216.4M66.5211 239.425C58.9286 243.502 37.6891 245.469 13.4706 220.717M66.5211 239.425L132.993 136.848M13.4706 220.717C10.8213 225.754 3.79432 232.805 -3.11932 220.717M13.4706 220.717L19.5824 154.52M-4.55966 151.642C-0.707838 157.638 9.51313 166.608 19.5824 154.52M19.5824 154.52C24.9782 176.586 49.5972 214.408 99.1449 189.081C98.6014 203.464 104.375 229.063 131.818 216.4M19.5824 154.52L25.3621 91.9214M131.818 216.4L247.5 107.501M25.3621 91.9214C21.8697 99.3565 10.996 109.766 -4.55966 91.9214M25.3621 91.9214C40.114 114.198 82.2929 154.37 132.993 136.848M25.3621 91.9214L32.9354 9.89514M132.993 136.848C134.673 152.333 146.82 180.136 181.964 167.472M132.993 136.848L183.089 59.5426M247.5 107.501C228.805 113.341 189.749 111.924 183.089 59.5426M247.5 107.501L341.122 19.3696M183.089 59.5426C154.898 71.5347 85.4008 78.3942 32.9354 9.89514M183.089 59.5426L235.777 -21.7641M32.9354 9.89514C27.8788 18.0498 13.0125 28.6029 -6 5.57797M32.9354 9.89514L41.4388 -82.2045M41.4388 -82.2045C34.508 -73.81 15.317 -65.0797 -6 -97.3146M41.4388 -82.2045C82 -37 161.5 -2 235.777 -21.7641M235.777 -21.7641C254.808 4.21933 302.521 48.8229 341.122 19.3696"
          stroke="#77008A"
          strokeWidth="3"
        />
      </svg>

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
                className="relative rounded-xl p-4 md:p-6 w-[175px] h-[200px] text-center flex flex-col justify-center items-center"
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
    </section>
  );
};

export default ScheduleSection;
