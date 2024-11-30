import Link from "next/link";
import Tag from "../Tag";
import Image from "next/image";

import introGif from "../../public/introGif.gif";

function IntroductionSection() {
  return (
    <section className="mx-auto max-w-[1568px] px-4 pb-20 pt-12">
      <div className="mb-5 flex flex-col items-start justify-between lg:mb-11 lg:flex-row">
        <Tag>who we are</Tag>
        <p className="text-primary-800 mt-8 text-2xl lg:mt-0 lg:w-2/3 lg:text-3xl 2xl:text-[40px] 2xl:leading-[117.647%]">
          At Wimbee, our passion for innovation drives excellence in digital
          transformation, data management, and AI. We've become a trusted leader
          by blending deep technical expertise with a clear understanding of our
          clients' business needs.
        </p>
      </div>

      <div className="flex flex-col items-start justify-between gap-5 lg:flex-row 2xl:gap-0">
        <Image
          src={introGif}
          alt="Introduction section of wimbee GIF"
          className="mb-6 h-80 w-full lg:mb-0 lg:w-80"
        />
        <div className="text-primary-800 flex w-full flex-col gap-6 lg:w-2/3">
          <Link
            href="#"
            className="group flex items-center justify-between text-3xl transition-all duration-500 lg:text-[40px] 2xl:text-5xl"
          >
            <span>Our mission</span>
            <span className="bg-primary-800 hidden size-7 rounded-full group-hover:inline-block" />
          </Link>
          <Link
            href="#"
            className="group flex items-center justify-between text-3xl transition-all duration-500 lg:text-[40px] 2xl:text-5xl"
          >
            <span>Our global expertise</span>
            <span className="bg-primary-800 hidden size-7 rounded-full group-hover:inline-block" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
