import { Container } from "@/blocks/container/container";
import { Spacer } from "@/blocks/spacer/spacer";
import { Heading } from "@/elements/heading/heading";

type HeroProps = {
  title: string;
  children: React.ReactNode;
};

export const Hero = ({ title, children }: HeroProps) => (
  <div>
    <Container>
      <Spacer>
        <Heading
          variant="h1"
          style="h1"
          className="mb-4 sm:mb-8 sm:max-w-[90%]"
        >
          {title}
        </Heading>
        {children}
      </Spacer>
    </Container>
  </div>
);
