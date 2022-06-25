import Image from 'next/image'
import React from 'react'
import { FaAirbnb } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Error = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-red-400">
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
             className="w-[80vw] md:w-1/2 bg-white h-fit p-5 shadow-2xl flex  items-center rounded-lg" >
                <div className="w-full h-1/2 mx-auto  flex flex-col items-center">
                <h1 className="p-4 text-black font-bold text-2xl mx-auto">Sorry the page you are looking for could not be found</h1>
                <FaAirbnb className="text-red-400 text-5xl " />
                <p className="text-center font-semibold mt-3  text-xl">Airbnb</p>
                </div>
            </motion.div>
        </div>

    )
}

export default Error