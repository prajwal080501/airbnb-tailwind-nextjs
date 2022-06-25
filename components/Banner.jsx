import React from 'react'
import Image from 'next/image'
import bannerImage from "../Assets/resort.jpg"
import {motion} from 'framer-motion'
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] transition-all ease-linear duration-300">
        <Image src={bannerImage} layout='fill' objectFit='cover' alt='image'/>
        <div className="absolute top-1/2 w-full text-center">
            <motion.p 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,ease:[0.6,0.05,-0.01,0.9]}}
            className="text-sm sm:text-lg text-white font-bold">Not sure where to go</motion.p>
            <motion.button
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
             className="bg-white p-3 rounded-xl text-purple-500 font-bold my-3 hover:shadow-xl transition-all duration-300 ease-linear text-lg text-center shadow-md active:shadow-sm active:scale-90">I&apos;m flexible </motion.button>
        </div>
    </div>
  )
}

export default Banner