import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NexArrow, PreArrow } from "./Testimonial";
import Image from "next/image";
import data from '@/data/facultyData'

const Faculty = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slideToScroll: 1,
    nextArrow: <NexArrow />,
    prevArrow: <PreArrow />,

    responsive: [
      {
        breakpoint: 1024, // tablet and larger
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // mobile and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // Quotation
    <div className=" mx-12 md:mx-28 px-1">
      <div className="flex text-center sm:justify-center text-xl sm:text-4xl my-10 sm:my-20">
        <p className="font-bold">
          NEET Expert Faculty
          <span className="font-thin">
            &nbsp;that leaves you with immense clarity
          </span>
        </p>
      </div>

      {/* slider*/}

      <div className="container mx-1">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="p-3">
              <div className="border-2 rounded-xl border-[#E9E9E9] h-[360px]">
                <div>
                  <div className="flex justify-center">
                    <Image src={d.img} alt="" width={226} height={236} />
                  </div>
                  <div className="flex flex-col tracking-[0.016em] text-center">
                    <div className="font-semibold text-lg text-[rgba(0,0,0,0.8)]">
                      {d.name}
                    </div>
                    <div className="text-[#e6a123] font-semibold text-xs tracking-widest uppercase pt-5">
                      {d.occupation}
                    </div>
                    <div className="text-[#757575] font-normal text-base leading-5 ">
                      {d.degree.split(",").map((part) => (
                        <div>{part}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};



export default Faculty;
