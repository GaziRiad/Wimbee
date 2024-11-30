import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

import { sanityFetch } from "@/sanity/client";
import { homequery } from "@/sanity/groq";
import Navigation from "@/components/Navigation";
import LogoCarousel from "@/components/home/LogoCarousel";
import Hero from "@/components/home/Hero";
import IntroductionSection from "@/components/home/IntroductionSection";
import SectorsSection from "@/components/home/SectorsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CasestudiesSection from "@/components/home/CasestudiesSection";
import SpotlightSection from "@/components/home/SpotlightSection";
import BlogSection from "@/components/home/BlogSection";
import Newsletter from "@/components/Newsletter";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await sanityFetch({ query: homequery, tags: ["home"] });

  if (!data) return <p>Loading...</p>;

  // console.log(data);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <div className="min-h-screen bg-[url('../../public/images/homebg.png')] bg-cover bg-center">
          <Navigation />
          <Hero />
        </div>
        <LogoCarousel />
        <IntroductionSection />
        <SectorsSection />
        <ServicesSection />
        <CasestudiesSection />
        <SpotlightSection />
        <BlogSection />
        <Newsletter />
        <InfoSection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
