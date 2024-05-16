import { SanityDocument } from "@sanity/client";
import { PortableTextBlock, Slug } from "sanity";

import { SanityImageObjectWithAltText } from "@/constants/types";

export type ArticleDto = {
  title: string;
  slug: Slug;
  published: Date;
  updated: Date;
  summary: string;
  content: PortableTextBlock[];
  image: SanityImageObjectWithAltText;
} & SanityDocument;
