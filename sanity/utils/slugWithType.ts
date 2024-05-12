import { defineField } from "sanity";
import slugify from "slugify";

const formatSlug = (input: string, slugStart: string) => {
  const slug = slugify(input, { lower: true });
  return slugStart + slug;
};

export const slugWithType = (prefix = ``, source = `title`) => {
  const slugStart = prefix ? `/${prefix}/` : `/`;

  return defineField({
    name: `slug`,
    type: `slug`,
    options: {
      source,
      slugify: (value) => formatSlug(value, slugStart),
    },
    validation: (Rule) =>
      Rule.required().custom(({ current }: any) => {
        if (typeof current === "undefined") {
          return true;
        }

        if (current) {
          if (!current.startsWith(slugStart)) {
            return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
          }

          if (current.slice(slugStart.length).split("").includes("/")) {
            return `Slug cannot have another "/" after "${slugStart}"`;
          }

          if (current === slugStart) {
            return `Slug cannot be empty`;
          }

          if (current.endsWith("/")) {
            return `Slug cannot end with "/"`;
          }
        }

        return true;
      }),
  });
};
