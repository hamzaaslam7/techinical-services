import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function GetTeams() {
  const cards = [
    {
      img: "/images/carpenter.png",
      img1: "/images/carpenter-y.png",
      status: "Home Renovation",
    }, {
      img: "/images/pipeline.png",
      img1: "/images/pipeline-y.png",
      status: "Electrical Service",
    }, {
      img: "/images/leak.png",
      img1: "/images/leak-y.png",
      status: "Plumber Services",
    }, {
      img: "/images/welder.png",
      img1: "/images/welder-y.png",
      status: "Electromechanical",
    }, {
      img: "/images/painting.png",
      img1: "/images/painting-y.png",
      status: "Painting Service",
    },
  ];
  return (
    <section className="py-6 lg:pb-20 lg:pt-0 ">

      <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">

        <div className="grid grid-cols-1 gap-3 grayS lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {cards.map((cards, key) => {
            return (
              <>
                <div className="relative group">
                  <div className="relative flex flex-col text-center border h-full p-10 border-gray-50 bg-[#dcdcde]  group-hover:bg-[#292d77] justify-center overflow-hidden group w-full">
                    <img
                      src={cards.img}
                      className="lg:w-[70px] block group-hover:hidden mx-auto w-14  lg:h-[70px]"
                      alt="Louvre"
                    />
                    <img
                      src={cards.img1}
                      className="lg:w-[70px] hidden group-hover:inline-block mx-auto w-14 lg:h-[70px]"
                      alt="Louvre"
                    />
                    <h4 className="mt-2 text-lg group-hover:text-white lg:text-xl ">{cards.status}</h4>
                  </div>
                  <div class="md:w-12 md:h-12 w-[40px] h-[40px] rounded-tl-full absolute right-0 flex items-center justify-center bottom-0 group-hover:bg-[#f98f04] bg-[#292d7751]">
                    <FontAwesomeIcon icon={faArrowDown} className='w-3 mt-3 mb-3 -rotate-45 md:mt-2 md:mb-3 md:w-8 group-hover:text-white purpleClr' />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
