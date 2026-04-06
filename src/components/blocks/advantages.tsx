import { ShieldCheck, Zap, Globe, Target, Clock, UsersRound } from "lucide-react";
import { DashedLine } from "@/components/dashed-line";

const advantages = [
  {
    title: "Rigorous Vetting",
    description: "Every candidate undergoes a multi-stage technical and behavioral assessment.",
    icon: ShieldCheck,
  },
  {
    title: "Rapid Turnaround",
    description: "Reduce your time-to-hire by 40% with our AI-driven matchmaking.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description: "Access specialized professionals across India, Europe, and the US.",
    icon: Globe,
  },
  {
    title: "Precision Matching",
    description: "We align not just technical skills, but cultural and organizational fit.",
    icon: Target,
  },
  {
    title: "Long-Term Retention",
    description: "Our placements boast a 98% retention rate over the first two years.",
    icon: UsersRound,
  },
  {
    title: "24/7 Support",
    description: "Dedicated account managers available around the clock.",
    icon: Clock,
  },
];

export const Advantages = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        <div className="relative flex items-center justify-center mb-16 lg:mb-24">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
            WHY PARTNER WITH US
          </span>
        </div>

        <h2 className="text-3xl tracking-tight text-center md:text-5xl lg:text-6xl mb-16">
          Advantages at Peoples Synergies
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-16">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col gap-4">
                <div className="rounded-2xl border bg-muted/30 p-4 w-16 h-16 flex items-center justify-center shadow-xs">
                  <Icon className="size-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
