import Experience from "@/components/Home/Experience";
import LatestProject from "@/components/Home/LatestProject";
import React from "react";
import Slider from "../components/Home/Slider";
import YouGet from "../components/Home/YouGet";
function index() {
  return (
    <div className="">
      <Slider />
      <Experience />
      <YouGet />
      <LatestProject />
    </div>
  );
}

export default index;
