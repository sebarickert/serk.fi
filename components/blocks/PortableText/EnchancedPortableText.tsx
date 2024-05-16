import {
  PortableText,
  PortableTextProps,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "@portabletext/react";

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
  return (
    <section className="prose prose-xl prose-blue mx-auto w-full max-w-screen-md dark:prose-invert">
      <PortableText value={content} components={components} />
    </section>
  );
};
