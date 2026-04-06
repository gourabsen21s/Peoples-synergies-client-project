import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Workforce Insights"
      subtitle="Navigating the future of work"
      content={
        <>
          <p>
            Discover top trends shaping the modern workforce. From digital transformation to changing employee expectations, stay ahead of the curve.
          </p>
          <p>
            Our workforce insights combine robust data analysis with expert perspectives to help you make informed talent decisions.
          </p>
        </>
      }
      stats={[
        { value: "45%", label: "remote work adoption" },
        { value: "3x", label: "demand for digital skills" },
      ]}
    />
  );
}
