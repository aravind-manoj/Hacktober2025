import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-screen min-h-screen relative bg-[#fff] flex items-center justify-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b139e8b545b33360dc1cf4746b93801291f04824?width=3456"
        alt="About Hacktober - Halloween themed hackathon event details and information"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default AboutSection;
