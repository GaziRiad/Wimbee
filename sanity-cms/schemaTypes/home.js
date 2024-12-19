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
          type: 'internationalizedArrayString',
          initialValue: 'Pioneering Digital Transformation and AI Excellence',
        }),
        defineField({
          name: 'backgroundVideo',
          title: 'Background Video',
          type: 'file',
          options: {
            accept: 'video/*',
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
          type: 'internationalizedArrayString',
          initialValue: 'WHO WE ARE',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'internationalizedArrayString',
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
                  type: 'internationalizedArrayString',
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
          type: 'internationalizedArrayString',
          initialValue: 'SECTORS WE SERVE',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'internationalizedArrayString',
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
          type: 'internationalizedArrayString',
          initialValue: 'KEY SERVICES ACROSS SECTORS',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'internationalizedArrayString',
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
                  type: 'internationalizedArrayString',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'internationalizedArrayString',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
                defineField({
                  name: 'staticImage',
                  title: 'Static Hub Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'hoverImage',
                  title: 'Hover Hub Image',
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
    }),
    defineType({
      name: 'spotlight',
      title: 'Spotlight Section',
      type: 'document',
      fields: [
        // Tag/Label
        defineField({
          name: 'tag',
          title: 'Tag/Label',
          type: 'internationalizedArrayString',
          initialValue: 'SPOTLIGHT',
        }),
        // Title
        defineField({
          name: 'title',
          title: 'Title',
          type: 'internationalizedArrayString',
        }),
        // Description
        defineField({
          name: 'description',
          title: 'Description',
          type: 'internationalizedArrayString',
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
    }),
    defineField({
      name: 'blog',
      title: 'Blog Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'internationalizedArrayString',
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
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'internationalizedArrayString',
        }),
      ],
    }),
  ],
})
