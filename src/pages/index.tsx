import CreditSection from "@/components/CreditSection";
import MyFooter from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import SneakPeak from "@/components/SneakPeak";
import WrapperSection from "@/components/WrapperSection";


export default function Home() {
  return (
  <main>
    <HeaderTop />
    <Navbar />
    <WrapperSection/>
    <SneakPeak />
    <CreditSection />
    <Newsletter />
    <MyFooter />
  </main>
  );
}
