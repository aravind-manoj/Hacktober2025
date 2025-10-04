import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex w-full h-[92px] items-center gap-[306px] relative z-[100] bg-[#3D0746] px-[30px] py-4 max-md:gap-[50px] max-md:px-5 max-md:py-4 max-sm:gap-5 max-sm:flex-col max-sm:h-auto max-sm:px-4 max-sm:py-3">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/c1d6d5ff22a9d3590aede0af2e5329d123ee633e?width=208"
        alt="Xelly Logo"
        className="w-[104px] h-[84px] shrink-0 max-sm:w-20 max-sm:h-16"
      />
      <nav className="flex items-center gap-[82px] max-md:gap-[30px] max-sm:hidden">
        <a
          href="#about"
          className="text-[#FCE9FF] text-[28px] font-normal cursor-pointer hover:text-[#FF7620] transition-colors max-md:text-xl"
        >
          About
        </a>
        <a
          href="#schedule"
          className="text-[#FCE9FF] text-[28px] font-normal cursor-pointer hover:text-[#FF7620] transition-colors max-md:text-xl"
        >
          Schedule
        </a>
        <a
          href="#sponsors"
          className="text-[#FCE9FF] text-[28px] font-normal cursor-pointer hover:text-[#FF7620] transition-colors max-md:text-xl"
        >
          Sponsors
        </a>
        <a
          href="#contact"
          className="text-[#FCE9FF] text-[28px] font-normal cursor-pointer hover:text-[#FF7620] transition-colors max-md:text-xl"
        >
          Contact
        </a>
      </nav>
      <button className="w-[199px] h-[55px] shadow-[-2px_2px_4px_0_rgba(0,0,0,0.25)] relative cursor-pointer bg-[#1E1E1E] rounded-[40px] hover:bg-[#2A2A2A] transition-colors max-md:w-[150px] max-md:h-[45px] max-sm:w-[120px] max-sm:h-10">
        <span className="w-28 h-[13px] text-[#FF7620] text-lg font-bold absolute left-[33px] top-[23px] max-md:text-sm max-md:left-5 max-md:top-[18px] max-sm:text-xs max-sm:left-[15px] max-sm:top-[15px]">
          Join Event
        </span>
        <div className="w-[45px] h-[45px] absolute bg-[#FF7620] rounded-[40px] left-[149px] top-[5px] max-md:w-[35px] max-md:h-[35px] max-md:left-[110px] max-md:top-[5px] max-sm:w-[30px] max-sm:h-[30px] max-sm:left-[85px] max-sm:top-[5px]" />
        <svg
          width="35"
          height="16"
          viewBox="0 0 35 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[157px] top-[22px] max-md:left-[117px] max-md:top-[17px] max-sm:left-[92px] max-sm:top-[12px] max-sm:w-6 max-sm:h-3"
        >
          <path
            d="M0.529412 11.6176C0.0421017 11.8775 -0.142252 12.4833 0.117647 12.9706C0.377546 13.4579 0.983278 13.6423 1.47059 13.3824L1 12.5L0.529412 11.6176ZM8.5 8.5L9.0241 7.64834L8.53556 7.3477L8.02941 7.61765L8.5 8.5ZM15 12.5L14.4759 13.3517L14.9742 13.6583L15.4856 13.3742L15 12.5ZM34.0882 9.80874C34.5348 9.4839 34.6336 8.85848 34.3087 8.41183L29.0152 1.1332C28.6904 0.686551 28.0649 0.587801 27.6183 0.912639C27.1716 1.23748 27.0729 1.86289 27.3977 2.30955L32.1031 8.77944L25.6332 13.4848C25.1866 13.8096 25.0878 14.4351 25.4126 14.8817C25.7375 15.3284 26.3629 15.4271 26.8095 15.1023L34.0882 9.80874ZM24 7.5L24.156 6.51224L23.8156 6.45849L23.5144 6.62584L24 7.5ZM1 12.5L1.47059 13.3824L8.97059 9.38235L8.5 8.5L8.02941 7.61765L0.529412 11.6176L1 12.5ZM8.5 8.5L7.9759 9.35166L14.4759 13.3517L15 12.5L15.5241 11.6483L9.0241 7.64834L8.5 8.5ZM15 12.5L15.4856 13.3742L24.4856 8.37416L24 7.5L23.5144 6.62584L14.5144 11.6258L15 12.5ZM24 7.5L23.844 8.48776L33.344 9.98776L33.5 9L33.656 8.01224L24.156 6.51224L24 7.5Z"
            fill="black"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
