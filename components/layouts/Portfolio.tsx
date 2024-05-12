"use client";

import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { PortfolioTeaser } from "@/blocks/PortfolioTeaser";
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
