import { groq } from "next-sanity";

export const homequery = groq`*[_type == "home"][0]{
  seo {
    title,
    description
  },  
hero {
    title,
    "backgroundImageUrl": backgroundImage.asset->url
  },
  partners {
    logos[] {
      name,
      "logoUrl": logo.asset->url,
      url
    }
  },
  introduction {
    tag,
    description,
    "imageUrl": image.asset->url,
    links[] {
      title,
      url
    }
  },
  sectors {
    tag,
    title,
    "imageUrl": image.asset->url
  },
  services {
    tag,
    description,
    hubs[] {
      title,
      description,
      "imageUrl": image.asset->url
    }
  },
  caseStudies {
    tag,
    "imageUrl": image.asset->url
  },
  blog {
    tag,
    "imageUrl": image.asset->url
  },
}`;

export const contactquery = groq`*[_type == "contact"][0] {
    title,
    description,
    buttonText,
    locations[] {
      country,
      phone,
      address
    },
    "contactImage": contactImage.asset->url
  }`;

export const newsletterquery = groq`*[_type == "newsletter"][0] {
    socials[] {
      title,
      url
    },
    title,
    labelText,
    placeholderText,
    buttonText
  }`;

export const footerquery = groq`*[_type == "footer"][0] {
      services {
        title,
        links[] {
          title,
          url
        }
      },
      customers {
        title,
        links[] {
          title,
          url
        }
      },
      news {
        title,
        links[] {
          title,
          url
        }
      },
      company {
        title,
        links[] {
          title,
          url
        }
      },
      socials {
        title,
        links[] {
          title,
          url
        }
      },
      "logoUrl": logo.asset->url
    }`;

export const spotlightquery = groq`*[_type == "spotlight"][0]{
  tag,
  title,
  description,
  "imageUrl": image.asset->url
}`;

// Get all posts (FULL DATA)
export const postsquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  slug,
  title,
  categories[]->,
}
`;
// Get all posts (FULL DATA)
// export const postsquery = groq`
// *[_type == "post"] | order(publishedAt desc, _createdAt desc) {
//   _id,
//   _createdAt,
//   publishedAt,
//   mainImage {
//     ...,
//     "blurDataURL":asset->metadata.lqip,
//     "ImageColor": asset->metadata.palette.dominant.background,
//   },
//   featured,
//   excerpt,
//   slug,
//   title,
//   author-> {
//     _id,
//     image,
//     slug,
//     name
//   },
//   categories[]->,
// }
// `;

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
}
`;

// Blog page query

export const blogPageQuery = groq`*[_type == "blog"][0]{
  blog {
    tag,
    "imageUrl": image.asset->url
  },
  seo {
    title
  },
  "posts": *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    "imageUrl": mainImage.asset->url,
    excerpt,
    publishedAt
  }
}`;
