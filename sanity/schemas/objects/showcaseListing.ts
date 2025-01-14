import { defineArrayMember, defineField, defineType } from "sanity";

export const showcaseListing = defineType({
  name: "showcaseListing",
  title: "Showcase listing",
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
      name: "showcases",
      title: "Showcases",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "showcase" }],
        }),
      ],
    }),
  ],
  initialValue: {
    title: "Showcase Listing",
  },
});
