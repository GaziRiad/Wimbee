import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import SingleContent from "@/components/SingleContent";
import { sanityFetch } from "@/sanity/client";
import {
  allExpertisesSlugsquery,
  caseStudiesSectionQuery,
  singleExpertiseQuery,
} from "@/sanity/groq";

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: allExpertisesSlugsquery,
    tags: ["expertise"],
  });

  return slugs.map((slug) => ({
    slug: slug.current, // Adjust to match the returned slug field
  }));
}

async function page({ params: { locale, slug } }) {
  const expertise = await sanityFetch({
    query: singleExpertiseQuery,
    qParams: { slug },
    tags: ["expertise"],
  });

  const caseStudiesSection = await sanityFetch({
    query: caseStudiesSectionQuery,
    qParams: { slug },
    tags: ["case-studies-section", "case-study"],
  });

  if (!expertise) return null;

  return (
    <main>
      <div className="bg-light-300">
        <NavigationWrapper />
        <SingleContent
          type="expertises"
          name="Expertises"
          content={expertise}
        />
      </div>
      <SplitSection
        content={caseStudiesSection}
        type="case-studies"
        variant="primary"
      />
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
