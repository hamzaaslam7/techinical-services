import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [scroll, setScroll] = useState(false);

  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <>
      <header>

        <nav className={` text-lg bg-white fixed w-full z-10  py-2 ${scroll ? "bg-[#FFFFFF] shadow-lg lg:text-black" : " bg-white "} `} >
        <div className='container w-full px-4 mx-auto 2xl:px-20 lg:px-6'>
        <div className='flex flex-wrap items-center justify-between w-full py-4 md:py-0'>
           <div>
            <Link
              className="lg:w-[60px]  lg:h-[60px] md:h-12 flex items-center w-12 h-12"
              href="/"
            >
              <div className="flex items-center">
                <img src="/images/header-logo.jpeg" alt="logo" className="lg:w-[60px]  lg:h-[60px] md:h-12 w-12 h-12 flex items-center h-12" />
              </div>
            </Link>
          </div>

          <button
            className="lg:hidden  md:inline-block inline-block border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
            type="button"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div className={` flex lg:items-center lg:w-auto bg-[#292D77] lg:bg-transparent fixed top-0 right-0 bottom-0 lg:relative xl:w-auto z-50  ${isMenuOpen ? 'w-[50%]' : ' lg:inline-block md:hidden hidden'}`} style={{ transition: "all .3s ease-in-out" }}>
            <ul className="relative pt-4 text-white lg:text-black navbar-nav-div md:pt-0">
              <li className="flex justify-end w-full pt-3 pb-3 text-right lg:pt-0 lg:pb-0 ">
                <button className="lg:hidden
                   border-0
                   py-2  px-2.5
                   bg-transparent
                   focus:outline-none
                  focus:ring-0 focus:shadow-none
                  focus:no-underline text-white"
                  type="button"
                  onClick={toggleMenu}

                >
                  X
                </button>
              </li>
              <li>
                <Link className="block py-2 md:p-4 whitespace-nowrap " href="/">
                  <div className={`w-full text-center  cursor-pointer text-[16px]   hover:yellow  ${router.asPath === "/" && "redClr "} `} onClick={toggleMenu}>
                    Home
                  </div>

                </Link>
              </li>
              <li>
                <Link className="block py-2 md:p-4 whitespace-nowrap " href="/About">
                  <div className={`w-full text-center  cursor-pointer text-[16px]   hover:yellow  ${router.asPath === "/About" && "redClr "} `} onClick={toggleMenu}>
                    AboutUs
                  </div>

                </Link>
              </li>
              <li>
                <Link className="block py-2 md:p-4 whitespace-nowrap " href="/Services">
                  <div className={`w-full text-center  cursor-pointer text-[16px]   hover:yellow  ${router.asPath === "/Services" && "redClr "} `} onClick={toggleMenu}>
                    Services
                  </div>

                </Link>
              </li>
              <li>
                <Link className="block py-2 md:p-4 whitespace-nowrap " href="/Gallery">
                  <div className={`w-full text-center  cursor-pointer text-[16px]   hover:yellow  ${router.asPath === "/Gallery" && "redClr "} `} onClick={toggleMenu}>
                    Gallery
                  </div>
                </Link>
              </li>
              <li>
                <Link className="block py-2 md:p-4 whitespace-nowrap " href="/Contact">
                  <div className={`w-full text-center  cursor-pointer text-[16px]   hover:yellow  ${router.asPath === "/Contact" && "redClr "} `} onClick={toggleMenu}>
                    Contect Us
                  </div>
                </Link>
              </li>
              <li className="w-1/3 mx-auto cursor-pointer first-line: md:w-auto nav-item">
                <button
                  className="w-[200px] whitespace-nowrap mx-auto lg:h-[45px] text-white px-3 redBg flex items-center justify-center h-12"
                  onClick={toggleMenu}>
                  REQUEST QUOTE
                </button>
              </li>
            </ul>
          </div>
          </div>
        </div>
         
        </nav>
      </header>
    </>
  );
}
