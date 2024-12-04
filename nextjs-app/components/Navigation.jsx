"use client";

import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from "./Logo";
import LanguageChanger from "./LanguageChanger";
import ContactBtn from "./ContactBtn";
import { DesktopMenuItem } from "./DesktopMenuItem";
import { MobileMenuItem } from "./MobileMenuItem";

function Navigation({ menu }) {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="relative mx-auto flex max-w-[1568px] items-center justify-between p-4 lg:py-6">
      <nav className="flex items-center gap-20">
        <Logo />
        <ul className="hidden h-[34px] items-center rounded-[4px] bg-white lg:flex">
          {menu.map((item, index) => (
            <li key={index}>
              <DesktopMenuItem item={item} />
            </li>
          ))}
        </ul>
      </nav>

      <nav className="flex items-center gap-2">
        <div className="hidden lg:block">
          <LanguageChanger />
        </div>
        <ContactBtn />
        <button
          className="hover:bg-primary-100 flex h-[34px] items-center rounded-[4px] bg-white px-2 text-primary-700 transition-colors duration-200 lg:hidden"
          onClick={() => setNavIsOpen((current) => !current)}
        >
          {navIsOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
        <div
          className={`absolute left-1/2 top-16 z-20 w-[95%] -translate-x-1/2 rounded-custom bg-light-300 px-3 py-2 transition-all duration-300 ease-in-out lg:hidden ${
            navIsOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          {menu.map((item, index) => (
            <MobileMenuItem key={index} item={item} />
          ))}
          <div className="mt-2 flex items-center justify-end">
            <LanguageChanger />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
