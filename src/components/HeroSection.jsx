import Image from "next/image";
import React from "react";
import air1 from "../../public/hero/air1.svg";
import arrow from "../../public/hero/confident-arrow.svg";
import bar from "../../public/hero/confident-bar.svg";
import group from "../../public/hero/group.svg";
import trophy from "../../public/hero/trophy.svg";
import chat from "../../public/hero/chat.svg";

const HeroSection = () => {
  return (
    <div className="hidden lg:block my-12 mx-28">
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col w-[350px]">
          <div className="font-extrabold leading-[70px] text-5xl">
            <span className="text-[#E6A123]">Are you confident,</span>
            <br />
            that you'll be able to crack NEET?
            <Image
              src={bar}
              alt="bar"
              width={150}
              height={10}
              className="absolute top-[360px] left-[150px] "
            />
            <Image
              src={arrow}
              alt="arrow"
              width={90}
              height={10}
              className="absolute top-[330px] left-[330px]"
            />
          </div>
          <button className="bg-[#E6A123] rounded-xl text-white font-semibold text-2xl py-2 mt-8">
            Are you Confident
          </button>
          <button className="border border-solid border-black bg-white rounded-xl text-black font-semibold text-2xl py-2 mt-8">
            Talk to a Counsellor
          </button>
        </div>
        <div className="flex flex-col ">
          <Image src={air1} alt="air1" height={450} width={265} />
          <div className="flex flex-row">
            <span className="flex flex-row">
              <Image src={group} alt="air1" height={450} width={50} />
              <span className="font-extrabold pl-2 ">
                50,000 +<br />
                <span className="font-light text-[#4a4a4a]">students Enrolled</span>
              </span>
            </span>
            <span className="flex flex-row">
              <Image src={trophy} alt="air1" height={450} width={50} />
              <span className="font-extrabold pl-2 ">
                6000 +<br />
                <span className="font-light text-[#4a4a4a]">Success Stories</span>
              </span>
            </span>
            <span className="flex flex-row">
              <Image src={chat} alt="air1" height={450} width={50} />
              <span className="font-extrabold pl-2 ">
                15,000 +<br />
                <span className="font-light text-[#4a4a4a]">Questions with audio & video explanation</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
