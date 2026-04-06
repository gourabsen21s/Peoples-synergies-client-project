import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Privacy Statement"
      subtitle="Safeguarding your data"
      content={
        <>
          <p>
            Peoples Synergies is committed to protecting the privacy and security of your personal and professional data. We comply with all major global data protection regulations including GDPR.
          </p>
          <p>
            Any data you share with us during your job search or recruitment mandate is securely stored, encrypted, and never shared with third parties without your explicit authorization.
          </p>
        </>
      }
      stats={[
        { value: "Compliant", label: "with global data laws" }
      ]}
    />
  );
}
