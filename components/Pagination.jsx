import { ArrowCircleLeftIcon } from '@heroicons/react/outline'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import React from 'react'

const Pagination = ({darkMode}) => {
  return (
    <div className="flex w-full items-center justify-center p-5 space-x-8">
        <ArrowCircleLeftIcon className="h-12 w-12 text-red-500 hover:scale-110 duration-300 transition-all transform ease cursor-pointer"/>
        <p className="border-2 h-10 w-10 flex items-center border-red-500 rounded-full p-3 hover:bg-red-500 hover:text-white duration-200 transition-all ease-linear hover:border-white cursor-pointer">1</p>
        <p className="border-2 h-10 w-10 flex items-center border-red-500  rounded-full p-3 hover:bg-red-500 hover:text-white duration-200 transition-all ease-linear hover:border-white cursor-pointer">2</p>
        <p className="border-2 h-10 w-10 flex items-center border-red-500  rounded-full p-3 hover:bg-red-500 hover:text-white duration-200 transition-all ease-linear hover:border-white cursor-pointer">3</p>
        <p className="border-2 h-10 w-10 flex items-center border-red-500  rounded-full p-3 hover:bg-red-500 hover:text-white duration-200 transition-all ease-linear hover:border-white cursor-pointer">4</p>
        <p className="border-2 h-10 w-10 flex items-center border-red-500  rounded-full p-3 hover:bg-red-500 hover:text-white duration-200 transition-all ease-linear hover:border-white cursor-pointer">5</p>
        <ArrowCircleRightIcon className="h-12 w-12 text-red-500 hover:scale-110 duration-300 transition-all transform ease cursor-pointer"/>
    </div>
  )
}

export default Pagination