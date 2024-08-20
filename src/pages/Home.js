/* eslint-disable jsx-a11y/alt-text */
import Footer from "../components/Footer";
import Header from "../components/Header";
import mobie from "../assets/mobile.png";
import icon from "../assets/Icon.png";
import info from "../assets/info.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import panner from "../assets/panner.png"
import Rectangle from "../assets/Rectangle.png"
import { Card } from "../components/Card";
import { Infor } from "../components/Infor";
function Home() {
  return (
    <main className="w-full h-auto overflow-hidden">
      <Header />

      <section 
      style={{backgroundImage: `url(${panner})`, backgroundRepeat: "no-repeat", backgroundSize: "70% 100%",backgroundPosition: "right"}}
      className="min-h-screen h-auto md:mt-0 mt-[60px]">
        <div className="flex justify-self-end">

        </div>
        <div className="flex min-h-screen  font-sans">
          <div className="max-w-[539px] h-auto mx-2 md:ml-28 space-y-5 md:mt-28 justify-center items-center">
            <div className=" space-y-5">
              <h1 className="font-medium leading-[66px]  text-[50px] text-[#091133]">
                Introduce Your Product Quickly & Effectively
              </h1>
              <p className="leading-[30px] space-y-3 text-[18px] text-[#505F98]  font-normal ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                <br />
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="font-medium text-[16px] leading-4 space-x-3 pt-7 flex">
              <button className="w-[189px] h-9 text-white py-1 px-4 bg-[#111B47]">
                Purchase UI Kit
              </button>
              <button className="w-[189px] h-9 border-2 border-[#091133] text-black py-1 px-6">
                Learn More
              </button>
            </div>
          </div>

          


          
        </div>
      </section>

      <section className="min-h-screen ">
        <div className=" w-full justify-center items-center mx-2 my-2 md:mx-28 flex flex-col md:flex-row space-y-5">
          <div className="font-sans w-full mx-2 flex flex-col">
            <div className="max-w-[540px] space-y-6">
              <h1 className="font-medium leading-[48px]  text-[36px] text-[#091133]">
                Light, Fast & Powerful
              </h1>
              <p className="leading-[30px] space-y-3 text-[16px] text-[#505F98]  font-normal ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                <br />
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="flex flex-row w-full mt-9">
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

          <div className="w-full flex">
            <img src={mobie}></img>
          </div>
        </div>
      </section>

      <section className="min-h-screen h-auto ">
        <div className="w-full justify-center items-center mx-2 my-2  flex flex-col ">
            <div className="flex flex-col w-full h-auto">
            <Infor
              img={info}
              title="Light, Fast & Powerful"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
            />
           
        
            <Infor
              img={info1}
              title="Light, Fast & Powerful"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
              
            />
       
            <Infor
              img={info2}
              title="Light, Fast & Powerful"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
              button={"Purchase Now"}
            />
             </div>
        
        </div>
      </section>

      

      <section 
      style={{ backgroundImage: `url(${Rectangle})`,backgroundSize:"100% 150%" }}
      className="min-h-screen h-auto items-center justify-center flex">
        <div
        className="w-full justify-center items-center mx-2 my-2  flex flex-col  ">
            <div className="flex justify-center items-center text-center w-full flex-col space-y-8">
          <div>
        
            <h2 className="font-medium  leading-[48px]  text-[36px] text-[#091133]">
            A Price To Suit Everyone
            </h2>
            <p className="leading-[30px] space-y-1 text-[16px] text-[#505F98] max-w-[600px] font-normal ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            </p>
            </div>
            <div>
            <h1 className="text-[#222F65] text-[50px] leading-[66px] font-semibold">
            $40
            </h1>
            <p className="font-normal text-[16px] leading-[26px] text-[#37447E]">
            UI Design Kit
            </p>
            </div>
            <div>
            <p className="text-[14px] font-normal leading-6 text-[#5D6970]">
            See, One price. Simple.
            </p>
            <button className="text-white bg-[#111b47] font-medium text-[12px] py-1 px-3 w-[189px] h-[24px] rounded">
            Purchase Now
            </button>
            </div>
          </div>

        </div>
        
      </section>

      <Footer />
    </main>
  );
}

export default Home;
