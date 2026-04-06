import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "For Employers",
    questions: [
      {
        question: "How long does the hiring process typically take?",
        answer:
          "Depending on the role complexity, our AI-powered screening significantly reduces the average time-to-hire. Most roles are filled within 2-4 weeks.",
      },
      {
        question: "What industries do you specialize in?",
        answer:
          "We primarily focus on Tech, Finance, Healthcare, and Operations, serving both next-gen startups and established enterprises.",
      },
      {
        question: "Do you offer a replacement guarantee?",
        answer:
          "Yes. Depending on the service package selected, we offer replacement guarantees ranging from 1 week up to 3 months to ensure long-term fit.",
      },
    ],
  },
  {
    title: "For Job Seekers",
    questions: [
      {
        question: "Is there any fee for job seekers?",
        answer:
          "No, our services are completely free for job seekers. We connect you with top employers at no cost.",
      },
      {
        question: "How can I apply for featured jobs?",
        answer:
          "You can browse our Featured Jobs section and send your resume directly through our portal.",
      },
    ],
  },
  {
    title: "The Process",
    questions: [
      {
        question: "How does the AI matchmaking work?",
        answer:
          "Our proprietary AI analyzes a candidate's hard and soft skills against specific job outlines, scoring them for maximum alignment.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
