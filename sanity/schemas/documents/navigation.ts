import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "navId",
      title: "Navigation ID",
      type: "string",
    }),
    defineField({
      title: "Navigation items",
      name: "items",
      type: "array",
      of: [{ type: "navigationItem" }],
    }),
  ],
});
