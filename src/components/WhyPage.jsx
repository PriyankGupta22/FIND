import React from 'react'
import estateVideo from "../assets/estateVideo.mp4"
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyPage = () => {

    const titleRef = useRef()
    const contentRef = useRef()
    const videoRef = useRef()
    const whyRef = useRef()

    useEffect(() => {
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: whyRef.current,
                    start: "top 30%",
                    end: "+=400px",
                    scrub: true,
                    markers: true,
                    stagger: true
                }
            }
        )

        tl.fromTo(
    contentRef.current,
    {
      clipPath: "inset(0 100% 0 0)",
      opacity: 20
    },
    {
      clipPath: "inset(0 0% 0 0)",
      ease: "none",
    },
    "<"
  );

  tl.fromTo(
    videoRef.current,
    {
      clipPath: "inset(0 100% 0 0)",
    },
    {
      clipPath: "inset(0 0% 0 0)",
      ease: "none",
    },
    "<"
  );

  return () => tl.kill();

    })

  return (
    <div className = "h-max w-screen bg-[#fafafa] mt-[1500px] flex flex-col items-center py-[150px]" ref = {whyRef}>
      <div className = "h-[400px] w-[1375px] flex flex-row">
        <div className = "text-[25px] flex flex-row justify-baseline font-geist h-[40px] w-[600px]" ref = {titleRef}>Why FIND</div>
        <div className = "relative">
        <div className = "text-[42px] flex flex-wrap font-geist h-max max-w-[750px] mt-[20px]" ref = {contentRef}>
            <div>Your life's changing. Don't just find a</div><br/><div className = "flex flex-row items-center gap-[5px]">place - find what's next. <div className = "text-gray-300 ">We help you</div></div><br/> <div className = "text-gray-300">move forward with clarity, confidence, </div><br/><div className = "text-gray-300">and the right agent by your side.</div>
        </div>
        <div className = "text-[42px] flex flex-wrap font-geist h-max max-w-[750px] mt-[20px] absolute top-0 opacity-5">
            <div>Your life's changing. Don't just find a</div><br/><div className = "flex flex-row items-center gap-[5px]">place - find what's next. <div>We help you</div></div><br/> <div>move forward with clarity, confidence, </div><br/><div>and the right agent by your side.</div>
        </div>
        </div>
        

      </div>
      <div className = "w-[1375px] h-[750px] bg-gray-500 relative" ref = {videoRef}>
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
