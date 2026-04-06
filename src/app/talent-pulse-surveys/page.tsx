import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Talent Pulse Surveys"
      subtitle="Real-time pulse of the job market"
      content={
        <>
          <p>
            Short, focused surveys providing an immediate read on employee engagement, well-being, and market optimism.
          </p>
          <p>
            Rely on the Pulse Survey to measure rapid shifts and react swiftly with your talent strategy.
          </p>
        </>
      }
      stats={[
        { value: "Monthly", label: "survey distribution" },
        { value: "95%", label: "accuracy in predicting turnover" },
      ]}
    />
  );
}
