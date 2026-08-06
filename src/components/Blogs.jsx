import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import blog3 from "../assets/blog3.webp"
import blog2 from "../assets/blog2.webp"
import blog1 from "../assets/blog1.webp"

const BlogBox = ({date, title, content, image}) => {
    return (
        <div className = "w-full h-[370px] flex flex-row">

            <div className = "w-[650px] flex-col flex relative">
                <div className = "text-[15px] font-geist mb-[115px]">{date}</div>
                <div className = "text-[37px] font-geist mb-[5px]">{title}</div>
                <div className = "text-[15px] font-geist flex-wrap pr-[50px] ">{content}</div>
                <div className = "absolute bottom-0">
                    <button className = "text-black/70 font-geist flex flex-row items-center gap-[15px] rounded-full w-max h-max px-[20px] py-[6px] bg-white border border-black/50">Read More<FaArrowRight /></button>
                </div>
            </div>
            <div className = "w-[700px] bg-black relative"><img src = {image} alt = "" className = "absolute inset-0 h-full w-full object-cover"/></div>
        </div>
    )
}

const Blogs = () => {
  return (
    <div className = "w-screen h-max py-[90px] bg-white">
      <div className = "h-[340px] flex flex-row items-center px-[90px] mt-[60px]">
              <div className = "w-[475px] text-black font-geist text-[80px] leading-19 mr-[170px] mt-[-20px]">Blog & Resources</div>
              <div className = "max-w-[700px] flex-wrap">
                  <div className = "text-black text-[24px]">See how we've helped clients achive their real estate dreams, one successful move at a time.</div>
                  <button className = "flex flex-row items-center gap-[15px] h-max px-[20px] py-[6px] rounded-full border border-black/70 text-white bg-black mt-[29px] text-[18px] font-semibold border-[2px] justify-center">View Our Blog<FaArrowRight /></button>
              </div>
      </div>
      <div className = "flex flex-col h-max px-[90px] gap-[60px]">
        <BlogBox date = "2026-04-13" title = "Q1 2026 NYC Market Report" content = "Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here's what it means heading into the spring market." image = {blog1}/>
        <BlogBox date = "2026-04-13" title = "Q1 2026 NYC Market Report" content = "Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here's what it means heading into the spring market." image = {blog2}/>
        <BlogBox date = "2026-04-13" title = "Q1 2026 NYC Market Report" content = "Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here's what it means heading into the spring market." image = {blog3}/>
      </div>
    </div>
  )
}

export default Blogs
