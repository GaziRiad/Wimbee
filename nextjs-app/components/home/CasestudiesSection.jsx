import Tag from "../Tag";
import blog from "../../public/blog.png";
import Image from "next/image";

function CasestudiesSection() {
  return (
    <section className="mx-auto max-w-[1568px] pb-20 pt-12">
      <div className="mb-28 flex items-start justify-between">
        <Tag>case studies</Tag>
      </div>

      <div className="flex items-center justify-between">
        <ul className="text-primary-800 w-[720px] text-3xl">
          <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p>Risk modeling</p>
              <span className="rounded-custom bg-primary-400 text-primary-700 p-2 text-lg uppercase">
                retail
              </span>
            </div>
            <p className="text-xl font-normal text-[#76848F]">
              Empowering businesses and individuals for an AI-driven future with
              tailored strategies and advanced solutions.
            </p>
          </li>
          <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p>Scoring & recommendation system</p>
              <span className="rounded-custom text-primary-700 bg-light-300 p-2 text-lg uppercase">
                retail
              </span>
            </div>
          </li>
          <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p>Risk modeling</p>
              <span className="rounded-custom text-primary-700 bg-light-300 p-2 text-lg uppercase">
                retail
              </span>
            </div>
          </li>
          <li className="border-primary-800 flex cursor-pointer flex-col border-b py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p>Risk modeling</p>
              <span className="rounded-custom text-primary-700 bg-light-300 p-2 text-lg uppercase">
                retail
              </span>
            </div>
          </li>
        </ul>
        <Image
          src={blog}
          alt="Introduction section of wimbee GIF"
          className="aspect-square w-[580px]"
        />
      </div>
    </section>
  );
}

export default CasestudiesSection;
