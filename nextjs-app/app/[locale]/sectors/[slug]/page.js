import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import SingleContent from "@/components/SingleContent";
import { sanityFetch } from "@/sanity/client";
import { singleSectoreQuery } from "@/sanity/groq";

export const revalidate = 2592000; // 30 days in seconds

async function page({ params: { locale, slug } }) {
  const sector = await sanityFetch({
    query: singleSectoreQuery,
    qParams: { slug },
    tags: ["sector"],
  });

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
