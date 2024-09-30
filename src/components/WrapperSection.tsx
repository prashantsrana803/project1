import React, { useState } from "react";
import Image from "next/image";
import Study from "../../public/study-hours.svg";
import { IoMdClose } from "react-icons/io";

const WrapperSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mt-20">
        <div className="cursor-pointer" onClick={handleModalOpen}>
          <Image
            src={Study}
            height={398}
            width={1116}
            alt="Study"
          />
        </div>
        <div className="flex items-center text-center mt-8 font-normal text-lg md:text-xl mb-4 text-gray-500">
          <p>
            Unlock the Secrets to NEET Success with our <br />
            17 Minute Comprehensive Guide
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-4">

            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold"
            >
              <IoMdClose />
            </button>

            {/* Video iframe */}
            <div className="p-4">
              <iframe
                width="100%"
                height="200"
                className="sm:h-[250px] md:h-[300px]"
                src="https://www.youtube.com/embed/N8P2pBGGoas?si=ga-GpCrMoKsJJY-I"
                title="NEET Success Guide"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WrapperSection;
