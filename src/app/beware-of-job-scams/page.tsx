import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Beware of Job Scams"
      subtitle="How to spot fraudulent recruitment offers"
      content={
        <>
          <p>
            Peoples Synergies will never ask you for money, banking details, or processing fees during the recruitment and interview stages. Scammers often use fake emails, instant messages, and social media to impersonate our recruiters.
          </p>
          <p>
            Please remember that all legitimate communications will come from our official corporate email domains. If an offer sounds too good to be true, or involves immediate financial commitments, it is likely a scam. Document all correspondence and report it to local authorities if you suspect fraud.
          </p>
        </>
      }
      stats={[
        { value: "0", label: "Financial fees for candidates" }
      ]}
    />
  );
}
