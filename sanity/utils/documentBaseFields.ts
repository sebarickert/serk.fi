import { defineArrayMember, defineField } from "sanity";

import { slugWithType } from "./slugWithType";

export const documentBaseFields = ({
  slugPrefix,
}: {
  slugPrefix?: string;
} = {}) => [
  defineField({
    title: "Title",
    name: "title",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  slugWithType(slugPrefix),
  defineField({
    title: "Published",
    name: "published",
    type: "date",
    fieldset: "dates",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    title: "Updated",
    name: "updated",
    type: "date",
    fieldset: "dates",
  }),
  defineField({
    title: "Summary",
    name: "summary",
    type: "text",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "content",
    title: "Content",
    type: "array",
    of: [
      defineArrayMember({
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "Heading 2", value: "h2" },
          { title: "Heading 3", value: "h3" },
          { title: "Heading 4", value: "h4" },
          { title: "Heading 5", value: "h5" },
          { title: "Heading 6", value: "h6" },
          { title: "Quote", value: "blockquote" },
        ],
      }),
      defineArrayMember({
        type: "code",
      }),
      defineArrayMember({
        type: "image",
        fields: [
          defineField({
            title: "Alternative text",
            name: "alt",
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
        ],
      }),
    ],
  }),
  defineField({
    title: "Image",
    name: "image",
    type: "image",
    fields: [
      defineField({
        title: "Alternative text",
        name: "alt",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    ],
  }),
];
