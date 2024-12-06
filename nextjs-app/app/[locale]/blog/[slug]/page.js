import Article from "@/components/blog/Article";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import SingleContent from "@/components/SingleContent";
import { sanityFetch } from "@/sanity/client";
import { allSlugsquery, singlearticlequery } from "@/sanity/groq";

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: allSlugsquery,
    tags: ["post"],
  });

  return slugs.map((slug) => ({
    slug: slug.current, // Adjust to match the returned slug field
  }));
}

async function page({ params: { locale, slug } }) {
  const post = await sanityFetch({
    query: singlearticlequery,
    qParams: { slug },
    tags: ["post"],
  });

  if (!post) return null;

  return (
    <main>
      <div className="bg-light-300">
        <NavigationWrapper />
        <Article content={post} />
      </div>
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
