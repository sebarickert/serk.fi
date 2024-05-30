import { PortableTextTypeComponentProps } from "@portabletext/react";

import { ArticleTeaser } from "@/blocks/ArticleTeaser";
import { Heading } from "@/elements/Heading";
import { ArticleDto } from "@/types/ArticleDto";

type ArticleListingProps = {
  title?: string;
  articles: ArticleDto[];
  amount?: number;
};

export const ArticleListing = ({
  value: { title, articles, amount },
}: PortableTextTypeComponentProps<ArticleListingProps>) => {
  let articlesCopy = [...articles];

  if (amount !== undefined) {
    articlesCopy = articlesCopy.slice(0, amount);
  }

  return (
    <section>
      {title && <Heading withBottomMargin>{title}</Heading>}
      <ul className="grid gap-8 lg:grid-cols-2">
        {articlesCopy.map((article) => (
          <li key={article._id}>
            <ArticleTeaser {...article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
