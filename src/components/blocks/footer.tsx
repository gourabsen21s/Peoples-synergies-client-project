import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Product", href: "/#feature-modern-teams" },
    { name: "About Us", href: "/about" },
    { name: "Packages", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];



  const insights = [
    { name: "Workforce Insights", href: "/workforce-insights" },
    { name: "Talent Insights Reports", href: "/talent-insights-reports" },
    { name: "Employer Brand Research Reports", href: "/employer-brand-research-reports" },
    { name: "Salary Trends Reports", href: "/salary-trends-reports" },
    { name: "ED&I Reports", href: "/edi-reports" },
    { name: "Workmonitor Reports", href: "/workmonitor-reports" },
    { name: "Startup Hiring Trends", href: "/startup-hiring-trends" },
    { name: "Talent Pulse Surveys", href: "/talent-pulse-surveys" },
  ];

  const legal = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
    { name: "Misconduct Reporting Procedure", href: "/misconduct" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Be Aware", href: "/be-aware" },
    { name: "Beware of Job Scams", href: "/beware-of-job-scams" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Privacy Statement", href: "/privacy" },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Partner with us today
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Peoples Synergies is your trusted partner for building world-class teams across technology, operations, and leadership.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="#contact">
              Hire Talent
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mt-2">
          {insights.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6 mt-2">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20 pointer-events-none select-none">
        <h1 className="text-[14vw] font-bold text-center leading-none tracking-tighter opacity-10">
          PEOPLES SYNERGIES
        </h1>
      </div>
    </footer>
  );
}
