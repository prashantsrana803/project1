import React, { useState } from "react";
import group from "../../public/credit/group.svg";
import QnA from "../../public/credit/QnA.svg";
import test from "../../public/credit/test.svg";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CreditSection = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <div className="bg-[#262543] text-white py-8 md:py-10 sm:px-10 sm:py-4 lg:py-16 my-16 ">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid lg:grid-cols-3 grid-rows-1 items-center">
          {/* Tagline */}

          <div className="lg:text-start text-center ">
            <h5 className="text-xl font-bold">THOUSANDS TRUST</h5>
            <h2 className="text-4xl font-bold">
              <strong>NEETPrep Platform</strong>
            </h2>
          </div>

          {/* 3 Columns */}

          <div className="lg:col-span-2 mt-10 lg:mt-0 flex justify-center">
            <ul className="grid sm:grid-cols-3 gap-10 pl-20 sm:pl-0 lg:pl-28  pr-0 lg:pr-24">
              <li className="w-48 sm:w-40">
                <Image src={group} height={50} width={80} alt="group1" />
                <span className="text-3xl font-bold pt-5">
                  {counterState && (
                    <CountUp start={0} end={45000} duration={2} />
                  )}
                  + <br />
                </span>
                <span className="font-semibold text-gray-400 text-start">
                  Daily <br /> visitors
                </span>
              </li>

              <li className="w-48 sm:w-40">
                <Image src={QnA} height={50} width={50} alt="Qna" />
                <span className="text-3xl font-bold pt-5">
                  {counterState && <CountUp start={0} end={8} duration={4} />}{" "}
                  Lakhs +<br />
                </span>
                <span className="font-semibold text-gray-400 text-start">
                  Questions <br /> Attempted
                </span>
              </li>

              <li className="w-48 sm:w-40">
                <Image src={test} height={50} width={50} alt="Test" />
                <span className="text-3xl font-bold pt-5">
                  {counterState && <CountUp start={0} end={18} duration={5} />}{" "}
                  Lakhs +<br />
                </span>
                <span className="font-semibold text-gray-400 text-start">
                  Tests <br /> Generated
                </span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CreditSection;
