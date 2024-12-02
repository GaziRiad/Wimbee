import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .id('home')
        .child(S.document().schemaType('home').documentId('home')),
      S.listItem()
        .title('Boosters')
        .id('boosters')
        .child(S.document().schemaType('boosters').documentId('boosters')),
      S.listItem()
        .title('Blog')
        .id('blog')
        .child(S.document().schemaType('blog').documentId('blog')),

      S.listItem()
        .title('Reused sections')
        .child(
          S.list()
            .title('Reused sections')
            .items([
              S.listItem()
                .title('Footer')
                .id('footer')
                .child(S.document().schemaType('footer').documentId('footer')),
              S.listItem()
                .title('Contact')
                .id('contact')
                .child(S.document().schemaType('contact').documentId('contact')),
              S.listItem()
                .title('Newsletter')
                .id('newsletter')
                .child(S.document().schemaType('newsletter').documentId('newsletter')),
              S.listItem()
                .title('Spotlight')
                .id('spotlight')
                .child(S.document().schemaType('spotlight').documentId('spotlight')),
            ]),
        ),

      S.documentTypeListItem('post').title('Posts').icon(CalendarIcon),
      S.documentTypeListItem('author').title('Authors').icon(UsersIcon),
      S.documentTypeListItem('category').title('Categories').icon(PinIcon),
    ])
