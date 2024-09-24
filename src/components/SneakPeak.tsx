import Image from 'next/image';
import React, { useState } from 'react'
import Ecosystem from '../../public/lecture/Ecosystem.png'
import HumanHealth from '../../public/lecture/Human-Health.png'
import Magnetism from '../../public/lecture/Magnetism.png'
import { IoMdClose } from 'react-icons/io';

const SneakPeak = () => {

    const [ isModalOpen, setModalOpen ] = useState(false);

    const [url, setUrl] = useState('')

    const handleModalOpen = (url: string) => {
        setUrl(url)
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setUrl('')
        setModalOpen(false);
    };

  return (
    <div className=' py-20 px-20 mx-20'>
        <div className='container '>
            <div className='flex justify-center'>
                <h2 className='font-light text-4xl'>Sneak peek into our high yield
                <span className='font-bold'> Lectures</span>
                </h2>
            </div>

            {/* Images */}

            <div className="cursor-pointer mt-20 flex items-center gap-5" >
                <Image 
                    src={Ecosystem}
                    onClick={()=>handleModalOpen("https://www.youtube.com/embed/HnLqqHPLbao")}
                    height={192} 
                    width={350} 
                    alt="Study" 
                />
                <Image 
                    src={Magnetism}
                    onClick={()=>handleModalOpen("https://www.youtube.com/embed/zZ-xt2tszd8")}
                    height={192} 
                    width={350} 
                    alt="Study" 
                />
                <Image 
                    src={HumanHealth}
                    onClick={()=>handleModalOpen("https://www.youtube.com/embed/PXKbxLkiLHE" )}
                    height={192} 
                    width={350} 
                    alt="Study" 
                />
            </div>
        </div>

        {/*Modal*/}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg relative w-full max-w-xl">
                    {/* close button */}
                    <button 
                        onClick={handleCloseModal}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold"
                    >
                         <IoMdClose />
                    </button>
                    
                        {/* Video iframe */}
                    <hr className="w-full border-gray-300 dark:border-white mt-12" />
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

export default SneakPeak;

