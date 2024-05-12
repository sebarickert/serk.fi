import { defineType } from "sanity";

import { documentBaseFields } from "@/sanity/utils/documentBaseFields";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fieldsets: [{ name: "dates", title: "Dates", options: { columns: 2 } }],
  fields: [...documentBaseFields({})],
});
