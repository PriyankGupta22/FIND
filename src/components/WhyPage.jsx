import React from 'react'
import estateVideo from "../assets/estateVideo.mp4"

const WhyPage = () => {
  return (
    <div className = "h-max w-screen bg-white mt-[500px] flex flex-col items-center py-[150px]">
      <div className = "h-[400px] w-[1375px] flex flex-row">
        <div className = "text-[25px] flex flex-row justify-baseline font-geist h-[40px] w-[600px]">Why FIND</div>
        <div className = "text-[42px] flex flex-wrap font-geist h-max max-w-[750px] mt-[20px]">
            Your life's changing. Don't just find a place - find what's next. We help you move forward with clarity, confidence, and the right agent by your side.
        </div>
      </div>
      <div className = "w-[1375px] h-[750px] bg-gray-500 relative">
        <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={estateVideo} type="video/mp4" />
  </video>
      </div>
    </div>
  )
}

export default WhyPage
