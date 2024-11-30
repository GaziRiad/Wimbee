import Image from "next/image";
import Tag from "../Tag";

import sectorsGif from "../../public/sectorsGif.gif";

function SectorsSection() {
  return (
    <section className="bg-primary-800 px-4 pb-20 pt-12 text-light-200">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-16 flex flex-col items-start justify-between lg:mb-28 lg:flex-row">
          <Tag bg="light">Sectors we serve</Tag>
          <h2 className="mt-8 max-w-5xl text-2xl lg:mt-0 lg:w-2/3 lg:text-3xl 2xl:text-[40px] 2xl:leading-[117.647%]">
            We empower industries with tailored AI and data solutions to excel
            in the digital age.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-20">
          <ul className="text-primary-500 w-full text-3xl font-medium 2xl:w-[40%]">
            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>

            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>
            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>
            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>
          </ul>
          <Image
            src={sectorsGif}
            alt="Introduction section of wimbee GIF"
            className="aspect-square lg:max-w-[270px] 2xl:max-w-[580px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectorsSection;
