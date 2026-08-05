import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className = "flex flex-row w-screen h-[100px] px-[35px] items-center justify-between absolute">
      <div>
        <img src={logo} alt="logo" className = "h-[100px]"/>
      </div>
      <div className = "flex flex-row gap-[55px] text-[19px] font-geist font-semibold">
        <div>Search</div>
        <div>Agents</div>
        <div>Join</div>
        <div>Paperwork</div>
        <div>Resources</div>
        <div>About</div>
      </div>
      <button className = "flex flex-row gap-[25px] bg-black text-[white] w-max h-max px-[20px] py-[5px] rounded-full items-center justify-center text-[19px] font-geist mr-[50px]">Sign In</button>
    </div>
  )
}

export default Navbar
