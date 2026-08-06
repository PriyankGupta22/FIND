import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Content = ({number, content}) => {
    return (
        <div className = "w-max h-[100px] flex flex-row">
            <div className = "h-[100px] w-[110px] flex items-center justify-center text-[14px]">
                {number}
            </div>
            <div className = "max-w-[715px] h-[100px] text-[34px] font-geist leading-11 flex items-center justify-center">
                {content}
            </div>
        </div>
    )
}

const RewiredPage = () => {
  return (
    <div className = "w-screen h-max py-[200px] flex justify-center items-center">
      <div className = "h-[600px] w-[1350px] flex flex-row">
        <div className = "h-[300px] w-[650px] flex flex-col font-geist">
            <div className = "text-[65px]">Real Estate,</div>
            <div className = "text-[65px] mt-[-30px]">Rewired.</div>
            <div className = "text-[18px] mt-[20px] h-max w-max bg-black rounded-full text-white px-[20px] py-[6px] flex flex-row items-center gap-[15px] ml-[3px]"><button className = "flex flex-row items-center gap-[15px]">Start Your Search<FaArrowRight /></button></div>
        </div>
        <div className = "h-max w-max flex flex-col gap-[23px] mt-[10px] mr-[-10px]">
            <div className = "h-[100px] text-[28px] font-geist pl-[40px] mb-[-30px]">Steps:</div>
            <Content number = "01" content = "Talk to a Real Human. We match you with an expert who actually listens."/>
            <Content number = "02" content = "Get Clarity. We define what you really need, not just what's available."/>
            <Content number = "03" content = "Move Forward. We find what fits - and make it happen."/>
        </div>
      </div>
    </div>
  )
}

export default RewiredPage
