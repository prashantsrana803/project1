import CreditSection from "@/components/CreditSection";
import HeroSection from "@/components/HeroSection";
import Faculty from "@/components/Faculty";
import MyFooter from "@/components/Footer";
import FreeTrial from "@/components/FreeTrial";
import HallofExcellence from "@/components/HallofExcellence";
import HeaderTop from "@/components/HeaderTop";
import MediaCoverage from "@/components/MediaCoverage";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import NewsletterSM from "@/components/NewsletterSM";
import SneakPeak from "@/components/SneakPeak";
import Testimonial from "@/components/Testimonial";
import WrapperSection from "@/components/WrapperSection";
import Impact from '@/components/Impact'


export default function Home() {
  return (
  <main>
    <HeaderTop />
    <Navbar />
    <HeroSection />
    <WrapperSection />
    <Faculty />
    <SneakPeak />
    <FreeTrial />
    <HallofExcellence />
    <Impact />
    <MediaCoverage />
    <CreditSection />
    <Testimonial />
    <NewsletterSM />
    <Newsletter />
    <MyFooter />
  </main>
  );
}
