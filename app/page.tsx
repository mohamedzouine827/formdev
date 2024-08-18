import Image from "next/image";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import HowItsWorking from "./_components/HowItsWorking";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <section>
      <Navbar button="Create Form"/>
      <HeroSection/>
      <HowItsWorking/>
      <FeaturesSection/>
      <CTA/>
      <Footer/>
    </section>
  );
}
