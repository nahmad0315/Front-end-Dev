import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/home/FAQ";
import FeaturesSection from "@/components/home/FeaturesSection";
import KeyFeatures from "@/components/KeyFeatures";
import SubscribeNow from "@/components/SubscribeNow";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <KeyFeatures />
      <Testimonials />
      <Pricing />
      <AboutSection />
      <FAQ />
      <SubscribeNow />
    </>
  );
}
