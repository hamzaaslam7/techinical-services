/* eslint-disable @next/next/no-img-element */
import React from "react";
import Script from "next/script";
export default function CarousalT() {
  return (
    <>
      <div className=" ">
        <div
          id="carouselDarkVariant"
          className="relative carousel slide carousel-fade carousel-dark"
          data-bs-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            ></button>
          </div>
          {/* <!-- Inner --> */}
          <div className="relative w-full overflow-hidden  carousel-inner">
            {/* <!-- Single item --> */}
            <div className="relative float-left w-full  carousel-item active  ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                className="block w-full"
                alt="Motorbike Smoke"
              />

              <div className="absolute top-0 hidden  text-start  carousel-caption md:block my-16 gird grid-cols-2">
                <div className="flex items-start flex-col gap-5 my-4">
                  <button className="redBg p-3 px-5 text-white">
                    NO:1 Technical Company{" "}
                  </button>
                  <div className="flex flex-col gap-1 uppercase font-bold">
                    <h5 className="text-8xl">rELIABLE</h5>
                    <h5 className="text-8xl">professional in UAE </h5>
                  </div>
                  <p className="lg:pr-80">
                    Some representative placeholder content for the first slide.
                    Some representative placeholder content for the first slide.
                  </p>
                  <div className="flex gap-3">
                    <button className="border p-3 px-5 border-[#292d77] purpleClr text-sm">
                      REQUEST A QUOTE
                    </button>
                    <span class="w-14 h-14 rounded-full  p-0.5 redBg hover:bg-[#292d77]  rotate-90"></span>
                    <button>How We Work </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div className="relative float-left w-full  carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                className="block w-full"
                alt="Mountaintop"
              />
              <div className="absolute hidden text-center carousel-caption md:block my-16">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div className="relative float-left w-full  carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                className="block w-full"
                alt="Woman Reading a Book"
              />
              <div className="absolute hidden text-center carousel-caption md:block my-16">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Inner -->
    <!-- Controls --> */}
          {/* <button
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="inline-block bg-no-repeat carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="inline-block bg-no-repeat carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
        </div>
      </div>
    </>
  );
}
