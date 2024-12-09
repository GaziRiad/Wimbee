import { groq } from "next-sanity";

export const homequery = groq`*[_type == "home"][0]{
hero {
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
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
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    links[] {
      "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      url
    }
  },
  sectors {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    "allSectors": *[_type == "sector" && language == $locale] | order(publishedAt asc) {
      title,
      "slug": slug.current
    }
  },
  services {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    hubs[] {
      "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
      "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
      "imageUrl": image.asset->url
    }
  },
  caseStudies {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    "items": *[_type == "case-study" && language == $locale] | order(publishedAt desc) {
      title,
      slug,
      categories[]->,
      summary
    }
  },
  spotlight {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    "imageUrl": image.asset->url
  },
  blog {
    "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
    "imageUrl": image.asset->url,
    "items": *[_type == "post" && language == $locale] | order(publishedAt desc) {
      title,
      slug,
      categories[]->,
      summary,
    }
  },
}`;

export const aboutQuery = groq`*[_type == "about"][0]{
 "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
  "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
  sideText[] {
    "text": coalesce(text[_key == $locale][0].value, text[_key == "en"][0].value),
  },
  "imageUrl": image.asset->url,
  "contentSection": coalesce(contentSection[$locale], contentSection["en"]),
}`;

export const boostersquery = groq`*[_type == "boosters"][0] {
  "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
  "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
  products[] {
    "name": coalesce(name[_key == $locale][0].value, name[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    "imageUrl": image.asset->url
  }
}`;

export const blogPageQuery = groq`*[_type == "blog"][0]{
  "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
  "imageUrl": image.asset->url,
  "items": *[_type == "post" && language == $locale] | order(publishedAt desc) {
    title,
    slug,
    categories[]->,
    summary
  }
}`;

// Reusable sections

export const contactquery = groq`*[_type == "contact"][0] {
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
    "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value),
    "buttonText": coalesce(buttonText[_key == $locale][0].value, buttonText[_key == "en"][0].value),
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
    "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
    "labelText": coalesce(labelText[_key == $locale][0].value, labelText[_key == "en"][0].value),
    "placeholderText": coalesce(placeholderText[_key == $locale][0].value, placeholderText[_key == "en"][0].value),
    "buttonText": coalesce(buttonText[_key == $locale][0].value, buttonText[_key == "en"][0].value),
    
  }`;

export const footerquery = groq`*[_type == "footer"][0] {
      services {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        links[] {
          "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
          url
        }
      },
      customers {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        links[] {
          "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
          url
        }
      },
      news {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        links[] {
          "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
          url
        }
      },
      company {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        links[] {
          "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
          url
        }
      },
      socials {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        links[] {
          title,
          url
        }
      },
      "logoUrl": logo.asset->url
    }`;

export const caseStudiesSectionQuery = groq`*[_type == "case-studies-section"][0]{
      "tag": coalesce(tag[_key == $locale][0].value, tag[_key == "en"][0].value),
      "imageUrl": image.asset->url,
      "items": *[_type == "case-study" && language == $locale] | order(publishedAt desc) {
          title,
          slug,
          categories[]->,
          summary
        }
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
          title
        },
        body,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          title,
          slug,
          language
        },
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
        body,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          title,
          slug,
          language
        },
      }
`;

// Single Expertise
export const singleExpertiseQuery = groq`*[_type == "expertise" && slug.current == $slug][0]  {
  title,
  "slug": slug.current,
  body,
  "allLinks": *[_type == "expertise" && language == $locale] | order(publishedAt asc)  {
    title,
    "slug": slug.current
  },
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      title,
      slug,
      language
    },
}`;

// Single Sector
export const singleSectorQuery = groq`*[_type == "sector" && slug.current == $slug][0]  {
  title,
  "slug": slug.current,
  body,
  "allLinks": *[_type == "sector" && language == $locale] | order(publishedAt asc)  {
    title,
    "slug": slug.current
  },
   "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      title,
      slug,
      language
    },
}`;

//
export const expertisesquery = groq`*[_type == "expertise" && isNavigation == true && language == $locale] | order(publishedAt asc) {
  title,
  "slug": slug.current
}`;

//
export const sectorsQuery = groq`*[_type == "sector" && isNavigation == true  && language == $locale] | order(publishedAt asc) {
  title,
  "slug": slug.current
}`;

// For generatestaticparams
export const allBlogSlugsquery = groq`*[_type == "post"] {
        "slug": slug.current
      }`;

export const allCasestudiesQuery = groq`*[_type == "case-study"] {
        "slug": slug.current
      }`;

export const allExpertisesSlugsquery = groq`*[_type == "expertise"] {
        "slug": slug.current
      }`;

export const allSectorsSlugsquery = groq`*[_type == "sector"] {
        "slug": slug.current
      }`;

export const settingsQuery = groq`*[_type == "settings"][0] {
  "imageUrl": favicon.asset->url,
  "defaultTitle": coalesce(defaultTitle[_key == $locale][0].value, defaultTitle[_key == "en"][0].value),
  "description": coalesce(siteDescription[_key == $locale][0].value, siteDescription[_key == "en"][0].value),
}`;
