import EasySteps from '@/component/Home/EasySteps'
import Experience from '@/component/Home/Experience'
import LatestProject from '@/component/Home/LatestProject'
import React from 'react'
import Slider from '../component/Home/Slider'
import YouGet from "../component/Home/YouGet"
function index() {
  return (
    <div>
      <Slider/>
      <Experience/>
     <YouGet/>
     <LatestProject/>
     <EasySteps/>
    </div>
  )
}

export default index