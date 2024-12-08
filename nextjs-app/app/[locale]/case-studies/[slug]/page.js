import Article from "@/components/blog/Article";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import { sanityFetch } from "@/sanity/client";
import { allCasestudiesQuery, singleCasestudyQuery } from "@/sanity/groq";

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: allCasestudiesQuery,
    tags: ["case-study"],
  });

  return slugs.map((slug) => ({
    slug: slug.current, // Adjust to match the returned slug field
  }));
}

async function page({ params: { locale, slug } }) {
  const caseStudy = await sanityFetch({
    query: singleCasestudyQuery,
    qParams: { slug },
    tags: ["case-study"],
  });

  if (!caseStudy) return null;

  return (
    <main>
      <div className="bg-light-300">
        <NavigationWrapper />
        <Article content={caseStudy} />
      </div>
      <Newsletter locale={locale} />
      <InfoSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
