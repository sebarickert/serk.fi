import { PortableTextReactComponents } from "@portabletext/react";

import { ArticleListing } from "@/blocks/PortableText/ArticleListing";
import { EnchancedPortableText } from "@/blocks/PortableText/EnchancedPortableText";
import { ShowcaseListing } from "@/blocks/PortableText/ShowcaseListing";

export const customPortableTextComponents: Partial<PortableTextReactComponents> =
  {
    types: {
      portableText: ({ value: { content } }) => (
        <EnchancedPortableText value={content} />
      ),
      showcaseListing: ({ value }) => <ShowcaseListing {...value} />,
      articleListing: ({ value }) => <ArticleListing {...value} />,
    },
  };
