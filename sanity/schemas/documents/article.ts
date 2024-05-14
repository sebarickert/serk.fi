import { defineArrayMember, defineField, defineType } from "sanity";

import { documentBaseFields } from "@/sanity/utils/documentBaseFields";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fieldsets: [{ name: "dates", title: "Dates", options: { columns: 2 } }],
  fields: [
    ...documentBaseFields({ slugPrefix: "blog" }),
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
  ],
});
