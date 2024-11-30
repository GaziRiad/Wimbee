import Image from "next/image";
import Tag from "../Tag";

import img from "../../public/images/spotlight.png";

function SpotlightSection() {
  return (
    <section className="bg-primary-800 pb-20 pt-12 text-light-200">
      <div className="mx-auto max-w-[1568px]">
        <div className="mb-10 flex items-start justify-between">
          <Tag bg="light">Spotlight</Tag>
          <div className="mb-10 max-w-[985px]">
            <h2 className="mb-6 text-[32px] font-medium">
              The Fortune-U.S. Department of State Global Women’s Mentoring
              Partnership program
            </h2>
            <p className="text-xl leading-relaxed">
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
