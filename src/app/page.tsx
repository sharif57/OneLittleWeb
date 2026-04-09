import OurService from "@/component/home/our-service";
import OurTools from "@/component/home/our-tools";
import PricingSection from "@/component/home/pricing-section";
import GettingStarted from "@/component/home/getting-started";
import ChooseUs from "@/component/home/choose-us";
import ClientReview from "@/component/home/client-review";
import Banner from "@/component/home/banner";
import TrustedStrip from "@/component/home/trusted-strip";
import Response from "@/component/home/response";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Banner />
      <TrustedStrip />

      <section id="services">
        <OurService />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="resources">
        <OurTools />
      </section>

      <section id="contact">
        <GettingStarted />
      </section>

      <section id="blog">
        <Response />
      </section>

      <ClientReview />

      <section id="about">
        <ChooseUs />
      </section>
    </div>
  );
}
