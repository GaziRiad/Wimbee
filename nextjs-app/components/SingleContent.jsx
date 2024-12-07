import { myPortableTextComponents } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Link from "next/link";

import { HiMenuAlt4 } from "react-icons/hi";
import DataTable from "./DataTable";

function SingleContent({ content, type = "", name = "" }) {
  return (
    <section className="relative z-10 mx-auto max-w-[1568px] px-5 pb-28 pt-36">
      <div className="text-primary flex flex-col items-start justify-between gap-5 lg:flex-row">
        {/* <div className="top-4 w-full self-start lg:sticky">
          <div className="rounded-custom bg-primary-700 p-4">
            <p className="mb-6 flex justify-between font-mono uppercase text-light-300">
              <span>{name}</span>
              <span className="hover:bg-primary-100 flex h-[34px] items-center rounded-[4px] bg-white px-2 text-primary-700 transition-colors duration-200 lg:hidden">
                <HiMenuAlt4 size={28} />
              </span>
            </p>
            <nav className="flex min-w-72 flex-col gap-1">
              {content.allLinks.map((item, index) => (
                <Link
                  key={index}
                  href={`/${type}/${item.slug}`}
                  className={`text rounded-custom p-2 text-sm transition-all hover:bg-primary-800 hover:text-primary-400 2xl:text-base ${
                    content.title === item.title
                      ? "bg-primary-800 text-primary-400"
                      : "bg-primary-700 text-[#97CAFE]"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div> */}

        <DataTable content={content} name="Expertises" type="expertises" />

        <div className="max-w-5xl text-primary-500">
          <PortableText
            value={content.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </section>
  );
}

export default SingleContent;
