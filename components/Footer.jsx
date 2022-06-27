import React from 'react'
import Link from 'next/link'
import { FaAirbnb } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Footer = ({darkMode, setDarkMode}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
            className={darkMode? 'max-w-screen rounded-xl shadow-lg pt-8 pb-5 mx-auto bg-gray-800 transition-all duration-300 ease grid grid-cols-2 place-items-center space-y-4 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4' : 'max-w-screen rounded-xl shadow-lg pt-8 pb-5 mx-auto bg-gray-300 grid grid-cols-2 place-items-center space-y-4 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4'}>

            <div className={darkMode ? 'footer-menu-dark' : 'footer-menu-light'}>
                <h5 className="font-bold">Support</h5>
                <p>Accessiblity</p>
                <p>This is not a real site</p>
                <p>Mail Us</p>
                <p>Contact Us</p>
                <p>Write to Us</p>
            </div>
            <div className={darkMode ? 'footer-menu-dark' : 'footer-menu-light'}>
                <h5 className="font-bold">Community</h5>
                <p>Accessiblity</p>
                <p>This is not a real site</p>
                <p>Mail Us</p>
                <p>Contact Us</p>
                <p>Write to Us</p>
            </div>
            <div className={darkMode ? 'footer-menu-dark' : 'footer-menu-light'}>
                <h5 className="font-bold">Host</h5>
                <p>Accessiblity</p>
                <p>This is not a real site</p>
                <p>Mail Us</p>
                <p>Contact Us</p>
                <p>Write to Us</p>
            </div>
            <div className={darkMode ? 'footer-menu-dark' : 'footer-menu-light'}>
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
        </motion.div>
    )
}

export default Footer