import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    links: defineCollection({
      type: 'data',
      source: 'links/**/*.json',
      schema: z.object({
        id: z.string(),
        url: z.string().url(),
        title: z.string(),
        category: z.string(),
        subcategory: z.string()
      })
    })
  }
})
