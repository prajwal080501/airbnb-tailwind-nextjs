import React from 'react'
import Image from 'next/image'

const LargeCard = ({img, title, description, buttonText}) => {
  return (
    <section className="mb-4 py-16 cursor-pointer relative ">
        <div className="relative h-96 min-w-[300px] shadow-xl hover:shadow-2xl transition-all duration-200 ease hover:scale-105 rounded-2xl">
            <Image src={img} layout="fill" objectFit="cover" alt="img" className="rounded-2xl "/>
        </div>
        <div className="absolute top-40 left-12">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>
            <button className="text-sm text-white bg-gray-900 p-4 rounded-lg shadow mt-3 hover:bg-white hover:text-gray-900 transition-all duration-300 ease-out cursor-pointer hover:shadow-xl">{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard