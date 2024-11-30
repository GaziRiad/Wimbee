import Image from "next/image";
import Tag from "../Tag";

import img from "../../public/images/spotlight.png";

function SpotlightSection() {
  return (
    <section className="bg-primary-800 px-4 pb-20 pt-10 text-light-200">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-4 flex flex-col items-start justify-between lg:mb-10 lg:flex-row">
          <Tag bg="light">Spotlight</Tag>
          <div className="mb-10 mt-8 max-w-[985px] lg:mt-0">
            <h2 className="mb-6 text-2xl font-medium lg:text-[28px] 2xl:text-[32px]">
              The Fortune-U.S. Department of State Global Women’s Mentoring
              Partnership program
            </h2>
            <p className="text-lg leading-relaxed lg:text-xl">
              Congratulations to Neila Benzina, one of Tunisia’s leading female
              entrepreneurs, who will embark on a mentorship program with the
              Fortune-U.S. Department of State Global Women’s Mentoring
              Partnership program.
            </p>
          </div>
        </div>
        <Image
          src={img}
          alt="Spotlight image from wimbee"
          className="h-[720px] object-cover"
        />
      </div>
    </section>
  );
}

export default SpotlightSection;
