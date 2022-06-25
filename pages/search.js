import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
const search = () => {
    // es6 desctructuring
    const Router = useRouter();

    const { search, location, startDate, endDate, numberOfGuests } = Router.query;

    return (
        <div>
            <Header />
            <main className="flex">
                <motion.section
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
                    className="mt-3 px-5 flex-grow pt-4 px-6">
                    <p className='text-xs'>300+ stays for {numberOfGuests} number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {search}</h1>
                    <div className="hidden lg:inline-flex mb-4 space-x-3 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2 hover:text-red-500 transition-all ease duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and beds</p>
                        <p className="button">More Filter</p>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </div>
    )
}

export default search