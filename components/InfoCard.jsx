import React from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@heroicons/react/outline'
const InfoCard = ({ img, location, title, description, star, price, total }) => {
    return (
        <div className="mb-3 py-7 px-2 bg-white flex  border-b cursor-pointer hover:opacity-80 hover:shadow-lg duration-300 transition-all transform ease-linear pr-4 rounded-lg first:border-t">
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 transition-all duration-300 ease-linear'>
                <Image className="h-full ml-2 rounded-lg shadow-lg" src={img} alt="img" layout='fill' objectFit='cover'></Image>
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>
                        {location}
                    </p>
                    <HeartIcon className="h-7 cursor-pointer hover:text-red-400 duration-300 ease transition-all transform ease hover:scale-105" />
                </div>
                <h4 className='text-xl font-bold'>
                    {title}
                </h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-xs text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center"><StarIcon className="h-5 text-red-400"/> {star}</p>
                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoCard