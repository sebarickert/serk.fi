"use client";

import { BlogTeaser } from "@/blocks/BlogTeaser/BlogTeaser";
import { Container } from "@/blocks/Container/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { ArticleDto } from "types/ArticleDto";
import { PageDto } from "types/PageDto";

type BlogProps = {
  page: PageDto;
  articles: ArticleDto[];
};

export const Blog = ({ ...data }: BlogProps) => {
  const { title, summary } = data.page;
  const { articles } = data;

  return (
    <>
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
      </Hero>
      <Container>
        <ul className="grid gap-8 lg:grid-cols-2">
          {articles.map(
            ({ title, summary, published, slug: { current }, _id }) => (
              <li key={_id}>
                <BlogTeaser
                  title={title}
                  lead={summary}
                  date={published}
                  slug={current}
                />
              </li>
            ),
          )}
        </ul>
      </Container>
    </>
  );
};
