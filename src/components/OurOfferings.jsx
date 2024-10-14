import Image from "next/image";
import React, { useState } from "react";
import Loading from "../../public/target/loading.svg";
import People from "../../public/target/people.svg";
import Rupee from "../../public/target/rupee.svg";
import Star from "../../public/target/star.svg";
import { data, data2 } from "@/data/offeringsData";

const OurOfferings = () => {

    const [ selectedYear, setSelectedYear ] = useState("2025");
    
    const showContentFor2025 = () => setSelectedYear("2025");
    const showContentFor2026 = () => setSelectedYear("2026");

  return (
    <div className="">
      <div className="flex flex-col text-center leading-7 mx-36 my-10">
        <div className="font-thin text-4xl">
          Our <span className="font-extrabold ">Offerings</span>
        </div>
        <div className="text-[#858585] font-light text-lg my-5">
          Choose product based on your prefereces.
        </div>
      </div>

      <div className="px-6 py-3 font-normal text-lg mx-8 sm:mx-20 my-10">
        <div className="flex justify-center sm:justify-start gap-16 sm:flex-none">
          <button
            className={`border rounded-lg solid border-[#f6deb2] px-3 py-2 ' ${
              selectedYear === "2025" ? "bg-[#f2d091]" : "bg-white"
            }`}
            onClick={showContentFor2025}
          >
            2025
          </button>
          <button
            className={`border rounded-lg solid border-[#f6deb2]  px-3 py-2 sm:mx-32 ' ${
                selectedYear === "2026" ?  "bg-[#f2d091]" : "bg-white"
            }`}
            onClick={showContentFor2026}
          >
            2026
          </button>
        </div>

        {selectedYear === "2025" && (
          <div className="grid grid-cols-1 sm:grid-cols-4 py-4 gap-8 mt-10">
            {data.map((d, index) => (
              <div className="flex flex-col " key={index}>
                <Image
                  src={d.img}
                  alt=""
                  width={260}
                  height={180}
                  className="w-auto"
                />

                <div>
                  <ul className="flex flex-row justify-between my-2">
                    <li className="flex">
                      <Image src={People} alt="People" width={25} height={25} />
                      <div className="pl-2 pt-2 text-xs font-normal text-[#858585]">
                        <span className="font-extrabold text-black">
                          {d.enrol}
                        </span>
                        <br />Enrolments
                      </div>
                    </li>

                    <li className="flex pl-2">
                      <Image src={Star} alt="Star" width={25} height={25} />
                      <div className="pl-2 pt-2 text-xs text-[#858585]">
                        <span className="text-black font-extrabold">4.2 </span>(
                        {d.rating}<br /> Ratings)
                      </div>
                    </li>
                  </ul>

                  <div>
                    <div>{d.title}</div>
                    <div className="text-[#858585] leading-5 font-light text-sm truncate ">
                      {d.description}
                    </div>
                    <div className="">
                      <ul className="flex flex-row justify-between my-2">
                        <li className="flex">
                          <Image src={Loading} alt="Loading" width={10} height={20} />
                          <span className="text-sm font-extralight pl-1">{d.watchtime}</span>
                        </li>
                        <li className="flex">
                          <Image src={Rupee} alt="rupee" width={25} height={24} />
                          <span className="text-sm font-bold text-end pl-1">{d.cost}</span>
                        </li>
                      </ul>
                      <div className="flex justify-center">
                        <button className="border bg-[#E6A123] hover:bg-[#b9812d] shadow-custom rounded-xl font-bold text-white w-auto sm:w-full py-1">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedYear === "2026"  && (
          <div className="grid grid-cols-1 sm:grid-cols-4 py-4 gap-8 mt-10">
            {data2.map((d, index) => (
              <div className="flex flex-col" key={index}>
                <Image src={d.img} alt="" width={260} height={180} />

                <div>
                  <ul className="flex flex-row justify-between my-2">
                    <li className="flex">
                      <Image src={People} alt="People" width={25} height={25} />
                      <div className="pl-2 pt-2 text-xs text-[#858585]">
                        <span className="font-extrabold text-black">
                          {d.enrol}
                        </span>
                        <br />Enrolments
                      </div>
                    </li>

                    <li className="flex pl-2">
                      <Image src={Star} alt="Star" width={25} height={25} />
                      <div className="pl-2 pt-2 text-xs text-[#858585]">
                        <span className="font-extrabold text-black">4.2 </span>(
                        {d.rating} <br/> Ratings)
                      </div>
                    </li>
                  </ul>

                  <div>
                    <div>{d.title}</div>
                    <div className="text-[#858585] leading-5 font-light text-sm truncate ">
                      {d.description}
                    </div>
                    <div className="">
                      <ul className="flex flex-row justify-between gap-[5rem] my-2">
                        <li className="flex">
                          <Image src={Loading} alt="Loading" width={10} height={20} />
                          <span className="pl-2 text-sm font-extralight">
                            {d.watchtime}
                          </span>
                        </li>
                        <li className="flex">
                          <Image src={Rupee} alt="rupee" width={25} height={24} />
                          <span className="pl-2 text-sm font-bold">
                            {d.cost}
                          </span>
                        </li>
                      </ul>
                      <div className="flex justify-center">
                        <button className="border bg-[#E6A123] hover:bg-[#b9812d] shadow-custom rounded-xl font-bold text-white w-full py-1">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurOfferings;
