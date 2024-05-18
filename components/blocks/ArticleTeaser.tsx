import clsx from "clsx";
import Link from "next/link";

import { Icon } from "@/elements/Icon/Icon";
import { ArticleDto } from "@/types/ArticleDto";
import { formatDateToFull, formatDateToISODate } from "@/utils/formatDate";

export const ArticleTeaser = ({
  title,
  summary: summaryRaw,
  slug: { current: slug },
  published,
}: ArticleDto) => {
  const summary =
    summaryRaw.length > 140 ? `${summaryRaw.slice(0, 140)}...` : summaryRaw;

  const teaserClasses = clsx(
    "group relative border h-full p-6 rounded-md",
    "flex flex-col",
    "serk-secondary-background serk-secondary-background-hover serk-secondary-border serk-text",
  );

  return (
    <article className={teaserClasses}>
      <time
        dateTime={formatDateToISODate(published)}
        className="serk-secondary-text mb-4 inline-flex items-center gap-2 text-base font-medium"
      >
        <span className="sr-only">Published on</span>
        <Icon type="pencil" />
        <span>{formatDateToFull(published)}</span>
      </time>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mb-auto mt-3 text-base">{summary}</p>
      <Link
        href={slug}
        className="serk-link-base mt-6 inline-flex items-center gap-2 text-base font-medium outline-none duration-200 group-hover:ml-1"
        aria-label={`Read article - ${title}`}
        title={`Read article - ${title}`}
      >
        <span className="absolute inset-0" aria-hidden="true"></span>
        <span className="group-focus-within:serk-focus-base inline-flex items-center gap-2">
          <span>Read article</span>
          <Icon type="arrow-right" />
        </span>
      </Link>
    </article>
  );
};
