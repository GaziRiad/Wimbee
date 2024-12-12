import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'defaultTitle',
      title: 'Site Default Title',
      type: 'internationalizedArrayString',
      initialValue: 'Welcome — Wimbee',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'internationalizedArrayString',
    }),
  ],
})
