import { myPortableTextComponents } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

function Article({ post }) {
  // console.log(post);

  return (
    <section className="relative z-10 mx-auto max-w-5xl px-5 pb-28 pt-16">
      <div className="text-primary">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="w-fit rounded-custom bg-[#4B6BFB] px-3 py-1 text-sm font-medium uppercase tracking-wide text-white"
            >
              {category.title}
            </span>
          ))}
        </div>
        <h1 className="mb-20 max-w-5xl text-2xl text-primary-800 lg:text-7xl">
          {post.title}
        </h1>
        <div className="text-primary-500">
          <PortableText
            value={post.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </section>
  );
}

export default Article;
