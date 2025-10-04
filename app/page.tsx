import Header from '@/components/custom/Header';
import HeroSection from '@/components/custom/Hero';
import AboutSection from '@/components/custom/About';
import ScheduleSection from '@/components/custom/Schedule';
import FAQSection from '@/components/custom/FAQ';
import SponsorsSection from "@/components/custom/Sponsor";
import Footer from '@/components/custom/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <FAQSection />
      <SponsorsSection />
      <Footer />
    </>
  );
}
