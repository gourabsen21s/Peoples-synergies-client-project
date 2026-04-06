import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Accessibility"
      subtitle="Recruitment for everyone"
      content={
        <>
          <p>
            Peoples Synergies is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for our platform to meet WCAG guidelines.
          </p>
          <p>
            If you encounter any accessibility barriers while using our website or applying for roles, please contact our support team immediately.
          </p>
        </>
      }
      stats={[
        { value: "WCAG", label: "Accessibility standards" }
      ]}
    />
  );
}
