import {
  PortableText,
  PortableTextProps,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react";
import clsx from "clsx";

import { SyntaxHighlighter } from "@/blocks/PortableText/SyntaxHighlighter";
import { SanityImage } from "@/blocks/SanityImage";

const components: Partial<PortableTextReactComponents> = {
  types: {
    code: SyntaxHighlighter,
    image: ({ value }) => <SanityImage {...value} />,
  },
};

type EnchancedPortableTextProps = {
  content: PortableTextProps["value"];
};

export const EnchancedPortableText = ({
  value: { content },
}: PortableTextTypeComponentProps<EnchancedPortableTextProps>) => {
  const proseStyleOverrides = clsx(
    "prose-a:serk-link",
    "prose-headings:serk-text",
    "prose-p:serk-text",
    "prose-ul:serk-text",
    "prose-ol:serk-text",
    "prose-li:serk-text",
    "prose-strong:serk-text",
    "prose-blockquote:serk-text",
  );

  return (
    <section
      className={clsx(
        "prose prose-xl mx-auto w-full max-w-screen-md dark:prose-invert",
        proseStyleOverrides,
      )}
    >
      <PortableText value={content} components={components} />
    </section>
  );
};
