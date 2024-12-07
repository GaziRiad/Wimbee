import { myPortableTextComponents } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Link from "next/link";

import { HiMenuAlt4 } from "react-icons/hi";
import DataTable from "./DataTable";

function SingleContent({ content, type = "", name = "" }) {
  return (
    <section className="relative z-10 mx-auto max-w-[1568px] px-5 pb-28 pt-36">
      <div className="text-primary flex flex-col items-start justify-between gap-5 lg:flex-row">
        <DataTable content={content} />

        <div className="max-w-5xl text-primary-500">
          <PortableText
            value={content.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </section>
  );
}

export default SingleContent;
