import OurService from "@/component/home/our-service";
import OurTools from "@/component/home/our-tools";
import PricingSection from "@/component/home/pricing-section";
import GettingStarted from "@/component/home/getting-started";
import ChooseUs from "@/component/home/choose-us";
import ClientReview from "@/component/home/client-review";
import Banner from "@/component/home/banner";
import TrustedStrip from "@/component/home/trusted-strip";
import Response from "@/component/home/response";
import Footer from "@/component/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <TrustedStrip />
      <OurService />
      <PricingSection />
      <OurTools />
      <GettingStarted />
      <Response />
      <ClientReview />
      <ChooseUs />
    </div>
  );
}
