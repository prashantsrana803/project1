import Image from 'next/image';
import React from 'react';
import girl from '../../public/newsletter.svg';

const Newsletter = () => {
  return (
    <div className='mx-32 my-28'>
        <div className='border border-3 rounded-3xl bg-[#F6DEB2]'>
            <div className='flex flex-row items-center'>
                <div className='mx-[6rem]'>
                    <h2 className='text-3xl font-extrabold'>
                        Happy to Help!
                    </h2>
                    <p className='text-xl font-light text-[#4A4A4A] mt-[1.5rem] mb-[2rem]'>
                        Book a free consulting session with our expert
                    </p>
                    <button type='button' className="text-white bg-[#212529] hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                        Book a free Session
                    </button>
                </div>

                <div>
                    <div>
                        <Image 
                                src={girl}
                                width={169}
                                height={42}
                                sizes="200x200"
                                alt="Logo"
                                className="w-full inline-block items-center"
                        />
                    </div>
                </div>
            </div>
        </div>
            </div>
   
  )
}

export default Newsletter;