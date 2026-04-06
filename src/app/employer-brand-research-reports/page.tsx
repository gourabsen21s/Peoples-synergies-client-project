import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Employer Brand Research"
      subtitle="What workers really want"
      content={
        <>
          <p>
            Our employer brand research explores the key drivers of employer attractiveness. Learn what attributes talent prioritize when choosing an employer.
          </p>
          <p>
            Use these distinct findings to strengthen your brand proposition and retain top-tier employees.
          </p>
        </>
      }
      stats={[
        { value: "1st", label: "priority: work-life balance" },
        { value: "62%", label: "value job security" },
      ]}
    />
  );
}
