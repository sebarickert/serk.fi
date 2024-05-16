import { defineArrayMember, defineField, defineType } from "sanity";

import { documentBaseFields } from "@/sanity/utils/documentBaseFields";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fieldsets: [{ name: "dates", title: "Dates", options: { columns: 2 } }],
  fields: [
    ...documentBaseFields(),
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
  ],
});
