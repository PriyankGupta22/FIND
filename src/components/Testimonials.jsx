import React from 'react'
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import testimonialImg from "../assets/testimonial.webp"


const NumButton = ({number}) => {
    return (
        <div className = "h-[40px] w-[40px] border border-black/30 flex items-center justify-center rounded-full font-geist text-black/30">
            {number}
        </div>
    )
}

const Testimonials = () => {
  return (
    <div className = "h-screen w-screen bg-gray-200/30 px-[90px] py-[60px] flex flex-col">
      <div className = "h-[175px] w-[900px] text-[60px] font-geist">Don't Take Our Word for it.</div>
      <div className = "h-[700px] flex flex-row">
        <div className = "h-[550px] w-[800px] bg-gray-300 relative">
            <img
                    src={testimonialImg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
        <div className = "w-[550px] h-[350px] flex flex-col items-end">
            <div className = "w-[470px] border border-black/30"></div>
            <div className = "flex flex-row items-center gap-[110px] mt-[20px]">
                <div className = "flex flex-row gap-[20px]">
                    <NumButton number = "1"/>
                    <NumButton number = "2"/>
                    <NumButton number = "3"/>
                    <NumButton number = "4"/>
                    <NumButton number = "5"/>
                </div>
                <div className = "text-[80px]"><RiDoubleQuotesR /></div>
            </div>
            <div className = "w-[470px] flex flex-wrap text-[23px] mt-[20px] font-geist text-black/70">
                "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%"
            </div>
            <div className = "flex flex-row items-center h-[100px] mt-[30px] text-[16px] w-[470px] font-geist">
                <div>PRIYANK GUPTA</div>
                <div className = "ml-[25px] mr-[25px]">/</div>
                <div className = "flex flex-row gap-[5px]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
