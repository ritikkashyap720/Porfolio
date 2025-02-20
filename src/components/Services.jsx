import React from 'react'
import { motion } from "motion/react"
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { VscServer } from "react-icons/vsc";
import { PiFigmaLogo } from "react-icons/pi";

function Services() {
    return (
        <div className='flex flex-col w-full item-center justify-center py-20'>
            <motion.h1 initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }} className='strokeText text-center text-text-color uppercase text-6xl md:text-7xl md:tracking-[-2px] font-extrabold md:leading-[60px] mx-[20px]'>
                u<span className='notStrokeText'>n</span>mat<span className='notStrokeText'>c</span>h<span className='notStrokeText'>e</span>d e<span className='notStrokeText'>x</span>pe<span className='notStrokeText'>r</span>tis<span className='notStrokeText'>e</span>
            </motion.h1>

            <motion.h1 initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }} className='strokeText text-center text-text-color uppercase text-6xl md:text-7xl md:tracking-[-2px] font-extrabold md:leading-[60px] mx-[20px]'>
                <span className='notStrokeText'>a</span>cross <span className='notStrokeText'>mu</span>l<span className='notStrokeText'>ti</span>p<span className='notStrokeText'>le do</span>ma<span className='notStrokeText'>in</span>s
            </motion.h1>

            <motion.p initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }} className='text-center text-text-color-faded uppercase font-light text-sm w-[90%] md:w-[80%] md:text-xl mx-auto my-6 md:my-10'>If you can dream it, I can build it. From mobile apps that leverage cutting-edge technologies to enterprise-level server infrastructure, my services cover the full development stack.</motion.p>
            {/* cards */}
            <motion.div initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.1 } }} className='my-6 w-full flex flex-row items-center justify-center gap-8 flex-wrap '>
                <motion.div initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3 } }} className="book">
                    <div className='ml-[60px] flex flex-col justify-between h-[100%] py-3'>
                        <div>
                            <h1 className='uppercase text-[20px] mt-2'>Android <br /> Applications</h1>
                            <p className='text-gray-800 mt-2 w-[80%]'>Crafting robust, scalable, and intuitive Android apps with Kotlin, Java, or Flutter tailored to your specific needs.</p>
                        </div>
                        <div className='w-[90%] flex items-center justify-center bg-black text-white py-1 rounded'>
                            Let's Build !
                        </div>
                    </div>
                    <div className="cover">
                        <div className='border'>
                        </div>
                        <div className='cover-icons'>
                            <TbDeviceMobileCode size={160} color='white' />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3 } }} className="book">
                    <div className='ml-[60px] flex flex-col justify-between h-[100%] py-3'>
                        <div>
                            <h1 className='uppercase text-[20px] mt-2'>API <br /> Development</h1>
                            <p className='text-gray-800 mt-2 w-[80%]'>Developing and integrating high-performance REST APIs and custom backend systems modern technologies.</p>
                        </div>
                        <div className='w-[90%] flex items-center justify-center bg-black text-white py-1 rounded'>
                            Status : 200 Ok
                        </div>
                    </div>
                    <div className="cover">
                        <div className='border'>
                        </div>
                        <div className='cover-icons'>
                            <TbApi size={160} color='white' />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3 } }} className="book">
                    <div className='ml-[60px] flex flex-col justify-between h-[100%] py-3'>
                        <div>
                            <h1 className='uppercase text-[20px] mt-2'>Scalable <br /> Backend ARC.</h1>
                            <p className='text-gray-800 mt-2 w-[80%]'>Building a secure server to support your mobile app, with an emphasis on high performance, and reliability.</p>
                        </div>
                        <div className='w-[90%] flex items-center justify-center bg-black text-white py-1 rounded'>
                            Health <span className='h-2 w-2 bg-green-300 rounded-full mx-1 my-1'></span>
                        </div>
                    </div>
                    <div className="cover">
                        <div className='border'>
                        </div>
                        <div className='cover-icons'>
                            <VscServer size={160} color='white' />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3} }} className="book">
                    <div className='ml-[60px] flex flex-col justify-between h-[100%] py-3'>
                        <div>

                            <h1 className='uppercase text-[20px] mt-2'>Intuitive <br /> Ui/Ux Design</h1>
                            <p className='text-gray-800 mt-2 w-[80%]'>Crafting robust, scalable, and intuitive Android apps with Kotlin, Java, or Flutter tailored to your specific needs.</p>
                        </div>
                        <div className='w-[90%] flex items-center justify-center bg-black text-white py-1 rounded'>
                            Wow !
                        </div>
                    </div>
                    <div className="cover">
                        <div className='border'>
                        </div>
                        <div className='cover-icons'>
                            <PiFigmaLogo size={160} color='white' />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Services
