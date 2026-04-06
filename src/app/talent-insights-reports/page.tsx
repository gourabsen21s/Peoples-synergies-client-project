import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Talent Insights Reports"
      subtitle="Data-driven talent strategies"
      content={
        <>
          <p>
            Leverage our global talent insights to identify emerging skill gaps and optimize your talent acquisition pipelines.
          </p>
          <p>
            We provide granular reports spanning multiple industries, giving you the edge in a highly competitive market.
          </p>
        </>
      }
      stats={[
        { value: "10k+", label: "professionals surveyed" },
        { value: "50", label: "markets analyzed" },
      ]}
    />
  );
}
