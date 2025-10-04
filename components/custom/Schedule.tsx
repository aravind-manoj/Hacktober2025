import React from 'react';

interface ScheduleItem {
  time: string;
  title?: string;
  description?: string;
  isHighlighted?: boolean;
  hasImage?: boolean;
}

const scheduleData: ScheduleItem[] = [
  {
    time: '09 AM',
    title: 'Inauguration Ceremony',
    isHighlighted: true,
    hasImage: true
  },
  {
    time: '10 AM',
    title: 'Hackathon Kickoff',
    description: 'CTF (Slot 1)/ RC Zone (Slot 1)',
    isHighlighted: true
  },
  { time: '11 AM' },
  { time: '12 PM' },
  {
    time: '01 PM',
    description: 'CTF (Slot 2)/ RC Zone (Slot 2)',
    isHighlighted: true
  },
  { time: '02 PM' },
  { time: '03 PM' },
  {
    time: '04 PM',
    title: 'Hackathon Submissions',
    isHighlighted: true
  },
  { time: '05 PM' },
  {
    time: '06 PM',
    title: 'Halloween Party',
    isHighlighted: true
  },
  { time: '07 PM' },
  { time: '08 PM' },
  {
    time: '09 PM',
    title: 'Hacktober Ends',
    isHighlighted: true,
    hasImage: true
  }
];

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="w-screen min-h-screen relative overflow-hidden bg-[#19021D]">
      {/* Background SVG Elements */}
      <svg
        width="1728"
        height="181"
        viewBox="0 0 1728 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-14px] top-[1162px] w-[1743px] h-[181px]"
      >
        <path
          d="M920 67C1139.63 93.1903 1728 181 1728 181H920H-14.5V0C-14.5 0 310.511 11.3239 502 23.5C693.489 35.6761 700.371 40.8097 920 67Z"
          fill="#24002A"
        />
      </svg>

      <svg
        width="1728"
        height="181"
        viewBox="0 0 1728 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-15px] top-[1162px] w-[1743px] h-[181px]"
      >
        <path
          d="M793 67C573.371 93.1903 -15 181 -15 181H793H1727.5V0C1727.5 0 1402.49 11.3239 1211 23.5C1019.51 35.6761 1012.63 40.8097 793 67Z"
          fill="#2B0032"
        />
      </svg>

      {/* Web decoration */}
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

      {/* Title */}
      <h2 className="text-[#62FF00] text-6xl md:text-8xl font-normal tracking-wide absolute left-1/2 transform -translate-x-1/2 top-12 text-center">
        EVENT DETAILS
      </h2>

      {/* Arrow indicator */}
      <svg
        width="34"
        height="20"
        viewBox="0 0 34 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[619px] top-[634px] w-[38px] h-[26px]"
      >
        <path d="M17 0L33.4545 19.5H0.545517L17 0Z" fill="#D9D9D9" />
      </svg>

    {/* Schedule Grid */}
    <div className="absolute left-1/2 transform -translate-x-1/2 top-40 w-[90%] max-w-6xl grid grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-start p-5 rounded-[10px] max-sm:p-2.5 ${
              item.isHighlighted ? 'bg-white/10' : ''
            }`}
          >
            <div
              className={`text-center font-normal mb-2.5 max-md:text-2xl max-sm:text-lg ${
                item.isHighlighted
                  ? 'text-[#2B0631] text-[40px]'
                  : 'text-[#19021D] text-[50px]'
              }`}
            >
              {item.time}
            </div>
            
            {item.title && (
              <div className="text-[#0F0F0F] text-center text-xl font-bold leading-[22px] tracking-[0.6px] max-md:text-base max-sm:text-xs">
                {item.title}
              </div>
            )}
            
            {item.title && item.description && (
              <div className="w-[135px] h-0 bg-[rgba(0,0,0,0.50)] mx-0 my-2.5" />
            )}
            
            {item.description && (
              <div className="text-[#0B0A0A] text-center text-sm font-normal leading-[22px] tracking-[0.42px] mt-2.5 max-sm:text-[10px]">
                {item.description}
              </div>
            )}
            
            {item.hasImage && index === 0 && (
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cb6963494263eeb242c0a517135f1eee5e0fb478?width=142"
                alt=""
                className="w-[71px] h-[38px] rotate-[-5.85deg] absolute right-2.5 bottom-2.5"
              />
            )}
            
            {item.hasImage && index === 12 && (
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b513186c000a7420f263925aac5baffa7be2ce01?width=164"
                alt=""
                className="w-[82px] h-11 rotate-[-158.286deg] absolute top-[-23px] -right-5"
              />
            )}
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3c377fade130939ed89ebe5fd98c2b62217953e8?width=160"
        alt=""
        className="w-20 h-[60px] rotate-[19.17deg] absolute left-[1423px] top-[644px]"
      />
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/e5d278fb628358a0a0ab02c0b2845d2e7aca1fd6?width=112"
        alt=""
        className="w-14 h-[103px] absolute left-[1217px] top-[802px]"
      />
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/107beedd4d3dc92252e69f19b248d69417880333?width=160"
        alt=""
        className="w-20 h-[60px] rotate-[19.17deg] absolute left-[1189px] top-[327px]"
      />
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/828da40ef6333de6f046dcb045e3a7e2a965fbb3?width=82"
        alt=""
        className="w-[41px] h-[51px] absolute left-[943px] top-[660px]"
      />
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3a13cb68242d4990f18dd32490ad97134aec7dcb?width=310"
        alt=""
        className="w-[155px] h-[276px] absolute left-[1260px] top-[1036px]"
      />
    </section>
  );
};

export default ScheduleSection;
