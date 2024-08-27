/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../assets/Image.png";
import icon from "../assets/Icon.png";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Card } from "../components/Card";

function Contact() {
  return (
    <main>
      <Header isHomePage={false} />
      <div className="w-full  flex justify-center items-center min-h-screen">
        <div className=" flex flex-col md:flex-row w-full max-w-[1110px] min-h-screen items-center mt-[65px] justify-center">
          <div className="flex w-11/12 h-auto md:max-w-1/2 order-2 md:order-1">
            <img src={image} title="image" width={"100%"} height={"auto"} />
          </div>

          <div className="flex w-11/12 md:max-w-1/2 order-1 md:order-2 space-y-5 md:ml-[100px] px-2 flex-col">
            <div className="flex flex-col space-y-5 max-w-[675px]">
              <h1 className="font-medium text-[36px] leading-9 text-[#091133] ">
                Light, Fast & Powerful
              </h1>
              <p className="font-normal text-[16px] leading-6 text-[#6F7CB2]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="justify-start grid grid-cols-2 gird-rows-2 gap-6">
              <Card
                icon={icon}
                title="Title Goes Here"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
              />
              <Card
                icon={icon}
                title="Title Goes Here"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
              />
              <Card
                icon={icon}
                title="Title Goes Here"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
              />
              <Card
                icon={icon}
                title="Title Goes Here"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Contact;
