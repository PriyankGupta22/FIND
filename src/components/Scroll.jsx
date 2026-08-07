import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import gsap from 'gsap'
import {useRef, useEffect} from 'react'


const Scroll = () => {

    const scrollRef = useRef()

    useEffect(() => {

        const tl = gsap.timeline({
            repeat:-1,
        });

        tl.to(scrollRef.current, {
        y: "-33",
        duration: 1,
        ease: "power2.inOut",
    })
    .to(scrollRef.current, {
        y: "=0",
        duration: 1,
        ease: "power2.inOut",
    });


    }, [])

  return (
    <div className = "h-[38px] w-[90px] px-[20px] items-center justify-center text-[17px] font-geist font-semibold mr-[80px] border rounded-full border-[2px] flex flex-col relative overflow-hidden">
        <div className = "flex flex-col justify-center items-center" ref = {scrollRef}>
            <div className = "absolute">Scroll</div>
            <div className = "absolute top-[20px]">Scroll</div>
            <div className = "absolute top-[80px]">Scroll</div>
            <div className = "absolute top-[120px]">Scroll</div>
        </div>
      
    </div>
  )
}

export default Scroll
