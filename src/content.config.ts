import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/testimonials" }),
  schema: z.object({
    role: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { testimonials };
