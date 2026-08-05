import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from "react-icons/fa";
import house from "../assets/houseHero.png"


const HeroSection = () => {
  return (
    <div className = "bg-[#b3c6db] h-screen w-screen overflow-hidden">
      <Navbar />
      <div className = "w-max h-max absolute top-[200px] left-[165px] flex flex-col items-center">
        <div className = "text-[110px] font-geist font-extrabold">Find What Moves You</div>
        <div className = "text-[26px] font-geist mt-[-20px]">Expert agents. Real guidance. A clear path to find what's next.</div>
        <button className = "bg-black text-[white] w-max h-max px-[26px] py-[6px] rounded-full flex items-center flex-row gap-[15px] text-[19px] font-geist mt-[20px] font-semibold">
          Find Properties <FaArrowRight />
        </button>
      </div>
      <img src={house} alt="house" className = "absolute top-[340px] max-w-none -rotate-0 w-[1700px] right-[-50px] -rotate-[0.5deg]"/>
    </div>
  )
}

export default HeroSection
