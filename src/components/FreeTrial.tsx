import Image from "next/image";
import Laptop from "../../public/laptop-photo.png";
import React from "react";

const FreeTrial = () => {
  return (
    <div className="mx-28 my-12">
      <div className="grid grid-cols-2 gap-20">
        <div>
          <Image src={Laptop} alt="laptop" width={546} height={468} />
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <div className="font-extralight text-4xl">Book your Instant &nbsp;</div>
            <div className="font-extrabold text-4xl pb-10">Free Trial</div>
          </div>

          <form className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="border rounded-xl border-[#C5C5C5] mb-4 py-4 px-2 text-sm"
                placeholder="Enter Your Name"
              />
              <input
                type="phone"
                className="border rounded-xl border-[#C5C5C5] mb-4 py-4 px-2 text-sm"
                placeholder="Enter Your Moblie No."
              />
            </div>
            <input
              type="email"
              className="border rounded-xl border-[#C5C5C5] mb-4 py-4 px-2 text-sm"
              placeholder="Enter Your Email-ID"
            />
            <input
              type="submit"
              className="border-1 rounded-xl bg-[#E6A123] text-white font-bold py-4 px-4"
              value="start your free trial now!"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
