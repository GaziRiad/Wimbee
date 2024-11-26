import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer Section Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'services',
      title: 'Services',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'SERVICES',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'customers',
      title: 'Customers',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'CUSTOMERS',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'news',
      title: 'News',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'NEWS',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'COMPANY',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'SOCIALS',
        }),
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
