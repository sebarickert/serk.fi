import { SanityDocument } from "@sanity/client";
import { PortableTextBlock, Slug } from "sanity";

export type ArticleDto = {
  title: string;
  slug: Slug;
  published: Date;
  updated: Date;
  summary: string;
  content: PortableTextBlock[];
} & SanityDocument;
