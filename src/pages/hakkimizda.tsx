import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ScrollAnimation from "@components/ScrollAnimation";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="grid place-items-center min-h-[800px] h-screen lg:pb-[10%]">
        <div className="w-full padX grid lg:mt-[200px]">
          <ScrollAnimation>
            <h1 className="text-6xl">Oficzech</h1>
            <p>
              Çalışanlarımız ve müşterilerimizle birlikte, yaşadığımız an ile
              gelecek arasındaki altın köprüyü mümkün olan en sağlam şekilde
              kurma hedefiyle bir araya gelen büyük bir aileyiz. İşinizin ve iş
              fikrinizin her aşamasıyla ilgili kapsamlı çözümler sunuyor ve
              Çekya’da anadilinizde iletişim kurabileceğiniz güvenilir partner
              ihtiyacınıza karşılık veriyoruz.
            </p>
            <h1 className="text-6xl">Farkındalık</h1>
            <p>
              İşimizi ve kendimizi hayal ettiğimiz global değişimin bir parçası
              olarak görüyoruz. Daha sürdürülebilir ve sağlıklı bir
              <a className="font-bold">gezegenin</a>, dayanışma ve refah
              içindeki <a className="font-bold">toplumun</a> ve yaratabileceği
              etkinin farkında olan güçlü <a className="font-bold">bireyin</a>{" "}
              bu değişimdeki rolünün farkındayız. Yaşamak istediğimiz geleceğin
              emektar kahramanlarından olmak istiyoruz.
            </p>
            <h1 className="text-6xl">Değerler</h1>
            <p>
              Etik ve dürüstlük konusunu tartışmaya açık görmüyoruz. Güven
              verilmez, kazanılır prensibi ile hareket ediyoruz. Şeffaf
              iletişim, tavizsiz disiplin ve sorumluluk bilincimiz sayesinde
              küçükten büyüğe tüm işbirliklerimizde uzun ömürlülük ve güven
              ortamı önceliğimiz.
            </p>
            <h1 className="text-6xl">Dayanışma</h1>
            <p>
              Gelişim ve ilerleme yolunda harika fikirlerin ancak ve ancak
              destekleyicisi olabiliriz. Dünyanın dört bir yanından
              partnerlerimiz ile birbirimizi destekliyor ve yeni işbirliği
              fırsatlarımızın peşinden gidiyoruz.
            </p>
            <h1 className="text-6xl">Yenilikçilik</h1>
            <p>
              Dünyamız akıl almaz bir hızla gelişiyor, dönüşüyor ve
              dijitalleşiyor. Bu dönüşüme ayak uydurmanın tek yolunun bizden
              öncekilerin tecrübe ve bilgisini; yenilikçi, modern ve yaratıcı
              bakış açısıyla birleştirmek olduğunu düşünüyoruz. Teknolojiyi ve
              yenilikleri maksimum hassasiyet ile takip etmeye çalışıyoruz.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "navbar",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
