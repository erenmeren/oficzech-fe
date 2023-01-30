import Link from "next/link";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import PhoneIcon from "@assets/images/icons/phoneIcon.svg";
import LetterIcon from "@assets/images/icons/letter.svg";
import PinIcon from "@assets/images/icons/pinIcon.svg";
import FacebookSVG from "@assets/images/icons/facebook.svg";
import InstagramSVG from "@assets/images/icons/instagram.svg";
import LinkedInSVG from "@assets/images/icons/linkedin.svg";

export default function Footer() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#F4F5F6]">
      {/* step 1 */}
      <div className="grid place-items-center py-5">
        <div className="grid grid-cols-2 flex items-center w-full padX">
          <div className="flex font-medium">
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
          <div className="flex justify-end ">
            <Link
              href="https://www.linkedin.com/company/oficzech/about/"
              target="_blank"
            >
              <LinkedInSVG className="h-8 w-8" />
            </Link>
            <Link href="https://www.instagram.com/oficzech/" target="_blank">
              <InstagramSVG className="h-8 w-8 mx-5" />
            </Link>
            <Link href="https://www.facebook.com/oficzech/" target="_blank">
              <FacebookSVG className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
      {/* step 2 */}
      <div className="grid place-items-center">
        <div className="w-full padX">
          <div className="w-full border-b-2 border-[#C3C3C3]"></div>
          <div className="grid grid-cols-4 py-5 text-[13px]">
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader1")}</div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem1")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem2")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem3")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem4")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem5")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem6")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem17")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader3")}</div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem9")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem10")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem11")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem12")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader6")}</div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem15")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem16")}</li>
              </ul>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader2")}
              </div>
              <ul className="mt-1.5">
                <li className="my-0.5">{t("navbar:megaMenuItem7")}</li>
                <li className="my-0.5">{t("navbar:megaMenuItem8")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader7")}</div>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader4")}
              </div>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader5")}
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
        <div className="grid place-items-center py-5">
          <div className="w-full padX grid flex items-center">
            <div className="flex justify-start w-full text-[13px]">
              <div className="flex mr-5 font-bold text-white">
                <PhoneIcon
                  alt="Phone icon"
                  width={17}
                  height={17}
                  className={`mr-[5px]`}
                  fill={`#fff`}
                />
                <span className="">+420 605 960 700</span>
              </div>
              <div className="flex mx-5 font-bold text-white">
                <LetterIcon
                  width={20}
                  height={20}
                  fill={`#fff`}
                  className="mr-[5px]"
                />
                <span className="font-bold">info@oficzech.com</span>
              </div>
              <div className="flex ml-5 font-bold text-white">
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
        <div className="w-full padX grid grid-cols-2 flex items-center text-[13px]">
          Copyright © {new Date().getFullYear()} Oficzech {t("footer:rights")}
        </div>
      </div>
    </div>
  );
}
