import Image from "next/image";
import Tag from "../Tag";
import { sanityFetch } from "@/sanity/client";
import { spotlightquery } from "@/sanity/groq";

async function SpotlightSection() {
  const data = await sanityFetch({
    query: spotlightquery,
    tags: ["spotlight"],
  });

  if (!data) return <p>Loading...</p>;

  return (
    <section className="bg-primary-800 px-4 py-8 text-light-200 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-4 flex flex-col items-start justify-between lg:mb-10 lg:flex-row">
          <Tag bg="light">{data.tag}</Tag>
          <div className="mb-10 mt-8 max-w-[985px] lg:mt-0">
            <h2 className="mb-6 text-2xl font-medium lg:text-[28px] 2xl:text-[32px]">
              {data.title}
            </h2>
            <p className="text-lg leading-relaxed lg:text-xl">
              {data.description}
            </p>
          </div>
        </div>
        <div className="relative h-[720px]">
          <Image
            src={data.imageUrl}
            fill
            alt="Spotlight image from wimbee"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default SpotlightSection;
