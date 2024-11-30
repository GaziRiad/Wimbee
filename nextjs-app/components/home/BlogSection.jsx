import Image from "next/image";
import Tag from "../Tag";

import sectorsGif from "../../public/sectorsGif.gif";

function BlogSection() {
  return (
    <section className="bg-light-300">
      <section className="mx-auto max-w-[1568px] pb-20 pt-12">
        <div className="mb-28 flex items-start justify-between">
          <Tag>case studies</Tag>
        </div>

        <div className="flex items-center justify-between">
          <Image
            src={sectorsGif}
            alt="Introduction section of wimbee GIF"
            className="aspect-square w-[580px]"
          />
          {/*  */}

          <ul className="text-primary-800 w-[720px] text-3xl">
            <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
              <div className="mb-6 flex items-start justify-between font-medium">
                <p>
                  The acceleration of businesses' digital marketing
                  transformation
                </p>
                <span className="rounded-custom bg-primary-400 text-primary-700 p-2 text-lg uppercase">
                  retail
                </span>
              </div>
              <p className="text-primary-500 text-xl font-normal">
                Empowering businesses and individuals for an AI-driven future
                with tailored strategies and advanced solutions.
              </p>
            </li>
            <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
              <div className="mb-6 flex items-start justify-between font-medium">
                <p>Scoring & recommendation system</p>
                <span className="rounded-custom text-primary-700 bg-light-300 p-2 text-lg uppercase">
                  retail
                </span>
              </div>
            </li>
            <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
              <div className="mb-6 flex items-start justify-between font-medium">
                <p>
                  The Fast-Track to Digital Marketing Success for Modern
                  Enterprises
                </p>
                <span className="rounded-custom text-primary-700 bg-light-300 p-2 text-lg uppercase">
                  retail
                </span>
              </div>
            </li>
            <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
              <div className="mb-6 flex items-start justify-between font-medium">
                <p>
                  The Future of Business: Embracing Digital Marketing
                  Advancements
                </p>
                <span className="rounded-custom text-primary-700 bg-light-300 p-2 text-lg uppercase">
                  retail
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default BlogSection;
