import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sector',
  title: 'Sector',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sector Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'isNavigation',
      title: 'Navigation',
      type: 'boolean',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})