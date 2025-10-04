import React from 'react';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="w-screen min-h-screen relative bg-[#fff] flex items-center justify-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/fc752ea0f6a775d409e93a0a53e7415860454adf?width=3456"
        alt="Sponsors - Companies and organizations supporting Hacktober event"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default SponsorsSection;
