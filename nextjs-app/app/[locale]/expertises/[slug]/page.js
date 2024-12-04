import Article from "@/components/blog/Article";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";

export const revalidate = 2592000; // 30 days in seconds

// export async function generateStaticParams() {
//   const slugs = await sanityFetch({
//     query: allSlugsquery,
//     tags: ["post"],
//   });

//   return slugs.map((slug) => ({
//     slug: slug.current, // Adjust to match the returned slug field
//   }));
// }

async function page({ params: { locale, slug } }) {
  console.log(slug);
  // const post = await sanityFetch({
  //   query: singlearticlequery,
  //   qParams: { slug },
  //   tags: ["post"],
  // });

  return (
    <main>
      <div className="bg-light-300">
        <Navigation />
        {/* <Article  /> */}
      </div>
      <Newsletter />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default page;
