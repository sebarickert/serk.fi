import { defineField, defineType } from "sanity";

export const link = defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      title: "Link",
      name: "link",
      type: "reference",
      to: [{ type: "page" }],
    }),
  ],
});
