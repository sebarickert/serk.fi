import { PortableTextReactComponents } from "@portabletext/react";

import { ArticleListing } from "@/blocks/PortableText/ArticleListing";
import { EnchancedPortableText } from "@/blocks/PortableText/EnchancedPortableText";
import { ShowcaseListing } from "@/blocks/PortableText/ShowcaseListing";

export const components: Partial<PortableTextReactComponents> = {
  types: {
    portableText: EnchancedPortableText,
    showcaseListing: ShowcaseListing,
    articleListing: ArticleListing,
  },
};
