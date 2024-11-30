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
    <section className="bg-primary-700 py-20 text-light-200">
      <div className="mx-auto grid max-w-[1568px] grid-cols-6">
        <Link href="/">
          <Image src={footerLogo} alt="Wimbee Footer logo" className="" />
        </Link>
        {FooterMenu.map((menu, index) => (
          <div key={index}>
            <p className="text-primary-500 mb-10 font-medium uppercase">
              {menu.title}
            </p>
            <ul className="flex flex-col gap-2">
              {menu.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-primary-500 text-light-300 transition-all"
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
