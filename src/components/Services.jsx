import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import service1 from "../assets/services1.webp"
import service2 from "../assets/services2.webp"
import service3 from "../assets/services3.webp"
import service4 from "../assets/services4.webp"
import service5 from "../assets/services5.webp"
import service6 from "../assets/services6.webp"


const MainContent = ({title, number, content, image}) => {
    return (
    <div className = "h-[370px] border border-[0.5px] border-white/20 flex flex-row items-center border-x-black border-t-black px-[90px] relative">
        <img src={image} alt="" className = "absolute inset-0 h-full w-full object-cover"/>
        <div className = "h-full w-full absolute bg-black opacity-70 left-0"></div>
        <div className = "flex felx-row justify-center z-10">
            <div className = "border border-white/60 h-[45px] w-[45px] flex rounded-full items-center justify-center text-white text-[18px] mb-[200px] border-[2px] text-semibold font-geist">{number}</div>
            <div className = "flex flex-wrap w-[480px] h-max text-white text-[21px] ml-[70px] mb-[50px] pr-[140px]">{content}</div>
        </div>
        
        <div className = "w-[800px] flex flex-col text-white text-[70px] font-geist mt-[20px] text-[180px] mb-[70px] ml-[40px] z-10">
        {title}
        </div>
        <div className = "text-white text-[180px] mb-[40px] z-10"><FaArrowRight /></div>
    </div>
    )
}

const ServicesContainer = ({title, image}) => {
    return (
        <div className = "h-[370px] w-[430px] py-[30px] px-[40px] text-white relative">
            <img src={image} alt="" className = "absolute inset-0 h-full w-full object-cover"/>
            <div className = "w-full h-full inset-0 object-cover z-10 bg-black absolute opacity-30"></div>
            <div className = "h-[300px] flex flex-col w-[250px] relative z-20">
                <div className = "text-[33px] leading-10 font-geist font-semibold">{title}</div>
                <div className = "absolute bottom-[0px]"><button className = "flex flex-row items-center justify-center gap-[10px] rounded-full border border-white px-[15px] py-[6px] text-[17px] border-[2px]">Learn More <FaArrowRight /></button></div>
            </div>
        </div>
    )
}

const Services = () => {
  return (
    <div className = "w-screen h-max bg-black py-[90px]">
      <div className = "h-[290px] border border-[0.5px] border-white/20 flex flex-row border-x-black border-t-black px-[90px]">
        <div className = "w-[600px] text-white text-[25px] mt-[30px] font-geist font-semibold">Services</div>
        <div className = "w-[800px] flex flex-col text-white text-[70px] font-geist mt-[20px] ml-[80px]"><div>How FIND</div>
        <div className = "mt-[-35px]">Can Help You</div></div>
      </div>
      <div className = "flex flex-col">
        <MainContent number = "1" title = "Buy" content = "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We've done this over 10,000 times, and we know what wins." image = {service4}/>
        <MainContent number = "2" title = "Sell" content = "Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs." image = {service5}/>
        <MainContent number = "3" title = "Rent" content = "Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won't find online." image = {service6}/>
      </div>
      <div className = "h-[340px] flex flex-col justify-center px-[90px]">
        <div className = "w-[720px] text-white font-geist text-[41px] leading-11">Our certified agents guide you through every stage of real estate with expert knowledge and reliable support.</div>
        <div>
            <button className = "flex flex-row items-center gap-[15px] w-max h-max px-[20px] py-[6px] rounded-full border border-white/70 text-white mt-[33px] text-[19px] border-[2px] justify-center">Get Started with FIND<FaArrowRight /></button>
        </div>
      </div>
      <div className = "h-[340px] flex flex-row items-center px-[90px] mt-[110px]">
        <div className = "w-[475px] text-white font-geist text-[67px] leading-16 mr-[170px]">Support Beyond Buying and Selling</div>
        <div className = "max-w-[700px] flex-wrap">
            <div className = "text-white text-[24px]">The real estate market never stands still - and neither do we, Our experts offer continued support beyond the sale, helping you maximize your investment.</div>
            <button className = "flex flex-row items-center gap-[15px] h-max px-[20px] py-[6px] rounded-full border border-white/70 text-black bg-white mt-[29px] text-[19px] font-semibold border-[2px] justify-center">Get Started with FIND<FaArrowRight /></button>
        </div>
      </div>
      <div className = "flex flex-row items-center justify-between px-[90px] h-max w-screen mt-[30px]">
        <ServicesContainer title = "Morgage Services" image = {service1}/>
        <ServicesContainer title = "Property Management" image = {service2}/>
        <ServicesContainer title = "Construction and Real Estate Development" image = {service3}/>
      </div>
    </div>
  )
}

export default Services
