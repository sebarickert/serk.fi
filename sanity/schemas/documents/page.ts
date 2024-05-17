import { defineType } from "sanity";

import { documentBaseFields } from "@/sanity/utils/documentBaseFields";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fieldsets: [{ name: "dates", title: "Dates", options: { columns: 2 } }],
  fields: [...documentBaseFields()],
  orderings: [
    {
      title: "Published",
      name: "publishedDesc",
      by: [{ field: "published", direction: "desc" }],
    },
  ],
});
