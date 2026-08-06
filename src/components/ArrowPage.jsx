import React from 'react'
import arrow1 from "../assets/arrow1.webp"
import arrow2 from "../assets/arrow2.webp"
import arrow3 from "../assets/arrow3.webp"
import arrow4 from "../assets/arrow4.webp"


const ArrowPage = () => {
  return (
    <div className = "h-screen w-screen flex flex-col items-center justify-center">
        <div className = "w-max h-[120px] flex items-center justify-center text-[59px] font-geist">This isn't just about real estate.</div>
        <div className = "w-[1175px] h-[475px] flex flex-row gap-[-100px] items-center relative">
            <img src={arrow1} alt="" className = "h-[600px] w-[435px] absolute"/>
            <img src={arrow2} alt="" className = "h-[685px] w-[435px] left-[250px] absolute"/>
            <img src={arrow3} alt="" className = "h-[640px] w-[435px] left-[480px] absolute"/>
            <img src={arrow4} alt="" className = "h-[640px] w-[435px] left-[740px] absolute"/>
        </div>
        <div className = "max-w-[800px] h-[160px] flex flex-col flex-wrap items-center justify-center text-[31px] font-geist">
            <div>It's about identity, Progress, Getting unstuck.</div>
            <div>You're not just looking for a place. You're looking</div>
            <div>for alignment. That's what we help you find.</div>  
        </div>
    </div>
  )
}

export default ArrowPage
