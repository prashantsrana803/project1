import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import data from '@/data/testimonialData'

export const NexArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <BsArrowRightCircle className="absolute left-[-10px] text-5xl text-[#6E6E6E]" />
  </div>
);
export const PreArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <BsArrowLeftCircle className="absolute right-[-12px] text-5xl text-[#6E6E6E]" />
  </div>
);

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="mx-10 sm:mx-20 sm:mt-20 mb-5 my-16">
      <div className="flex justify-center">
        <span className="font-light sm:text-4xl">What sets&nbsp;</span>
        <span className="font-bold sm:text-4xl">NeetPrep&nbsp;</span>
        <span className="font-light sm:text-4xl">apart?</span>
      </div>

      <div className=" bg-[#FFFBEB] rounded-2xl px-4 sm:px-10 my-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="my-8 p-4">
              <div className=" bg-[#FFFBEB] h-[400px] sm:h-[250px]">
                <div>
                  <p className=" tracking-wider leading-5 sm:font-normal">
                    {d.review}
                  </p>
                </div>

                <div className="flex flex-row absolute bottom-2 lg:w-80 w-[16rem]">
                  <Image src={d.img} height={6} width={66} alt="" />
                  <div className="">
                    <p className="flex flex-col font-bold sm:text-xl text-xl text-[#252525] pl-4 ">
                      {d.name}
                    </p>
                    <p className="flex flex-col text-base font-medium text-[#6E6E6E] pl-4">
                      {d.address}
                    </p>
                    <p className="flex flex-col text-sm font-bold pl-4">
                      {d.rank}
                    </p>
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

export default Testimonial;
