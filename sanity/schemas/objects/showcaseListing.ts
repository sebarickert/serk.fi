import { defineArrayMember, defineField, defineType } from "sanity";

export const showcaseListing = defineType({
  name: "showcaseListing",
  title: "Showcase listing",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      validation: (Rule) => Rule.required(),
    }),
  ],
});
