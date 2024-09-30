import React from "react";
import group from "../../public/credit/group.svg";
import QnA from "../../public/credit/QnA.svg";
import test from "../../public/credit/test.svg";
import Image from "next/image";

const CreditSection = () => {
  return (
    
    //Tagline

    <div className="bg-[#262543] text-white">
        <div className="flex flex-wrap items-center lg:my-20 lg:pt-1 md:pt-20">
            <div className="pl-24 pr-28">
              <h5 className="text-xl font-bold">THOUSANDS TRUST</h5>
              <h2 className="text-4xl font-bold">
                <strong>NEETPrep Platform</strong>
              </h2>
            </div>
          
      {/* 3 columns */}

          <div className=" my-16 columns-3 gap-7 md:ml-20 ">
            <ul className="md:w-full md:flex-row sm:w-full sm:flex-row sm:justify-center">
              <li className="flex items-center space-x-8 lg:space-x-4">
                <span className="flex flex-col">
                  <Image src={group} height={50} width={80} alt="group1"/>
                    <span className="text-4xl font-bold pt-5">
                      <span>45000</span> +</span>
                      <span className="font-semibold text-gray-400">Daily <br />visitors</span>
                </span>
              </li>

              <li className="flex items-center space-x-8 lg:space-x-4">
                <span className="flex flex-col">
                  <span>
                    <Image src={QnA} height={50} width={50} alt="Qna" className="text-3xl"/>
                  </span>
                  <span className="text-4xl font-bold pt-5">
                    <span>8 </span>Lakhs +</span>
                    <span className="font-semibold text-gray-400">Questions <br />Attempted</span>
                </span>
              </li>

              <li className=" flex items-center space-x-8 lg:space-x-4">
                <span className="flex flex-col">
                  <span className="pre-icon">
                    <Image src={test} height={50} width={50} alt="Test" />
                  </span>
                  <span className="text-4xl font-bold pt-5">
                    <span className="count">18 </span>Lakhs +</span>
                  <span className="font-semibold text-gray-400 pt-1">Tests <br />Generated</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
  );
};

export default CreditSection;
