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
    <div className="bg-[#262543] text-white pt-16 sm:px-10 sm:py-4 ">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid sm:grid-cols-3 grid-rows-1 items-center">
          {/* Tagline */}

          <div className="lg:text-start text-center sm:pl-10">
            <h5 className="text-xl font-bold">THOUSANDS TRUST</h5>
            <h2 className="text-4xl font-bold">
              <strong>NEETPrep Platform</strong>
            </h2>
          </div>

          {/* 3 Columns */}

          <div className="lg:col-span-2 my-10 sm:pl-28 flex justify-center">
            <ul className="grid sm:grid-cols-3 items-center gap-10 lg-gap-0">
              <li className="w-60">
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

              <li className="w-60">
                <Image src={QnA} height={50} width={50} alt="Qna" />
                <span className="text-3xl font-bold pt-5">
                  {counterState && <CountUp start={0} end={8} duration={4} />}{" "}
                  Lakhs +<br />
                </span>
                <span className="font-semibold text-gray-400 text-start">
                  Questions <br /> Attempted
                </span>
              </li>

              <li className="w-60">
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
