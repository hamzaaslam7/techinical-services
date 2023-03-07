
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronCircleDown, faChevronDown, faEllipsisVertical, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header3 = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();


  return (
    <div>
      <section style={{ background: 'rgb(19 2 41 / 84%)' }}>
        <nav className=" relative w-full flex items-center justify-between bg-[#382b4b] navbar navbar-expand-lg navbar-light h-[80px]">
          <div className="container mx-auto w-full flex flex-wrap items-center   px-4 justify-between">
            <Link href="/">
              <div className="flex items-center">
                <img src="/images/hunny-top-logo.svg" className="xl:w-auto lg:first-letter:w-auto w-52" />
              </div>
            </Link>
            <button
              className="lg:hidden md:inline-block inline-block border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
              type="button"
              onClick={() => setMenu(true)}
            >
              <FontAwesomeIcon icon={faBars} className="w-8 text-white h-8" />
            </button>
            <div
              className={`${menu == true ? 'md:w-[50%] w-[72%] ' : 'w-0'
                } bg-[#382b4b] lg:bg-transparent fixed top-0 right-0 bottom-0 lg:relative xl:w-auto z-50 lg:w-auto xl:h-auto lg:h-auto flex xl:justify-end lg:justify-end items-start`}
            >
              <ul
                className="navbar-nav xl:flex lg:flex w-full md:flex-col flex-col  items-center pl-0 list-style-none xl:h-auto xs:pt-10
               lg:h-auto "
              >
                <li className="w-full flex px-3 lg:pt-0 pt-3 lg:pb-0 pb-3 text-right justify-end ">
                  <button
                    className={` ${menu == true ? 'inline-block' : 'hidden'} 
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
                    <FontAwesomeIcon icon={faXmark} className="w-9 text-white h-9" />
                  </button>
                </li>

                <li className="w-full  lg:w-auto nav-item cursor-pointer">
                  <Link href="/">
                    <div
                      className={`w-full  lg:w-[180px] lg:justify-center text-white gridfont cursor-pointer lg:text-[24px] text-[16px]  lg:rounded-full flex items-center lg:h-[50px] lg:tracking-widest lg:shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:bg-[#E82768] h-12 xl:px-3 lg:px-3 px-6 lg:mr-10 mr-0  '
                        }`}
                      onClick={() => setMenu(false)}
                    >PLAY
                    </div>
                  </Link>
                </li>
                <li className="w-full  lg:w-auto nav-item cursor-pointer">
                  <Link href="/">
                    <div
                      className={`w-full  lg:w-auto text-white gridfont cursor-pointer text-[16px] flex items-center lg:h-[80px] h-12 xl:px-3 lg:px-3 px-6 lg:mr-10 mr-0 hover:text-[#d63384]  ${router.asPath === '/' && 'text-[#d63384] bg-[#14082F]'
                        }`}
                      onClick={() => setMenu(false)}
                    >
                      Home
                    </div>
                  </Link>
                </li>
                <li className=" w-full  lg:w-auto nav-item cursor-pointer">
                  <Link href="/About">
                    <div
                      className={`w-full  lg:w-auto gridfont text-[16px] cursor-pointer text-white flex items-center  lg:h-[80px] h-12 lg:mr-10 mr-0 xl:px-3 lg:px-3 px-6  hover:text-[#d63384]  ${router.asPath === '/About' && 'text-[#d63384] bg-[#14082F]'
                        }`}
                      onClick={() => setMenu(false)}
                    >
                      About
                    </div>
                  </Link>
                </li>

                <li className="nav-item lg:hover:bg-transparent md:hover:bg-[#b886fba6] cursor-pointer w-full xl:w-auto lg:w-auto">
                <Link href="/Contact">
                    <div
                      className={`w-full  lg:w-auto gridfont text-[16px] cursor-pointer text-white flex items-center  lg:h-[80px] h-12 lg:mr-10 mr-0 xl:px-3 lg:px-3 px-6  hover:text-[#d63384]  ${router.asPath === '/Contact' && 'text-[#d63384] bg-[#14082F]'
                        }`}
                      onClick={() => setMenu(false)}
                    >
                      Contect
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
export default Header3;