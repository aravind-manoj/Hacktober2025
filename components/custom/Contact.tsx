import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <section className="relative bg-[#34043C] min-h-screen w-full px-4 py-20 overflow-hidden">
      {/* Title */}
      <h2 className="text-[#62FF00] text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-20 z-10">
        CONTACT
      </h2>

      {/* Content */}
      

      {/* Ground Decoration */}
      <Image
        src={"/assets/contact-item-1.svg"}
        width={800}
        height={200}
        alt="ground"
        className="w-full absolute bottom-0 left-0"
      />
    </section>
  );
};

export default ContactSection;