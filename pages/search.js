import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { compareAsc, format } from 'date-fns';
import { parseISO } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Pagination from '../components/Pagination'
export const Search = ({ searchResults, darkMode, setDarkMode, handleDarkMode }) => {
    // es6 desctructuring
    const Router = useRouter();

    const { search, location, checkInDate, checkOutDate, guests } = Router.query;
    // const formattedStartDate = format(new Date.parse((Router.query.checkInDate)), 'dd.MM.yyyy; HH:mm')
    // const formattedEndDate = format(new Date.parse((Router.query.checkOutDate)), 'dd.MM.yyyy; HH:mm')
    // const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div className={darkMode ? "bg-gray-800 tduration-300 ease" : "bg-gray-100"}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode} className={darkMode ? 'navbar-dark' : 'navbar-light'} placeholder={`${location} | ${checkInDate} | ${checkOutDate} | ${guests} guests`} />
            <main className="flex flex-col w-[100vw] lg:w-[70vw] mx-auto transition-all duration-300 eases">
                <motion.section
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9],delay:0.5 }}
                    className="mt-3  flex-grow pt-4 px-6">
                    <motion.p
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.5 }}
                        className={darkMode ? 'bg-gray-600  duration-300 ease text-white font-semibold mb-5 z-10 p-3 w-fit rounded-lg shadow text-xs' : 'bg-red-400 text-white font-semibold mb-5 z-10 p-3 w-fit rounded-lg shadow text-xs'}>300+ stays-{checkInDate} - {checkOutDate} - for {guests} guests</motion.p>
                    <h1 className={darkMode ? "text-3xl font-semibold mt-2 mb-6 text-white" : "text-3xl font-semibold mt-2 mb-6"}>Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-4 space-x-3 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className={darkMode ? 'h-6 w-6 mt-2 hover:text-red-500 transition-all ease duration-300 text-white' : 'h-6 w-6 mt-2 hover:text-red-500 transition-all ease duration-300'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.5 }}
                            className={darkMode ? 'button-dark' : 'button'}>Cancellation Flexibility</motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.5 }}
                            className={darkMode ? 'button-dark' : 'button'}>Type of place</motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.5 }}
                            className={darkMode ? 'button-dark' : 'button'}>Price</motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.5 }}
                            className={darkMode ? 'button-dark' : 'button'}>Rooms and beds</motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.5 }}
                            className={darkMode ? 'button-dark' : 'button'}>More Filter</motion.p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults.map((item, index) => (
                            <InfoCard darkMode={darkMode} key={item.img} img={item.img} location={item.location} title={item.title} description={item.description} star={item.star} total={item.total} price={item.price} />
                        ))}
                    </div>

                </motion.section>
                <Pagination darkMode={darkMode} />
            </main>
            <Footer darkMode={darkMode}/>
        </div>
    )
}

export default Search


export async function getServerSideProps(context) {
    const searchResults = await fetch('https://links.papareact.com/isz').
        then(res => res.json())
    return {
        props: {
            searchResults,
        }
    }
}
