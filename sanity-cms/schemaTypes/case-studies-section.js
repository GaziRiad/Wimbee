import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'case-studies-section',
  title: 'Case Studies in expertises/sectors/articles',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'section Tag',
      type: 'internationalizedArrayString',
      initialValue: 'CASE STUDIES',
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
})
