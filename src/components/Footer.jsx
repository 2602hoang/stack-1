/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import facebook from "../assets/face.png";
import twitter from "../assets/Twicth.png";
import linkedin from "../assets/in.png";
import instagram from "../assets/Instagram.png";
import youtube from "../assets/Youtube.png";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex h-auto justify-center bg-[#E7ECFF] md:pb-0 pb-40 items-center relative">
      <div className="w-[1110px] h-auto bg-[#E7ECFF] ">
        {/* 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 space-y-10 w-full border-b border-[#CDD1D4]">
          <div className="justify-start">
            <p className="text-[14px] font-medium leading-6 text-[#939EA4]">
              ©2023 Yourcompany
            </p>
          </div>
          <div className="justify-center item-center">
            <a
              href="/"
              className="text-center hover:text-sky-600 font-black leading-9 text-[26px] text-[#37447E]"
            >
              Landing
            </a>
          </div>
          <div className="justify-center md:justify-end">
            <button className="hover:bg-blue-400 text-white bg-[#111b47] font-medium text-[12px] py-1 px-3 w-40 h-[26px] rounded">
              Purchase now
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col md:flex-row mb-16 w-full h-auto mt-4">
          <div className="flex w-full md:w-[50%] md:justify-center items-center">
            <ul className="flex w-full flex-row gap-[60px] justify-center md:justify-start text-[14px] text-[#929ECC] font-normal leading-6">
              <li>
                <a className="hover:text-red-500" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-red-500" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-red-500" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:w-[50%] w-full md:justify-end justify-center items-center">
            <ul className="flex w-full flex-row gap-x-7 mt-5 md:mt-0 gap-4 justify-center md:justify-end">
              <li>
                <a href="">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="hover:animate-pulse hover:bg-stone-600"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="hover:animate-pulse hover:bg-stone-600"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="hover:animate-pulse hover:bg-stone-600"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={youtube}
                    alt="youtube"
                    className="hover:animate-pulse hover:bg-stone-600"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src={instagram}
                    alt="instagram"
                    className="hover:animate-pulse hover:bg-stone-600"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 size-14 text-center right-10 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Footer;