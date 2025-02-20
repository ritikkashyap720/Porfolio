import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import Typewriter from './TypeWriter'
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import SideRobot from './SideRobot';


function Hero1() {
    const scrollable = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollable,
    })

    const skewAngle = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
    const sqare1 = useTransform(scrollYProgress, [0, 0.2], [0, -500]);
    const sqare2 = useTransform(scrollYProgress, [0.3, 0.4], [0, -500]);
    const sqare3 = useTransform(scrollYProgress, [0.4, 0.5], [0, -1000]);
    const sqare4 = useTransform(scrollYProgress, [0.5, 0.6], [0, -1000]);

    return (
        <div className='flex items-start justify-center w-full relative md:w-[80%] mx-auto mt-10 md:mt-0' ref={scrollable}>
            <div className='flex flex-col gap-20 my-10 '>
                <div className='px-5  md:h-screen flex justify-center flex-col items-start'>
                    <h1>
                        <motion.span initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { delay: 0.3 } }} className='text-start font-noto-sans text-text-color text-5xl md:text-6xl md:tracking-[-2px] font-thin italic md:leading-[60px] '>
                            Hello, I’m
                        </motion.span>
                        <br className='hidden md:block' />
                        <Typewriter />
                    </h1>
                    <motion.p initial={{ y: 25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.9 } }} className='text-start font-noto-sans text-text-color-faded  text-sm md:text-xl my-6 md:my-10'>
                        Browse through some of the most challenging and rewarding
                        projects I’ve worked on, showcasing my ability to tackle
                        complex problems and deliver impactful solutions.
                    </motion.p>
                    <motion.button className='parentButton py-3 px-3 pl-[45px] rounded-[6px] relative text-white border-[#8880ea] border-[1px] '>
                        <motion.div className='childButton bg-[#56b8a9] w-[35px] h-[cal(100% - 4px)] absolute top-[4px] left-[4px] z-20 rounded-[6px] transition-all flex items-center justify-end'>
                            <TbArrowBadgeRightFilled size={40} />
                        </motion.div>
                        Let’s Collaborate
                    </motion.button>
                </div>
                <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }} className='flex md:w-[100%] lg:w-[50%] md:hidden justify-center items-center'>
                    <SideRobot />

                </motion.div>
                <div className='px-5 mt-36 md:h-screen flex justify-center flex-col items-start'>
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

            </div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }} className='hidden md:w-[100%] lg:w-[50%] md:flex justify-center items-center sticky top-80'>
                <SideRobot />

            </motion.div>
            {/* <motion.div className={`w-[100%] md:w-[100%] lg:w-[50%] flex flex-wrap h-[500px] sticky top-40 right-40 bg-amber-800`} style={{ skewY: skewAngle }}
            >
                <motion.div style={{ y: sqare1 }} className='w-[50%] h-[50%] bg-blue-100'></motion.div>
                <motion.div style={{ y: sqare2 }} className='w-[50%] h-[50%] bg-blue-200'></motion.div>
                <motion.div style={{ y: sqare3 }} className='w-[50%] h-[50%] bg-blue-300'></motion.div>
                <motion.div style={{ y: sqare4 }} className='w-[50%] h-[50%] bg-blue-400'></motion.div>
            </motion.div> */}

        </div >


    )
}

export default Hero1
