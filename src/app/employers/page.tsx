import { Background } from "@/components/background";
import { EmployersFeatures } from "@/components/blocks/employers-features";
import { EmployersHero } from "@/components/blocks/employers-hero";

export default function EmployersPage() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <EmployersHero />
        <EmployersFeatures />
      </Background>
    </>
  );
}
