import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "react-scroll-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Script src="https://cdn.tailwindcss.com" />
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Navbar />
      <div className="lg:pt-20 md:pt-14 pt-[4rem]">
        <Component {...pageProps} />
      </div>
      <Footer />

      <ScrollToTop className="" showUnder={160}>
        <span className="ScrollToTop ">
          <FontAwesomeIcon icon={faChevronUp} className="w-10 text-white" />{" "}
        </span>
      </ScrollToTop>
      {/* <Footer2 /> */}
    </>
  );
}
