import { GenericReport } from "@/components/blocks/generic-report";

export default function Page() {
  return (
    <GenericReport
      title="Sitemap"
      subtitle="Navigate Peoples Synergies"
      content={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary">
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/employers" className="hover:underline">For Employers</a></li>
            <li><a href="/job-seekers" className="hover:underline">For Job Seekers</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="/workforce-insights" className="hover:underline">Insights & Reports</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Legal & Privacy</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
      }
      stats={[]}
    />
  );
}
