import { PortableText } from "next-sanity";

import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { components } from "@/blocks/PortableText/components";
import { SanityImage } from "@/blocks/SanityImage";
import { Icon } from "@/elements/Icon/Icon";
import { ArticleDto } from "@/types/ArticleDto";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { formatDateToFull, formatDateToISODate } from "@/utils/formatDate";

type ArticleProps = ArticleDto | ShowcaseDto;

export const Article = ({
  title,
  summary,
  content,
  published,
  image,
}: ArticleProps) => {
  return (
    <article>
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
        {published && (
          <time
            dateTime={formatDateToISODate(published)}
            className="theme-text-secondary mt-8 inline-flex items-center gap-2 text-base font-medium"
          >
            <span className="sr-only">Published on</span>
            <Icon type="pencil" />
            <span>{formatDateToFull(published)}</span>
          </time>
        )}
      </Hero>
      <Container className="grid gap-12 sm:gap-16 lg:gap-24">
        {image && <SanityImage {...image} />}
        <PortableText value={content} components={components} />
      </Container>
    </article>
  );
};
