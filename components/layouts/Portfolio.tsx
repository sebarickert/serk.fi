import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { ShowcaseTeaser } from "@/blocks/ShowcaseTeaser";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { PageDto } from "types/PageDto";

type PortfolioProps = {
  page: PageDto;
  showcases: ShowcaseDto[];
};

export const Portfolio = ({ ...data }: PortfolioProps) => {
  const { title, summary } = data.page;
  const { showcases } = data;

  return (
    <>
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
      </Hero>
      <Container>
        <ul className="grid gap-16">
          {showcases.map((showcase, index) => (
            <li key={showcase._id}>
              <ShowcaseTeaser {...showcase} reverseOrder={index % 2 !== 0} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};
