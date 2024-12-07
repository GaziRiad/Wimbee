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
    "imageUrl": image.asset->url,
    "allSectors": *[_type == "sector"] | order(publishedAt asc) {
      title,
      "slug": slug.current
    }
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
    "imageUrl": image.asset->url,
    "items": *[_type == "case-study"] | order(publishedAt desc) {
      title,
      slug,
      categories[]->,
      summary
    }
  },
  blog {
    tag,
    "imageUrl": image.asset->url,
    "items": *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      categories[]->,
      summary
    }
  },
}`;

export const boostersquery = groq`*[_type == "boosters"][0] {
  tag,
  title,
  products[] {
    name,
    description,
    "imageUrl": image.asset->url
  },
  seo {
    title
  }
}`;

// Blog page query

export const blogPageQuery = groq`*[_type == "blog"][0]{
  tag,
  "imageUrl": image.asset->url,
  "items": *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    categories[]->,
    summary
  },
  seo {
    title
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
  summary
}
`;

// Single Post
export const singlearticlequery = groq`*[_type == "post" && slug.current == $slug][0] {
        title,
        slug,
        publishedAt,
        categories[]->{
          title,
          slug
        },
        body
      }
`;

// Single Post
export const singleCasestudyQuery = groq`*[_type == "case-study" && slug.current == $slug][0] {
        title,
        slug,
        publishedAt,
        categories[]->{
          title,
          slug
        },
        body
      }
`;

// Single Expertise
export const singleExpertiseQuery = groq`*[_type == "expertise" && slug.current == $slug][0]  {
  title,
  "slug": slug.current,
  body,
  "allLinks": *[_type == "expertise"] | order(publishedAt asc)  {
    title,
    "slug": slug.current
  }
}`;

// Single Sector
export const singleSectoreQuery = groq`*[_type == "sector" && slug.current == $slug][0]  {
  title,
  "slug": slug.current,
  body,
  "allLinks": *[_type == "sector"] | order(publishedAt asc)  {
    title,
    "slug": slug.current
  }
}`;

//
export const expertisesquery = groq`*[_type == "expertise" && isNavigation == true] | order(publishedAt asc) {
  title,
  "slug": slug.current
}`;

//
export const sectorsQuery = groq`*[_type == "sector" && isNavigation == true] | order(publishedAt asc) {
  title,
  "slug": slug.current
}`;

// For generatestaticparams
export const allBlogSlugsquery = groq`*[_type == "post"] {
        "slug": slug.current
      }`;

export const allExpertisesSlugsquery = groq`*[_type == "expertise"] {
        "slug": slug.current
      }`;

export const allSectorsSlugsquery = groq`*[_type == "sector"] {
        "slug": slug.current
      }`;
