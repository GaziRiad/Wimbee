import initTranslations from "@/app/i18n";
import Article from "@/components/blog/Article";
import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import TranslationsProvider from "@/components/TranslationsProvider";
import mapSlugsWithLocales from "@/lib/mapSlugsWithLocales";
import { sanityFetch } from "@/sanity/client";
import {
  allBlogSlugsquery,
  caseStudiesSectionQuery,
  singlearticlequery,
} from "@/sanity/groq";
import { redirect } from "next/navigation";

export const revalidate = 2592000; // 30 days in seconds

export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: allBlogSlugsquery,
    tags: ["post"],
  });

  return slugs.map((slug) => ({
    slug: slug.current, // Adjust to match the returned slug field
  }));
}

const i18nNamespaces = ["article"];

async function page({ params: { locale, slug } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const post = await sanityFetch({
    query: singlearticlequery,
    qParams: { slug, locale },
    tags: ["post"],
  });

  const caseStudiesSection = await sanityFetch({
    query: caseStudiesSectionQuery,
    qParams: { slug },
    tags: ["case-studies-section", "case-study"],
  });

  const localesWithSlugsMap = mapSlugsWithLocales(
    post._translations ?? [], // Sanity translations array
    { currentLocalization: { [locale]: slug } }, // Current slug and locale
  );

  const currentSlugIsInvalid = slug !== localesWithSlugsMap[locale];

  if (currentSlugIsInvalid) {
    redirect(`/blog/${localesWithSlugsMap[locale]}`); // Redirect to the correct slug
  }

  if (!post)
    return (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <div className="bg-light-300">
          <NavigationWrapper locale={locale} />
        </div>
      </TranslationsProvider>
    );

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <div className="bg-light-300">
          <NavigationWrapper />
          <Article content={post} />
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
