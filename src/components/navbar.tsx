import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Logo from "@assets/images/logo.svg";
import PhoneIcon from "@assets/images/icons/phoneIcon.svg";
import LetterIcon from "@assets/images/icons/letter.svg";
import PinIcon from "@assets/images/icons/pinIcon.svg";
import MobileMenuIcon from "@assets/images/icons/mobileMenu.svg";

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
      tracking-wide ${
        clientWindowHeight !== 0
          ? "border-b bg-white"
          : "shadow-none bg-black/80 text-white"
      } `}
    >
      {/* sm:bg-orange-300 
      md:bg-pink-300 
      lg:bg-blue-300 
      xl:bg-rose-300
      2xl:bg-teal-600 */}
      <div className="flex justify-between h-28 w-full padX ">
        <div className="self-center">
          <Logo
            alt="Oficzech Logo"
            width={100}
            height={80}
            fill={`${clientWindowHeight !== 0 ? "#000" : "#04d972"}`}
          />
        </div>

        {/* normal menu */}
        <div className="self-center">
          {/* <div className="mt-5 flex justify-end "> */}
          <div className="mt-5 flex justify-end hidden xl:flex ">
            <div className="flex mx-3 font-bold">
              <PhoneIcon
                alt="Phone icon"
                width={17}
                height={17}
                className={`mr-[5px]`}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
              />
              <span
                className="text-sm 
              sm:bg-orange-300
              md:bg-pink-300
              lg:bg-blue-300
              xl:bg-rose-300
              2xl:bg-teal-600
              "
              >
                {/* <span className="text-sm"> */}
                +420 605 960 700
              </span>
            </div>
            <div className="flex mx-3 font-bold">
              <LetterIcon
                width={20}
                height={20}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
                className="mr-[5px]"
              />
              <span className="text-sm font-bold">info@oficzech.com</span>
            </div>
            <div className="flex ml-3 font-bold">
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
          <div className="flex justify-end mt-5 text-center hidden xl:flex ">
            <NavLink
              pageName={t("navbar:menuItem1")}
              selected={true}
              locale={i18n.language}
              url="/"
            />
            <NavLink
              pageName={t("navbar:menuItem2")}
              selected={false}
              locale={i18n.language}
              url="/"
            />
            {/* services mega menu */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`flex mx-3 font-bold ${
                    false ? "text-[var(--primary-color)]" : ""
                  } `}
                >
                  {t("navbar:menuItem3")}
                  <div className="mt-1 ">
                    <svg
                      className="w-5 h-5 "
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className={`absolute -right-[239px] mt-7 px-8 pb-8 pt-2  w-[900px]  origin-top-right 
                 rounded-b-md focus:outline-none     
                ${
                  clientWindowHeight !== 0
                    ? "shadow-2xl bg-white"
                    : "shadow-none bg-black/80 text-white"
                }
                `}
                >
                  <div className="grid grid-cols-3 h-full">
                    {/* first col */}
                    <div>
                      <span className="text-[var(--primary-color)] font-bold">
                        {t("navbar:megaMenuHeader1")}
                      </span>
                      <ul className="list-disc list-inside mt-1 leading-relaxed">
                        <MegaMenuLink pageName={t("navbar:megaMenuItem1")} />
                        <MegaMenuLink pageName={t("navbar:megaMenuItem2")} />
                        <MegaMenuLink pageName={t("navbar:megaMenuItem3")} />
                        <MegaMenuLink pageName={t("navbar:megaMenuItem4")} />
                        <MegaMenuLink pageName={t("navbar:megaMenuItem5")} />
                        <MegaMenuLink pageName={t("navbar:megaMenuItem6")} />
                        <MegaMenuLink pageName={t("navbar:megaMenuItem17")} />
                      </ul>
                    </div>
                    {/* second col */}
                    <div>
                      <div className="">
                        <div className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader6")}
                        </div>
                        <ul className="list-disc list-inside mt-1 leading-relaxed">
                          <MegaMenuLink pageName={t("navbar:megaMenuItem15")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem16")} />
                        </ul>
                      </div>
                      <div className="mt-5">
                        <div className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader3")}
                        </div>
                        <ul className="list-disc list-inside mt-1 leading-relaxed">
                          <MegaMenuLink pageName={t("navbar:megaMenuItem9")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem10")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem11")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem12")} />
                        </ul>
                      </div>
                    </div>
                    {/* third col */}
                    <div>
                      <div>
                        <span className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader7")}
                        </span>
                      </div>
                      <div className="mt-3">
                        <span className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader4")}
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader5")}
                        </div>
                        <ul className="list-disc list-inside mt-1 leading-relaxed">
                          <MegaMenuLink pageName={t("navbar:megaMenuItem13")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem14")} />
                        </ul>
                      </div>
                      <div className="mt-4">
                        <span className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader2")}
                        </span>
                        <ul className="list-disc list-inside mt-1 leading-relaxed">
                          <MegaMenuLink pageName={t("navbar:megaMenuItem7")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem8")} />
                        </ul>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <NavLink
              pageName={t("navbar:menuItem4")}
              selected={false}
              locale={i18n.language}
              url="/"
            />
            <NavLink
              pageName={t("navbar:menuItem5")}
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
          {/* Mobile menu */}
          {/* <div className=""> */}
          <div className="xl:hidden flex justify-end self-center">
            <div className="rounded-full bg-white self-center">
              <MobileMenuIcon className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({ pageName, selected, locale, url }: any) => {
  return (
    <Link
      href={url}
      locale={locale}
      className={`font-bold mx-3 ${
        selected ? "text-[var(--primary-color)]" : ""
      } `}
    >
      {pageName}
    </Link>
  );
};

const MegaMenuLink = ({ pageName }: any) => {
  return <li>{pageName}</li>;
};

const LangLink = ({ langName, selected }: any) => {
  return (
    <div
      className={`h-7 w-7 mx-0.5 rounded-lg align-middle text-center font-bold uppercase border-2 border-[var(--primary-color)] 
      ${selected ? "bg-[var(--primary-color)]" : ""}
      `}
    >
      {langName}
    </div>
  );
};
