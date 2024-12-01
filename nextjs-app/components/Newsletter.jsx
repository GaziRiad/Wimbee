import { sanityFetch } from "@/sanity/client";
import { newsletterquery } from "@/sanity/groq";
import Link from "next/link";

async function Newsletter() {
  const data = await sanityFetch({
    query: newsletterquery,
    tags: ["newsletter"],
  });

  if (!data) return <p>Loading...</p>;

  return (
    <section className="mx-auto flex max-w-[1568px] flex-col-reverse justify-between gap-8 px-4 pb-20 pt-12 lg:flex-row lg:items-center lg:gap-0">
      <ul className="flex flex-col gap-2 text-lg">
        {data.socials.map((social, index) => (
          <li key={index}>
            <Link
              href="#"
              className="text-primary-700 transition-all hover:text-primary-800"
            >
              {social.title}
            </Link>
          </li>
        ))}
      </ul>
      <form className="max-w-[720px]">
        <h2 className="mb-6 max-w-lg text-lg font-medium text-primary-800 lg:text-3xl">
          {data.title}
        </h2>
        <div className="flex flex-col bg-light-300 p-2 text-[#76848F]">
          <label className="mb-6 text-sm uppercase lg:text-base">
            {data.labelText}
          </label>
          <div className="flex items-center">
            <input
              type="email"
              placeholder={data.placeholderText}
              className="flex-1 bg-inherit text-lg font-medium lg:text-3xl"
            />
            <button className="w-fit rounded-custom bg-[#97CAFE] p-1 text-sm text-primary-700 lg:text-xl">
              {data.buttonText}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Newsletter;
