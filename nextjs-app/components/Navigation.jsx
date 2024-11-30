import Link from "next/link";
import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
import ContactBtn from "./ContactBtn";

const Menu = [
  { title: "Experties", href: "/" },
  { title: "Sectors", href: "/" },
  { title: "Boosters", href: "/" },
  { title: "About", href: "/" },
];

function Navigation() {
  return (
    <header className="mx-auto flex max-w-[1568px] items-center justify-between py-6">
      <nav className="flex items-center gap-20">
        <Logo />
        <ul className="flex h-[34px] items-center rounded-[4px] bg-white">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-primary-800 hover:bg-primary-800 hover:text-primary-400 m-1 rounded-[4px] px-2 text-lg font-medium transition-all"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="flex items-center gap-2">
        <LanguageChanger />
        <ContactBtn />
      </nav>
    </header>
  );
}

export default Navigation;
