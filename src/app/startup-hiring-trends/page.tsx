import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Startup Hiring Trends"
      subtitle="Scaling fast in a dynamic market"
      content={
        <>
          <p>
            Startups require agile, resilient talent. Discover the hiring patterns and compensation models fueling rapid-growth companies.
          </p>
          <p>
            From seed-stage to unicorn, learn how founders attract game-changers without breaking the bank.
          </p>
        </>
      }
      stats={[
        { value: "40%", label: "growth in specialized roles" },
        { value: "Series A", label: "critical hiring phase" },
      ]}
    />
  );
}
