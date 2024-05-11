import NextImage from "next/image";
import Link from "next/link";

import { Icon } from "../../elements/icon/icon";

type PortfolioTeaserProps = {
  title: string;
  summary: string;
  // stack: string[];
  slug: string;
  image?: { url: string; width: number; height: number };
};

export const PortfolioTeaser = ({
  title,
  image,
  summary,
  slug,
  // stack,
}: PortfolioTeaserProps) => {
  return (
    <article className="group relative grid h-full grid-rows-[auto,1fr] gap-8">
      {image && (
        <figure
          className="dark:border-neutral-850 overflow-hidden rounded-lg border"
          role="presentation"
        >
          <NextImage
            src={image.url}
            height={image.height}
            width={image.width}
            layout="responsive"
            alt=""
          />
        </figure>
      )}
      <div className="flex w-full flex-col">
        <h2 className="mb-4 text-2xl font-semibold group-focus-within:underline group-hover:underline sm:text-3xl dark:text-white">
          {title}
        </h2>
        <p className="mb-6 text-lg !leading-relaxed tracking-normal text-gray-500 sm:text-xl dark:text-gray-300">
          {summary}
        </p>
        {/* {stack && (
          <ul
            className="flex flex-wrap gap-2 mt-auto"
            aria-label="Project's tech stack list"
          >
            {stack.length > 3 ? (
              <>
                {stack.slice(0, 3).map((item, index) => (
                  <li
                    key={item}
                    className={`rounded bg-gray-100 px-4 py-3 text-base font-medium leading-tight text-gray-500 dark:bg-neutral-800 dark:text-gray-300 ${
                      index === 2 ? "hidden sm:inline-block" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
                <li
                  key="dummy-item"
                  className="px-4 py-3 text-base font-medium leading-tight text-gray-500 bg-gray-100 rounded dark:bg-neutral-800 dark:text-gray-300"
                  aria-hidden="true"
                  role="presentation"
                >
                  ...
                </li>
              </>
            ) : (
              stack.map((item) => (
                <li
                  key={item}
                  className="px-4 py-3 text-base font-medium leading-tight text-gray-500 bg-gray-100 rounded dark:bg-neutral-800 dark:text-gray-300"
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        )} */}
        <Link
          href={slug}
          className="mt-6 inline-flex items-center gap-2 text-base font-medium text-gray-500 outline-none duration-200 group-hover:ml-1 dark:text-gray-300"
          aria-label={`Read showcase - ${title}`}
          title={`Read showcase - ${title}`}
        >
          <span className="absolute inset-0" aria-hidden="true"></span>
          <span>Read showcase</span>
          <Icon type="arrow-right" />
        </Link>
      </div>
    </article>
  );
};
