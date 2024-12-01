import Link from "next/link";

const SOCIALS = [
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "X",
    href: "#",
  },
  {
    title: "Facebook",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
];

function Newsletter() {
  return (
    <section className="mx-auto flex max-w-[1568px] flex-col-reverse justify-between gap-8 px-4 pb-20 pt-12 lg:flex-row lg:items-center lg:gap-0">
      <ul className="flex flex-col gap-2 text-lg">
        {SOCIALS.map((social, index) => (
          <li key={index}>
            <Link
              href="#"
              className="text-primary-700 transition-all hover:text-primary-800"
            >
              {social.title}
            </Link>
          </li>
        ))}
      </ul>
      <form className="max-w-[720px]">
        <h2 className="mb-6 text-lg font-medium text-primary-800 lg:text-3xl">
          Sign up for our newsletter
          <br /> to receive daily news and updates.
        </h2>
        <div className="flex flex-col bg-light-300 p-2 text-[#76848F]">
          <label className="mb-6 text-sm uppercase lg:text-base">
            Your email
          </label>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-inherit text-lg font-medium lg:text-3xl"
            />
            <button className="w-fit rounded-custom bg-[#97CAFE] p-1 text-sm text-primary-700 lg:text-xl">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Newsletter;
