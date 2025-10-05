import HeroSection from '@/components/custom/Hero';
import AboutSection from '@/components/custom/About';
import ScheduleSection from '@/components/custom/Schedule';
import FAQSection from '@/components/custom/FAQ';
import SponsorsSection from "@/components/custom/Sponsor";
import ContactSection from "@/components/custom/Contact";
import Footer from '@/components/custom/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <FAQSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
