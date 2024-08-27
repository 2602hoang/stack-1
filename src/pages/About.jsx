import React from "react";
import phone from "../assets/Vert.png";
import { Card } from "../components/Card";
import icon from "../assets/Icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <main>
      <Header isHomePage={false} />
      <section>
        <div className="w-full  flex justify-center items-center min-h-screen">
          <div className="flex flex-col md:flex-row  mt-[75px] ">
            <div className="w-full flex flex-col items-center space-y-5 justify-center ">
              <div className="w-full px-2 md:max-w-[520px] space-y-5">
                <h1 className="font-medium text-[36px] leading-9 text-[#091133]">
                  Design & Build Your Own Landing Pages
                </h1>
                <p className="font-normal text-[16px] leading-6 text-[#505F98]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 w-11/12 items-center justify-center">
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

            <div className="w-11/12 h-auto flex mx-auto mt-10 md:mt-0 md:ml-[100px]">
              <img src={phone} alt="phone" width={"100%"} height={"auto"} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default About;
