import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

import { sanityFetch } from "@/sanity/client";
import { homequery, postsquery } from "@/sanity/groq";
import Navigation from "@/components/Navigation";
import LogoCarousel from "@/components/home/LogoCarousel";
import Hero from "@/components/home/Hero";
import IntroductionSection from "@/components/home/IntroductionSection";
import SectorsSection from "@/components/home/SectorsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SpotlightSection from "@/components/home/SpotlightSection";
import Newsletter from "@/components/Newsletter";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await sanityFetch({ query: homequery, tags: ["home"] });
  const posts = await sanityFetch({
    query: postsquery,
    tags: ["blog", "posts"],
  });

  const blogContent = {
    tag: data?.blog.tag,
    image: data?.blog.imageUrl,
    posts,
  };
  const casestudiesContent = {
    tag: data.caseStudies.tag,
    image: data.caseStudies.imageUrl,
    posts,
  };

  if (!data) return <p>Loading...</p>;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <div
          className={`min-h-screen bg-cover bg-center`}
          style={{ backgroundImage: `url(${data.hero.backgroundImageUrl})` }}
        >
          <Navigation />
          <Hero title={data?.hero.title} />
        </div>
        <LogoCarousel logos={data?.partners?.logos} />
        <IntroductionSection content={data?.introduction} />
        <SectorsSection content={data?.sectors} />
        <ServicesSection content={data?.services} />
        <SplitSection content={casestudiesContent} />
        <SpotlightSection />
        <SplitSection content={blogContent} flipped={true} />
        <Newsletter />
        <InfoSection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
