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
        type: "portableText",
        name: "portableText",
      }),
      defineArrayMember({
        type: "showcaseListing",
        name: "showcaseListing",
      }),
      defineArrayMember({
        type: "articleListing",
        name: "articleListing",
      }),
    ],
  }),
];
