import { defineField, defineType } from "sanity";

export const navigationItem = defineType({
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({
      title: "Navigation item title",
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "link",
      title: "URL",
    }),
  ],
});
