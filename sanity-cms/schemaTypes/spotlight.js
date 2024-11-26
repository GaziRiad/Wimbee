import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'spotlight',
  title: 'Spotlight Section',
  type: 'document',
  fields: [
    // Tag/Label
    defineField({
      name: 'tag',
      title: 'Tag/Label',
      type: 'string',
      description: 'A short label, such as "SPOTLIGHT," displayed at the top of the section.',
      initialValue: 'SPOTLIGHT',
    }),
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the spotlight section.',
    }),
    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description or subtext for the spotlight section.',
    }),
    // Image
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      description: 'The main image for the spotlight section.',
    }),
  ],
})
