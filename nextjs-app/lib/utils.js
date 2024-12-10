import { urlFor } from "@/sanity/sanity-img";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//
export const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          width={1200}
          height={1200}
          className="mb-8 h-24 w-full object-cover object-center lg:mb-10 2xl:mb-20"
        />
      );
    },
  },

  marks: {
    em: ({ children }) => (
      <em className="font-medium text-primary-800">{children}</em>
    ),

    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          id=""
          className="text-neutral-800 underline underline-offset-2"
        >
          {children}
        </Link>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children, node }) => (
      <h1
        id={node?._key}
        className="mb-8 max-w-5xl text-titleSmall text-primary-800 lg:mb-10 lg:text-titleMedium 2xl:mb-20 2xl:text-titleLarge"
      >
        {children}
      </h1>
    ),
    h2: ({ children, node }) => (
      <h2
        id={node?._key}
        className="mb-10 font-main text-3xl font-medium text-primary-800"
      >
        {children}
      </h2>
    ),
    h3: ({ children, node }) => (
      <h3
        id={node?._key}
        className="mb-10 font-main text-3xl font-medium text-primary-800"
      >
        {children}
      </h3>
    ),
    h4: ({ children, node }) => (
      <h4
        id={node?._key}
        className="mb-1 font-main text-lg font-medium text-primary-800 lg:text-xl"
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => {
      return (
        <blockquote className="mb-20 inline-block p-8 text-4xl text-primary-500 lg:text-2xl">
          <span className="text-3xl">“</span>
          {children}
          <span className="text-3xl">”</span>
        </blockquote>
      );
    },

    // Styling for normal text
    normal: ({ children, index, value, next }) => {
      return (
        <p className="mb-8 text-base leading-relaxed lg:text-xl 2xl:mb-20">
          {children}
        </p>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul
        style={{ paddingLeft: "2.5rem" }}
        className="mb-6 flex list-disc flex-col gap-2"
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{ paddingLeft: "2.5rem" }}
        className="mb-6 flex list-decimal flex-col gap-2"
      >
        {children}
      </ol>
    ),
  },
};
