import React from "react";
import Slider from "react-slick";
import data from '@/data/ImpactData'

const Impact = () => {
    const settings = {     
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        rows: 3,
        slidesPerRow: 1,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                speed: 2500,
                autoplaySpeed: 2500,
                pauseOnHover: true,
                rows: 3,
                slidesPerRow: 1,
                cssEase: "linear",
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                speed: 2500,
                autoplaySpeed: 2500,
                pauseOnHover: true,
                rows: 2,
                slidesPerRow: 1,
                cssEase: "linear",
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 2500,
                autoplaySpeed: 2500,
                pauseOnHover: true,
                rows: 3,
                slidesPerRow: 1,
                cssEase: "linear",
              }
            }
          ]
    };

    return (
            <div>
                <div className="flex justify-center text-[2.6rem] tracking-wide mb-12">
                    <div className="font-light">Impact of </div>
                    <div className="font-extrabold">&nbsp;NEET Prep</div>
                </div>
                <div className="mx-8">
                    {/* slider */}
                    <Slider {...settings} >
                        {data.map((d ) => (
                            <div>
                                <img src={d.img} alt="img" width={169} height={205}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
    );
};

export default Impact;
