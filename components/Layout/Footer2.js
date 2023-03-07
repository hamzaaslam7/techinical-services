import Link from 'next/link'
import React from 'react'

export default function Footer2() {
  return (
    <>
      <section className='-mb-10'>
        <div className="container relative px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="grid items-center px-4 py-5 bg-white grayS md:grid-cols-2">
            <div className="flex items-center ">
              <img src="/images/inbox-icon.png" className=" h-[40px]" />
              <div className="pl-3">
                <h1 className="text-2xl font-medium  purpleClr">
                  Subscribe To Our Newsletter
                </h1>
                <p className="grayClr">
                  At vero eos et accusamus et iusto oddummy.
                </p>
              </div>
            </div>
            <div className="relative flex w-full border border-gray-300">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-transparent border-0 rounded outline-none focus:border-0 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              />
              <button className="px-8 py-2 text-lg text-white border-0 redBg focus:outline-none hover:redBg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#292D77] text-white body-font">

        <div className="container items-center justify-between px-4 pt-24 mx-auto 2xl:px-20 lg:px-6 md:flex">
          <div className="flex flex-col">
            <h2 className="text-[24px] leading-none md:text-[48px]">
              Interested in Collaboration?
            </h2>
            <p className="mt-2 mb-2 md:mt-0 md:mb-0">
              Challenge us.We want to work with you to create the really cool
              stuff.
            </p>
          </div>
          <button className="bg-[#F5931E] rounded-full  text-white hover:text-black h-[57px] w-[179px] ">
            Contact Us{" "}
          </button>
        </div>
        <div className="container px-4 pb-6 mx-auto 2xl:px-20 lg:px-6 lg:pt-14">
          <div className="flex flex-wrap order-first text-center md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <Link
                className="lg:w-[200px] w-full lg:h-[80px] md:h-12 flex items-center h-12"
                href="/"
              >
                <div className="flex items-center">
                  <img src="/images/footer-logo.png" alt="logo" className="lg:w-[200px] w-full lg:h-[80px] md:h-14 flex items-center h-12" />
                </div>
              </Link>
              <ul className="mb-10 list-none">
                <li>
                  <p>Thames Global is one the leading technical companies in the UAE and we are located at Al Qusais Industrial area 4,Dubai, United Arab Emirates

                  </p>
                </li>
              </ul>
              <h2 className="mb-3 text-sm title-font font-mediumtracking-widest">CATEGORIES</h2>
              <ul className="grid grid-cols-2 mb-10 list-none">
                <li>
                  <p className="">Sat - Thu</p>
                </li>
                <li>
                  <p className="">8:00 AM - 6:00 PM </p>
                </li>
                <li>
                  <p className="">Friday</p>
                </li>
                <li>
                  <p className="">Closed</p>
                </li>

              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm title-font font-mediumtracking-widest">Our Services
              </h2>
              <ul className="mb-10 list-none">
                <li>
                  <Link href="" className="">Home </Link>
                </li>
                <li>
                  <Link href="" className="">About Us</Link>
                </li>
                <li>
                  <Link href="" className="">Service</Link>
                </li>
                <li>
                  <Link href="" className="">Gallery</Link>
                </li>
                <li>
                  <Link href="" className="">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm title-font font-mediumtracking-widest">Get Free Estimate
              </h2>
              <ul className="mb-10 list-none">
                <li>
                  Thames Global Technical Services LLC

                </li>
                <li>
                  Plot No: 2470362,Property -1 warehouse.
                </li>
                <li>
                  Hamda Fardan Abdulla
                  Al Qusais Industrial area 4.
                </li>
                <li>
                  Dubai, United Arab Emirates.
                </li>   <li>
                  Office Direct Contact Person : Mr.Jinu
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm title-font font-mediumtracking-widest">SUBSCRIBE</h2>
              <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
                <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                  <label for="footer-field" className="text-sm leading-7 text-gray-600">Placeholder</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500" />
                </div>
                <button className="inline-flex flex-shrink-0 px-6 py-2 text-white bg-indigo-500 border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-indigo-600">Button</button>
              </div>
              <p className="mt-2 text-sm text-center  md:text-left">Bitters chicharrones fanny pack
                <br className="hidden lg:block" />waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container flex flex-col items-center px-4 py-6 mx-auto 2xl:px-20 lg:px-6 sm:flex-row">
            <Link href="" className="flex items-center justify-center font-medium title-font md:justify-start">
            Copyright © 2021 Thames Global Techical Services. All rights reserved.
            </Link>
          
            <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
              <Link href="" className="">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href="" className="ml-3 ">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link href="" className="ml-3 ">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link href="" className="ml-3 ">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
