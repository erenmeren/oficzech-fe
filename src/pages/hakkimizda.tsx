import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="grid place-items-center bg-cover min-h-[800px] h-screen lg:pb-[10%]">
        <div className="w-full padX grid lg:mt-[200px]">
          <h1 className="text-6xl">Oficzech</h1>
          Çalışanlarımız ve müşterilerimizle birlikte, yaşadığımız an ile
          gelecek arasındaki altın köprüyü mümkün olan en sağlam şekilde kurma
          hedefiyle bir araya gelen büyük bir aileyiz. İşinizin ve iş fikrinizin
          her aşamasıyla ilgili kapsamlı çözümler sunuyor ve Çekya’da
          anadilinizde iletişim kurabileceğiniz güvenilir partner ihtiyacınıza
          karşılık veriyoruz.
          <h1 className="text-6xl">Farkındalık</h1>
          İşimizi ve kendimizi hayal ettiğimiz global değişimin bir parçası
          olarak görüyoruz. Daha sürdürülebilir ve sağlıklı bir <b>gezegenin</b>
          , dayanışma ve refah içindeki{" "}
          <b className="overflow-hidden">toplumun</b> ve yaratabileceği etkinin
          farkında olan güçlü <b>bireyin</b> bu değişimdeki rolünün farkındayız.
          Yaşamak istediğimiz geleceğin emektar kahramanlarından olmak
          istiyoruz.
          <h1 className="text-6xl">Değerler</h1>
          Etik ve dürüstlük konusunu tartışmaya açık görmüyoruz. Güven verilmez,
          kazanılır prensibi ile hareket ediyoruz. Şeffaf iletişim, tavizsiz
          disiplin ve sorumluluk bilincimiz sayesinde küçükten büyüğe tüm
          işbirliklerimizde uzun ömürlülük ve güven ortamı önceliğimiz.
          <h1 className="text-6xl">Dayanışma</h1>
          Gelişim ve ilerleme yolunda harika fikirlerin ancak ve ancak
          destekleyicisi olabiliriz. Dünyanın dört bir yanından partnerlerimiz
          ile birbirimizi destekliyor ve yeni işbirliği fırsatlarımızın peşinden
          gidiyoruz.
          <h1 className="text-6xl">Yenilikçilik</h1>
          Dünyamız akıl almaz bir hızla gelişiyor, dönüşüyor ve dijitalleşiyor.
          Bu dönüşüme ayak uydurmanın tek yolunun bizden öncekilerin tecrübe ve
          bilgisini; yenilikçi, modern ve yaratıcı bakış açısıyla birleştirmek
          olduğunu düşünüyoruz. Teknolojiyi ve yenilikleri maksimum hassasiyet
          ile takip etmeye çalışıyoruz.
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
