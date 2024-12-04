"use client";

import Link from "next/link";
import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
import ContactBtn from "./ContactBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Menu = [
  {
    title: "Expertises",
    background: "light",
    items: [
      { label: "Web Development", href: "/" },
      { label: "Mobile Development", href: "/" },
      { label: "UI/UX Design", href: "/" },
    ],
  },
  {
    title: "Sectors",
    background: "dark",
    items: [
      { label: "Web Development", href: "/" },
      { label: "Mobile Development", href: "/" },
      { label: "UI/UX Design", href: "/" },
    ],
  },
  { title: "Boosters", href: "/boosters" },
  { title: "About", href: "/" },
];

function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="relative mx-auto flex max-w-[1568px] items-center justify-between p-4 lg:py-6">
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
                <DropdownMenu>
                  <DropdownMenuTrigger className="m-1 rounded-[4px] px-2 text-lg font-medium text-primary-800 outline-none transition-all hover:bg-primary-800 hover:text-primary-400 data-[state=open]:bg-primary-800 data-[state=open]:text-primary-400">
                    {item.title}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    alignOffset={-5}
                    className="flex items-end gap-6 p-4"
                  >
                    <div className="flex-1">
                      <DropdownMenuLabel className="font-main text-xl font-medium text-primary-800">
                        <span>{item.title}</span>
                      </DropdownMenuLabel>
                      <Image
                        src="/introGif.gif"
                        width={300}
                        height={300}
                        alt="wimbee GIF"
                        className="mt-2 h-48 w-48 object-cover"
                      />
                    </div>
                    <div className="flex w-80 flex-col text-primary-800">
                      {item.items.map((subItem, index) => (
                        <Link
                          key={index}
                          href={subItem.href}
                          className="group flex w-full items-center justify-between border-b border-light-300 py-5 text-xl"
                        >
                          <span>{subItem.label}</span>
                          <span className="hidden size-4 rounded-full bg-primary-800 group-hover:inline-block" />
                        </Link>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <nav className="flex items-center gap-2">
        <LanguageChanger />
        <ContactBtn />
        <button
          className="flex h-[34px] items-center rounded-[4px] bg-white px-2 text-primary-700 lg:hidden"
          onClick={() => setNavIsOpen((current) => !current)}
        >
          {navIsOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
        {navIsOpen && (
          <div className="absolute left-1/2 top-16 w-[95%] -translate-x-1/2 rounded-custom bg-light-300 px-3 py-2 lg:hidden">
            {Menu.map((item, index) =>
              item.items ? (
                <div
                  className={`${item.background === "light" ? "bg-white text-primary-800" : "bg-primary-800 text-primary-400"} rounded-custom px-3 py-2`}
                >
                  <p className="text-xs">{item.title}</p>
                  <ul>
                    {item.items.map((link, index) => (
                      <li key={index} className="py-3">
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between"
                        >
                          <span>{link.label}</span>
                          <span
                            className={`${item.background === "light" ? "bg-primary-800" : "bg-primary-400"} hidden size-4 rounded-full group-hover:inline-block`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link href={item.href} className="block py-3">
                  {item.title}
                </Link>
              ),
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navigation;
