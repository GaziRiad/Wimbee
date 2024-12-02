import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Pioneering Digital Transformation and AI Excellence',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'partners',
      title: 'Partner Companies',
      type: 'object',
      fields: [
        defineField({
          name: 'logos',
          title: 'Partner Logos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Company Name',
                  type: 'string',
                }),
                defineField({
                  name: 'logo',
                  title: 'Company Logo',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
          initialValue: 'WHO WE ARE',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue:
            "At Wimbee, our passion for innovation drives excellence in digital transformation, data management, and AI. We've become a trusted leader by blending deep technical expertise with a clear understanding of our clients' business needs.",
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
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
          initialValue: [
            {title: 'Our mission', url: '#mission'},
            {title: 'Our global expertise', url: '#expertise'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'sectors',
      title: 'Sectors We Serve',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
          initialValue: 'SECTORS WE SERVE',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue:
            'We empower industries with tailored AI and data solutions to excel in the digital age.',
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
      name: 'services',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
          initialValue: 'KEY SERVICES ACROSS SECTORS',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue:
            'We offer tailored solutions to help businesses and individuals thrive with AI, talent development, and digital transformation.',
        }),
        defineField({
          name: 'hubs',
          title: 'Service Hubs',
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
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Hub Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'caseStudies',
      title: 'case studies Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
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
    }),
    defineField({
      name: 'blog',
      title: 'Blog Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
          initialValue: "WHAT'S NEW",
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
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
  ],
})
