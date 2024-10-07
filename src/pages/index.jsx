import CreditSection from "@/components/CreditSection";
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


export default function Home() {
  return (
  <main>
    <HeaderTop />
    <Navbar />
    <WrapperSection />
    <Faculty />
    <SneakPeak />
    <FreeTrial />
    <HallofExcellence />
    <MediaCoverage />
    <CreditSection />
    <Testimonial />
    <NewsletterSM />
    <Newsletter />
    <MyFooter />
  </main>
  );
}
