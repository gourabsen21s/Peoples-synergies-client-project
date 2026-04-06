import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Advantages } from "@/components/blocks/advantages";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { ResumeCta } from "@/components/blocks/resume-cta";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Features />
        <Advantages />
        <ResourceAllocation />
        <ResumeCta />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <Pricing />
        <FAQ />
        <Contact />
      </Background>
    </>
  );
}
