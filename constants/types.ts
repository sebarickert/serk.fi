import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export type SanityImageObjectWithAltText = SanityImageObject & {
  alt: string;
};

export enum QUERY_TYPE {
  PAGE = "page",
  BLOG = "article",
  PORTFOLIO = "showcase",
}
