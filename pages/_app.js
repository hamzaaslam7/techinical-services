import Footer from "@/components/Layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import ScrollToTop from "react-scroll-up";
import Header2 from "@/components/Layout/Header2";
import CustomModal from "@/components/customModal";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
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
      <button
        onClick={openModal}
        className="fixed w-16 h-10 text-sm bg-white border rounded cursor-pointer right-5 bottom-2"
      >
        <a
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
          style={{ color: "red", padding: "50px" }}
        >
          <AiOutlineWhatsApp />
        </a>
      </button>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ScrollToTop className="bg-black" showUnder={160}>
        <span className="w-10 h-10 bg-black ScrollToTop">
          <img src="/images/arrow-down.svg" className="w-5 md:w-10" />{" "}
        </span>
      </ScrollToTop>
      {/* <Footer2 /> */}
    </>
  );
}
