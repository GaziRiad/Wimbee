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
    <section className="mx-auto flex max-w-[1568px] items-center justify-between pb-20 pt-12">
      <ul className="flex flex-col gap-2 text-lg">
        {SOCIALS.map((social, index) => (
          <li key={index}>
            <Link
              href="#"
              className="text-primary-700 hover:text-primary-800 transition-all"
            >
              {social.title}
            </Link>
          </li>
        ))}
      </ul>
      <form className="w-[720px]">
        <h2 className="text-primary-800 mb-6 text-3xl font-medium">
          Sign up for our newsletter
          <br /> to receive daily news and updates.
        </h2>
        <div className="flex flex-col bg-light-300 p-2 text-[#76848F]">
          <label className="mb-6 uppercase">Your email</label>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-inherit text-3xl font-medium"
            />
            <button className="rounded-custom text-primary-700 w-fit bg-[#97CAFE] p-1 text-xl">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Newsletter;
