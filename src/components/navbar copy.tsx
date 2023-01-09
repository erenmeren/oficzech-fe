import { useCallback, useEffect, useState } from "react";

import Logo from "@assets/images/logo.svg";
import PhoneIcon from "@assets/images/icons/phoneIcon.svg";
import LetterIcon from "@assets/images/icons/letter.svg";
import PinIcon from "@assets/images/icons/pinIcon.svg";

export default function Navbar() {
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
      className={`fixed top-0 z-50 transition duration-300 w-full tracking-wide ${
        clientWindowHeight !== 0
          ? "shadow-2xl bg-white "
          : "shadow-none bg-black/50 text-white"
      } `}
    >
      <div className="flex justify-between h-28">
        <div className="ml-36 self-center">
          <Logo
            alt="Oficzech Logo"
            width={200}
            height={30}
            fill={`${clientWindowHeight !== 0 ? "#000" : "#04d972"}`}
          />
        </div>
        <div className="mr-36">
          <div className="flex mt-5 justify-end">
            <div className="flex mx-6">
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
                +420 605 960 700
              </span>
            </div>
            <div className="flex mx-6">
              <LetterIcon
                width={20}
                height={20}
                fill={`${clientWindowHeight !== 0 ? "#000" : "#fff"}`}
                className="mr-[5px]"
              />
              <span className="text-sm font-bold">info@oficzech.com</span>
            </div>
            <div className="flex ml-5">
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
          <div className="flex mt-5">
            <div className="flex">
              <NavLink pageName="Anasayfa" selected={true} />
              <NavLink pageName="Hakkimizda" selected={false} />
              <NavLink pageName="Hizmetlerimiz" selected={false} />
              <NavLink pageName="Blog" selected={false} />
              <NavLink pageName="Iletisim" selected={false} />
            </div>
            <div className="ml-8 flex ">
              <LangLink langName="TR" selected={true} />
              <LangLink langName="EN" selected={false} />
              <LangLink langName="CZ" selected={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({ pageName, selected }: any) => {
  return (
    <div className={`mx-8 ${selected ? "text-[var(--primary-color)]" : ""}`}>
      {pageName}
    </div>
  );
};

const LangLink = ({ langName, selected }: any) => {
  return (
    <div
      className={`h-7 w-7 mx-0.5 rounded-lg align-middle text-center ${
        langName === "TR" ? "pt-0.5" : ""
      } ${
        selected
          ? "bg-[var(--primary-color)]"
          : "border-2 border-[var(--primary-color)]"
      } `}
    >
      {langName}
    </div>
  );
};
