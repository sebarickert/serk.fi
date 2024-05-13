import clsx from "clsx";
import Link from "next/link";

import { SanityImage } from "./SanityImage";

import { Icon } from "@/elements/Icon/Icon";
import { ShowcaseDto } from "@/types/ShowcaseDto";

export const ShowcaseTeaser = ({
  title,
  image,
  summary,
  slug: { current: slug },
  reverseOrder,
}: ShowcaseDto & { reverseOrder?: boolean }) => {
  const articleClasses = clsx(
    "relative grid h-full grid-rows-[auto,1fr] gap-8",
    "@5xl:grid-cols-2 @5xl:items-center @5xl:gap-16 @5xl:grid-rows-none",
  );

  return (
    <div className="@container group">
      <article className={articleClasses}>
        {image && (
          <figure
            className="overflow-hidden rounded-md border"
            role="presentation"
          >
            <SanityImage {...image} />
          </figure>
        )}
        <div
          className={clsx("flex w-full flex-col", {
            ["@5xl:-order-1"]: reverseOrder,
          })}
        >
          <h2 className="@5xl:text-3xl mb-4 text-2xl font-semibold group-focus-within:underline group-hover:underline">
            {title}
          </h2>
          <p className="@5xl:text-xl mb-6 text-lg !leading-relaxed tracking-normal text-gray-500">
            {summary}
          </p>
          <Link
            href={slug}
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-gray-500 outline-none duration-200 group-focus-within:ml-1 group-hover:ml-1"
            aria-label={`View showcase - ${title}`}
            title={`View showcase - ${title}`}
          >
            <span className="absolute inset-0" aria-hidden="true"></span>
            <span>View showcase</span>
            <Icon type="arrow-right" />
          </Link>
        </div>
      </article>
    </div>
  );
};
