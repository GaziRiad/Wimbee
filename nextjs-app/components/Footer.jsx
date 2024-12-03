import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/client";
import { footerquery } from "@/sanity/groq";

const transformFooterData = (data) => {
  // Extract all keys except 'logoUrl'
  const { logoUrl, ...sections } = data;

  // Convert the remaining sections into an array
  const sectionsArray = Object.keys(sections).map((key) => ({
    section: key,
    ...sections[key],
  }));

  return sectionsArray;
};

async function Footer() {
  const data = await sanityFetch({
    query: footerquery,
    tags: ["footer"],
  });

  if (!data) return <p>Loading...</p>;
  const transformedData = transformFooterData(data);

  return (
    <section className="bg-primary-700 px-4 py-8 text-light-200 lg:py-20">
      <div className="mx-auto grid max-w-[1568px] grid-cols-2 gap-y-8 lg:grid-cols-4 xl:grid-cols-6">
        <Link href="/" className="col-span-2 row-span-2 lg:col-span-1">
          <Image
            src={data.logoUrl}
            width={300}
            height={300}
            alt="Wimbee Footer logo"
            className="max-w-40"
          />
        </Link>
        {transformedData.map((menu, index) => (
          <div key={index}>
            <p className="mb-4 font-medium uppercase text-primary-500 2xl:mb-10">
              {menu.title}
            </p>
            <ul className="flex flex-col gap-2">
              {menu.links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-light-300 transition-all hover:text-primary-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
