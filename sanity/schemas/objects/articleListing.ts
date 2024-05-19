import { defineArrayMember, defineField, defineType } from "sanity";

export const articleListing = defineType({
  name: "articleListing",
  title: "Article listing",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title for Sanity listing (not displayed on site)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "articles",
      title: "Articles",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "article" }],
        }),
      ],
    }),
  ],
  initialValue: {
    title: "Article Listing",
  },
});