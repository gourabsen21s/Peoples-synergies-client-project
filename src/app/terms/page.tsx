import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Terms & Conditions"
      subtitle="The rules of engagement"
      content={
        <>
          <p>
            Welcome to Peoples Synergies. These Terms & Conditions govern your use of our website and recruitment services. 
            By accessing or using our platform, you agree to be bound by these terms.
          </p>
          <p>
            Our services are provided to assist candidates in finding employment and to help clients discover top talent. 
            We maintain strict guidelines against the misuse of our platform or intellectual property.
          </p>
        </>
      }
      stats={[
        { value: "100%", label: "Commitment to compliance" }
      ]}
    />
  );
}
