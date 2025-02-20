import React from 'react'
import { motion } from "motion/react"
import SideRobot from './SideRobot'

function Hero2() {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col w-full pt-20 md:w-[80%] md:flex-row overflow-hidden items-center justify-center'>
                <div className='w-[100%] md:w-[100%] lg:w-[50%] px-5'>
                    <h1>
                        <motion.span initial={{ y: 25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }} className='text-start text-text-color uppercase text-5xl md:text-6xl md:tracking-[-2px] font-extrabold md:leading-[60px] '>
                            Developer Who Turns
                        </motion.span>
                        <br />
                        {/* <br className='hidden md:block' /> */}
                        <motion.span initial={{ y: 25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }} className='text-start animated-gradient-text uppercase text-5xl md:text-6xl md:tracking-[-2px] font-extrabold md:leading-[60px] '>
                            <span> Ideas Into Scalable </span>


                        </motion.span>
                        <br />
                        {/* <br className='hidden md:block' /> */}
                        <motion.span initial={{ y: 25, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.8 } }} className='text-start text-text-color uppercase text-5xl md:text-6xl md:tracking-[-2px] font-extrabold md:leading-[60px] '>
                            Solutions
                        </motion.span>
                    </h1>
                    <motion.p initial={{ y: 25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.9 } }} className='text-start font-noto-sans text-text-color-faded  text-sm md:text-xl my-6 md:my-10'>
                        Browse through some of the most challenging and rewarding
                        projects I’ve worked on, showcasing my ability to tackle
                        complex problems and deliver impactful solutions.
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6 } }} className='w-[100%] md:w-[100%] lg:w-[50%] flex justify-center items-center'>
                    <SideRobot />

                </motion.div>
            </div>
        </div>
    )
}

export default Hero2
