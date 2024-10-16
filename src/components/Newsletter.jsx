import Image from 'next/image';
import React from 'react';
import girl from '../../public/newsletter.svg';

const Newsletter = () => {
  return (
    <div className='hidden lg:block md:block mx-24 my-28 w-auto h-auto'>
        <div className='flex items-center px-20 border border-3 rounded-3xl bg-[#f6deb2]'>
                <div >
                    <h2 className='text-3xl font-extrabold mt-4 lg:mt-0'>
                        Happy to Help!
                    </h2>
                    <p className='text-xl font-light text-[#4A4A4A] sm:mt-4 lg:mt-6 '>
                        Book a free consulting session with our Expert
                    </p>
                    <button 
                        type='button'
                        className="text-white bg-[#212529] hover:bg-blue-700 font-bold rounded-lg px-8 py-3 sm:mt-4 lg:mt-16">
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
                                className="w-auto items-center"
                        />
                    </div>
                </div>
            
        </div>
            </div>
   
  )
}

export default Newsletter;