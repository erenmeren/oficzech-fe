import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";

import heroImg from "@assets/images/hero.png";
import Service1Img from "@assets/images/services-1.png";
import Service2Img from "@assets/images/services-2.png";
import Service3Img from "@assets/images/services-3.png";
import LeftArrowIcon from "@assets/images/icons/lArrow.svg";
import RightArrowIcon from "@assets/images/icons/rArrow.svg";
import DocumentIcon from "@assets/images/icons/document.svg";
import PeopleIcon from "@assets/images/icons/people.svg";
import PuzzleIcon from "@assets/images/icons/puzzle.svg";
import TargetIcon from "@assets/images/icons/target.svg";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <>
      <Head>
        <title>Oficzech - Business Consultant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* first page */}
      <div
        className="grid place-items-center bg-cover pt-[200px]"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="max-w-7xl w-full px-20 flex justify-between pb-[200px] text-white">
          <div className="flex items-center pr-10">
            <LeftArrowIcon height={45} width={45} alt="Left icon" fill="#fff" />
          </div>
          <div className="grow">
            <p className="text-8xl">Çekya&apos; da Yeni Bir Hayat mi ?</p>
            <p className="my-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="h-14 w-52 my-4 pt-3 rounded-md bg-[var(--primary-color)] text-xl text-center">
              İletişim Formu
            </p>
          </div>
          <div className="flex items-center pl-10">
            <RightArrowIcon
              height={45}
              width={45}
              alt="Right icon"
              fill="#fff"
            />
          </div>
        </div>
      </div>
      {/* second page */}
      <div className="grid place-items-center pb-40">
        <div className="max-w-7xl w-full px-20">
          <div className="grid grid-cols-3 grid-flow-col gap-8">
            <div>
              <HowWeWork
                icon={<PuzzleIcon height={55} width={55} />}
                header="Creative Solutions"
                text="We will go ahead that extra mile to ensure our clients welfare, our working"
                tailStyle=""
              />

              <HowWeWork
                icon={<TargetIcon height={55} width={55} />}
                header="Diverse Approach"
                text="We will go ahead that extra mile to ensure our clients welfare, our working"
                tailStyle=""
              />
            </div>
            <div>
              <HowWeWork
                icon={<PeopleIcon height={55} width={80} />}
                header="Professional Team"
                text="We will go ahead that extra mile to ensure our clients welfare, our working"
                tailStyle=""
              />
              <HowWeWork
                icon={<DocumentIcon height={55} width={55} />}
                header="Detailed Reports"
                text="We will go ahead that extra mile to ensure our clients welfare, our working"
                tailStyle=""
              />
            </div>
            <div className="relative bg-[#383838] text-white rounded-b-lg  ">
              <div className="absolute w-full h-20 -top-20 bg-[var(--primary-color)] rounded-t-lg  px-10 pt-6">
                <span className="text-xl">Iletisim Formu</span>
              </div>
              <div className="px-10">
                <p className="mt-10 mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div>
                  <input
                    type="text"
                    className="my-3 pl-5 h-12 w-full text-black text-sm rounded-lg 
                  placeholder:text-[#7A8192] placeholder:font-thin"
                    placeholder="İsim Soyisim"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="my-3 pl-5 h-12 w-full text-black text-sm rounded-lg 
                  placeholder:text-[#7A8192] placeholder:font-thin"
                    placeholder="İletişim Numarası"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="my-3 pl-5 h-12 w-full text-black text-sm rounded-lg
                  placeholder:text-[#7A8192] placeholder:font-thin"
                    placeholder="E-Posta adresi"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows={6}
                    className="block my-3 pl-5 pt-4 w-full text-black text-sm rounded-lg 
                  border-solid border-2 border-[#F2F0F1] 
                  focus:ring-0 focus:outline-offset-0 focus:border-[#F2F0F1] 
                  resize-none 
                  placeholder:text-[#7A8192] placeholder:font-thin
                  "
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
                <div className="grid place-items-center mt-5 mb-5">
                  <input
                    type="button"
                    value="Gönder"
                    className="bg-[var(--primary-color)] rounded-lg h-14 w-40 text-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="mt-32 max-w-7xl w-full px-20">
          <PageHeader name="Blog" pageURL="/blog" />
          <div className="grid grid-cols-3 gap-8">
            <BlogCard
              header="Jak správně zvolit název firmy?"
              text="Podle aktuální právní úpravy nesmí být název firmy zaměnitelný s názvem jiné již existující firmy a nesmí působit klamavě."
              pageURL="Jak"
            />
            <BlogCard
              header="Doğru şirket adı nasıl seçilir?"
              text="Yürürlükteki mevzuata göre şirket adının başka bir şirketin adının yerine geçmemesi ve yanıltıcı olmaması gerekmektedir."
              pageURL="dd"
            />
            <BlogCard
              header="Doğru şirket adı nasıl seçilir?"
              text="Yürürlükteki mevzuata göre şirket adının başka bir şirketin adının yerine geçmemesi ve yanıltıcı olmaması gerekmektedir."
              pageURL="aa"
            />
          </div>
        </div>
        {/* Hizmetlerimiz */}
        <div className="mt-32 max-w-7xl w-full px-20">
          <PageHeader name="Hizmetlerimiz" pageURL="/hizmetlerimiz" />
          <div className="grid grid-cols-4 gap-10 ">
            <ServicesCard
              img={Service1Img}
              alt="Sirket kurulumu"
              name="Çekya’da Şirket Kurulumu"
            />
            <ServicesCard
              img={Service2Img}
              alt="Vergi ve muhasebe"
              name="Vergi & Muhasebe"
            />
            <ServicesCard
              img={Service3Img}
              alt="Yesil Mutabakat"
              name="Yeşil Mutabakat"
            />
            <ServicesCard
              img={Service3Img}
              alt="Yesil Mutabakat"
              name="Baska birsey"
            />
          </div>
          <div className="flex justify-center h-full mt-5  place-items-center">
            <LeftArrowIcon
              height={15}
              width={15}
              fill="#C3C3C3"
              alt="Left icon"
            />
            <div className="h-3 w-3 mx-1 bg-[#7A8192] rounded-full"></div>
            <div className="h-3 w-3 mx-1 bg-[#C3C3C3] rounded-full"></div>
            <div className="h-3 w-3 mx-1 bg-[#C3C3C3] rounded-full"></div>

            <RightArrowIcon
              height={15}
              width={15}
              fill="#7A8192"
              alt="Right icon"
            />
          </div>
        </div>
      </div>

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <br />
      <h1>{i18n.language}</h1>
      <h1>{router.locales?.length}</h1>
      {router.locales?.map((locale) => (
        <h1 key={locale}>{locale}</h1>
      ))}

      <Link href="/" locale={i18n.language}>
        Home
      </Link>
      <Link href="/about" locale={i18n.language}>
        About
      </Link>

      {router.locales?.map((locale) => (
        <Link href={router.asPath} locale={locale} key={locale}>
          <span>{locale}</span>
        </Link>
      ))}
      {t("common:yes")} */}
    </>
  );
}

const ServicesCard = ({ name, img, alt }: any) => {
  return (
    <div className="bg-[#F4F5F6] rounded-lg">
      <Image
        src={img.src}
        width={358}
        height={250}
        alt={alt}
        className="rounded-t-lg w-full"
      />
      <div className="h-28 p-9 text-xl">{name}</div>
    </div>
  );
};

const PageHeader = ({ name, pageUrl }: any) => {
  return (
    <div className="relative mb-16">
      <h1 className="text-8xl text-[#e6e8ec]">{name}</h1>
      <h2 className="absolute text-5xl top-6 left-0.5">{name}</h2>
      <a className="absolute text-[#3288FC] right-0 top-9">Tüm Yazıları Gör</a>
    </div>
  );
};

const BlogCard = ({ header, text, pageURL }: any) => {
  return (
    <div className="bg-[#F4F5F6] rounded-lg p-10">
      <DocumentIcon width="30" height="30" fill="#C3C3C3" />
      <h3 className="text-2xl my-5">{header}</h3>
      <div className="text-[#7A8192] mb-5">{text}</div>
      <a href={`/blog/${pageURL}`} className="text-[#3288FC]">
        Tümünü Gör
      </a>
    </div>
  );
};

const HowWeWork = ({ icon, header, text, tailStyle }: any) => {
  return (
    <div
      className={`grid place-items-center text-center mx-10 my-12 ${tailStyle}`}
    >
      <div className="">{icon}</div>
      <div className="text-2xl mt-3">{header}</div>
      <div className="text-sm text-[#7A8192]">{text}</div>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
