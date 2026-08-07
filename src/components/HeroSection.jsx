import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from "react-icons/fa";
import house from "../assets/houseHero.png"
import cloud from "../assets/cloud.webp"
import baseCloud from "../assets/baseClouud.webp"
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {

  const cloudRef = useRef()
  const houseRef = useRef()
  const buttonRef = useRef()
  const subTitleRef = useRef()
  const baseCloudRef = useRef()
  const heroRef = useRef(null)
  const navRef = useRef(null)
  const titleRef = useRef(null)


  useEffect(() => {
  gsap.fromTo(
    ".hero-word",
    {
      yPercent: 70,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.15,
      ease: "power4.out",
    }
  );

  gsap.fromTo(
    [subTitleRef.current, buttonRef.current, houseRef.current], 
    {
      yPercent: 200,
      opacity: 0
    },
    {
      yPercent: 0,
      duration: 3,
      opacity: 1,
      ease: "power4.out"
    }
  )

  gsap.fromTo(
    [houseRef.current, baseCloudRef.current], 
    {
      yPercent: 20,
      opacity: 0
    },
    {
      yPercent: 0,
      duration: 3,
      opacity: 1,
      ease: "power4.out"
    }
  )

}, []);

useEffect(() => {
  const tl = gsap.timeline({
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "+=1300",
    scrub: true,
    pin: true,
  },
});

tl.to(titleRef.current, {
    opacity: 0,
    yPercent: 60,
    ease: "none"
  },
);

tl.to(
  houseRef.current,
  {
    y: -450,
    scale: 1.05,
    ease: "none",
  },
  "<"
);

tl.to(
  baseCloudRef.current,{
    y: -100,
    ease: "none"
  },
  "<"
);

tl.to(
  navRef.current,{
    y: -100,
    ease: "power4.out"
  },
  "<"
);


  return () => {
    tl.kill();
  };

}, [])

  return (
    <div className = "bg-[#7197c0] h-screen w-screen relative" ref = {heroRef}>
<div ref={navRef}>
  <Navbar />
</div>      
<img src={cloud} alt="" className = "absolute w-[1600px] z-20 opacity-15 left-[-600px] top-[-300px] rotate-45" ref = {cloudRef}/>
      <img src={cloud} alt="" className = "absolute w-[1600px] z-20 opacity-15 right-[-500px] top-[-200px]"/>
      <img src={cloud} alt="" className = "absolute w-[1500px] z-20 opacity-10 top-[-600px]"/>
      <img src={baseCloud} alt="" className = "absolute w-[1600px] h-[600px] opacity-95 z-20 top-[560px] h-[600px]" ref = {baseCloudRef}/>
      <div className = "w-max h-max absolute top-[210px] left-[225px] flex flex-col items-center" ref = {titleRef}>
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
      <img src={house} alt="house" className = "absolute top-[340px] max-w-none w-[1700px] right-[-50px] -rotate-[0.6deg]" ref = {houseRef}/>
    </div>
  )
}

export default HeroSection
