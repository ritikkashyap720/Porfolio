import React from 'react'
import { motion } from "motion/react"

function Fotter() {
    return (

        <div className='flex w-[80%] mx-auto justify-between py-10 border-t-4 border-white flex-wrap overflow-hidden'>
            <motion.p initial={{ x: -250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.1 } }} className='text-text-color text-2xl'>ALL RIGHTS RESERVED © 2025</motion.p>
            <motion.p initial={{ x: +250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.1 } }} className='text-text-color text-2xl'>Designed and Developed by <span className='text-[#7480ff]'>Vijay</span></motion.p>
        </div>


    )
}

export default Fotter
