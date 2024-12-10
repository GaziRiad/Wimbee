import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

import gif from "../../../public/service1.gif";
import Tag from "@/components/Tag";
import { sanityFetch } from "@/sanity/client";
import { boostersquery } from "@/sanity/groq";
import NavigationWrapper from "@/components/NavigationWrapper";

async function page({ params: { locale } }) {
  const data = await sanityFetch({
    query: boostersquery,
    tags: ["boosters"],
  });

  if (!data) return null;

  return (
    <main>
      <section className="bg-light-300">
        <NavigationWrapper locale={locale} />
        <div className="mx-auto max-w-[1568px] px-4 py-8 lg:pb-20 lg:pt-36">
          <div className="mb-8 flex items-start justify-between 2xl:mb-12">
            <Tag>{data.tag}</Tag>
          </div>

          <h1 className="mb-8 text-titleSmall text-primary-800 lg:mb-14 lg:text-titleMedium 2xl:mb-24 2xl:text-titleLarge">
            {data.title}
          </h1>
          <div className="flex flex-col items-start gap-6 lg:flex-row">
            {data.products.map((product, index) => (
              <div key={index} className="w-full">
                <Image
                  src={product.imageUrl || gif}
                  alt={`Gif image from wimbee`}
                  width={300}
                  height={300}
                  className="mb-4 h-[720px] w-full"
                />
                <p className="font-mono text-lg uppercase text-[#0F6FFF]">
                  {product.name}
                </p>
                <p className="text-lg text-primary-500">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter locale={locale} />
      <InfoSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export default page;
