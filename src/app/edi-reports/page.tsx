import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="ED&I Reports"
      subtitle="Fostering Equity, Diversity & Inclusion"
      content={
        <>
          <p>
            An inclusive workplace is a successful workplace. Uncover strategies to build a diverse culture that empowers all team members.
          </p>
          <p>
            Our ED&I reports provide actionable insights and global benchmarks for equity in hiring.
          </p>
        </>
      }
      stats={[
        { value: "3x", label: "higher revenue with diverse teams" },
        { value: "100%", label: "commitment to equity" },
      ]}
    />
  );
}
