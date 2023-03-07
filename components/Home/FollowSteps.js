import React from "react";

export default function FollowSteps() {
  const cards = [
    {
      number: "1",
      img: "/images/step-one.jpg",
      name: "Schedule your Experience",
      status: "He found himself transformed in his bed into a horrible vermin.",
    },
    {
      number: "2",
      img: "/images/step-two.jpg",
      name: "Get Professional Advices",
      status: "He found himself transformed in his bed into a horrible vermin.",
    },
    {
      number: "3",
      img: "/images/step-three.jpg",
      name: "Meet Your Handyman Expert",
      status: "He found himself transformed in his bed into a horrible vermin.",
    },
    {
      number: "4",
      img: "/images/step-four.jpg",
      name: "Get a Best Our Services At Door",
      status: "He found himself transformed in his bed into a horrible vermin.",
    },
  ];
  return (
    <section className="py-6 lg:py-20 md:py-10 ">
      <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
        <div className="flex flex-col mb-16 ">
          <p className="text-center text-[#8d9297] mb-3">RECENTLY COMPLETED</p>
          <h2 className="flex mx-auto  text-center lg:text-5xl md:text-3xl text-[22px] purpleClr">

            Our Latest Projects
          </h2>
          <div className="w-12 pt-4 mx-auto border-b-6 border-[#d8232a]"></div>
          <p className="text-center text-[#8d9297]">We are a team of professional and skilled experts in all domestic spheres.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3">
          {cards.map((cards, key) => {
            return (
              <>
                <div className="relative overflow-hidden text-center group">
                  <div className="relative h-[210px] w-[210px] rounded-full mx-auto">
                    <span className="inline-block w-12 absolute right-3 top-3 flex items-center justify-center h-12 group-hover:bg-[#f98f04] text-white rounded-full text-xl bg-[#292d77]">
                      {cards.number}
                    </span>
                    <img
                      src={cards.img}
                      className="h-[210px] w-[210px] grayS rounded-full mx-auto p-3 bg-white"
                      alt="Louvre"
                    />
                  </div>

                  <div className="flex items-center justify-center text-center ">
                    <div className="relative ">
                      <h4 className="text-xl lg:max-w-[180px] font-semibold my-4 mx-auto group-hover:text-[#f98f04] purpleClr">
                        {cards.name}
                      </h4>
                      <p className="lg:max-w-[230px] mx-auto text-sm text-[#8d9297]">
                        {cards.status}
                      </p>
                    </div>
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
