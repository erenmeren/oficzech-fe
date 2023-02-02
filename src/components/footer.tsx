import Link from "next/link";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import PhoneIcon from "@assets/images/icons/phoneIcon.svg";
import LetterIcon from "@assets/images/icons/letter.svg";
import PinIcon from "@assets/images/icons/pinIcon.svg";
import FacebookSVG from "@assets/images/icons/facebook.svg";
import InstagramSVG from "@assets/images/icons/instagram.svg";
import LinkedInSVG from "@assets/images/icons/linkedin.svg";
import DownIcon from "@assets/images/icons/down.svg";
import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

{
  /* <DownIcon
  className="w-2 h-2 mt-1.5 ml-1"
  fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
/>; */
}

export default function Footer() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#F4F5F6]">
      {/* step 1 */}
      <div className="grid place-items-center py-5">
        <div
          className="grid grid-cols-1 flex items-center w-full padX 
                        lg:grid-cols-2"
        >
          <div
            className="flex text-sm font-medium justify-center
                  lg:text-base lg:justify-start"
          >
            <Link href="/" locale={i18n.language}>
              {t("navbar:menuItem1")}
            </Link>
            <div className="mx-3">|</div>
            <Link href="/hakkimizda" locale={i18n.language}>
              {t("navbar:menuItem2")}
            </Link>
            <div className="mx-3">|</div>
            <Link href="/" locale={i18n.language}>
              {t("navbar:menuItem3")}
            </Link>
            <div className="mx-3">|</div>
            <Link href="/blog" locale={i18n.language}>
              {t("navbar:menuItem4")}
            </Link>
            <div className="mx-3">|</div>
            <Link href="/iletisim" locale={i18n.language}>
              {t("navbar:menuItem5")}
            </Link>
          </div>
          <div
            className="flex justify-center mt-5 
                      lg:justify-end lg:mt-0"
          >
            <Link
              href="https://www.linkedin.com/company/oficzech/about/"
              target="_blank"
            >
              <LinkedInSVG className="h-9 w-9 lg:w-8 lg:h-8" />
            </Link>
            <Link href="https://www.instagram.com/oficzech/" target="_blank">
              <InstagramSVG className="h-9 w-9 mx-5 lg:w-8 lg:h-8" />
            </Link>
            <Link href="https://www.facebook.com/oficzech/" target="_blank">
              <FacebookSVG className="h-9 w-9 lg:w-8 lg:h-8" />
            </Link>
          </div>
        </div>
      </div>
      {/* step 2 */}
      <div className="grid place-items-center">
        <div className="w-full padX">
          <div className="w-full border-b-2 border-[#C3C3C3]"></div>
          <div className="grid grid-cols-1 py-5 text-[12px] lg:text-[13px] lg:grid-cols-4">
            <Disclosure
              as="div"
              className="cursor-pointer mb-3.5 lg:hidden lg:cursor-auto"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button as={Fragment}>
                    <div className="flex font-bold">
                      {t("navbar:megaMenuHeader1")}
                      <DownIcon
                        className={`w-2 h-2 mt-1.5 ml-2 lg:hidden ${
                          open ? " rotate-180 transform" : ""
                        }`}
                        fill="#7A8192"
                      />
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
                    <Disclosure.Panel as="ul" className="mt-1.5" static={false}>
                      <li className="my-0.5">{t("navbar:megaMenuItem1")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem2")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem3")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem4")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem5")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem6")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem17")}</li>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure
              as="div"
              className="cursor-pointer mb-3.5 lg:hidden lg:cursor-auto"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button as={Fragment}>
                    <div className="flex font-bold">
                      {t("navbar:megaMenuHeader3")}
                      <DownIcon
                        className={`w-2 h-2 mt-1.5 ml-2 lg:hidden ${
                          open ? " rotate-180 transform" : ""
                        }`}
                        fill="#7A8192"
                      />
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
                    <Disclosure.Panel as="ul" className="mt-1.5" static={false}>
                      <li className="my-0.5">{t("navbar:megaMenuItem9")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem10")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem11")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem12")}</li>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure
              as="div"
              className="cursor-pointer mb-3.5 lg:hidden lg:cursor-auto"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button as={Fragment}>
                    <div className="flex font-bold">
                      {t("navbar:megaMenuHeader6")}
                      <DownIcon
                        className={`w-2 h-2 mt-1.5 ml-2 lg:hidden ${
                          open ? " rotate-180 transform" : ""
                        }`}
                        fill="#7A8192"
                      />
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
                    <Disclosure.Panel as="ul" className="mt-1.5" static={false}>
                      <li className="my-0.5">{t("navbar:megaMenuItem15")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem16")}</li>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure
              as="div"
              className="cursor-pointer mb-3.5 lg:hidden lg:cursor-auto"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button as={Fragment}>
                    <div className="flex font-bold">
                      {t("navbar:megaMenuHeader2")}
                      <DownIcon
                        className={`w-2 h-2 mt-1.5 ml-2 lg:hidden ${
                          open ? " rotate-180 transform" : ""
                        }`}
                        fill="#7A8192"
                      />
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
                    <Disclosure.Panel as="ul" className="mt-1.5" static={false}>
                      <li className="my-0.5">{t("navbar:megaMenuItem7")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem8")}</li>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <div className="font-bold mb-3.5 lg:hidden">
              {t("navbar:megaMenuHeader7")}
            </div>
            <div className="font-bold mb-3.5 lg:hidden">
              {t("navbar:megaMenuHeader4")}
            </div>

            <Disclosure
              as="div"
              className="cursor-pointer lg:hidden lg:cursor-auto"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button as={Fragment}>
                    <div className="flex font-bold">
                      {t("navbar:megaMenuHeader5")}
                      <DownIcon
                        className={`w-2 h-2 mt-1.5 ml-2 lg:hidden ${
                          open ? " rotate-180 transform" : ""
                        }`}
                        fill="#7A8192"
                      />
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
                    <Disclosure.Panel as="ul" className="mt-1.5" static={false}>
                      <li className="my-0.5">{t("navbar:megaMenuItem13")}</li>
                      <li className="my-0.5">{t("navbar:megaMenuItem14")}</li>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <div className="hidden lg:block">
              <div className="flex font-bold">
                {t("navbar:megaMenuHeader1")}
                <DownIcon
                  className="w-2 h-2 mt-1.5 ml-2 lg:hidden"
                  fill="#7A8192"
                />
              </div>
              <ul className="mt-1.5">
                <li>{t("navbar:megaMenuItem1")} </li>
                <li>{t("navbar:megaMenuItem2")} </li>
                <li>{t("navbar:megaMenuItem3")} </li>
                <li>{t("navbar:megaMenuItem4")} </li>
                <li>{t("navbar:megaMenuItem5")} </li>
                <li>{t("navbar:megaMenuItem6")} </li>
                <li>{t("navbar:megaMenuItem17")} </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="flex font-bold">
                {t("navbar:megaMenuHeader3")}
                <DownIcon
                  className="w-2 h-2 mt-1.5 ml-2 lg:hidden"
                  fill="#7A8192"
                />
              </div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem9")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem10")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem11")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem12")}</li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="flex font-bold">
                {t("navbar:megaMenuHeader6")}
                <DownIcon
                  className="w-2 h-2 mt-1.5 ml-2 lg:hidden"
                  fill="#7A8192"
                />
              </div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem15")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem16")}</li>
              </ul>
              <div className="flex font-bold mt-3">
                {t("navbar:megaMenuHeader2")}
                <DownIcon
                  className="w-2 h-2 mt-1.5 ml-2 lg:hidden"
                  fill="#7A8192"
                />
              </div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem7")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem8")}</li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="font-bold">{t("navbar:megaMenuHeader7")}</div>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader4")}
              </div>
              <div className="flex font-bold mt-3">
                {t("navbar:megaMenuHeader5")}
                <DownIcon
                  className="w-2 h-2 mt-1.5 ml-2 lg:hidden"
                  fill="#7A8192"
                />
              </div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem13")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem14")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* step 3 */}
      <div className="bg-[#7A8192] w-full">
        <div className="grid place-items-center lg:py-5">
          <div className="w-full padX grid flex items-center">
            <div className="justify-start w-full text-[13px] lg:flex">
              <div className="flex mt-3 mb-4 font-bold text-white lg:mb-0 lg:mt-0 lg:mr-5">
                <PhoneIcon
                  alt="Phone icon"
                  width={17}
                  height={17}
                  className={`mr-[5px]`}
                  fill={`#fff`}
                />
                <span className="">+420 605 960 700</span>
              </div>
              <div className="flex mb-4 font-bold text-white lg:mx-5 lg:mb-0">
                <LetterIcon
                  width={20}
                  height={20}
                  fill={`#fff`}
                  className="mr-[5px]"
                />
                <span className="font-bold">info@oficzech.com</span>
              </div>
              <div className="flex mb-3 font-bold text-white lg:ml-5 lg:mb-0">
                <PinIcon
                  alt="Address icon"
                  width={20}
                  height={20}
                  fill={`#fff`}
                  className="mr-[5px]"
                />
                <span className="font-bold">
                  Ostrovského 253/3, Ženské Domovy, Prag
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* step 4 */}
      <div className="grid place-items-center py-5">
        <div className="w-full padX grid grid-cols-1 lg:grid-cols-2 flex items-center text-[13px]">
          Copyright © {new Date().getFullYear()} Oficzech {t("footer:rights")}
        </div>
      </div>
    </div>
  );
}
