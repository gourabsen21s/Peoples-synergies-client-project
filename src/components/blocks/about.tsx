import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", alt: "Team collaboration" },
            { src: "https://images.unsplash.com/photo-1542744094-3a31f272c492?auto=format&fit=crop&q=80&w=600", alt: "Team workspace" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Our heritage"
          paragraphs={[
            "Peoples Synergies was founded with a singular vision: to revolutionize the hiring landscape by placing human connection back at the center of recruitment. No legacy processes, no shortcuts.",
            "We are a fully independent, profitable agency backed by a leadership team with deep roots in global talent acquisition. From executive search to volume hiring, we manage everything in-house with military precision.",
            "Explore how we can scale your workforce or advance your career.",
          ]}
          ctaButton={{
            href: "/contact",
            text: "Get in touch",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "At Peoples Synergies, we leverage a data-driven yet highly personalized approach to staffing. By understanding your organizational nuances, we ensure every placement drives tangible value and cultural addition.",
            "Quality and transparency form the bedrock of our operations. We maintain absolute honesty with both our clients and our candidates, ensuring expectations are perfectly aligned and outcomes are consistently exceptional.",
          ]}
        />
        <ImageSection
          images={[
            { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600", alt: "Modern workspace" },
            { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600", alt: "Team collaboration" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
