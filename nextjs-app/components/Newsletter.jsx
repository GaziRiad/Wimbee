import { sanityFetch } from "@/sanity/client";
import { newsletterquery } from "@/sanity/groq";
import Link from "next/link";
import { Button } from "./ui/button";

async function Newsletter({ locale = "en" }) {
  const data = await sanityFetch({
    query: newsletterquery,
    qParams: { locale },
    tags: ["newsletter"],
  });

  if (!data) return null;

  return (
    <section className="bg-light-200">
      <div className="mx-auto flex max-w-[1568px] flex-col-reverse justify-between gap-8 px-4 py-8 lg:flex-row lg:items-center lg:gap-0 lg:pb-20 lg:pt-12">
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
        <form className="lg:max-w-[720px]">
          <h2 className="mb-6 max-w-lg text-lg font-medium text-primary-800 lg:text-3xl">
            {data.title}
          </h2>
          <div className="flex flex-col bg-light-300 p-2 text-[#76848F]">
            <label className="mb-6 text-xs uppercase lg:text-base">
              {data.labelText}
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <input
                type="email"
                placeholder={data.placeholderText}
                className="flex-1 bg-inherit text-lg font-medium lg:text-3xl"
              />

              <Button className="h-auto rounded-custom bg-[#97CAFE] p-1 text-xs text-primary-700 hover:bg-primary-800 hover:text-primary-400 lg:p-1 lg:text-lg">
                {data.buttonText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
