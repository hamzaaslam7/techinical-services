import Footer from "@/component/Layout/Footer";
import Navbar from "@/component/Layout/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
      </Head>
      <Script src="https://cdn.tailwindcss.com" />
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Navbar />
      <Component  {...pageProps} />
      <Footer />
    </>
  );
}
