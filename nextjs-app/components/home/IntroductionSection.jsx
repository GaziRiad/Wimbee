import Link from "next/link";
import Tag from "../Tag";
import Image from "next/image";

import introGif from "../../public/introGif.gif";

function IntroductionSection() {
  return (
    <section className="mx-auto flex max-w-[1568px] gap-40 pb-20 pt-12">
      <div className="flex flex-col justify-between">
        <Tag>who we are</Tag>
        <Image
          src={introGif}
          alt="Introduction section of wimbee GIF"
          className="h-80 w-80"
        />
      </div>
      <div className="text-primary-800 flex w-2/3 flex-col">
        <p className="mb-11 text-[40px]">
          At Wimbee, our passion for innovation drives excellence in digital
          transformation, data management, and AI. We've become a trusted leader
          by blending deep technical expertise with a clear understanding of our
          clients' business needs.
        </p>
        <div className="flex flex-col gap-6">
          <Link
            href="#"
            className="group flex items-center justify-between text-5xl transition-all duration-500"
          >
            <span>Our mission</span>
            <span className="bg-primary-800 hidden size-7 rounded-full group-hover:inline-block" />
          </Link>
          <Link
            href="#"
            className="group flex items-center justify-between text-5xl transition-all duration-500"
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
