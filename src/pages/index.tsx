import CreditSection from "@/components/CreditSection";
import MyFooter from "@/components/Footer";
import FreeTrial from "@/components/FreeTrial";
import HallofExcellence from "@/components/HallofExcellence";
import HeaderTop from "@/components/HeaderTop";
import MediaCoverage from "@/components/MediaCoverage";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import NewsletterSM from "@/components/NewsletterSM";
import SneakPeak from "@/components/SneakPeak";
import WrapperSection from "@/components/WrapperSection";


export default function Home() {
  return (
  <main>
    <HeaderTop />
    <Navbar />
    <WrapperSection/>
    <SneakPeak />
    <FreeTrial />
    <HallofExcellence />
    <MediaCoverage />
    <CreditSection />
    <NewsletterSM />
    <Newsletter />
    <MyFooter />
  </main>
  );
}
