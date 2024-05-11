// import { formatDate } from "../../../utils/formatDate";
import { Icon } from "../../elements/icon/icon";

import { ArticleDto } from "@/types/ArticleDto";
import { PageDto } from "@/types/PageDto";

// type PostHeaderProps = {
//   title: string;
//   lead: string;
//   date: Date;
//   dateUpdated?: boolean;
// };

type ArticleHeaderProps =
  | Pick<PageDto, "title" | "summary" | "published" | "updated">
  | Pick<ArticleDto, "title" | "summary" | "published" | "updated">;

export const ArticleHeader = ({
  title,
  summary,
  published,
  updated,
}: ArticleHeaderProps) => {
  // const date = formatDate(new Date(dateRaw));

  return (
    <header className="mb-16 grid">
      <h1 className="!mb-4 !text-5xl !font-bold !leading-tight tracking-tighter sm:!text-[56px]">
        {title}
      </h1>
      <p className="!mb-8 !mt-0 !text-2xl !leading-relaxed tracking-normal text-gray-500 dark:text-gray-300">
        {summary}
      </p>
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
    </header>
  );
};
