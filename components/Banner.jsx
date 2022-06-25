import React from 'react'
import Image from 'next/image'
import bannerImage from "../Assets/resort.jpg"
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] transition-all ease-linear duration-300">
        <Image src={bannerImage} layout='fill' objectFit='cover' alt='image'/>
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg text-white font-bold">Not sure where to go</p>
            <button className="bg-white p-3 rounded-xl text-purple-500 font-bold my-3 hover:shadow-xl transition-all duration-300 ease-linear text-lg text-center shadow-md active:shadow-sm active:scale-90">I&apos;m flexible </button>
        </div>
    </div>
  )
}

export default Banner