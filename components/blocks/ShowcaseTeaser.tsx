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
    <div className="group @container">
      <article className={articleClasses}>
        {image && (
          <figure
            className="theme-border-primary overflow-hidden rounded-md border"
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
          <h2 className="theme-text-primary mb-4 text-2xl font-semibold @5xl:text-3xl">
            {title}
          </h2>
          <p className="theme-text-secondary group-hover:theme-text-primary mb-6 text-lg !leading-relaxed tracking-normal @5xl:text-xl">
            {summary}
          </p>
          <Link
            href={slug}
            className="theme-link-without-focus mt-6 text-base font-medium outline-none duration-200 group-hover:ml-1"
            aria-label={`View showcase - ${title}`}
            title={`View showcase - ${title}`}
          >
            <span className="absolute inset-0" aria-hidden="true"></span>
            <span className="group-focus-within:theme-focus-without-prefix inline-flex items-center gap-2">
              <span>View showcase</span>
              <Icon type="arrow-right" />
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
};
