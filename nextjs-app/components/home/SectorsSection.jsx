import Image from "next/image";
import Tag from "../Tag";

function SectorsSection({ content }) {
  return (
    <section className="bg-primary-800 px-4 pb-20 pt-12 text-light-200">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-16 flex flex-col items-start justify-between lg:mb-28 lg:flex-row">
          <Tag bg="light">{content.tag}</Tag>
          <h2 className="mt-8 max-w-5xl text-2xl lg:mt-0 lg:w-2/3 lg:text-3xl 2xl:text-[40px] 2xl:leading-[117.647%]">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-20">
          <ul className="w-full text-3xl font-medium text-primary-500 2xl:w-[40%]">
            <li className="group flex cursor-pointer items-center justify-between border-b border-primary-500 py-4 transition-all duration-300 hover:text-primary-400">
              <span>Life Sciences</span>
              <span className="hidden size-4 rounded-full bg-primary-400 group-hover:inline-block" />
            </li>

            <li className="group flex cursor-pointer items-center justify-between border-b border-primary-500 py-4 transition-all duration-300 hover:text-primary-400">
              <span>Life Sciences</span>
              <span className="hidden size-4 rounded-full bg-primary-400 group-hover:inline-block" />
            </li>
            <li className="group flex cursor-pointer items-center justify-between border-b border-primary-500 py-4 transition-all duration-300 hover:text-primary-400">
              <span>Life Sciences</span>
              <span className="hidden size-4 rounded-full bg-primary-400 group-hover:inline-block" />
            </li>
            <li className="group flex cursor-pointer items-center justify-between border-b border-primary-500 py-4 transition-all duration-300 hover:text-primary-400">
              <span>Life Sciences</span>
              <span className="hidden size-4 rounded-full bg-primary-400 group-hover:inline-block" />
            </li>
          </ul>
          <Image
            src={content.imageUrl}
            width={600}
            height={600}
            alt="Introduction section of wimbee GIF"
            className="aspect-square lg:max-w-[270px] 2xl:max-w-[580px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectorsSection;
