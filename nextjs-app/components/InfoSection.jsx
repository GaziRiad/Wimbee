import Image from "next/image";
import ContactBtn from "./ContactBtn";
import { sanityFetch } from "@/sanity/client";
import { contactquery } from "@/sanity/groq";

async function InfoSection({ locale = "en" }) {
  const data = await sanityFetch({
    query: contactquery,
    qParams: { locale },
    tags: ["contact"],
  });

  if (!data) return null;

  return (
    <section className="bg-primary-800 px-4 py-8 text-light-200 lg:py-20">
      <div className="mx-auto flex max-w-[1568px] flex-col items-center justify-between gap-4 md:gap-10 lg:flex-row lg:gap-20 2xl:gap-40">
        <Image
          src={data.contactImage}
          width={2200}
          height={2200}
          alt="Introduction section of wimbee GIF"
          className="h-80 flex-1 rounded-custom lg:h-[520px] 2xl:h-[808px]"
        />

        <div className="flex-1">
          <h2 className="mb-3 text-2xl text-light-300 lg:mb-4 lg:text-3xl 2xl:mb-6 2xl:text-[40px] 2xl:leading-snug">
            {data.title}
          </h2>
          <p className="mb-8 text-lg text-[#93989C] lg:mb-10 lg:text-xl 2xl:mb-20">
            {data.description}
          </p>
          <div className="mb-16 w-fit lg:mb-20 2xl:mb-28">
            <ContactBtn label={data.buttonText} />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10">
            {data.locations.map((location, index) => (
              <div key={index}>
                <p className="mb-6 text-base font-medium uppercase text-[#93989C]">
                  Wimbee {location.country}
                </p>
                <p className="text-xl leading-normal">{location.phone}</p>
                <p className="whitespace-pre-line text-xl leading-normal">
                  {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
