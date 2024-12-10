import { expertisesquery, sectorsQuery } from "@/sanity/groq";
import { sanityFetch } from "@/sanity/client";
import Navigation from "./Navigation";

async function NavigationWrapper({ locale = "en" }) {
  const expertises = await sanityFetch({
    query: expertisesquery,
    qParams: { locale },
    tags: ["expertise"],
  });

  const sectors = await sanityFetch({
    query: sectorsQuery,
    qParams: { locale },
    tags: ["sector"],
  });

  const menu = [
    {
      title: "Expertises",
      type: "expertises",
      items:
        expertises?.map((item) => ({
          label: item.title,
          href: `/expertises/${item.slug}`,
        })) || [],
    },
    {
      title: "Sectors",
      type: "sectors",
      items:
        sectors?.map((item) => ({
          label: item.title,
          href: `/sectors/${item.slug}`,
        })) || [],
    },
    { title: "Boosters", href: "/boosters" },
    { title: "About", href: "/about" },
  ];

  return <Navigation menu={menu} />;
}

export default NavigationWrapper;
