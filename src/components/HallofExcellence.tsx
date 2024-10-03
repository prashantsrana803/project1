import Image from 'next/image';
import React, { useState } from 'react'
import Awesome from '../../public/awesome.svg'
import Great from '../../public/great-work.svg'
import shubhan from '../../public/air/shubhan.png'
import agrawal from '../../public/air/agrawal.png'
import astha from '../../public/air/astha.png'
import mannat from '../../public/air/mannat.png'
import sengupta from '../../public/air/sengupta.png'
import shiwal from '../../public/air/shiwal.png'
import sumit from '../../public/air/sumit.png'
import ved from '../../public/air/ved.png'
import { IoMdClose } from 'react-icons/io';


const HallofExcellence = () => {

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
    <div className='border-[1px] box-border rounded-xl mx-8 sm:mx-28 mt-10 mb-16 pb-20 py-10 border-[#f6deb2] bg-[#fefaf4px]'>
        {/* title */}

        <div className='flex justify-center text-2xl mb-10 md:px-3 sm:px-5 sm:text-center '>
            <div className='font-bold'>
                <p>NEETprep's Hall of Excellence <span className='font-light'>Celebrating the Champions</span> of NEET '24</p>
            </div>   
        </div>

                        {/* topper photo section */}

        <div className=' mx-0 sm:mx-16 grid grid-flow-col-dense grid-cols-3 gap-4 '>
            <div className='border-[1px] border-[#6c757d] rounded-2xl items-center py-16 px-0 sm:px-8 relative'>
                   
                    <div className='absolute top-[-50px] left-[-50px]'>
                            <Image
                            src={Awesome} 
                            alt='awesome'
                            height={200}
                            width={200}
                            
                            />
                    </div>
        
                    <div 
                        onClick= {() => handleModalOpen("https://www.youtube.com/embed/2wmfx6AXu3A")}
                        >
                            <Image
                                src={shubhan} 
                                alt='shubhan'
                                height={100}
                                width={300}
                                className='cursor-pointer'
                            />
                    </div>
                    
            </div>

                         {/* Other Topper Section */}

            <div className='border-[1px] border-[#6c757d] rounded-2xl col-span-2 ml-6 items-center relative'>
                <div className=' pr-0 sm:pr-[5rem] pl-4 sm:pl-[2rem] pb-[3rem] '>
                    <div className='grid grid-cols-3 gap-4 sm:gap-12 mt-8'>    
                        <div onClick= {() => handleModalOpen("https://www.youtube.com/embed/2wmfx6AXu3A")}>
                                <Image
                                    src={sengupta} 
                                    alt='sengupta'
                                    height={220}
                                    width={150}
                                    className='cursor-pointer'
                            />
                            </div>
                            <div onClick={() => handleModalOpen("https://www.youtube.com/embed/g9miF--Kfas")}>
                                <Image
                                    src={agrawal} 
                                    alt='agrawal'
                                    height={220}
                                    width={150}
                                    className='cursor-pointer'
                                />
                                </div>
                            <div onClick={() => handleModalOpen("https://www.youtube.com/embed/Zuxgl4vuzd8")}>
                                <Image
                                    src={shiwal} 
                                    alt='shiwal'
                                    height={220}
                                    width={150}
                                    className='cursor-pointer'
                                />
                            </div>
                            <div onClick={() => handleModalOpen("https://www.youtube.com/embed/UkArnv6w0X8")}>
                                <Image
                                    src={ved} 
                                    alt='ved'
                                    height={220}
                                    width={150}
                                    className='cursor-pointer'
                                />
                                </div>
                            <div onClick={() => handleModalOpen("https://www.youtube.com/embed/m4pcWC5C_vU")}>
                                <Image
                                    src={mannat} 
                                    alt='mannat'
                                    height={220}
                                    width={150}
                                    className='cursor-pointer'
                                />
                                </div>
                            <div  onClick={() => handleModalOpen("https://www.youtube.com/embed/ktO5z3WKdwo")}>
                                <Image
                                    src={astha} 
                                    alt='astha'
                                    height={220}
                                    width={150}
                                    className='cursor-pointer'
                                />
                                </div>
                            <div onClick={() => handleModalOpen("https://www.youtube.com/embed/LrASZT78Q8I")}>
                                <Image
                                    src={sumit} 
                                    alt='sumit'
                                    height={220}
                                    width={150}
                                    className='cursor-pointer'
                                />
                                </div>
                    </div>
                
                </div>
                    <div>
                        <Image
                                src={Great} 
                                alt='awesome'
                                height={200}
                                width={192}              
                                className='absolute right-[-30px] bottom-[-15px]'   
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
  )
}

export default HallofExcellence;


