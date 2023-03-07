import Footer from "@/components/Layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "react-scroll-up";
import Header2 from "@/components/Layout/Header2";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      {/* <Navbar /> */}
      <Header2 />
      <div className="lg:pt-20 md:pt-[4.2rem] pt-[4rem]">
        <Component {...pageProps} />
      </div>
      <Footer />

      <ScrollToTop className="bg-black" showUnder={160}>
        <span className="w-10 h-10 bg-black ScrollToTop">
          <img src="/images/arrow-down.svg" className="w-5 md:w-10" />{" "}
        </span>
      </ScrollToTop>
      {/* <Footer2 /> */}
    </>
  );
}
