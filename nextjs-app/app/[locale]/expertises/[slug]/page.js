import initTranslations from "@/app/i18n";
import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import SingleContent from "@/components/SingleContent";
import TranslationsProvider from "@/components/TranslationsProvider";
import mapSlugsWithLocales from "@/lib/mapSlugsWithLocales";
import { sanityFetch } from "@/sanity/client";
import {
  allExpertisesSlugsquery,
  caseStudiesSectionQuery,
  singleExpertiseQuery,
} from "@/sanity/groq";
import { redirect } from "next/navigation";

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: allExpertisesSlugsquery,
    tags: ["expertise"],
  });

  return slugs.map((slug) => ({
    slug: slug.current, // Adjust to match the returned slug field
  }));
}

const i18nNamespaces = ["expertise"];

async function page({ params: { locale, slug } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const expertise = await sanityFetch({
    query: singleExpertiseQuery,
    qParams: { slug, locale },
    tags: ["expertise"],
  });

  const caseStudiesSection = await sanityFetch({
    query: caseStudiesSectionQuery,
    qParams: { slug },
    tags: ["case-studies-section", "case-study"],
  });

  const localesWithSlugsMap = mapSlugsWithLocales(
    expertise._translations ?? [], // Sanity translations array
    { currentLocalization: { [locale]: slug } }, // Current slug and locale
  );

  const currentSlugIsInvalid = slug !== localesWithSlugsMap[locale];

  if (currentSlugIsInvalid) {
    redirect(`/expertises/${localesWithSlugsMap[locale]}`); // Redirect to the correct slug
  }

  if (!expertise) return null;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <div className="bg-light-300">
          <NavigationWrapper locale={locale} />
          <SingleContent
            type="expertises"
            name="Expertises"
            content={expertise}
          />
        </div>
        <SplitSection
          content={caseStudiesSection}
          type="case-studies"
          variant="primary"
        />
        <Newsletter locale={locale} />
        <InfoSection locale={locale} />
        <Footer locale={locale} />
      </main>
    </TranslationsProvider>
  );
}

export default page;
