import React from 'react'
import Image from 'next/image'
const SmallCard = ({img,location,distance, darkMode, setDarkMode}) => {
  return (
    <div className={darkMode ? 'flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-900 hover:scale-105 transition-all transform duration-200 ease-out' : 'flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all transform duration-200 ease-out'}>
        <div className="relative h-16 w-16">
        <Image className="rounded-lg" src={img} layout='fill' objectFit='cover' alt='image'/>
        </div>
        <div>
            <h2 className="font-semibold text-lg">{location}</h2>
            <h3 className="text-gray-500">{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard