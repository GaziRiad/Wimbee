import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Newsletter from "@/components/Newsletter";

import Tag from "@/components/Tag";
import { sanityFetch } from "@/sanity/client";
import { contactPageQuery } from "@/sanity/groq";
import NavigationWrapper from "@/components/NavigationWrapper";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { groq } from "next-sanity";
import { Button } from "@/components/ui/button";
import Head from "next/head";

// Dynamic metadata
export async function generateMetadata({ params: { locale } }) {
  const data = await sanityFetch({
    query: groq`*[_type == "contact-page"][0]{
      seo {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value)
      }
    }`,
    qParams: { locale },
    tags: ["contactUs"],
  });

  return {
    title: data?.seo?.title || "Welcome — Wimbee",
    description: data?.seo?.description || "Welcome — Wimbee",
  };
}

export const revalidate = 2592000; // 30 days in seconds

const i18nNamespaces = ["contactUs"];

async function page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await sanityFetch({
    query: contactPageQuery,
    qParams: { locale },
    tags: ["contactUs"],
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://wimbeetech.com/";
  const canonicalUrl = `${baseUrl}/${locale === "en" ? "" : `${locale}/`}contactUs`;

  if (!data) return null;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main className="bg-light-300">
        <section>
          <NavigationWrapper locale={locale} />
          <div className="mx-auto max-w-[1568px] px-4 py-24 lg:pb-20 lg:pt-36">
            <div className="mb-8 flex items-start justify-between 2xl:mb-12">
              <Tag>{data?.tag}</Tag>
            </div>

            <h1 className="mb-8 text-titleSmall text-primary-800 lg:mb-14 lg:text-titleMedium 2xl:mb-14 2xl:text-titleLarge">
              {data?.title}
            </h1>

            <form className="mx-auto flex max-w-2xl flex-col gap-4">
              {data?.inputs.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 bg-light-200 p-2"
                >
                  <label className="mb-6 font-mono text-xs uppercase text-primary-700 lg:text-base">
                    {item.label}
                  </label>
                  {item.type !== "textarea" ? (
                    <input
                      type={item.type}
                      placeholder={item.placeHolder}
                      className="flex-1 bg-light-200 text-lg font-medium text-[#222] placeholder:text-gray-400 focus:outline-none lg:text-xl lg:placeholder:text-2xl"
                      required={item.required}
                    />
                  ) : (
                    <textarea
                      name={item.name}
                      className="min-h-[200px] flex-1 resize-none bg-light-200 text-lg font-medium text-[#222] placeholder:absolute placeholder:bottom-0 placeholder:text-gray-400 focus:outline-none lg:text-xl lg:placeholder:text-2xl"
                      required={item.required}
                      placeholder={item.placeHolder}
                    />
                  )}
                </div>
              ))}
              <Button className="ml-auto h-auto w-fit rounded-custom bg-primary-800 px-2 py-1 text-lg text-primary-400 hover:bg-primary-800/95">
                {data?.submitBtnText}
              </Button>
            </form>
          </div>
        </section>
        <Newsletter locale={locale} />
        <InfoSection locale={locale} />
        <Footer locale={locale} />
      </main>
    </TranslationsProvider>
  );
}

export default page;
