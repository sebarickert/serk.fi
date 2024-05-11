import { SanityDocument, SanityImageAssetDocument } from "@sanity/client";
import { PortableTextBlock, Slug } from "sanity";

export type ShowcaseDto = {
  title: string;
  slug: Slug;
  published: Date;
  updated: Date;
  summary: string;
  content: PortableTextBlock[];
  image: SanityImageAssetDocument;
} & SanityDocument;
