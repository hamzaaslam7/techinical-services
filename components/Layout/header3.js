
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Header3 = () => {
    const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    })
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    })
  })

  return (
    <div>
      <section>
        <nav className={` fixed z-10 w-full flex items-center justify-between  navbar navbar-expand-lg navbar-light lg:h-[80px] h-[65px] ${scroll ? 'bg-[#ffffff] shadow-lg' : ' bg-transparent '}`}>
          <div className="container relative flex items-center justify-between w-full mx-auto">
            <Link className="lg:w-[120px] w-full lg:h-[80px] flex items-center h-12" href="/">
              <div className="flex items-center">
               <h2 className={` ${scroll ? 'text-black' : 'text-white'}`}> Logo</h2>
                {/* <img
                  src="/images/hunny-top-logo.svg" alt="top-logo"
                  className="xl:w-auto lg:first-letter:w-auto w-52"
                /> */}
              </div>
            </Link>
            <button
              className="lg:hidden custom-navbar-toggler  md:inline-block inline-block border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
              type="button"
              onClick={() => setMenu(!menu)}
            >
              <FontAwesomeIcon icon={faBars} className={` w-8 h-8 ${scroll ? 'text-black' : 'text-white'}`} />
            </button>
            <div
              className={`${
                menu == true ? "md:w-[50%] w-[72%] " : "w-0"
              } bg-[#382b4b] lg:bg-transparent  menu-clapse fixed top-0 right-0 bottom-0 lg:relative xl:w-auto z-50 lg:w-auto xl:h-auto lg:h-auto flex xl:justify-end lg:justify-end items-start`}
            >
              <ul
                className={`  ${scroll ? 'lg:text-black text-white' : 'text-white'} flex-col items-center w-full pl-0 navbar-nav xl:flex lg:flex md:flex-col list-style-none xl:h-auto xs:pt-10 lg:h-auto `}
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
                    <FontAwesomeIcon
                      icon={faXmark}
                      className=" w-9 h-9"
                    />
                  </button>
                </li>

                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12" href="/">
                    <div
                      className={`w-full text-center  gridfont cursor-pointer text-[18px] xl:px-3 lg:px-3 px-6  hover:text-[#d63384]  ${
                        router.asPath === "/" && "text-[#d63384] "
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Home2
                    </div>
                  </Link>
                </li>
                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12" href="/about">
                    <div
                      className={`w-full text-center gridfont text-[18px] cursor-pointer   xl:px-3 lg:px-3 px-6  hover:text-[#d63384]  ${
                        router.asPath === "/about" &&
                        "text-[#d63384] "
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      About 2
                    </div>
                  </Link>
                </li>
                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12" href="/contect">
                    <div
                      className={`w-full text-center  gridfont text-[18px] cursor-pointer      xl:px-3 lg:px-3 px-6  hover:text-[#d63384]  ${
                        router.asPath === "/contect" &&
                        "text-[#d63384] "
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Contact Us
                    </div>
                  </Link>
                </li>
                <li className="w-full cursor-pointer nav-item">
                  <div className="lg:w-[120px] w-full lg:h-[80px] flex items-center justify-center h-12 ">
                    <div className="relative dropdown ">
                      <div
                        className=" dropdown-toggle transition group duration-150 ease-in-out capitalize btn outline-none focus:outline-none focus:border-none border-none cursor-pointer w-full  lg:w-auto   tracking-wide   lg:text-[18px] flex items-center h-12  lg:mx-4 whitespace-nowrap mr-0"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className=''>
                        Services
                        </span>
                        <div className='relative flex items-center justify-center w-5 h-5 ml-1 border rounded-full'>

                          <FontAwesomeIcon icon={faChevronDown} className='w-3' />
                        </div>
                      </div>
                      <ul
                        className="dropdown-menu shadow-md md:min-w-[220px] w-[150px] absolute
                      hidden bg-[#FFFFFF]
                       lg:text-[18px]
                      right-0 top-[53px]
                       z-50 py-2 pb-2 list-none shadow-dropdown rounded-md text-[#6C6C6C] m-0 bg-clip-padding border-none"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <div className='absolute top-0 right-0 flex justify-end'>
                            <div className="w-6 h-6 text-right mr-12 -z-10 -mt-3 border-l border-l-[#55545412] border-t border-t-[#55545412] absolute top-0 rotate-45 bg-[#fff]"></div>
                          </div>
                        </li>
                        <li className='hover:bg-[#E8EFE5]  group '>
                          <Link passHref href='/Services/line-editing'>
                            <div
                              className={` dropdown-item px-4 py-2  block whitespace-wrap bg-transparent
                                   ${( router.asPath === "/Services/line-editing" &&
                                   "text-[#d63384] "
                                 )}`}
                              
                               onClick={() => setMenu(false)}
                            >
                          E-Book Writing
                            </div>
                          </Link>
                        </li>
                        <li className='hover:bg-[#E8EFE5] group '>
                          <Link passHref href=''>
                            <div
                              className=" dropdown-item px-4 py-2  font-normal block whitespace-nowrap bg-transparent
                            group-hover:text-[#261B56] active:x-bg-transparent" onClick={() => setMenu(false)} >
                             Audio Book Service
                            </div>
                          </Link>
                        </li>
                       
                        <li className='hover:bg-[#E8EFE5] group '>
                          <Link passHref href=''>
                            <div
                              className=" dropdown-item  py-2 px-4 font-normal block whitespace-nowrap bg-transparent
                            group-hover:text-[#261B56] active:bg-transparent" onClick={() => setMenu(false)} >
                                Book Publishing   
                            </div>
                          </Link>
                        </li>
                        <li className='hover:bg-[#E8EFE5] group '>
                          <Link passHref href=''>
                            <div
                              className=" dropdown-item  py-2 px-4 font-normal block whitespace-nowrap bg-transparent
                            group-hover:text-[#261B56] active:bg-transparent" onClick={() => setMenu(false)} >
                               Book Printing    
                            </div>
                          </Link>
                        </li>
                        <li className='hover:bg-[#E8EFE5] group '>
                          <Link passHref href=''>
                            <div
                              className=" dropdown-item  py-2 px-4 font-normal block whitespace-nowrap bg-transparent
                            group-hover:text-[#261B56] active:bg-transparent" onClick={() => setMenu(false)} >
                                Book Marketing     
                            </div>
                          </Link>
                        </li>
                        <li className='hover:bg-[#E8EFE5] group '>
                          <Link passHref href=''>
                            <div
                              className=" dropdown-item  py-2 px-4 font-normal block whitespace-nowrap bg-transparent
                            group-hover:text-[#261B56] active:bg-transparent" onClick={() => setMenu(false)} >
                                   Author Website         
                            </div>
                          </Link>
                        </li>   <li className='hover:bg-[#E8EFE5] group '>
                          <Link passHref href=''>
                            <div
                              className=" dropdown-item  py-2 px-4 font-normal block whitespace-nowrap bg-transparent
                            group-hover:text-[#261B56] active:bg-transparent" onClick={() => setMenu(false)} >
                                    Amazon-publishing     
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default Header3;
