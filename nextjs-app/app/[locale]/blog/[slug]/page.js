import Article from "@/components/blog/Article";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import { sanityFetch } from "@/sanity/client";
import { singlearticlequery } from "@/sanity/groq";

async function page({ params: { locale, slug } }) {
  const post = await sanityFetch({
    query: singlearticlequery,
    qParams: { slug },
    tags: ["posts"],
  });

  return (
    <main>
      <div className="bg-light-300">
        <Navigation />
        <Article post={post} />
      </div>
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
