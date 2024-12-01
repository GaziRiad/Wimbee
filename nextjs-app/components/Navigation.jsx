import Link from "next/link";
import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
import ContactBtn from "./ContactBtn";
import { NavItemWithDropdown } from "./NavItemWithDropdown";

const Menu = [
  {
    title: "Expertises",
    items: [
      { label: "Web Development", href: "/" },
      { label: "Mobile Development", href: "/" },
      { label: "UI/UX Design", href: "/" },
    ],
  },
  {
    title: "Sectors",
    items: [
      { label: "Web Development", href: "/" },
      { label: "Mobile Development", href: "/" },
      { label: "UI/UX Design", href: "/" },
    ],
  },
  { title: "Boosters", href: "/" },
  { title: "About", href: "/" },
];

function Navigation() {
  return (
    <header className="mx-auto flex max-w-[1568px] items-center justify-between p-4 lg:py-6">
      <nav className="flex items-center gap-20">
        <Logo />
        <ul className="hidden h-[34px] items-center rounded-[4px] bg-white lg:flex">
          {Menu.map((item, index) => (
            <li key={index}>
              {!item.items ? (
                <Link
                  href={item.href}
                  className="m-1 rounded-[4px] px-2 text-lg font-medium text-primary-800 transition-all hover:bg-primary-800 hover:text-primary-400"
                >
                  {item.title}
                </Link>
              ) : (
                <NavItemWithDropdown label={item.title} items={item.items} />
              )}
            </li>
          ))}
        </ul>
      </nav>

      <nav className="hidden items-center gap-2 lg:flex">
        <LanguageChanger />
        <ContactBtn />
      </nav>
    </header>
  );
}

export default Navigation;
