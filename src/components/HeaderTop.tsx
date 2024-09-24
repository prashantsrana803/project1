import React from 'react'
import banner from "../../public/banner.jpeg"
import Image from 'next/image'


const imageLoader = () => {
    return `https://t.me/NEETprep?utm_source=website&utm_medium=banner&utm_campaign=baby_test`
}

export default function HeaderTop() {
  return (
    <div>
        <a href={imageLoader()} target="_blank" rel="noopener noreferrer">
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

