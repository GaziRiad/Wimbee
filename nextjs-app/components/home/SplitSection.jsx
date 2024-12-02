import Tag from "../Tag";
import Image from "next/image";

function SplitSection({ content, flipped = false }) {
  return (
    <section className={`${flipped ? "bg-light-300" : ""}`}>
      <section className="mx-auto max-w-[1568px] px-4 pb-20 pt-12">
        <div className="mb-8 flex items-start justify-between lg:mb-28">
          <Tag>{content.tag}</Tag>
        </div>

        <div
          className={`flex items-center justify-between gap-6 lg:gap-20 ${flipped ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row"}`}
        >
          <ul className="text-primary-800 2xl:w-[720px]">
            {content.posts.map((post, index) => (
              <li
                key={index}
                className="flex cursor-pointer flex-col border-b border-primary-800 py-4"
              >
                <div className="mb-6 flex items-center justify-between font-medium">
                  <p className="text-2xl lg:text-[28px]">{post.title}</p>
                  <span className="rounded-custom bg-primary-400 p-2 text-xs uppercase text-primary-700 lg:text-sm 2xl:text-lg">
                    retail
                  </span>
                </div>
                <p className="text-lg font-normal text-[#76848F] lg:text-xl">
                  Empowering businesses and individuals for an AI-driven future
                  with tailored strategies and advanced solutions.
                </p>
              </li>
            ))}
          </ul>
          <Image
            src={content.image}
            width={600}
            height={600}
            alt="Introduction section of wimbee GIF"
            className="aspect-square lg:max-w-[270px] 2xl:max-w-[580px]"
          />
        </div>
      </section>
    </section>
  );
}

export default SplitSection;
