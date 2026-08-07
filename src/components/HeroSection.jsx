import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from "react-icons/fa";
import house from "../assets/houseHero.png"
import cloud from "../assets/cloud.webp"
import baseCloud from "../assets/baseClouud.webp"
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react';


const HeroSection = () => {

  const cloudRef = useRef()
  const houseRef = useRef()
  const titleRef = useRef()
  const buttonRef = useRef()
  const subTitleRef = useRef()


  return (
    <div className = "bg-[#b3c6db] h-screen w-screen relative">
      <Navbar />
      <img src={cloud} alt="" className = "absolute w-[1600px] z-20 opacity-25 left-[-600px] top-[-300px] rotate-45" ref = {cloudRef}/>
      <img src={cloud} alt="" className = "absolute w-[1600px] z-20 opacity-25 right-[-500px] top-[-200px]"/>
      <img src={cloud} alt="" className = "absolute w-[1500px] z-20 opacity-10 top-[-600px]"/>
      <img src={baseCloud} alt="" className = "absolute w-[1600px] h-[700px] z-20 top-[470px] h-[600px]"/>
      <div className = "w-max h-max absolute top-[160px] left-[225px] flex flex-col items-center">
        <div className = "text-[100px] font-geist font-extrabold flex flex-row gap-[25px]">
          <div className="overflow-hidden">
  <h1 className="hero-word">Find</h1>
</div>

<div className="overflow-hidden">
  <h1 className="hero-word">What</h1>
</div>

<div className="overflow-hidden">
  <h1 className="hero-word">Moves</h1>
</div>

<div className="overflow-hidden">
  <h1 className="hero-word">You</h1>
</div>
        </div>
        <div className = "text-[26px] font-geist mt-[-20px]" ref = {subTitleRef}>Expert agents. Real guidance. A clear path to find what's next.</div>
        <button className = "bg-black text-[white] w-max h-max px-[26px] py-[6px] rounded-full flex items-center flex-row gap-[15px] text-[19px] font-geist mt-[20px] font-semibold" ref = {buttonRef}>
          Find Properties <FaArrowRight />
        </button>
      </div>
      <img src={house} alt="house" className = "absolute top-[300px] max-w-none w-[1700px] right-[-50px] -rotate-[0.6deg]" ref = {houseRef}/>
    </div>
  )
}

export default HeroSection
