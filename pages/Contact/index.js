import {
  faHouse,
  faInbox,
  faLocation,
  faPhone,
  faUser,
  faMassageDots,
  faLocationDot,
  faMobileRetro,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <section className="lg:py-16 md:py-10 py-6 text-white bg-[#292d77]">
        <div className="container px-4 mx-auto 2xl:px-20 lg:PX-6">
          <div className="flex items-center">
            <div className="">
              <h5 className="lg:text-5xl md:text-4xl text-3xl pl-5 border-l-[6px] border-[#f98f04]">
                Contact Us
              </h5>
              <div className="flex mt-2">
                <Link className="" href="/contect">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="w-4 hover:text-[#f98f04] "
                  />
                </Link>
                <spa className="px-2"> / </spa>
                <p className="text-xl redClr">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative lg:mb-20 lg:h-[500px]  mt-8 overflow-hidden">
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="relative flex flex-wrap w-full p-0 bg-white shadow-lg ">
            <div className="relative flex flex-col w-full p-3 md:p-8 lg:w-2/3">
              <div className="flex items-center">
                <div className="pl-5 border-l-[6px] border-[#f98f04]">
                  <p className="text-xl">GET IN TOUCH</p>
                  <h5 className="text-3xl ">Contact Form</h5>
                  <p>
                    We are a team of professional and skilled experts in all
                    domestic spheres. We offer a wide range of seryou with any
                    unconventional.
                  </p>
                </div>
              </div>
              <div className="grid p-3 mt-2 mb-4 gap-x-5 gap-y-4 md:grid-cols-2">
                <div className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute w-10 text-[#f98f04e2] -left-4"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="name"
                    name="name"
                    className="w-full px-3 pl-6 bg-white border-b border-gray-100 focus:outline-none active:outline-none h-14 focus:border-gray-200 active:border-gray-200 "
                  />
                </div>
                <div className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute w-10 text-[#f98f04e2] -left-4"
                  />
                  <input
                    type="munber"
                    id="number"
                    placeholder="Cell Phone"
                    className="w-full px-3 pl-6 bg-white border-b border-gray-100 focus:outline-none active:outline-none h-14 focus:border-gray-200 active:border-gray-200 "
                  />
                </div>
                <div className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faInbox}
                    className="absolute w-10 text-[#f98f04e2] -left-4"
                  />
                  <input
                    type="munber"
                    id="number"
                    placeholder="Email"
                    className="w-full px-3 pl-6 bg-white border-b border-gray-100 focus:outline-none active:outline-none h-14 focus:border-gray-200 active:border-gray-200 "
                  />
                </div>
                <div className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="absolute w-10 text-[#f98f04e2] -left-4"
                  />
                  <input
                    type="text"
                    id="email"
                    placeholder="Venue"
                    className="w-full px-3 pl-6 bg-white border-b border-gray-100 focus:outline-none active:outline-none h-14 focus:border-gray-200 active:border-gray-200 "
                  />
                </div>
              </div>
              <div className="relative flex">
                <img src="/images/inbox-icon.png" className="mt-4 h-[15px]" />
                <textarea
                  id="message"
                  placeholder="Your Massage"
                  name="message"
                  className="w-full h-24 px-3 py-3 pl-6 bg-white border-b border-gray-100 rounded focus:outline-none active:outline-none focus:border-gray-200 active:border-gray-200"
                ></textarea>
              </div>
              <button className="text-white bg-[#f98f04] border-0 w-44 md:mt-5 mt-4 h-14 px-2 focus:outline-none hover:bg-[#f98f04] rounded text-sm">
                SUBMIT
              </button>
            </div>
            <div className="relative w-full mt-4 lg:mt-0 lg:w-1/3">
              <div className="relative w-full mx-auto bg-no-repeat bg-cover lg:w-full md:w-1/2 group">
                <div className="relative flex flex-col items-center justify-start w-full h-[100%] ">
                  <div className="flex p-5">
                    <ul className="list-none ">
                      <li className="">
                        <FontAwesomeIcon
                          className="w-10 text-[#f98f04e2]"
                          icon={faLocationDot}
                        />{" "}
                      </li>
                    </ul>
                    <ul className="list-none ">
                      <li> Thames Global Technical Services LLC</li>
                      <li>Plot No: 2470362,Property -1 warehouse.</li>
                      <li>Hamda Fardan Abdulla Al Qusais Industrial area 4.</li>
                      <li>Dubai, United Arab Emirates.</li>{" "}
                      <li>Office Direct Contact Person : Mr.Jinu</li>
                    </ul>
                  </div>
                  <div className="flex w-full p-5">
                    <ul className="list-none ">
                      <li className="">
                        <FontAwesomeIcon
                          className="w-10 text-[#f98f04e2]"
                          icon={faMobileRetro}
                        />{" "}
                      </li>
                    </ul>
                    <ul className="list-none ">
                      <li>
                        <a href="tel:+971 4 393 8577">+971 4 393 8577</a>{" "}
                      </li>
                      <li>
                        <a href="tel:+971 50 6534256">+971 50 6534256</a>{" "}
                      </li>
                    </ul>
                  </div>
                  <ul className="flex items-center list-none">
                    <li className="">
                      <FontAwesomeIcon
                        className="w-10 text-[#f98f04e2]"
                        icon={faLocationDot}
                      />{" "}
                    </li>
                    <li>
                      <a href="mailto:info@thamesglobaluae.com">
                        info@thamesglobaluae.com
                      </a>{" "}
                    </li>
                  </ul>
                  <div className="flex w-full pl-8 mt-3">
                  <span className="inline-flex justify-center p-0 mt-4 sm:mr-auto sm:mt-0 sm:justify-start">
                    <Link href="" className="">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="" className="ml-3 ">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link href="" className="ml-3 ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </Link>
                    <Link href="" className="ml-3 ">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </Link>
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3607.3253985035867!2d55.4019075!3d25.2932692!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f5c633029586d%3A0xf4cf32933aeda7eb!2zQUwgUkFZQU4gU0VDVVJJVFkgJiBTQUZFVFkgVFJBRElORyDYp9mE2LHZitin2YYg2YTYqtis2KfYsdipINmF2LnYr9in2Kog2KfZhNin2YXZhiDZiNin2YTYs9mE2KfZhdipIDE1dGggU3QgQWwgUXVzYWlzIEluZHVzdHJpYWwgQXJlYSAtIEFsIFF1c2FpcyBJbmR1c3RyaWFsIEFyZWEgNCAtIER1YmFpIFVuaXRlZCBBcmFiIEVtaXJhdGVz4oCt!3m2!1d25.293269199999997!2d55.4019075!5e0!3m2!1sen!2s!4v1678077981833!5m2!1sen!2s"
          className="w-full"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
