import { Background } from "@/components/background";
import { JobSeekersFeatures } from "@/components/blocks/job-seekers-features";
import { JobSeekersHero } from "@/components/blocks/job-seekers-hero";

export default function JobSeekersPage() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <JobSeekersHero />
        <JobSeekersFeatures />
      </Background>
    </>
  );
}
