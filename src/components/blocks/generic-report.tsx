import { DashedLine } from "@/components/dashed-line";
import { Background } from "@/components/background";

export function GenericReport({
  title,
  subtitle,
  content,
  stats
}: {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  stats: { value: string; label: string }[];
}) {
  return (
    <Background>
      <section className="py-28 lg:py-32 lg:pt-44">
        <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
          <div className="flex-[1.5]">
            <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
              {subtitle}
            </p>
            <div className="text-muted-foreground mt-8 max-w-lg space-y-6 text-lg text-balance lg:mt-12">
              {content}
            </div>
          </div>
          <div className="relative flex flex-1 flex-col justify-center gap-6 pt-10 lg:pt-0 lg:pl-10">
            <DashedLine orientation="vertical" className="absolute top-0 left-0 max-lg:hidden" />
            <DashedLine orientation="horizontal" className="absolute top-0 lg:hidden" />
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="font-display text-4xl tracking-wide md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Background>
  );
}
