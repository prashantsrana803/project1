import React from "react";
import group from "../../public/credit/group.svg";
import QnA from "../../public/credit/QnA.svg";
import test from "../../public/credit/test.svg";
import Image from "next/image";

const CreditSection = () => {
  return (
    <div className="bg-[#262543] text-white py-2 ">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:my-8 lg:pt-1 md:pt-20 px-8 ">
        
        {/* Tagline */}
        <div className="text-start my-10 lg:mb-0 ">
          <h5 className="text-xl text-center lg:text-start font-bold">THOUSANDS TRUST</h5>
          <h2 className="text-4xl text-center font-bold">
            <strong>NEETPrep Platform</strong>
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="flex flex-col items-center my-10 lg:flex-row">
          <ul className="flex flex-col sm:flex-row sm:justify-center w-full space-y-10 sm:space-y-0 sm:space-x-8 lg:space-x-12">
            <li>
              <span className="flex flex-col items-center">
                <Image src={group} height={50} width={80} alt="group1" />
                <span className="text-3xl font-bold pt-5">
                  45000+
                </span>
              </span>
                <span className="font-semibold text-gray-400 text-start">
                  Daily <br /> visitors
                </span>
            </li>

            <li >
              <span className="flex flex-col items-center">
                <Image src={QnA} height={50} width={50} alt="Qna" className="text-3xl" />
                <span className="text-3xl font-bold pt-5">
                  <span>8</span>Lakhs+
                </span>
              </span>
                <span className="font-semibold text-gray-400 text-start">
                  Questions <br /> Attempted
                </span>
            </li>

            <li>
              <span className="flex flex-col items-center">
                <Image src={test} height={50} width={50} alt="Test" />
                <span className="text-3xl font-bold pt-5">
                  <span className="count">18</span>Lakhs+
                </span>
              </span>
                <span className="font-semibold text-gray-400 text-start">
                  Tests <br /> Generated
                </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditSection;
