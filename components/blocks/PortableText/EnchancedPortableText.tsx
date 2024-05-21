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
    "prose-a:theme-link",
    "prose-headings:theme-text-primary",
    "prose-p:theme-text-primary",
    "prose-ul:theme-text-primary",
    "prose-ol:theme-text-primary",
    "prose-li:theme-text-primary",
    "prose-strong:theme-text-primary",
    "prose-blockquote:theme-text-primary",
    "prose-inline-code:theme-inline-code",
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
