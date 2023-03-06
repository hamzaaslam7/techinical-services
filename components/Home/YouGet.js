/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const data = [
      {
        Image:
          "images/a-repairman-holding-a-spanner-and-posing-next-to-a-washing-machine-C3P123.jpg",
        heading: "This is the heading",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image:
          "images/Air-Conditioning & Ventilation System Installation & Maintenance.jpeg",
        heading: "This is the heading",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image: "images/Carpentary and Wood Flooring Work.jpg",
        heading: "This is the heading2",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image:
          "images/Electrical Fittings Installation, Repairing & Maintenance.jpeg",
        heading: "This is the heading3",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image: "images/Plaster Work.jpeg",
        heading: "This is the heading",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
    ];
    return (
      <div className="lg:p-[80px] bg-[url('/images/bgImage.jpg')] bg-no-repeat bg-cover">
        <div className="flex flex-col gap-6 mb-16">
          <p className="text-center grayClr">OUR SERVICES</p>
          <h2 className="text-center text-5xl w-[50%] flex mx-auto purpleClr">
            What You Will Get Form Us Check It
          </h2>
          <p className="text-center grayClr font-thin">
            We are a team of professional and skilled experts in all domestic
            spheres.
          </p>
        </div>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <div className=" gap-4 px-8   ">
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            {data.map((val, key) => {
              return (
                <>
                  <div className="flex mx-2 p-1 shadow-xl flex-col bg-white">
                    <img
                      className="h-48 object-cover "
                      src={val.Image}
                      alt="Image"
                    />
                    <div className="my-4 flex flex-col gap-6 text-center">
                      <h2 className="text-2xl purpleClr">{val.heading}</h2>
                      <p className="text-sm grayClr leading-7">{val.text}</p>
                      <button className=" w-fit flex mx-auto hover:bg-[#292D77] hover:text-white  p-3 px-12 uppercase purpleClr  border-[#292D77] border-2">
                        Learn More{" "}
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
