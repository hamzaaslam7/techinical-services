import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function index() {
  const cards = [
    {
      img: "/images/08.jpg",
      name: "AC(Air Conditionier)",
      status: "Installation & Maintenance",
    },
    {
      img: "/images/06.jpg",
      name: "Painting Services",
      status: "Interior & Exterior",
    },
    {
      img: "/images/07.jpg",
      name: "Carpentry Work ",
      status: "Wood Flooring",
    },
    {
      img: "/images/04.jpg",
      name: "Electrical Fixture",
      status: "Installation & Repairing",
    },
    {
      img: "/images/09.jpg",
      name: "Plumbing & Sanitary",
      status: "Installation & Maintenance",
    },
    {
      img: "/images/02.jpg",
      name: "Home Appliances",
      status: "Repairing Services",
    },
    {
      img: "/images/image17.jpg",
      name: "False Ceiling & Partitions",
      status: "Installation & Maintenance",
    },
    {
      img: "/images/image18.jpg",
      name: "Buildings Cleaning",
      status: "Services",
    },
  ];
  return (
    <>
      <section className="py-16 text-white bg-[#292d77]">
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="flex items-center">
            <div className="">
              <h5 className="lg:text-5xl md:text-3xl text-[22px] pl-5 border-l-[6px] border-[#f98f04]">
                Services
              </h5>
              <div className="flex mt-2">
                <Link className="" href="/About">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="w-4 hover:text-[#f98f04] "
                  />
                </Link>
                <spa className="px-2 "> / </spa>
                <p className="text-xl redClr">Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 lg:py-20 md:py-10 ">
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="flex flex-col gap-3 mb-5 lg:gap-6 lg:mb-10 md:mb-6">
            <p className="text-center grayClr">OUR SERVICES</p>
            <h2 className="text-center lg:text-5xl md:text-3xl text-[22px] md:w-[50%] flex mx-auto purpleClr">
            What You Will Get Form Us Check Here
            </h2>
            <p className="font-thin text-center grayClr">
            We are a team of professional and skilled Engineers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {cards.map((cards, key) => {
              return (
                <>
                  <div className="relative w-full overflow-hidden bg-no-repeat bg-cover shadow-md group">
                  <div className="relative w-full group-hover:bg-[#292d77] ">
                    <img
                      src={cards.img}
                      className="w-full h-full"
                      alt="Louvre"
                    />
                    <div className="flex items-center justify-center w-full text-center p-9">
                      <div className="relative">
                        <h4 className="text-2xl purpleClr group-hover:text-[#f98f04]">
                          <Link href="">{cards.name}</Link>
                        </h4>
                        <a className="mb-3 group-hover:text-[#ffffff]">{cards.status}</a>
                      </div>
                    </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
