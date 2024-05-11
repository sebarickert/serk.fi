import Link from "next/link";

import { Icon } from "../../elements/icon/icon";
import { Container } from "../../blocks/container/container";

export type ArticleBackLinkProps = {
  backLinkUrl: string;
};

export const PostBackLink = ({ backLinkUrl }: ArticleBackLinkProps) => {
  return (
    <Container className="mb-16">
      <div className="mx-auto w-full max-w-screen-md">
        <Link
          href={backLinkUrl}
          className="inline-flex items-center gap-4 font-semibold duration-200 hover:-ml-1 dark:text-white"
        >
          <Icon type="arrow-left" />
          <span>Back to overview</span>
        </Link>
      </div>
    </Container>
  );
};
