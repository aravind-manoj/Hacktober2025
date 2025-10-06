import HeroSection from '@/components/custom/Hero';
import AboutSection from '@/components/custom/About';
import ScheduleSection from '@/components/custom/Schedule';
import FAQSection from '@/components/custom/FAQ';
import SponsorsSection from "@/components/custom/Sponsor";
import ContactSection from "@/components/custom/Contact";
import Footer from '@/components/custom/Footer';
import EventsPage from '@/components/custom/Events';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <EventsPage />
      <FAQSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
