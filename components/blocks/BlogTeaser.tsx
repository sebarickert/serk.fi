import clsx from "clsx";
import Link from "next/link";

import { Icon } from "@/elements/Icon/Icon";
import { ArticleDto } from "@/types/ArticleDto";
import { formatDateToFull, formatDateToISODate } from "@/utils/formatDate";

export const BlogTeaser = ({
  title,
  summary: summaryRaw,
  slug: { current: slug },
  published,
}: ArticleDto) => {
  const summary =
    summaryRaw.length > 140 ? `${summaryRaw.slice(0, 140)}...` : summaryRaw;

  const teaserClasses = clsx(
    "group relative bg-gray-50 border h-full p-6 rounded-md",
    "flex flex-col",
    "hover:bg-gray-100",
    "focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600",
  );

  return (
    <article className={teaserClasses}>
      <time
        dateTime={formatDateToISODate(published)}
        className="mb-4 inline-flex items-center gap-2 text-base font-medium text-gray-500"
      >
        <span className="sr-only">Published on</span>
        <Icon type="pencil" />
        <span>{formatDateToFull(published)}</span>
      </time>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mb-auto mt-3 text-base text-gray-700">{summary}</p>
      <Link
        href={slug}
        className="mt-6 inline-flex items-center gap-2 text-base font-medium text-gray-500 outline-none duration-200 group-hover:ml-1"
        aria-label={`Read post - ${title}`}
        title={`Read post - ${title}`}
      >
        <span className="absolute inset-0" aria-hidden="true"></span>
        <span>Read post</span>
        <Icon type="arrow-right" />
      </Link>
    </article>
  );
};
