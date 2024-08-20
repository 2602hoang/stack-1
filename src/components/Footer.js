/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import facebook from "../assets/face.png";
import twitter from "../assets/Twicth.png";
import linkedin from "../assets/in.png";
import instagram from "../assets/Instagram.png";
import youtube from "../assets/Youtube.png"

function Footer() {
  return (
    <footer>
    <div className="flex flex-col w-full h-auto justify-between  items-center bg-[#E7ECFF] px-28 font-sans">
        {/* 1 */}
      <div className="flex flex-col  md:flex-row justify-between items-center py-10 w-full border-b border-[#CDD1D4]  ">
        <div className="flex w-full md:w-[30%] justify-center md:justify-start">
          <p className="text-[14px] font-medium leading-6 text-[#939EA4]">©2023 Yourcompany</p>
        </div >
        <div className="flex w-full md:w-[40%]  justify-center item-center">
        <a className="text-center font-black  leading-9 text-[26px] text-[#37447E]">
          Landing
        </a>
        </div>
        <div className="flex  w-full md:w-[30%] justify-center  md:justify-end">
        <button className=" text-white bg-[#111b47] font-medium text-[12px] py-1 px-3 w-40 h-[26px] rounded">
                 Purchase now
             </button>   
        </div>

      </div>

      {/* 2 */}
        
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto mb-5 mt-4">
                <div className="flex w-full md:w-[50%] md:justify-start items-center">
                    <ul className="flex w-full flex-row space-x-7 text-[14px] text-[#929ECC] font-normal leading-6">
                    <li>
                  <a href='/'>Home</a>  
                    </li>
                <li>
                   <a href='/about'>About</a> 
                    </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
                    </ul>

                </div>
                <div className="flex md:w-[50%] w-full md:justify-end justify-center items-center">
                    <div className="flex w-full flex-row gap-y-5 mt-5 md:mt-0 gap-4 justify-center  md:justify-end">
                      <img src={facebook} alt="facebook" className="size-4"/>
                      
                      <img src={linkedin} alt="linkedin" className="size-4"/>

                      <img src={twitter} alt="twitter" className="size-4"/>

                      <img src={youtube} alt="youtube" className="size-4"/>

                      <img src={instagram} alt="instagram" className="size-4"/> 
                     
                    </div>
                </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
