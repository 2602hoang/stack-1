import React, { useEffect, useState } from "react";

function Header({ isHomePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHomePage]);

  const backgroundColor = isHomePage
    ? scrolled
      ? "bg-[#e7ecff]"
      : "bg-transparent"
    : "bg-[#e7ecff]";

  return (
    <div
      className={`w-full flex justify-center items-center fixed top-0 transition-colors duration-300 ${backgroundColor}`}
    >
      <div className="flex flex-row w-[1110px] h-[60px] justify-center items-center">
        <div className={` md:flex w-[30%] justify-start hidden`}>
          <nav className="flex w-full flex-row gap-4 justify-around ">
            <ul className="flex w-full flex-row gap-[60px] text-[14px] text-[#505f98] font-normal leading-6">
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
          </nav>
        </div>
        <div className="flex-1 md:flex md:w-[40%] justify-start md:justify-center item-center">
          <a
            href="/"
            className="text-center hover:text-sky-600 font-black  leading-9 text-[26px] text-[#37447E]"
          >
            Landing
          </a>
        </div>
        <div className="flex md:w-[30%] justify-end">
          <button className=" text-white bg-[#111b47] hover:bg-blue-500 font-medium text-[12px] py-1 px-3 w-40 h-[26px] rounded">
            Buy Now
          </button>
        </div>
        <div className="flex md:hidden justify-end">
          <button
            className="md:hidden w-10 h-10 flex justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {isMenuOpen && (
          <div
            className="fixed top-0  left-0 w-full h-screen bg-[#ffffff] z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <div>
              <nav className="flex w-full flex-row gap-4 justify-center pt-16">
                <ul className="flex w-full flex-col gap-[60px] text-[14px] text-[#121212] font-normal text-center justify-center leading-6">
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
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
