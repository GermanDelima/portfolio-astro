import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      icon1: image(),
      icon2: image(),
      icon3: image(),
      icon4: image(),
      icon5: image(),
      titleIcon1: z.string().min(1),
      titleIcon2: z.string().min(1),
      titleIcon3: z.string().min(1),
      titleIcon4: z.string().min(1),
      titleIcon5: z.string().min(1),
      url: z.string().url(),
      featured: z.number().min(1).optional(),
    }),
});

export const collections = {
  showcase,
};
