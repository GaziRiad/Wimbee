import Image from "next/image";
import Tag from "../Tag";

import sectorsGif from "../../public/sectorsGif.gif";

function SectorsSection() {
  return (
    <section className="bg-primary-800 pb-20 pt-12 text-light-200">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-28 flex items-start justify-between">
          <Tag bg="light">Sectors we serve</Tag>
          <h2 className="max-w-5xl text-[40px]">
            We empower industries with tailored AI and data solutions to excel
            in the digital age.
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <ul className="text-primary-500 w-[580px] text-3xl font-medium">
            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-pritext-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>

            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-pritext-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>
            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-pritext-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>
            <li className="border-primary-500 hover:text-primary-400 group flex cursor-pointer items-center justify-between border-b py-4 transition-all duration-300">
              <span>Life Sciences</span>
              <span className="bg-pritext-primary-400 hidden size-4 rounded-full group-hover:inline-block" />
            </li>
          </ul>
          <Image
            src={sectorsGif}
            alt="Introduction section of wimbee GIF"
            className="aspect-square w-[580px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectorsSection;
