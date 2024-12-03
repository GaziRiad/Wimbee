import Image from "next/image";
import infoImg from "../public/images/info.png";
import ContactBtn from "./ContactBtn";
import { sanityFetch } from "@/sanity/client";
import { contactquery } from "@/sanity/groq";

const locations = [
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
  {
    name: "Wimbee France",
    phone: "+33 (18) 8614122",
    address: "74 Avenue Kléber, 75116 Paris",
  },
];

async function InfoSection() {
  const data = await sanityFetch({ query: contactquery, tags: ["contact"] });

  if (!data) return <p>Loading...</p>;

  return (
    <section className="bg-primary-800 px-4 py-20 text-light-200">
      <div className="mx-auto flex max-w-[1568px] flex-col items-start justify-between gap-4 lg:flex-row lg:gap-20 2xl:gap-40">
        <Image
          src={data.contactImage}
          width={1200}
          height={1200}
          alt="Introduction section of wimbee GIF"
          className="h-[808px] flex-1 rounded-custom"
        />

        <div className="flex-1">
          <h2 className="mb-3 text-2xl text-light-300 lg:mb-4 lg:text-3xl 2xl:mb-6 2xl:text-[40px]">
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
