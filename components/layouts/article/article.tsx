import { PortableText, PortableTextReactComponents } from "next-sanity";

import { Container } from "../../blocks/container/container";

import { Hero } from "@/blocks/hero/hero";
import { HeroLead } from "@/blocks/hero/hero.lead";
import { SanityImage } from "@/blocks/sanity-image/sanity-image";
import { SyntaxHighlighter } from "@/blocks/syntax-highlighter/syntax-highlighter";
import { Icon } from "@/elements/icon/icon";
import { ArticleDto } from "@/types/ArticleDto";
import { PageDto } from "@/types/PageDto";

const contentComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }) => <SyntaxHighlighter {...value} />,
    image: ({ value }) => <SanityImage {...value} />,
  },
};

type ArticleProps = PageDto | ArticleDto;

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
          <PortableText value={content} components={contentComponents} />
        </section>
      </Container>
    </article>
  );
};
