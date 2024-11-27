import ExampleClientComponent from "@/components/ExampleClientComponent";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguageChanger";

import { sanityFetch } from "@/sanity/client";
import { homequery } from "@/sanity/groq";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await sanityFetch({ query: homequery, tags: ["home"] });

  console.log(data);

  if (!data) return <p>Loading...</p>;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <LanguageChanger />

      <main>
        <h1>{t("header")}</h1>
        <p>{data[0].hero.title}</p>
        <ExampleClientComponent />
      </main>
    </TranslationsProvider>
  );
}
