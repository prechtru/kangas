import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      subheadline: z.string(),
      primaryCtaLabel: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaLabel: z.string(),
      secondaryCtaHref: z.string(),
      stats: z.array(
        z.object({
          value: z.string(),
          label: z.string()
        })
      )
    }),
    highlights: z.array(
      z.object({
        title: z.string(),
        copy: z.string()
      })
    ),
    programs: z.array(
      z.object({
        name: z.string(),
        audience: z.string(),
        schedule: z.string(),
        summary: z.string()
      })
    )
  })
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    author: z.string(),
    category: z.enum(["Club News", "Game Report", "Community", "Registration"]),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  pages,
  news
};
