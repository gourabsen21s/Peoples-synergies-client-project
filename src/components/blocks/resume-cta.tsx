import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ResumeCta = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container relative overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-2xl">
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center md:py-24">
          <span className="bg-background text-foreground mb-6 px-4 py-1.5 font-mono text-sm font-medium tracking-wide border rounded-full">
            FOR CANDIDATES
          </span>
          <h2 className="mb-6 text-3xl font-display tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            Stand out with an <span className="text-primary">ATS-Optimized</span> Resume
          </h2>
          <p className="mb-10 max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed text-balance">
            Our free suite of tools helps you build, parse, and score your resume. Be absolutely certain your profile passes algorithmic screening before you ever click apply.
          </p>
          <Button size="lg" className="rounded-full px-8 text-base h-14" asChild>
            <Link href="/resume-builder">
              Launch Resume Builder
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
