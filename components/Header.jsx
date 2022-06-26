import React from 'react'
import Link from "next/link";
import { FaAirbnb, FaSearch } from 'react-icons/fa'
import { GrLanguage } from 'react-icons/gr'
import { motion } from 'framer-motion';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
Date
import {
    GlobalAltIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
    UsersIcon
} from '@heroicons/react/solid'
import { useState } from 'react';
import { useRouter } from 'next/router';
const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const Router = useRouter();
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const closeDatePicker = () => {
        setStartDate(new Date());
        setEndDate(new Date());
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        Router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                checkInDate:startDate.toLocaleDateString('en-US', options),
                checkOutDate: endDate.toLocaleDateString('en-US', options),
                guests: numberOfGuests
            },
        });
        setTimeout(() => closeDatePicker(), 100);
    };


    const handleCancel = () => {
        setSearchInput(null);
    }
    return (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="transition-all duration-300 ease-linear sticky top-0 z-50 grid justify-evenly grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className=" w-1/2transition-all duration-300 ease-linear w-1/2 flex items-center justify-left">
                <Link href="/">
                    <p className="ml-0 animate-bounce-slow text-red-500 hover:text-red-700 duration-300 ease-linear hover:scale-105 flex font-semibold text-2xl mx-4 my-3 cursor-pointer">
                        <span className=""><FaAirbnb className="sm:mr-5 text-red-500 mr-1 text-3xl" /></span>
                        airbnb

                    </p>
                </Link>
            </div>
            <div className="transition-all duration-300 ease-linear flex w-1/2 md:w-full  h-full lg:border-2 border-gray-200 rounded-3xl md:border-2  cursor-pointer items-center align-middle md:shadow-sm px-2 justify-between lg:hover:border-4 lg:hover:border-red-400 lg:hover:shadow-xl">
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" className=" flex-grow pl-2 outline-none overflow-x-scroll duration-200 ease transform transition-all" placeholder={placeholder || "Search places" }/>
                <svg xmlns="http://www.w3.org/2000/svg" className=" hidden md:inline-flex h-9 w-9 bg-red-500 text-2xl text-white p-2 rounded-full  md:mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <div className="transition-all duration-300 ease-linear flex items-center align-middle space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer hover:bg-gray-100 duration-300 ease-linear p-3 rounded-3xl">Become a Host</p>
                <GlobeAltIcon className=" hidden md:inline h-12 w-12 duration-300 ease-linear cursor-pointer hover:bg-gray-100 rounded-full p-2  " />
                <div className="flex shadow items-center space-x-2 border-2 p-2 cursor-pointer hover:text-black duration-300 ease-linear rounded-full">
                    <MenuIcon className="h-6 md:h-7" />
                    <UserCircleIcon className="h-6 md:h-7" />
                </div>
            </div>
            {searchInput && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
                    exit={{ opacity: 0, y: -50 }}

                    className="flex flex-col col-span-3 mx-auto rounded-xl">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#fd5b61']}
                        onChange={handleSelect}
                        className="pt-5 shadow-xl rounded-xl pb-3 mb-5 z-100"
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl font-semibold flex-grow">Number of Guests</h2>
                        <UserIcon className="h-5" />
                        <input value={numberOfGuests} min={1} onChange={(e) => setNumberOfGuests(e.target.value)} className="w-12 pl-2 text-lg outline-none text-red-400" type="number" />
                    </div>
                    <div className="flex mt-5
                    ">
                        <button onClick={handleCancel} className=" text-gray-700 flex-grow">Cancel</button>
                        <button onClick={handleSearch} className=" border-2 border-red-500 bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-white hover:text-red-500 hover:shadow-xl duration-300 ease transition-all hover:border-2 hover:border-red-400 flex-grow" >Search</button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    )
}

export default Header