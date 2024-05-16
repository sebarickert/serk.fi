import { PortableTextTypeComponentProps } from "@portabletext/react";

import { ArticleTeaser } from "@/blocks/ArticleTeaser";
import { Heading } from "@/elements/Heading";
import { ArticleDto } from "@/types/ArticleDto";

type ArticleListingProps = {
  title?: string;
  articles: ArticleDto[];
};

export const ArticleListing = ({
  value: { title, articles },
}: PortableTextTypeComponentProps<ArticleListingProps>) => {
  return (
    <section>
      {title && <Heading className="mb-8 lg:mb-12">{title}</Heading>}
      <ul className="grid gap-8 lg:grid-cols-2">
        {articles.map((article) => (
          <li key={article._id}>
            <ArticleTeaser {...article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
