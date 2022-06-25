import React from 'react'
import Link from 'next/link'
import { FaAirbnb } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="max-w-screen rounded-xl shadow-lg pt-8 pb-5 mx-auto bg-gray-300 grid grid-cols-2 place-items-center space-y-4 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4">
         
       <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Accessiblity</p>
            <p>This is not a real site</p>
            <p>Mail Us</p>
            <p>Contact Us</p>
            <p>Write to Us</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Accessiblity</p>
            <p>This is not a real site</p>
            <p>Mail Us</p>
            <p>Contact Us</p>
            <p>Write to Us</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Accessiblity</p>
            <p>This is not a real site</p>
            <p>Mail Us</p>
            <p>Contact Us</p>
            <p>Write to Us</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Accessiblity</p>
            <p>This is not a real site</p>
            <p>Mail Us</p>
            <p>Contact Us</p>
            <p>Write to Us</p>
        </div>
        <div className="transition-all mx-auto pt-8 duration-300 ease-linear w-1/2 flex items-center justify-left">
                <Link href="/">
                    <p className="ml-0 animate-bounce-slow text-red-500 hover:text-red-700 duration-300 ease-linear hover:scale-105 flex font-semibold text-2xl mx-4 my-3 cursor-pointer">
                        <span className=""><FaAirbnb className="sm:mr-5 text-red-500 mr-1 text-3xl" /></span>
                        airbnb
                    </p>
                </Link>
            </div>
    </div>
  )
}

export default Footer