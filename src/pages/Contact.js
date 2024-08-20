/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../assets/Image.png";
import { Card } from "../components/Card";
import icon from "../assets/Icon.png";

function Contact() {
  return (
    <div className="overflow-hidden flex flex-col md:flex-row w-full min-h-screen items-center justify-center">
      <div className="flex w-full flex-col items-start justify-center space-y-10">
        <img src={image} title="image" />
      </div>

      <div className="flex w-full space-y-5 items-start justify-start px-2 flex-col">
        <div className="flex flex-col space-y-5 max-w-[675px]">
          <h1 className="font-medium text-[36px] leading-9 text-[#091133] ">
            Light, Fast & Powerful
          </h1>
          <p className="font-normal text-[16px] leading-6 text-[#6F7CB2]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
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
  );
}

export default Contact;
