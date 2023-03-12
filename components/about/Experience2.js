/* eslint-disable @next/next/no-img-element */
import React from "react";
function Experience2() {
  return (
    <div className="md:my-[98px] my-[40px] md:px-0 px-2">
      <div className="flex xl:flex-row flex-col xl:px-[80px] lg:px-4 container mx-auto ">
        <div className="mx-auto xl:w-2/5 xl:mx-0">
          <img src="/images/single-img-ten.png" alt="image" />
        </div>
        <div className="w-full xl:w-3/5 xl:mx-16">
          <div className="flex flex-col items-center lg:flex-row lg:items-center md:items-start ">
            <div className="text-5xl pl-5 border-l-[6px] border-[#f98f04]">
              <div className="flex flex-col ">
                <p className="text-xs font-medium grayClr">
                Welcome To Basat Anwer Technical Services LLC
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-4xl purpleClr">
                We Have More Than 10 Years Experience
                </h1>
              </div>
            </div>
          </div>
          <h3 className="grayClr text-sm md:text-[17px] my-5 ">
          We are a team of professional and skilled Engineers in all domestic
            Areas. We offer a wide range of services and at the same time.
          </h3>
          <p className="text-sm grayClr md:leading-[27px] ">
          Basat Anwer Technical Services LLC is one of the leading &
            innovative maintenance service providers in the Emirate of Dubai. We
            have a professional team of Engineers and Experienced Skilled
            persons. We increase employee comfort, Safety, and productivity,
            lower expenses and guarantee that your organization complies with
            rules and regulations. We are constantly working to increase
            delivery performance and customer satisfaction because we care about
            our clients.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Experience2;
