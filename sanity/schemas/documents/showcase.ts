import { defineType, defineField, defineArrayMember } from "sanity";

import { slugWithType } from "@/sanity/utils/slugWithType";

export const showcase = defineType({
  title: "Showcase",
  name: "showcase",
  type: "document",
  fieldsets: [{ name: "dates", title: "Dates", options: { columns: 2 } }],
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    slugWithType("portfolio"),
    defineField({
      title: "Published",
      name: "published",
      type: "date",
      fieldset: "dates",
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
    }),
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
      ],
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
    }),
  ],
});
