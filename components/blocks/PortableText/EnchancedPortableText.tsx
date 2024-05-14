"use client";

import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { SanityImage } from "@/blocks/SanityImage";
import { SyntaxHighlighter } from "@/blocks/SyntaxHighlighter";

const components: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }) => <SyntaxHighlighter {...value} />,
    image: ({ value }) => (
      <div className="-mx-8 md:-mx-10 lg:-mx-16">
        <SanityImage {...value} />
      </div>
    ),
  },
};

export const EnchancedPortableText = ({ value }: { value: any }) => {
  return (
    <section className="prose prose-xl prose-blue mx-auto w-full max-w-screen-md dark:prose-invert">
      <PortableText value={value} components={components} />
    </section>
  );
};
