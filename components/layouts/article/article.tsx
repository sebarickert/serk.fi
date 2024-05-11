import { PortableText, PortableTextReactComponents } from "next-sanity";

import { Container } from "../../blocks/container/container";

import { ArticleHeader } from "./article.header";

import { SyntaxHighlighter } from "@/blocks/syntax-highlighter/syntax-highlighter";
import { ArticleDto } from "@/types/ArticleDto";
import { PageDto } from "@/types/PageDto";

const contentComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }) => <SyntaxHighlighter {...value} />,
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
      <Container>
        <section className="prose prose-xl prose-blue dark:prose-invert mx-auto w-full max-w-screen-md">
          <ArticleHeader
            title={title}
            summary={summary}
            published={published}
            updated={updated}
          />
          <PortableText value={content} components={contentComponents} />
        </section>
      </Container>
    </article>
  );
};
