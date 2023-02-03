import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Logo from "@assets/images/logo.svg";
import PhoneIcon from "@assets/images/icons/phoneIcon.svg";
import LetterIcon from "@assets/images/icons/letter.svg";
import PinIcon from "@assets/images/icons/pinIcon.svg";
import DownIcon from "@assets/images/icons/down.svg";

export default function Navbar() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
      ${
        clientWindowHeight !== 0
          ? "border-b bg-white"
          : "shadow-none bg-black/80 text-white"
      } `}
    >
      <div className="flex justify-between w-full padX text-[10px] mt-2.5 lg:hidden">
        <div className="flex">
          <PhoneIcon
            alt="Phone icon"
            width={10}
            height={10}
            className={`mr-[5px] mt-[2px]`}
            fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
          />
          <span>+420 605 960 700</span>
        </div>
        <div className="flex">
          <LetterIcon
            width={10}
            height={10}
            fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
            className="mr-[5px] mt-[2px]"
          />
          <span>info@oficzech.com</span>
        </div>
        <div className="flex">
          <PinIcon
            alt="Address icon"
            width={10}
            height={10}
            fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
            className="mr-[5px] mt-[2px]"
          />
          <span>Ostrovského 253/3</span>
        </div>
      </div>
      <div className="flex justify-between w-full padX text-[13px]">
        <div className="self-center">
          <Logo
            alt="Oficzech Logo"
            width={100}
            height={80}
            fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
          />
        </div>

        {/* normal menu */}
        <div className="self-center ">
          <div className="hidden justify-end mt-2.5  lg:flex">
            <div className="flex mx-6 ">
              <PhoneIcon
                alt="Phone icon"
                width={17}
                height={17}
                className={`mr-[5px]`}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
              />
              <span>+420 605 960 700</span>
            </div>
            <div className="flex mx-6 ">
              <LetterIcon
                width={20}
                height={20}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
                className="mr-[5px]"
              />
              <span>info@oficzech.com</span>
            </div>
            <div className="flex ml-6">
              <PinIcon
                alt="Address icon"
                width={20}
                height={20}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
                className="mr-[5px]"
              />
              <span>Ostrovského 253/3</span>
            </div>
          </div>
          <div className="hidden justify-end mt-6 mb-3.5 place-items-center lg:flex">
            <NavLink
              pageName={t("navbar:menuItem1")}
              selected={router.asPath === "/"}
              locale={i18n.language}
              url="/"
            />
            <NavLink
              pageName={t("navbar:menuItem2")}
              selected={router.asPath === "/hakkimizda"}
              locale={i18n.language}
              url="/hakkimizda"
            />
            {/* services mega menu */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`flex mx-3 mt-[2px] font-bold ${
                    false ? "text-[var(--primary-color)]" : ""
                  } `}
                >
                  {t("navbar:menuItem3")}
                  <div className="">
                    <DownIcon
                      className="w-2 h-2 mt-1.5 ml-1"
                      fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
                    />
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
                  className={`absolute -right-[257px] top-[9px] mt-7 px-8 pb-8 pt-2 w-[847px] origin-top-right rounded-b-md focus:outline-none     
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
                      <ul className="mt-1.5 leading-relaxed">
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
                        <ul className="mt-1.5 leading-relaxed">
                          <MegaMenuLink pageName={t("navbar:megaMenuItem15")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem16")} />
                        </ul>
                      </div>
                      <div className="mt-4">
                        <div className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader3")}
                        </div>
                        <ul className="mt-1.5 leading-relaxed">
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
                      <div className="mt-4">
                        <span className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader4")}
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader5")}
                        </div>
                        <ul className="mt-1.5 leading-relaxed">
                          <MegaMenuLink pageName={t("navbar:megaMenuItem13")} />
                          <MegaMenuLink pageName={t("navbar:megaMenuItem14")} />
                        </ul>
                      </div>
                      <div className="mt-4">
                        <span className="text-[var(--primary-color)] font-bold">
                          {t("navbar:megaMenuHeader2")}
                        </span>
                        <ul className="mt-1.5 leading-relaxed">
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
              selected={router.asPath === "/blog"}
              locale={i18n.language}
              url="/blog"
            />
            <NavLink
              pageName={t("navbar:menuItem5")}
              selected={false}
              locale={i18n.language}
              url="/iletisim"
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
          <div className="lg:hidden flex justify-end">
            <div
              className={`rounded-full grid justify-center items-center cursor-pointer h-11 w-11 bg-white`}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div
                className={`flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white ring-opacity-30 duration-200 shadow-xl`}
              >
                <div
                  className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center ${
                    showMobileMenu ? "-rotate-[45deg]" : ""
                  }`}
                >
                  <div
                    className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300  origin-right delay-75 ${
                      showMobileMenu
                        ? "-rotate-90 h-[2px] -translate-y-[1px]"
                        : ""
                    }`}
                  ></div>
                  <div className={`bg-black h-[2px] rounded`}></div>
                  <div
                    className={`bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${
                      showMobileMenu
                        ? "-rotate-90 h-[2px] translate-y-[1px]"
                        : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside
        className={`transform top-[105px] left-0 right-0 h-0 text-[13px]
        fixed overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0 
        ${showMobileMenu ? "h-[300px]" : ""} 
        ${clientWindowHeight !== 0 ? "bg-white" : "bg-black/80 text-white"} `}
      >
        <div className="text-center mb-[30px]">
          <NavLink
            pageName={t("navbar:menuItem1")}
            selected={router.asPath === "/"}
            locale={i18n.language}
            url="/"
          />
        </div>

        <div className="text-center mb-[30px]">
          <NavLink
            pageName={t("navbar:menuItem2")}
            selected={router.asPath === "/hakkimizda"}
            locale={i18n.language}
            url="/hakkimizda"
          />
        </div>
        <div className="grid justify-center">
          <Disclosure as="div" className="cursor-pointer mb-[30px] pl-5">
            <Disclosure.Button as={Fragment}>
              <div className="flex text-center font-bold">
                {t("navbar:menuItem3")}
                <DownIcon className={`w-3 h-3 mt-1 ml-2`} fill="#fff" />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="mt-1.5" static={false}>
                <div>{t("navbar:megaMenuHeader1")}</div>
                <div>{t("navbar:megaMenuHeader2")}</div>
                <div>{t("navbar:megaMenuHeader3")}</div>
                <div>{t("navbar:megaMenuHeader4")}</div>
                <div>{t("navbar:megaMenuHeader5")}</div>
                <div>{t("navbar:megaMenuHeader6")}</div>
                <div>{t("navbar:megaMenuHeader7")}</div>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>

        <div className="text-center mb-[30px]">
          <NavLink
            pageName={t("navbar:menuItem4")}
            selected={router.asPath === "/blog"}
            locale={i18n.language}
            url="/blog"
          />
        </div>
        <div className="text-center mb-[30px]">
          <NavLink
            pageName={t("navbar:menuItem5")}
            selected={false}
            locale={i18n.language}
            url="/iletisim"
          />
        </div>
        <div className="flex justify-center">
          {router.locales?.map((locale) => (
            <Link href={router.asPath} locale={locale} key={locale}>
              <LangLink langName={locale} selected={locale === i18n.language} />
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}

const NavLink = ({ pageName, selected, locale, url }: any) => {
  return (
    <Link
      href={url}
      locale={locale}
      className={`font-bold mx-6  ${
        selected ? "text-[var(--primary-color)]" : ""
      } `}
    >
      {pageName}
    </Link>
  );
};

const MegaMenuLink = ({ pageName }: any) => {
  return <li className="my-0.5">{pageName}</li>;
};

const LangLink = ({ langName, selected }: any) => {
  return (
    <div
      className={`h-[25px] w-[25px] mx-0.5 text-[11px] rounded-lg align-middle text-center font-bold  uppercase border-2 border-[var(--primary-color)] 
      ${selected ? "bg-[var(--primary-color)]" : ""}
      `}
    >
      <p className="pt-0.5">{langName}</p>
    </div>
  );
};
