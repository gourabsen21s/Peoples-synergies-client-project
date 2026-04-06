import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Workmonitor Reports"
      subtitle="Global mobility and workforce readiness"
      content={
        <>
          <p>
            The Workmonitor captures the sentiment of workers globally regarding mobility, readiness, and job security.
          </p>
          <p>
            Learn how confidence among professionals shifts across quarters and regions to better anticipate hiring cycles.
          </p>
        </>
      }
      stats={[
        { value: "34", label: "countries surveyed" },
        { value: "Quarterly", label: "updates on sentiment" },
      ]}
    />
  );
}
