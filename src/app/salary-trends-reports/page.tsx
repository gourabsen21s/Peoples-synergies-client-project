import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Salary Trends Reports"
      subtitle="Benchmark your compensation"
      content={
        <>
          <p>
            Access comprehensive salary benchmarking data across diverse sectors to ensure your compensation packages remain highly competitive.
          </p>
          <p>
            Our latest reports feature adjusted figures reflecting recent economic shifts and inflation.
          </p>
        </>
      }
      stats={[
        { value: "8%", label: "average tech salary increment" },
        { value: "Top", label: "quartile benchmarks" },
      ]}
    />
  );
}
