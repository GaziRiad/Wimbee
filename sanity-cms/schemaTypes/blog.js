import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({
      name: 'blog',
      title: 'Blog Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
          initialValue: 'BLOG',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
      ],
    }),
  ],
})
