import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Cookie Policy"
      subtitle="How we use cookies"
      content={
        <>
          <p>
            Peoples Synergies uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our audience comes from.
          </p>
          <p>
            You have the freedom to manage your cookie preferences at any time. Essential cookies are required for the website to function, while analytics and marketing cookies require your explicit consent.
          </p>
        </>
      }
      stats={[
        { value: "100%", label: "Transparent tracking" }
      ]}
    />
  );
}
