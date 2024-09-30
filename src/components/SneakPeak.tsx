import Image from 'next/image';
import React, { useState } from 'react';
import Ecosystem from '../../public/lecture/Ecosystem.png';
import HumanHealth from '../../public/lecture/Human-Health.png';
import Magnetism from '../../public/lecture/Magnetism.png';
import { IoMdClose } from 'react-icons/io';

const SneakPeak = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [url, setUrl] = useState('');

    const handleModalOpen = (url: string) => {
        setUrl(url);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setUrl('');
        setModalOpen(false);
    };

    return (
        <div className='py-10 px-4 md:px-10 lg:px-20'>
            <div className='container mx-auto'>
                <div className='flex justify-center'>
                    <h2 className='font-light text-2xl md:text-3xl lg:text-4xl text-center'>
                        Sneak peek into our high yield
                        <span className='font-bold'> Lectures</span>
                    </h2>
                </div>

                {/* Images */}
                <div className='cursor-pointer mt-10 md:mt-16 lg:mt-20 flex flex-wrap justify-center gap-5'>
                    <div onClick={() => handleModalOpen("https://www.youtube.com/embed/HnLqqHPLbao")}>
                        <Image 
                            src={Ecosystem}
                            height={192} 
                            width={350} 
                            alt="Ecosystem" 
                            className='rounded-lg'
                        />
                    </div>
                    <div onClick={() => handleModalOpen("https://www.youtube.com/embed/zZ-xt2tszd8")}>
                        <Image 
                            src={Magnetism}
                            height={192} 
                            width={350} 
                            alt="Magnetism" 
                            className='rounded-lg'
                        />
                    </div>
                    <div onClick={() => handleModalOpen("https://www.youtube.com/embed/PXKbxLkiLHE")}>
                        <Image 
                            src={HumanHealth}
                            height={192} 
                            width={350} 
                            alt="Human Health" 
                            className='rounded-lg'
                        />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg relative w-11/12 md:w-3/4 lg:w-1/2 max-w-xl">
                        {/* Close button */}
                        <button 
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold"
                        >
                            <IoMdClose />
                        </button>

                        {/* Video iframe */}
                        <hr className="w-full border-gray-300 mt-12" />
                        <div className="p-4">
                            <iframe
                                width="100%" 
                                height="300"
                                src={url}
                                title="video"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SneakPeak;
