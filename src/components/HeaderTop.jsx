import React from 'react'
import banner from "../../public/banner.jpeg"
import Image from 'next/image'


export default function HeaderTop() {
  return (
    <div className=' '>
        <a href='https://t.me/NEETprep?utm_source=website&utm_medium=banner&utm_campaign=baby_test' target="_blank">
            <Image
                src={banner}
                alt='banner'
                height={42}
                width={1440}
                title='banner'
            />
        </a>
    </div>
  )
}

