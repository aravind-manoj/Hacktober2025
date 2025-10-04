import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-[#3D0746] max-md:h-screen max-sm:h-[600px]">
      {/* Background SVG Elements */}
      <svg
        width="1728"
        height="181"
        viewBox="0 0 1728 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-[936px] w-[1743px] h-[181px]"
      >
        <path
          d="M934.5 67C1154.13 93.1903 1742.5 181 1742.5 181H934.5H0V0C0 0 325.011 11.3239 516.5 23.5C707.989 35.6761 714.871 40.8097 934.5 67Z"
          fill="#34043C"
        />
      </svg>
      
      <svg
        width="1728"
        height="181"
        viewBox="0 0 1728 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-15px] top-[936px] w-[1743px] h-[181px]"
      >
        <path
          d="M793 67C573.371 93.1903 -15 181 -15 181H793H1727.5V0C1727.5 0 1402.49 11.3239 1211 23.5C1019.51 35.6761 1012.63 40.8097 793 67Z"
          fill="#2B0032"
        />
      </svg>

      {/* Cloud Elements */}
      <svg
        width="250"
        height="97"
        viewBox="0 0 250 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[1454px] top-[357px] w-[250px] h-[94px]"
      >
        <path
          d="M16.1527 71.0352C4.8144 74.7307 0 93.9794 0 93.9794H250C250 93.9794 248.532 85.7195 243.209 80.3965C237.885 75.0734 228.341 77.2761 228.341 77.2761C228.341 77.2761 224.252 68.0912 218.612 64.978C212.972 61.8647 194.934 68.0984 194.934 68.0984C194.934 68.0984 194.039 40.6292 183.186 35.6094C172.334 30.5896 155.103 43.6858 155.103 43.6858C155.103 43.6858 141.949 1.13664 116.373 6.97504C90.7968 12.8134 83.884 57.4523 83.884 57.4523C69.6382 37.457 38.2231 45.7476 35.699 70.1686L35.6094 71.0352C35.6094 71.0352 27.491 67.3398 16.1527 71.0352Z"
          fill="#52115D"
        />
        <g filter="url(#filter0_d_1_433)">
          <path
            d="M59.1792 77.6676C51.6536 80.2948 48.4581 93.9795 48.4581 93.9795H214.391C214.391 93.9795 213.416 88.1072 209.883 84.3228C206.35 80.5385 200.015 82.1044 200.015 82.1044C200.015 82.1044 197.301 75.5746 193.558 73.3612C189.814 71.1479 177.842 75.5796 177.842 75.5796C177.842 75.5796 177.248 56.0508 170.044 52.482C162.841 48.9133 151.404 58.2238 151.404 58.2238C151.404 58.2238 142.674 27.974 125.698 32.1248C108.723 36.2755 104.134 68.0109 104.134 68.0109C95.0451 54.3458 73.831 59.6583 72.2546 75.9944L72.0932 77.6676C72.0932 77.6676 66.7047 75.0403 59.1792 77.6676Z"
            fill="#52115D"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_433"
            x="38.4581"
            y="26.7336"
            width="175.932"
            height="70.2459"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="-1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_433"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_433"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* Additional cloud elements */}
      <svg
        width="164"
        height="70"
        viewBox="0 0 164 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[1195px] top-[255px] w-[164px] h-[66px]"
      >
        <path
          d="M10.5962 50.0729C3.15825 52.6778 0 66.2463 0 66.2463H164C164 66.2463 163.037 60.4239 159.545 56.6716C156.053 52.9194 149.791 54.472 149.791 54.472C149.791 54.472 147.11 47.9976 143.41 45.8031C139.71 43.6086 127.877 48.0027 127.877 48.0027C127.877 48.0027 127.29 28.6396 120.17 25.1011C113.051 21.5627 101.747 30.7942 101.747 30.7942C101.747 30.7942 93.1186 0.801221 76.3407 4.91672C59.5627 9.03221 55.0279 40.4982 55.0279 40.4982C46.0612 26.9744 25.0774 32.2163 23.5237 48.3681L23.3598 50.0729C23.3598 50.0729 18.0341 47.468 10.5962 50.0729Z"
          fill="#52115D"
        />
      </svg>

      {/* Shadow ellipse */}
      <svg
        width="637"
        height="48"
        viewBox="0 0 637 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[1053px] top-[1026px] w-[637px] h-[48px]"
      >
        <ellipse cx="318.5" cy="24" rx="318.5" ry="24" fill="#0B0A0A" fillOpacity="0.15" />
      </svg>

      {/* Main character image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8c9939b0db9e238b7bd6c9d09e6d8c10638622fc?width=1358"
        alt="Halloween character"
        className="w-[679px] h-[968px] absolute left-[1043px] top-[109px] max-md:w-[400px] max-md:h-[570px] max-md:left-[600px] max-md:top-[150px] max-sm:w-[250px] max-sm:h-[356px] max-sm:left-[300px] max-sm:top-[200px]"
      />

      {/* Decorative elements */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/30866057d1b034c014870850a0e6470eb5baf013?width=264"
        alt=""
        className="w-[132px] h-[168px] rotate-[7.568deg] mix-blend-luminosity absolute left-[1072px] top-[397px]"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a792716fe5c25d902632c7b4b9924122975d6211?width=286"
        alt=""
        className="w-[143px] h-[77px] rotate-[-5.85deg] absolute left-[1277px] top-[164px]"
      />

      {/* Main title */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/120432c9ccf563da50a0bff5e415779a86bb04fc?width=2020"
        alt="Main title"
        className="w-[1010px] h-[973px] absolute left-[52px] top-0.5 max-md:w-[600px] max-md:h-[580px] max-md:left-[50px] max-md:top-[50px] max-sm:w-[350px] max-sm:h-[338px] max-sm:left-5 max-sm:top-20"
      />

      {/* Subtitle */}
      <h2 className="text-[#FF7620] text-[32px] font-bold absolute w-[414px] h-[47px] left-[340px] top-[654px] max-md:text-2xl max-md:w-[300px] max-md:left-[50px] max-md:top-[650px] max-sm:text-lg max-sm:w-[250px] max-sm:left-5 max-sm:top-[450px]">
        Spooktacular Hacks Await
      </h2>

      {/* Action buttons */}
      <button className="flex w-[199px] h-[55px] justify-center items-center shadow-[-2px_2px_4px_0_rgba(0,0,0,0.25)] absolute cursor-pointer pl-11 pr-[43px] py-0 rounded-[40px] border-[3px] border-solid border-[#FF7620] left-[326px] top-[737px] hover:bg-[#FF7620] hover:text-[#2B0032] transition-colors max-md:w-[150px] max-md:h-[45px] max-md:left-[50px] max-md:top-[720px] max-sm:w-[120px] max-sm:h-10 max-sm:left-5 max-sm:top-[500px]">
        <span className="w-28 h-[13px] text-[#FF7620] text-center text-lg font-bold absolute left-11 top-[21px] max-sm:text-xs max-sm:left-[25px] max-sm:top-[15px]">
          More Info
        </span>
      </button>

      <button className="w-[199px] h-[55px] shadow-[-2px_2px_4px_0_rgba(0,0,0,0.25)] absolute cursor-pointer bg-[#FF7620] rounded-[40px] left-[571px] top-[737px] hover:bg-[#E5661C] transition-colors max-md:w-[150px] max-md:h-[45px] max-md:left-[220px] max-md:top-[720px] max-sm:w-[120px] max-sm:h-10 max-sm:left-40 max-sm:top-[500px]">
        <span className="w-28 h-[13px] text-[#2B0032] text-lg font-bold absolute left-[33px] top-[23px] max-sm:text-xs max-sm:left-5 max-sm:top-[15px]">
          Join Event
        </span>
        <div className="w-[45px] h-[45px] absolute bg-[#2B0032] rounded-[40px] left-[149px] top-[5px] max-sm:w-[30px] max-sm:h-[30px] max-sm:left-[85px] max-sm:top-[5px]" />
        <svg
          width="35"
          height="15"
          viewBox="0 0 35 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[157px] top-[22px] max-sm:left-[92px] max-sm:top-[12px] max-sm:w-6 max-sm:h-3"
        >
          <path
            d="M0.529412 11.1176C0.0421017 11.3775 -0.142252 11.9833 0.117647 12.4706C0.377546 12.9579 0.983278 13.1423 1.47059 12.8824L1 12L0.529412 11.1176ZM8.5 8L9.0241 7.14834L8.53556 6.8477L8.02941 7.11765L8.5 8ZM15 12L14.4759 12.8517L14.9742 13.1583L15.4856 12.8742L15 12ZM34.0882 9.30874C34.5348 8.9839 34.6336 8.35848 34.3087 7.91183L29.0152 0.633204C28.6904 0.186551 28.0649 0.087801 27.6183 0.412639C27.1716 0.737477 27.0729 1.36289 27.3977 1.80955L32.1031 8.27944L25.6332 12.9848C25.1866 13.3096 25.0878 13.9351 25.4126 14.3817C25.7375 14.8284 26.3629 14.9271 26.8095 14.6023L34.0882 9.30874ZM24 7L24.156 6.01224L23.8156 5.95849L23.5144 6.12584L24 7ZM1 12L1.47059 12.8824L8.97059 8.88235L8.5 8L8.02941 7.11765L0.529412 11.1176L1 12ZM8.5 8L7.9759 8.85166L14.4759 12.8517L15 12L15.5241 11.1483L9.0241 7.14834L8.5 8ZM15 12L15.4856 12.8742L24.4856 7.87416L24 7L23.5144 6.12584L14.5144 11.1258L15 12ZM24 7L23.844 7.98776L33.344 9.48776L33.5 8.5L33.656 7.51224L24.156 6.01224L24 7Z"
            fill="#FF7620"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
