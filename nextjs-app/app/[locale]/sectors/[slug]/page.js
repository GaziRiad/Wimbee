import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import SingleContent from "@/components/SingleContent";
import { sanityFetch } from "@/sanity/client";
import { allSectorsSlugsquery, singleSectoreQuery } from "@/sanity/groq";

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: allSectorsSlugsquery,
    tags: ["sector"],
  });

  return slugs.map((slug) => ({
    slug: slug.current, // Adjust to match the returned slug field
  }));
}

async function page({ params: { locale, slug } }) {
  const sector = await sanityFetch({
    query: singleSectoreQuery,
    qParams: { slug },
    tags: ["sector"],
  });

  if (!sector) return null;

  return (
    <main>
      <div className="bg-light-300">
        <NavigationWrapper />
        <SingleContent name="Sectors" type="sectors" content={sector} />
      </div>
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
