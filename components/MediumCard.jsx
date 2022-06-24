import Image from 'next/image'
import React from 'react'

const MediumCard = ({img, title}) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition-all duration-300 ease-out hover:bg-gray-100">
        <div className="relative h-80 w-80 shadow-lg">
            <Image src={img} layout="fill" alt="img" className="rounded-xl p-4 mr-3" />
        </div>
        <h3 className="text-2xl mt-3 font-semibold">{title}</h3>

    </div>
  )
}

export default MediumCard