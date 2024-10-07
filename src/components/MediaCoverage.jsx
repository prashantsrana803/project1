import Image from "next/image";
import React from "react";
import cnbn from "../../public/media/cnbc.png";
import openBook from "../../public/media/open-book.png";
import dailyhunt from "../../public/media/dailyhunt.png";
import edark from "../../public/media/e-dark.png";
import elight from "../../public/media/e-light.png";
import edex from "../../public/media/edex.png";
import inc from "../../public/media/inc.png";
import indiatoday from "../../public/media/india-today.png";
import mirrornow from "../../public/media/mirror-now.png";
import ndtv from "../../public/media/ndtv.png";
import newsnone from "../../public/media/news-none.png";
import toi from "../../public/media/the-times-of-india.png";

const MediaCoverage = () => {
  return (
    <div className="hidden lg:block md:block my-16 sm:mx-28 ">
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 gap-3">
        {/* Left Column */}

        <div className="col-span-2 bg-[rgb(178,122,20)] h-[350px] rounded-3xl relative">
          <div className="pl-8 pt-8 text-white w-80">
            <p className="font-bold text-3xl">2500+NEET selections</p>
            <p className="text-xl pt-4 absolute z-20">
              Highest number of <br /> selections in government <br /> medical
              colleges across
              <br /> India from an online <br /> teaching platform
            </p>
            <div
            className="absolute right-0 bottom-0 bg-no-repeat bg-right h-[303px] w-[343px] z-0"
            style={{ backgroundImage: 'url("/media/book.png")' }}>
              
            </div>
          
          </div>
        </div>

        {/* right Column */}
        <div className="col-span-2 sm:row-span-2 bg-[#1AC387] rounded-3xl px-8 sm:px-0">
          <div className="flex justify-center ">
            <div className="grid grid-cols-3 gap-8 py-10">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=_Y0yM_A_O4Y"
              >
                <Image src={ndtv} width={140} height={90} alt="ndtv" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=gHtdXeoJG7o"
              >
                <Image src={cnbn} width={140} height={90} alt="cnbn" />
              </a>

              <a
                target="_blank"
                href="https://m.dailyhunt.in/news/india/english/deccan+herald-epaper-deccan/online+video+classes+a+boon+for+medical+aspirants+from+rural+india-newsid-164482212"
              >
                <Image
                  src={dailyhunt}
                  width={140}
                  height={90}
                  alt="dailyhunt"
                />
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=zIZTDxiSJXQ"
              >
                <Image
                  src={mirrornow}
                  width={140}
                  height={90}
                  alt="mirrornow"
                />
              </a>

              <a
                target="_blank"
                href="https://inc42.com/startups/how-neetprep-is-helping-aspiring-doctors-take-the-plunge/"
              >
                <Image src={inc} width={140} height={90} alt="inc" />
              </a>

              <a
                target="_blank"
                href="https://www.indiatoday.in/education-today/news/story/medical-aspirants-from-rural-india-making-progress-through-online-video-classes-1644980-2020-02-10"
              >
                <Image
                  src={indiatoday}
                  width={140}
                  height={90}
                  alt="indiatoday"
                />
              </a>

              <a
                target="_blank"
                href="https://timesofindia.indiatimes.com/home/education/news/online-video-classes-a-boon-for-medical-aspirants-from-rural-india/articleshow/74043237.cms"
              >
                <Image src={toi} width={140} height={90} alt="toi" />
              </a>

              <a
                target="_blank"
                href="https://timesofindia.indiatimes.com/home/education/news/online-video-classes-a-boon-for-medical-aspirants-from-rural-india/articleshow/74043237.cms"
              >
                <Image src={edex} width={140} height={90} alt="edex" />
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/live/OFnmdtQ9YfQ?feature=share"
              >
                <Image src={newsnone} width={140} height={90} alt="newsnone" />
              </a>

              <a target="_blank" href="https://youtu.be/w2uVskzTnKE">
                <Image src={elight} width={140} height={90} alt="elight" />
              </a>

              <a target="_blank" href="https://youtu.be/2dZ3V1v7hgw">
                <Image src={edark} width={140} height={90} alt="edark" />
              </a>
            </div>
          </div>
          <div className="flex-col text-center text-white pb-8 sm:pt-16 sm:pb-0  ">
            <div className="text-5xl sm:text-6xl font-extrabold">Neet Prep</div>
            <div className="font-light text-3xl sm:text-4xl">Media Coverage</div>
          </div>
        </div>
        {/* bottom Small Column 1 */}
        <div className=" bg-[rgb(180,79,235)] rounded-3xl">
          <div className="flex justify-center pt-16">
            <Image src={openBook} alt="openbook" width={100} height={100} />
          </div>
          <div className="flex text-white text-center text-2xl font-bold pt-10 px-2 ">
            Customizable tests available for all 97 chapters
          </div>
        </div>
        {/* bottom Small Column 2 */}
        <div className=" bg-[rgb(35,104,230)]  rounded-3xl">
          <div className=" flex justify-center text-white pt-14 px-4 font-thin text-9xl">
            #1
          </div>
          <div className="flex text-center text-white py-6 px-4 font-bold text-2xl">
            <p>Player in exclusive Neet Prepration since 2016</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
