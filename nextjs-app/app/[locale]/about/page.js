import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

import Tag from "@/components/Tag";
import { sanityFetch } from "@/sanity/client";
import { aboutQuery } from "@/sanity/groq";
import NavigationWrapper from "@/components/NavigationWrapper";
import { PortableText } from "next-sanity";
import { aboutUsPortableText } from "@/lib/utils";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["about"];

async function page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await sanityFetch({
    query: aboutQuery,
    qParams: { locale },
    tags: ["about"],
  });

  if (!data) return null;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="bg-light-300">
        <section>
          <NavigationWrapper locale={locale} />
          <div className="mx-auto max-w-[1568px] px-4 py-24 lg:pb-20 lg:pt-36">
            <div className="mb-8 flex items-start justify-between 2xl:mb-12">
              <Tag>{data.tag}</Tag>
            </div>

            <h1 className="mb-8 text-titleSmall text-primary-800 lg:mb-14 lg:text-titleMedium 2xl:mb-24 2xl:text-titleLarge">
              {data.title}
            </h1>
            <div className="flex flex-col items-start justify-between gap-16 md:flex-row lg:gap-0">
              <div className="flex max-w-96 flex-col gap-8 text-lg text-primary-500">
                {data.sideText.map((p, index) => (
                  <p key={index}>{p.text}</p>
                ))}
              </div>
              <Image
                src={data.imageUrl}
                width={600}
                height={600}
                alt="Wimbee about us image"
                className="h-96 w-full lg:h-[620px] lg:max-w-2xl"
              />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1520px] px-4 py-6 text-primary-500">
          <PortableText
            value={data.contentSection}
            components={aboutUsPortableText}
          />
        </section>
        <Newsletter locale={locale} />
        <InfoSection locale={locale} />
        <Footer locale={locale} />
      </main>
    </TranslationsProvider>
  );
}

export default page;