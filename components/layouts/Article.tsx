import { PortableText, PortableTextReactComponents } from "next-sanity";

import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { SanityImage } from "@/blocks/SanityImage";
import { SyntaxHighlighter } from "@/blocks/SyntaxHighlighter";
import { Icon } from "@/elements/Icon/Icon";
import { ArticleDto } from "@/types/ArticleDto";
import { PageDto } from "@/types/PageDto";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { formatDateToFull, formatDateToISODate } from "@/utils/formatDate";

const components: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }) => <SyntaxHighlighter {...value} />,
    image: ({ value }) => (
      <div className="-mx-8 md:-mx-10 lg:-mx-16">
        <SanityImage {...value} />
      </div>
    ),
  },
};

type ArticleProps = PageDto | ArticleDto | ShowcaseDto;

export const Article = ({
  title,
  summary,
  content,
  published,

  image,
}: ArticleProps) => {
  return (
    <article className="-mt-8 py-16 lg:mt-0">
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
        {published && (
          <time
            dateTime={formatDateToISODate(published)}
            className="mt-8 inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300"
          >
            <span className="sr-only">Published on</span>
            <Icon type="pencil" />
            <span>{formatDateToFull(published)}</span>
          </time>
        )}
      </Hero>
      <Container>
        <section className="prose prose-xl prose-blue mx-auto w-full max-w-screen-md dark:prose-invert">
          {image && (
            <div className="-mx-8 md:-mx-10 lg:-mx-16">
              <SanityImage {...image} />
            </div>
          )}
          <PortableText value={content} components={components} />
        </section>
      </Container>
    </article>
  );
};
