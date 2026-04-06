import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Misconduct Reporting"
      subtitle="Our zero-tolerance policy"
      content={
        <>
          <p>
            At Peoples Synergies, we uphold the highest standard of ethics. We provide a safe, confidential avenue for employees, candidates, and clients to report any suspected misconduct or unethical behavior.
          </p>
          <p>
            All reports are investigated promptly and thoroughly without fear of retaliation. We believe in an equitable recruitment environment for all.
          </p>
        </>
      }
      stats={[
        { value: "Zero", label: "Tolerance for misconduct" }
      ]}
    />
  );
}
