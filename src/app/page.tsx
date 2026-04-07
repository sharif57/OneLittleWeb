import OurService from "@/component/home/our-service";
import OurTools from "@/component/home/our-tools";
import PricingSection from "@/component/home/pricing-section";
import GettingStarted from "@/component/home/getting-started";
import ChooseUs from "@/component/home/choose-us";
import ClientReview from "@/component/home/client-review";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <OurService />
      <PricingSection />
      <OurTools />
      <GettingStarted />
      <ClientReview />
      <ChooseUs />
    </div>
  );
}
