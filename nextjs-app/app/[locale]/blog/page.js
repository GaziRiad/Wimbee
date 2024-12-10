import initTranslations from "@/app/i18n";
import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";
import InfoSection from "@/components/InfoSection";
import NavigationWrapper from "@/components/NavigationWrapper";
import Newsletter from "@/components/Newsletter";
import TranslationsProvider from "@/components/TranslationsProvider";
import { sanityFetch } from "@/sanity/client";
import { blogPageQuery } from "@/sanity/groq";

export const revalidate = 2592000; // 30 days in seconds

const i18nNamespaces = ["blog"];

async function page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await sanityFetch({
    query: blogPageQuery,
    qParams: { locale },
    tags: ["post", "blog"],
  });
  if (!data) return null;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <div className="pt-16">
          <NavigationWrapper />
          <SplitSection type="blog" content={data} flipped variant="light" />
        </div>
        <Newsletter locale={locale} />
        <InfoSection locale={locale} />
        <Footer locale={locale} />
      </main>
    </TranslationsProvider>
  );
}

export default page;
