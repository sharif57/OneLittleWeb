import OurService from "@/component/home/our-service";
import OurTools from "@/component/home/our-tools";
import PricingSection from "@/component/home/pricing-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <OurService />
      <PricingSection />
      <OurTools />
    </div>
  );
}
