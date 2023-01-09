import "@assets/css/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@components/layout";
import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-DM_Sans",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={dmSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(App);
