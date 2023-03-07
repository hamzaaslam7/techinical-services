import React from "react";

export default function LatestProject() {
  const cards = [
    {
      img: "/images/01.jpg",
      name: "Painting, Plumbing",
      status: "Plumbing",
    },
    {
      img: "/images/02.jpg",
      name: "Tiles repair",
      status: "Home Maintenance",
    },
    {
      img: "/images/03.jpg",
      name: "Flooring, Plumbing",
      status: "Floor Flooring",
    },
    {
      img: "/images/04.jpg",
      name: "Flooring, Home Maintenance",
      status: "Drywall Insulation",
    },
    {
      img: "/images/05.jpg",
      name: "Electrical, Painting",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/06.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
  ];
  return (
    <section className="py-6 lg:py-20 md:py-10 Latest-Projects">
      <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
        <div className="flex flex-col gap-3 text-white lg:gap-6 md:gap-4">
          <p className="text-sm text-center md:text-lg grayClr">RECENTLY COMPLETED</p>
          <h2 className="mb-4 text-2xl text-center lg:mb-10 md:mb-8 lg:text-5xl md:text-4xl">
            Our Latest Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-3 bg-white md:gap-2 lg:p-6 lg:grid-cols-3 md:grid-cols-2">
          {cards.map((cards, key) => {
            return (
              <>
                <div className="relative w-full overflow-hidden lg:h-[280px]  bg-no-repeat bg-cover group">
                  <img
                    src={cards.img}
                    className="w-full 2xl:h-[430px] md:h-[280px] h-[220px]"
                    alt="Louvre"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full h-[80%] opacity-0 group-hover:opacity-100 overflow-hidden text-center p-0  group-hover:p-5 yellow transition duration-300 ease-in-out bg-gradient-to-r bg-[#0000008a] group-hover:h-full"
                    style={{ transition: "all .3s ease-in-out" }}
                  >
                    <div className="relative flex items-center justify-center w-full h-full border">
                      <div className="">
                        <h4 className="text-[#f98f04]">{cards.name}</h4>
                        <a className="text-2xl font-medium text-white cursor-pointer hover:yellow ">
                          {cards.status}
                        </a>
                        <div className="w-12 pt-4 mx-auto border-b-4 border-[#f98f04]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="mt-4 lg:mt-12 md:mt-6">
        <button className=" w-fit flex mx-auto hover:bg-[#f98f04] hover:border-[#f98f04] hover:text-[#ffffff] text-white  p-3 px-12 uppercase   border-[#ffffff] border-2">
        VIEW MORE GALLERY
        </button>
        </div>
      </div>
    </section>
  );
}
