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
import NavigationWrapper from "@/components/NavigationWrapper";

export const revalidate = 2592000; // 30 days in seconds

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await sanityFetch({
    query: homequery,
    tags: ["home", "sector", "post", "case-study"],
  });

  if (!data) return null;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <div
          className={`hero-section h-screen bg-cover bg-center`}
          style={{ backgroundImage: `url(${data.hero.backgroundImageUrl})` }}
        >
          <NavigationWrapper />
          <section className="mx-auto flex h-full max-w-[1568px] items-center px-4">
            <h1 className="max-w-xl text-titleSmall text-light-200 lg:text-titleMedium 2xl:max-w-5xl 2xl:text-titleLarge">
              {data?.hero.title}
            </h1>
          </section>
        </div>
        <LogoCarousel logos={data?.partners?.logos} />
        <IntroductionSection content={data?.introduction} />
        <SectorsSection content={data?.sectors} />
        <ServicesSection content={data?.services} />
        <SplitSection type="case-studies" content={data?.caseStudies} />
        <SpotlightSection />
        <SplitSection type="blog" content={data?.blog} flipped={true} />
        <Newsletter />
        <InfoSection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
