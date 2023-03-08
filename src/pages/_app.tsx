import "@assets/css/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@components/layout";
import { DM_Sans } from "@next/font/google";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-DM_Sans",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className={dmSans.className}>
        <Layout>
          {/* <AnimatePresence mode="wait" initial={false}> */}
          <Component {...pageProps} />
          {/* </AnimatePresence> */}
        </Layout>
      </div>
    </>
  );
}

export default appWithTranslation(App);
