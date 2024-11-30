"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Image from "next/image";

import england from "../public/images/england.jpg";
import france from "../public/images/france.jpg";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="p-0.5 h-[34px] bg-white w-fit flex items-center gap-0.5 rounded-[4px]">
      <button
        onClick={() => handleChange("en")}
        className={`p-1 rounded-[4px] ${
          currentLocale === "en" ? "bg-[#97CAFE]" : ""
        }`}
      >
        <Image src={england} className=" w-6 h-4" alt="united kingdoms flag" />
      </button>
      <button
        onClick={() => handleChange("fr")}
        className={`p-1 rounded-[4px] ${
          currentLocale === "fr" ? "bg-[#97CAFE]" : ""
        }`}
      >
        <Image src={france} className=" w-6 h-4" alt="France flag" />
      </button>
    </div>
  );
}
