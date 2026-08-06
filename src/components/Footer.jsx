import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import footerImg from "../assets/footerImage.webp"

const Footer = () => {
  return (
    <div className = "w-screen h-screen mt-[100px] flex items-center justify-center bg-gray-200 relative">
        <img
        src={footerImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover pr-[10px]"
        />
        <div className = "absolute w-screen h-screen z-10 bg-black opacity-65"></div>
      <div className = "flex flex-col justify-center items-center z-20">
        <div className = "text-[60px] text-white font-geist font-semibold">Find You. We'll Help You Get There.</div>
        <div><button className = "flex flex-row items-center gap-[15px] h-max px-[30px] py-[8px] rounded-full text-black bg-white mt-[10px] text-[18px] font-semibold justify-center">Get Started<FaArrowRight /></button></div>
      </div>
    </div>
  )
}

export default Footer
