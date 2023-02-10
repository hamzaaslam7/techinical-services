import Link from "next/link";
import React from "react";

function LatestProject() {
  const data = [
    {
      Image: "http://www.thamesglobaluae.com/images/portfolio/01.jpg",
      title: "This is title",
      link: "www.google.com",
      text: "This is the text ",
    },
    {
      Image: "http://www.thamesglobaluae.com/images/portfolio/01.jpg",
      title: "This is title",
      link: "www.google.com",
      text: "This is the text ",
    },
    {
      Image: "http://www.thamesglobaluae.com/images/portfolio/01.jpg",
      title: "This is title",
      link: "www.google.com",
      text: "This is the text ",
    },
    {
      Image: "http://www.thamesglobaluae.com/images/portfolio/01.jpg",
      title: "This is title",
      link: "www.google.com",
      text: "This is the text ",
    },
    {
      Image: "http://www.thamesglobaluae.com/images/portfolio/01.jpg",
      title: "This is title",
      link: "www.google.com",
      text: "This is the text ",
    },
  ];
  return (
    <div className=" bg-[url('/images/projectBg.jpg')] bg-no-repeat bg-cover">
    <div className=" lg:p-[80px] md:p-[10px] container mx-auto ">
      <div className=" flex-col gap-4 p-[40px] text-white  w-[50%] flex mx-auto text-center bg-opacity-70 bg-[#dc3545]">
        <h2 className=" text-5xl  ">Our Latest Project</h2>
        <p>RECENTLY COMPLETED</p>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 p-4 m-8 bg-white bg-opacity-20">
        {data.map((val, key) => {
          return (
            <>
              <div
                className="h-[260px]  w-full group relative overflow-hidden "
                key={key}
              >
                <img
                  className="h-full w-full object-cover  group-hover:scale-110 ease-in-up duration-300  "
                  src={val.Image}
                />
                <div className="group-hover:block text-white hidden top-0 w-full  h-full opacity-70 bg-[#dc3545] absolute">
                  <p className="text-center text-2xl top-[30%] flex justify-center relative">
                    {val.text}
                  </p>
                  <span class="w-14 h-2 rounded-ful  top-[35%] relative flex mx-auto bg-[#292d77]"></span>
                  <Link
                    className="text-center top-[40%] flex justify-center relative"
                    href={val.link}
                  >
                    {val.title}
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default LatestProject;
