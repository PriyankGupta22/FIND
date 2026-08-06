import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import rewired1 from "../assets/rewired1.webp"
import rewired2 from "../assets/rewired2.webp"


const AgentsPage = () => {
  return (
    <div className = "h-max w-screen flex flex-row px-[90px] py-[150px]">
      <div className = "flex flex-col w-[500px] h-max">
        <div className = "text-[21px] font-geist">For Agents</div>
        <div className = "w-[305px] h-[400px] bg-gray-400 mt-[500px] relative">
            <img
                                src={rewired1}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
      </div>
      <div className = "w-[1000px] flex flex-col items-end gap-[36px]">
        <div className = "h-max w-[850px] mt-[10px] text-[60px] font-geist flex justify-baseline">Don't Rent Your Career. Own it.</div>
        <div className = "bg-gray-400 w-[850px] h-[650px] relative">
            <img
                                src={rewired2}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
        <div className = "w-[850px] h-max flex flex-wrap font-geist text-[28px] mt-[40px]">
            At FIND, our agents don't just work for the brand—they own a part of it. We give top performers real equity, so they're invested in more than just your transaction—they're invested in your outcome. Agents are certified, supported, and equipped to deliver five-star service—because their success is tied to yours. You're not just here to close deals — you're building a career, a life, a legacy. We help agents find the company that gives them the support, tools, and leadership to thrive.
        </div>
        <div className = "text-[18px] h-max w-[850px] mt-[-5px]"><button className = "flex flex-row items-center gap-[15px] bg-black rounded-full text-white px-[25px] py-[7px] flex flex-row items-center gap-[15px]">Join The Movement<FaArrowRight /></button></div>
      </div>
    </div>
  )
}

export default AgentsPage
