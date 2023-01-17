import Link from "next/link";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import PhoneIcon from "@assets/images/icons/phoneIcon.svg";
import LetterIcon from "@assets/images/icons/letter.svg";
import PinIcon from "@assets/images/icons/pinIcon.svg";

export default function Footer() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#F4F5F6]">
      {/* step 1 */}
      <div className="grid place-items-center py-5">
        <div className="max-w-7xl w-full px-20 grid grid-cols-2 flex items-center">
          <div className="flex font-medium">
            {t("navbar:menuItem1")}
            <div className="mx-3">|</div>
            {t("navbar:menuItem2")}
            <div className="mx-3">|</div>
            {t("navbar:menuItem3")}
            <div className="mx-3">|</div>
            {t("navbar:menuItem4")}
            <div className="mx-3">|</div>
            {t("navbar:menuItem5")}
          </div>
          <div className="flex justify-end ">
            <FaLinkedin className="h-8 w-8" />
            <FaInstagramSquare className="h-8 w-8 mx-5" />
            <FaFacebookSquare className="h-8 w-8" />
          </div>
        </div>
      </div>
      {/* step 2 */}
      <div className="grid place-items-center">
        <div className="max-w-7xl w-full px-20 ">
          <div className="w-full border-b-2 border-[#C3C3C3]"></div>
          <div className="grid grid-cols-4 py-5">
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader1")}</div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem1")}</li>
                <li>{t("navbar:megaMenuItem2")}</li>
                <li>{t("navbar:megaMenuItem3")}</li>
                <li>{t("navbar:megaMenuItem4")}</li>
                <li>{t("navbar:megaMenuItem5")}</li>
                <li>{t("navbar:megaMenuItem6")}</li>
                <li>{t("navbar:megaMenuItem17")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader3")}</div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem9")}</li>
                <li> {t("navbar:megaMenuItem10")}</li>
                <li> {t("navbar:megaMenuItem11")}</li>
                <li> {t("navbar:megaMenuItem12")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader6")}</div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem15")}</li>
                <li>{t("navbar:megaMenuItem16")}</li>
              </ul>
              <div className="font-bold mt-4">
                {t("navbar:megaMenuHeader2")}
              </div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem7")}</li>
                <li>{t("navbar:megaMenuItem8")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader7")}
              </div>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader4")}
              </div>
              <div className="font-bold mt-4">
                {t("navbar:megaMenuHeader5")}
              </div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem13")}</li>
                <li>{t("navbar:megaMenuItem14")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* step 3 */}
      <div className="bg-[#7A8192] w-full">
        <div className="grid place-items-center py-5">
          <div className="max-w-7xl w-full px-20 grid flex items-center">
            <div className="flex justify-start w-full">
              <div className="flex mr-5 font-bold text-white">
                <PhoneIcon
                  alt="Phone icon"
                  width={17}
                  height={17}
                  className={`mr-[5px]`}
                  fill={`#fff`}
                />
                <span className="text-sm">+420 605 960 700</span>
              </div>
              <div className="flex mx-5 font-bold text-white">
                <LetterIcon
                  width={20}
                  height={20}
                  fill={`#fff`}
                  className="mr-[5px]"
                />
                <span className="text-sm font-bold">info@oficzech.com</span>
              </div>
              <div className="flex ml-5 font-bold text-white">
                <PinIcon
                  alt="Address icon"
                  width={20}
                  height={20}
                  fill={`#fff`}
                  className="mr-[5px]"
                />
                <span className="text-sm font-bold">
                  Ostrovského 253/3, Ženské Domovy, Prag
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* step 4 */}
      <div className="grid place-items-center py-5">
        <div className="max-w-7xl w-full px-20 grid grid-cols-2 flex items-center">
          Copyright © {new Date().getFullYear()} Oficzech {t("footer:rights")}
        </div>
      </div>
    </div>
  );
}

const NavLink = ({ pageName, locale, url }: any) => {
  return (
    <Link href={url} locale={locale} className={``}>
      <span>{pageName}</span>
    </Link>
  );
};
