import React from 'react'
import { motion } from "motion/react"
import Services from '../components/services'
import Projects from '../components/ProjectsHome'
import Contact from '../components/Contact'
import Fotter from '../components/Fotter'
import Hero1 from '../components/Hero1'
import TopNavbar from '../components/TopNavbar'

function Home() {
    return (
        <div className='bg-bg-gray'>
            <TopNavbar />
            <Hero1 />
            <Services />
            <Projects />
            <Contact />
            <Fotter />
        </div>
    )
}

export default Home
