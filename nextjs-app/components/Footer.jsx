import Image from "next/image";
import footerLogo from "../public/images/footerLogo.svg";
import Link from "next/link";

const FooterMenu = [
  {
    title: "Services",
    items: [
      { name: "Expertises", href: "#" },
      { name: "Sectors", href: "#" },
      { name: "Boosters", href: "#" },
      { name: "Ecosystems", href: "#" },
    ],
  },
  {
    title: "Customers",
    items: [
      { name: "Customer cases", href: "#" },
      { name: "Case studies", href: "#" },
    ],
  },
  {
    title: "news",
    items: [
      { name: "News", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Events", href: "#" },
    ],
  },
  {
    title: "company",
    items: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "socials",
    items: [
      { name: "Instagram", href: "#" },
      { name: "X", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "hrefedIn", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <section className="bg-primary-700 px-4 py-20 text-light-200">
      <div className="mx-auto grid max-w-[1568px] grid-cols-2 gap-y-8 lg:grid-cols-4 2xl:grid-cols-6">
        <Link href="/" className="col-span-2 row-span-2 lg:col-span-1">
          <Image src={footerLogo} alt="Wimbee Footer logo" className="" />
        </Link>
        {FooterMenu.map((menu, index) => (
          <div key={index}>
            <p className="mb-4 font-medium uppercase text-primary-500 2xl:mb-10">
              {menu.title}
            </p>
            <ul className="flex flex-col gap-2">
              {menu.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-light-300 transition-all hover:text-primary-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
