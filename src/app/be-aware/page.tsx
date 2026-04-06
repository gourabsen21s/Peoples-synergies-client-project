import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Be Aware"
      subtitle="Protect yourself from recruitment fraud"
      content={
        <>
          <p>
            Please be aware of unauthorized individuals soliciting fees or personal information on behalf of Peoples Synergies. We will never ask for payment from candidates at any stage of the recruitment process.
          </p>
          <p>
            Always verify the authenticity of recruitment emails, ensuring they originate from an official Peoples Synergies domain. If you suspect fraud, report it to our security team immediately.
          </p>
        </>
      }
      stats={[
        { value: "Alert", label: "Stay protected remotely" }
      ]}
    />
  );
}
