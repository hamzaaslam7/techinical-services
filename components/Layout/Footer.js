/* eslint-disable @next/next/no-img-element */
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
function Footer() {
  return (
    <>
      {" "}
      <section className=""></section>{" "}
      <div className="text-white lg:pt-20 md:pt-10 pt-6 bg-[#292d77]">
        <div className="container px-4 mx-auto md:mt-0 2xl:px-20 lg:px-6">
          <div className="gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
            <div className="">
              <div className="">
                <Link href="/">
                  <img
                    className="h-10 md:h-20"
                    src="./images/header-logo.jpeg"
                    alt="AmazonPublishigPros"
                  />
                </Link>
                <p className="pt-4 text-xs font-thin md:text-sm ">
                  Basat Anwer Technical Services LLC is a top and
                  forward-thinking maintenance service provider in the Emirate
                  of Dubai. Our team comprises professional Engineers and
                  Skilled individuals who prioritize Customer’s comfort, Safety
                  and Productivity, while also reducing expenses and ensuring
                  regulatory compliance. We continually strive to enhance
                  delivery performance and customer satisfaction because we
                  value our clients!
                </p>
              </div>
            </div>
            <div className="justify-center md:flex">
              {" "}
              <div className="mt-2 md:mt-0">
                <h3 className="md:text-[28px] text-xl">About Us</h3>
                <ul className="flex flex-col gap-3 pt-2 text-xs font-thin lg:gap-4 md:text-sm">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/About">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services </Link>
                  </li>
                  {/* <li>
                    <a href="our-portfolio">Our Portfolio</a>
                  </li> */}
                  <li>
                    <Link href="/Gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/Contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:justify-center md:flex ">
              <div className="mt-2 md:mt-0">
                <h3 className="md:text-[28px] text-xl">Services</h3>
                <ul className="flex flex-col gap-3 pt-2 text-xs font-thin lg:gap-4 md:text-sm">
                  <li>
                    <a href="book-writing-service">
                      AC(Air Conditionier) Maintenance
                    </a>
                  </li>
                  <li>
                    <a href="audio-book-service">Painting Services</a>
                  </li>
                  <li>
                    <a href="book-editing-proofreading-service">
                      Carpentry Work
                    </a>
                  </li>
                  <li>
                    <a href="book-cover-designing">Electrician Services</a>
                  </li>
                  <li>
                    <a href="book-illustrations-designing">Plumbing Services</a>
                  </li>
                  <li>
                    <a href="book-publishing-service">Painting Services</a>
                  </li>
                  <li>
                    <a href="book-publishing-service">False Ceiling Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex lg:justify-center">
              {" "}
              <div className="mt-2 md:mt-0">
                <h3 className="md:text-[28px] text-xl">Contact Us</h3>
                <ul className="flex flex-col gap-3 pt-2 text-xs font-thin md:text-sm">
                  <li className="flex items-start gap-1">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="w-10 text-white"
                    />

                    <Link className="flex" href="/">
                      {" "}
                      Office No G/010 Al Fahad Building Hor Al Anz Diera, Dubai,
                      United Arab Emirates, Dubai, United Arab Emirates.
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <a href="mailto:  basatanwertech@gmail.com">
                      {" "}
                      basatanwertech@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <a href="mailto:  info@basatanwertech.com">
                      {" "}
                      info@basatanwertech.com
                    </a>
                  </li>
                  <li className="flex ">
                    <img
                      className="w-6 h-4 -rotate-90"
                      src="/images/mbl.png"
                      alt="image"
                      style={{ filter: "invert(1)" }}
                    />
                    <a href="tel:+1 (646) 458-4222"> +971524052485</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container justify-between px-4 pt-8 mx-auto 2xl:px-20 lg:px-6 md:flex ">
          <div className="flex flex-row justify-between">
            <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
              <Link href="https://www.facebook.com/basatanwertech" className="">
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
              <Link
                target="_blank"
                href="https://twitter.com/basatanwertech?t=jsAiGhNxSIA_GT8lbPFf6g&s=09"
                className="ml-3 "
              >
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
              <Link
                target="_blank"
                href="https://instagram.com/basatanwertech?igshid=ZDdkNTZiNTM="
                className="ml-3 "
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/basat-anwer-technical-services-llc/"
                className="ml-3 "
              >
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
          <div className="my-3">
            <p className="  md:mt-0   text-[13px]">
              <a href="/Term" className="">
                Terms and Conditions
              </a>{" "}
              <a href="/Policy" className="underline"></a>
              <a className="mx-1">|</a>
              <a href="/Policy" className="">
                Privacy Policy
              </a>
            </p>{" "}
            <p className=" text-[13px]">
              <a href="/Term" className="">
                © 2023 - Amazon Publishing | All right reserved.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
