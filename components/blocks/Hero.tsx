import { Container } from "@/blocks/Container";
import { Spacer } from "@/blocks/Spacer";
import { Heading } from "@/elements/Heading";

type HeroProps = {
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
};

export const Hero = ({ heading, subheading, children }: HeroProps) => (
  <div>
    <Container>
      <Spacer>
        <div className="grid grid-cols-1 gap-4">
          <Heading variant="h1">{heading}</Heading>
          {subheading && <Heading variant="p">{subheading}</Heading>}
        </div>
        {children}
      </Spacer>
    </Container>
  </div>
);
