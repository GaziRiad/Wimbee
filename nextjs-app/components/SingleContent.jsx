import { myPortableTextComponents } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Link from "next/link";

function SingleContent({ content, name = "" }) {
  return (
    <section className="relative z-10 mx-auto max-w-[1568px] px-5 pb-28 pt-36">
      <div className="text-primary flex items-start justify-between gap-5">
        <div className="sticky top-4 hidden self-start lg:block">
          <div className="rounded-custom bg-primary-700 p-4">
            <p className="mb-6 font-mono uppercase text-light-300">{name}</p>
            <nav className="flex min-w-72 flex-col gap-1">
              {content.allExpertises.map((expertise, index) => (
                <Link
                  key={index}
                  href={`/expertises/${expertise.slug}`}
                  className={`text rounded-custom p-2 text-sm transition-all hover:bg-primary-800 hover:text-primary-400 2xl:text-base ${
                    content.title === expertise.title
                      ? "bg-primary-800 text-primary-400"
                      : "bg-primary-700 text-[#97CAFE]"
                  }`}
                >
                  {expertise.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

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
