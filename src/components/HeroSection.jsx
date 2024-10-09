import Image from "next/image";
import React from "react";
import air1 from "../../public/hero/air1.svg";
import arrow from "../../public/hero/confident-arrow.svg";
import bar from "../../public/hero/confident-bar.svg";
import quotation from "../../public/hero/quotation-mark.svg";
import lightning from "../../public/hero/lightning.svg";
import group from "../../public/hero/group.svg";
import trophy from "../../public/hero/trophy.svg";
import chat from "../../public/hero/chat.svg";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  }

  return (
    <div className="mx-8 my-12 sm:ml-28">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-0 sm:gap-5">
        <div className="flex flex-col sm:w-[350px]">
          <div className="font-extrabold leading-[70px] text-5xl">
            <span className="text-[#E6A123]">Are you confident,</span>
            <br />
            that you'll be able to crack NEET?
            <Image
              src={bar}
              alt="bar"
              width={150}
              height={10}
              className="absolute top-[210px] left-[100px] sm:top-[330px] sm:left-[150px] "
            />
            <Image
              src={arrow}
              alt="arrow"
              width={90}
              height={10}
              className="absolute top-[180px] left-[260px] sm:top-[300px] sm:left-[330px]"
            />
          </div>
          <button className="bg-[#E6A123] rounded-xl text-white font-semibold text-2xl py-2 mt-8">
            Are you Confident
          </button>
          <button className="border border-solid border-black bg-white rounded-xl text-black font-semibold text-2xl py-2 mt-8">
            Talk to a Counsellor
          </button>
        </div>

        <div className="flex flex-col col-span-2 ">
          
          {/* Image */}

          <div className="flex flex-col sm:flex-row sm:gap-5">
            <Image src={air1} alt="air1" height={200} width={265} />
            
            {/* border */}
            
            <div className=" border border-1 rounded-xl bg-gray-200 my-2 mx-2 sm:w-[400px] sm:h-[360px] shadow-xl">
              <Image src={quotation} alt="quotation" width={100} height={100} 
                className="absolute top-[1155px] right-[70px] sm:top-[230px] sm:right-[170px]" />
                <Slider {...settings}>
                <div className="py-28 text-4xl font-light">
                  <div className="flex flex-row">
                    <Image src={lightning} alt='lightning' height={60} width={60} />
                    <div className="flex flex-col ">
                      <span>25,000&nbsp;</span>
                      <span>MCQs Practiced</span>
                    </div>
                  </div>
                  <div className="flex flex-row mt-6">
                    <Image src={lightning} alt='lightning' height={60} width={60} />
                    <div className="flex flex-col">
                      <span>~ 200&nbsp;</span>
                      <span>Tests Taken</span>
                    </div>
                  </div>
                </div>
                <div className="text-5xl mt-12 px-4">
                  <div className="font-light text-lg w-36">Kyuki NEET main selection to</div>
                <span className="font-extrabold"> MCQ <br />practice 
                  <span className="font-extralight"> aur</span> <br />
                 Testing se hi hota hai</span>
                </div>
            </Slider>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-center gap-4 mt-8 sm:mt-0">
            <span className="flex">
              <Image src={group} alt="air1" height={50} width={60} />
              <span className="font-extrabold pl-4 ">
                50,000 +<br />
                <span className="font-light text-[#4a4a4a]">
                  students <br /> Enrolled
                </span>
              </span>
            </span>
            <span className="flex">
              <Image src={trophy} alt="air1" height={50} width={60} />
              <span className="font-extrabold pl-4 ">
                6000 +<br />
                <span className="font-light text-[#4a4a4a]">
                  Success <br /> Stories
                </span>
              </span>
            </span>
            <span className="flex">
              <Image src={chat} alt="air1" height={50} width={60} />
              <span className="font-extrabold pl-4 ">
                15,000 +<br />
                <span className="font-light text-[#4a4a4a]">
                  Questions with <br /> audio & video explanation
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection 