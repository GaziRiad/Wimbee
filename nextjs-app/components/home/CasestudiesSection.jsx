import Tag from "../Tag";
import blog from "../../public/blog.png";
import Image from "next/image";

function CasestudiesSection() {
  return (
    <section className="mx-auto max-w-[1568px] px-4 pb-20 pt-12">
      <div className="mb-8 flex items-start justify-between lg:mb-28">
        <Tag>case studies</Tag>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-20">
        <ul className="text-primary-800 2xl:w-[720px]">
          <li className="flex cursor-pointer flex-col border-b border-primary-800 py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p className="text-2xl lg:text-[28px] xl:text-[32px]">
                Risk modeling
              </p>
              <span className="rounded-custom bg-primary-400 p-2 text-xs uppercase text-primary-700 lg:text-sm 2xl:text-lg">
                retail
              </span>
            </div>
            <p className="text-lg font-normal text-[#76848F] lg:text-xl">
              Empowering businesses and individuals for an AI-driven future with
              tailored strategies and advanced solutions.
            </p>
          </li>
          <li className="flex cursor-pointer flex-col border-b border-primary-800 py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p className="text-2xl lg:text-[28px] xl:text-[32px]">
                Scoring & recommendation system
              </p>
              <span className="rounded-custom bg-light-300 p-2 text-xs uppercase text-primary-700 lg:text-sm 2xl:text-lg">
                retail
              </span>
            </div>
          </li>
          <li className="flex cursor-pointer flex-col border-b border-primary-800 py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p className="text-2xl lg:text-[28px] xl:text-[32px]">
                Risk modeling
              </p>
              <span className="rounded-custom bg-light-300 p-2 text-xs uppercase text-primary-700 lg:text-sm 2xl:text-lg">
                retail
              </span>
            </div>
          </li>
          <li className="flex cursor-pointer flex-col border-b border-primary-800 py-4">
            <div className="mb-6 flex items-center justify-between font-medium">
              <p className="text-2xl lg:text-[28px] xl:text-[32px]">
                Risk modeling
              </p>
              <span className="rounded-custom bg-light-300 p-2 text-xs uppercase text-primary-700 lg:text-sm 2xl:text-lg">
                retail
              </span>
            </div>
          </li>
        </ul>
        <Image
          src={blog}
          alt="Introduction section of wimbee GIF"
          className="aspect-square lg:max-w-[270px] 2xl:max-w-[580px]"
        />
      </div>
    </section>
  );
}

export default CasestudiesSection;
