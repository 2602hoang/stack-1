/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Header() {
  return (
    <header>
    <div className= " flex flex-row w-full h-[60px] justify-start md:justify-between items-center border-2 md:border-0 fixed top-0 px-2 md:px-28 font-sans">
        <div className="hidden md:flex w-[30%] justify-start"> 
        <nav className="flex w-full flex-row gap-4 justify-around ">
            <ul className="flex w-full flex-row gap-4 text-[14px] text-[#505f98] font-normal leading-6" >
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
        </nav>
        </div>
        <div className="flex w-full md:w-[40%] justify-start md:justify-center item-center">
            <a className="text-center font-black  leading-9 text-[26px] text-[#37447E]">
                 Landing
            </a>
        </div>
        <div className="flex w-full md:w-[30%] justify-end">
            <button className=" text-white bg-[#111b47] font-medium text-[12px] py-1 px-3 w-40 h-[26px] rounded">
                Buy Now
             </button>   
        </div>

    </div>
    </header>
  )
}

export default Header