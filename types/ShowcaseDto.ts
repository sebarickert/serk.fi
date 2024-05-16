import { SanityDocument } from "@sanity/client";

import { ArticleDto } from "./ArticleDto";

export type ShowcaseDto = ArticleDto & SanityDocument;
