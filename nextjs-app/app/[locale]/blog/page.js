import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";
import InfoSection from "@/components/InfoSection";
import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import { sanityFetch } from "@/sanity/client";
import { blogPageQuery } from "@/sanity/groq";

async function page({ params: { locale } }) {
  const data = await sanityFetch({ query: blogPageQuery, tags: ["posts"] });

  const content = {
    tag: data.blog.tag,
    image: data.blog.imageUrl,
    posts: data.posts,
  };

  return (
    <main>
      <div className="bg-light-300">
        <Navigation />
        <SplitSection content={content} flipped />
      </div>
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
