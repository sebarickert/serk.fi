import { defineField, defineType } from "sanity";

import { documentBaseFields } from "@/sanity/utils/documentBaseFields";

export const showcase = defineType({
  title: "Showcase",
  name: "showcase",
  type: "document",
  fieldsets: [{ name: "dates", title: "Dates", options: { columns: 2 } }],
  fields: [
    ...documentBaseFields({ slugPrefix: "portfolio" }),
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
  ],
});
