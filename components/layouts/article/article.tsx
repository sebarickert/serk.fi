import { PortableText, PortableTextReactComponents } from "next-sanity";

import { Container } from "../../blocks/Container/Container";

import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { SanityImage } from "@/blocks/SanityImage/SanityImage";
import { SyntaxHighlighter } from "@/blocks/SyntaxHighlighter/SyntaxHighlighter";
import { Icon } from "@/elements/Icon/Icon";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { ArticleDto } from "types/ArticleDto";
import { PageDto } from "types/PageDto";

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
  updated,
  published,
}: ArticleProps) => {
  return (
    <article className="-mt-8 py-16 lg:mt-0">
      {/* {backLinkUrl && <PostBackLink backLinkUrl={backLinkUrl} />} */}
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
      </Hero>
      <Container>
        <section className="prose prose-xl prose-blue mx-auto w-full max-w-screen-md dark:prose-invert">
          {published && (
            <time
              dateTime={new Date(published).toLocaleDateString("en-CA")}
              className="!m-0 inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300"
            >
              <span className="sr-only">
                {updated ? "Last updated on" : "Published on"}
              </span>
              <Icon type="pencil" />
              <span>{`${published}`}</span>
            </time>
          )}
          <PortableText value={content} components={components} />
        </section>
      </Container>
    </article>
  );
};
