import React from 'react'
import phone from "../assets/Vert.png"
import { Card } from '../components/Card'
import icon from "../assets/Icon.png"



function About() {
  return (
    <div className='overflow-hidden flex flex-col md:flex-row w-full min-h-screen px-2 md:px-28 justify-around'>
    <div className='flex  flex-col items-start justify-center space-y-10'  >
    <div className='flex flex-col space-y-5 max-w-[520px]'>
      <h1 className='font-medium text-[36px] leading-9 text-[#091133] '>
      Design & Build Your Own Landing Pages
      </h1>
      <p className='font-normal text-[16px] leading-6 text-[#505F98]'>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
      mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
      </div>
      <div className='justify-start grid grid-cols-2 gird-rows-2 gap-6'>
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
    <div className='flex pt-28 justify-center items-center'>
      <img src={phone} alt="phone" />
    </div>

  </div>
  )
}

export default About