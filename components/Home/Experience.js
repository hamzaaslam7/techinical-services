/* eslint-disable @next/next/no-img-element */
import React from "react";
import CountUp from "react-countup";
function Experience() {
  return (
    <div className="md:my-[98px] my-[40px] md:px-0 px-2">
      <div className="flex xl:flex-row flex-col xl:px-[80px] lg:px-4 container mx-auto ">
        <div className="order-2 w-full xl:w-3/5 xl:mx-16 xl:order-1">
          <div className="flex flex-col items-center lg:flex-row lg:items-center md:items-start ">
            <h2 className="text-High text-[90px] font-semibold">2013</h2>
            <span class="w-20 lg:block hidden h-full p-0.5 redBg  rotate-90"></span>
            <div className="">
              <div className="flex flex-col ">
                <p className="text-xs font-medium grayClr">
                   10 YEARS EXPERIENCE
                </p>
                <h1 className="mx:text-[36px] text-3xl purpleClr">
                  Success Experiences
                </h1>
              </div>
            </div>
          </div>
          <h3 className="grayClr text-sm md:text-[17px] my-5 ">
             We are a team of professional and skilled Engineers in all domestic
            Areas. We offer a wide range of services at the same time
          </h3>
          <p className="text-sm grayClr  md:leading-[27px] ">
            Basat Anwer Technical Services LLC is one of the leading &
            innovative maintenance service providers in the Emirate of Dubai. We
            have a professional team of Engineers and Experienced Skilled
            persons. We increase employee comfort, Safety, and productivity,
            lower expenses and guarantee that your organization complies with
            rules and regulations. We are constantly working to increase
            delivery performance and customer satisfaction because we care about
            our clients.
          </p>
          <div className="flex flex-col gap-8 my-6 md:flex-row">
            <div className="flex flex-col w-full gap-2">
              <div className="flex redClr gap-4   items-center xl:justify-center  xl:px-0 px-2  text-[40px]">
                <div className="w-[40px] h-[40px]">
                  {" "}
                  <img
                    className="w-[40px] h-[40px]"
                    src="/images/briefcase.png"
                    alt="iamge"
                  />
                </div>
                <div className="w-16">
                  <CountUp start={1} end={300} duration={2.75}>
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </div>
                <span>+</span>
              </div>
              <span class="w-full  p-0.5 bg-[#e8e8e8] "></span>
              <p className="xl:px-0 lg:px-2 text-[17px] xl:text-center  purpleClr ">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex redClr gap-4  items-center xl:justify-center  xl:px-0 px-2  text-[40px]">
                <span className="">
                  {" "}
                  <img
                    className="w-[40px] h-[40px]"
                    src="/images/manIcon.png"
                    alt="image"
                  />
                </span>
                <div className="w-16">
                  <CountUp start={1} end={125} duration={2.75}>
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </div>
                <span>+</span>
              </div>
              <span class="w-full  p-0.5 bg-[#e8e8e8] "></span>
              <p className="xl:px-0 lg:px-2 text-[17px] xl:text-center  purpleClr">
              Customer and Clients
              </p>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex redClr gap-4  items-center xl:justify-center  xl:px-0 px-2  text-[40px]">
                <span className="">
                  {" "}
                  <img
                    className="w-[40px] h-[40px]"
                    src="/images/cup.png"
                    alt="image"
                  />
                </span>
                <div className="w-16">
                  <CountUp start={1} end={10} duration={2.75}>
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </div>
                <span>+</span>
              </div>
              <span class="w-full  p-0.5 bg-[#e8e8e8] "></span>
              <p className="xl:px-0 lg:px-2 text-[17px] xl:text-center  purpleClr">
                Years Experiance
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 mx-auto xl:w-2/5 xl:mx-0 xl:order-2">
          <img src="/images/experience.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
