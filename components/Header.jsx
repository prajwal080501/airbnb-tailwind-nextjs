import React from 'react'
import Link from "next/link";
import { FaAirbnb, FaSearch } from 'react-icons/fa'
import { GrLanguage } from 'react-icons/gr'
import { motion } from 'framer-motion';
import {
    GlobalAltIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid'
const Header = () => {
    return (
        <motion.header
        initial={{ opacity: 0,y:-100 }}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
         className="transition-all duration-300 ease-linear sticky top-0 z-50 grid justify-evenly grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="transition-all duration-300 ease-linear w-1/2 flex items-center justify-left">
                <Link href="/">
                    <p className="ml-0 text-red-500 hover:text-red-700 duration-300 ease-linear hover:scale-105 flex font-semibold text-2xl mx-4 my-3 cursor-pointer">
                        <span className=""><FaAirbnb className="sm:mr-5 text-red-500 mr-1 text-3xl" /></span>
                        airbnb
                    </p>
                </Link>
            </div>
            <div className="transition-all duration-300 ease-linear flex w-1/2 md:w-full  h-full lg:border-2 border-gray-200 rounded-3xl md:border-2  cursor-pointer items-center align-middle md:shadow-sm px-2 justify-between hover:border-4 hover:border-red-400 hover:shadow-xl">
                <input type="text" className=" flex-grow pl-2 outline-none" placeholder="Search places    " />
                <svg xmlns="http://www.w3.org/2000/svg" className=" hidden md:inline-flex h-9 w-9 bg-red-500 text-2xl text-white p-2 rounded-full  md:mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div className="transition-all duration-300 ease-linear flex items-center align-middle space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer hover:bg-gray-100 duration-300 ease-linear p-3 rounded-3xl">Become a Host</p>
                <GlobeAltIcon className=" hidden md:inline h-12 w-12 duration-300 ease-linear cursor-pointer hover:bg-gray-100 rounded-full p-2  " />
                <div className="flex shadow items-center space-x-2 border-2 p-2 cursor-pointer hover:text-black duration-300 ease-linear rounded-full">
                    <MenuIcon className="h-6 md:h-7"/>
                    <UserCircleIcon className="h-6 md:h-7" />
                </div>
            </div>
        </motion.header>
    )
}

export default Header