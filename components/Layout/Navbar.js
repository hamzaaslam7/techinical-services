import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
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
    <div className="">
      <section>
        <nav
          className={` fixed z-10 w-full  flex items-center justify-between  navbar navbar-expand-lg navbar-light lg:h-[80px] h-[65px] ${
            scroll ? "bg-[#FFFFFF] shadow-lg" : " bg-transparent "
          }`}
        >
          <div className="container relative flex items-center justify-between w-full mx-auto">
            <Link
              className="lg:w-[120px] w-full lg:h-[80px] flex items-center h-12"
              href="/"
            >
              <div className="flex  items-center">
                <h2 className={` ${scroll ? "text-black" : "text-white"}`}>
                  {" "}
                  Logo
                </h2>
              </div>
            </Link>

            <button
              className="lg:hidden custom-navbar-toggler  md:inline-block inline-block border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
              type="button"
              onClick={() => setMenu(true)}
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

            <div
              className={`${
                menu == true
                  ? "md:w-[60%] w-[72%] ease-in-out duration-300"
                  : "w-0 ease-in-out duration-200"
              } bg-[#382B4B] lg:bg-transparent  menu-clapse fixed top-0 right-0 bottom-0 lg:relative xl:w-auto z-50 lg:w-auto xl:h-auto lg:h-auto flex xl:justify-end lg:justify-end items-start`}
            >
              <ul
                className={`  ${
                  scroll ? "lg:text-black text-white" : "text-white"
                } flex-col items-center w-full gap-8 pl-0 navbar-nav xl:flex lg:flex md:flex-col list-style-none xl:h-auto xs:pt-10 lg:h-auto `}
              >
                <li className="flex justify-end w-full px-3 pt-3 pb-3 text-right lg:pt-0 lg:pb-0 ">
                  <button
                    className={` ${menu == true ? "inline-block" : "hidden"}
              lg:hidden
                   border-0
                   py-2  px-2.5
                   bg-transparent
                   focus:outline-none
                  focus:ring-0 focus:shadow-none
                  focus:no-underline `}
                    type="button"
                    onClick={() => setMenu(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>

                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link
                    className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12"
                    href="/"
                  >
                    <div
                      className={`w-full text-center  cursor-pointer text-[18px]   hover:text-[#d8232a]  ${
                        router.asPath === "/" && "redClr "
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Home
                    </div>
                  </Link>
                </li>

                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link
                    className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12"
                    href="/Services"
                  >
                    <div
                      className={`w-full text-center  cursor-pointer text-[18px]   hover:text-[#d8232a]  ${
                        router.asPath === "/Services" && "redClr "
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      SERVICES
                    </div>
                  </Link>
                </li>

                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link
                    className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12"
                    href="/About"
                  >
                    <div
                      className={`w-full text-center text-[18px] cursor-pointer     hover:text-[#d8232a]  ${
                        router.asPath === "/About" && "redClr "
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      About US
                    </div>
                  </Link>
                </li>

                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link
                    className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12"
                    href="/Contact"
                  >
                    <div
                      className={`w-full text-center  text-[18px] cursor-pointer        hover:text-[#d8232a]  ${
                        router.asPath === "/Contact" && "redClr "
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Contact Us
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default Navbar;
