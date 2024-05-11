"use client";

import { Container } from "@/blocks/container/container";
import { Hero } from "@/blocks/hero/hero";
import { HeroLead } from "@/blocks/hero/hero.lead";
import { PortfolioTeaser } from "@/blocks/portfolio-teaser/portfolio-teaser";
import { PageDto } from "@/types/PageDto";
import { ShowcaseDto } from "@/types/ShowcaseDto";

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
        <ul className="grid gap-8 lg:grid-cols-2">
          {showcases.map(({ title, summary, slug: { current }, _id }) => (
            <li key={_id}>
              <PortfolioTeaser title={title} summary={summary} slug={current} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};
