import { Container } from "@/blocks/Container";
import { Heading } from "@/elements/Heading";

type HeroProps = {
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
};

export const Hero = ({ heading, subheading, children }: HeroProps) => (
  <div className="pt-6 pb-12 md:pt-12 lg:py-24">
    <Container>
      <div className="grid grid-cols-1 gap-4">
        <Heading variant="h1">{heading}</Heading>
        {subheading && <Heading variant="p">{subheading}</Heading>}
      </div>
      {children}
    </Container>
  </div>
);
