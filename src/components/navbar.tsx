import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Logo from "@assets/images/logo.svg";
import PhoneIcon from "@assets/images/icons/phoneIcon.svg";
import LetterIcon from "@assets/images/icons/letter.svg";
import PinIcon from "@assets/images/icons/pinIcon.svg";

export default function Navbar() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`fixed 
      grid place-items-center  
      top-0 left-0 right-0 z-50
      transition duration-300 
      tracking-wide  ${
        clientWindowHeight !== 0
          ? "shadow-2xl bg-white "
          : "shadow-none bg-black/50 text-white"
      } `}
    >
      {/* sm:bg-orange-300 
      md:bg-pink-300 
      lg:bg-blue-300 
      xl:bg-rose-300
      2xl:bg-teal-600 */}
      <div className="flex justify-between h-28 max-w-7xl w-full px-20">
        <div className="self-center">
          <Logo
            alt="Oficzech Logo"
            width={100}
            height={80}
            fill={`${clientWindowHeight !== 0 ? "#000" : "#04d972"}`}
          />
        </div>
        <div className="">
          <div className="mt-5 flex justify-end">
            <div className="flex mx-3">
              <PhoneIcon
                alt="Phone icon"
                width={17}
                height={17}
                className={`mr-[5px]`}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
              />
              {/* <span
                className="text-sm 
              sm:bg-orange-300
              md:bg-pink-300
              lg:bg-blue-300
              xl:bg-rose-300
              2xl:bg-teal-600
              "
              > */}
              <span className="text-sm">+420 605 960 700</span>
            </div>
            <div className="flex mx-3">
              <LetterIcon
                width={20}
                height={20}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
                className="mr-[5px]"
              />
              <span className="text-sm font-bold">info@oficzech.com</span>
            </div>
            <div className="flex ml-3">
              <PinIcon
                alt="Address icon"
                width={20}
                height={20}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
                className="mr-[5px]"
              />
              <span className="text-sm font-bold">Ostrovského 253/3</span>
            </div>
          </div>
          <div className="flex justify-end mt-5 text-center">
            <NavLink
              pageName={t("navbar:homepage")}
              selected={true}
              locale={i18n.language}
              url="/"
            />
            <NavLink
              pageName={t("navbar:aboutUs")}
              selected={false}
              locale={i18n.language}
              url="/"
            />
            <NavLink
              pageName={t("navbar:services")}
              selected={false}
              locale={i18n.language}
              url="/"
            />
            <NavLink
              pageName={t("navbar:blog")}
              selected={false}
              locale={i18n.language}
              url="/"
            />
            <NavLink
              pageName={t("navbar:contact")}
              selected={false}
              locale={i18n.language}
              url="/"
            />
            <div className="ml-8 flex ">
              {router.locales?.map((locale) => (
                <Link href={router.asPath} locale={locale} key={locale}>
                  <LangLink
                    langName={locale}
                    selected={locale === i18n.language}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({ pageName, selected, locale, url }: any) => {
  return (
    <Link href={url} locale={locale}>
      <span className={`mx-3 ${selected ? "text-[var(--primary-color)]" : ""}`}>
        {pageName}
      </span>
    </Link>
  );
};

const LangLink = ({ langName, selected }: any) => {
  return (
    <div
      className={`h-7 w-7 mx-0.5 rounded-lg align-middle text-center uppercase border-2 border-[var(--primary-color)] 
      ${selected ? "bg-[var(--primary-color)]" : ""}
      `}
    >
      {langName}
    </div>
  );
};
