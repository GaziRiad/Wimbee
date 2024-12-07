import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import { sanityFetch } from "@/sanity/client";
import { blogPageQuery } from "@/sanity/groq";

export const revalidate = 2592000; // 30 days in seconds

async function page({ params: { locale } }) {
  const data = await sanityFetch({
    query: blogPageQuery,
    tags: ["post", "blog"],
  });

  if (!data) return null;

  return (
    <main>
      <div className="bg-light-300 pt-16">
        <NavigationWrapper />
        <SplitSection type="blog" content={data} flipped />
      </div>
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
