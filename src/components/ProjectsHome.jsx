import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import projectPhoto from "../assets/images/photo.jpg"
import axios from 'axios'
import ProjectsDiv from './ProjectsDiv';
import { Link, useNavigate } from 'react-router-dom';

function Projects() {
    const [projectsData, setProjectsData] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/vijayjvvc/portfolio-backend/refs/heads/main/projects_data.json").then(data => {
            const mainProjects = data.data.projects.filter(project => data.data.main_list.includes(project.id))
            setProjectsData(mainProjects)
            console.log(mainProjects[0].project_src)
        }
        )
            .catch(error => console.log(error));

    }, [])

    console.log(projectsData)
    return (
        <div className='flex flex-col py-20 w-full items-center overflow-hidden '>
            <motion.h1 initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }} className='text-center text-text-color uppercase text-5xl md:text-6xl md:tracking-[-2px] font-extrabold md:leading-[60px] mx-[20px]'>
                Real Projects, Real Results
            </motion.h1>
            {projectsData && <motion.div initial={{ y: 90, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }} className='w-full flex  flex-row gap-5 items-center justify-center my-20'>
                <motion.div initial={{ x: 0, y: 0, scale: 0 }} whileInView={{ x: 110, scale: 1, transition: { delay: 1 }, rotate: -25 }} className='w-[300px] aspect-[3/4]  rounded-2xl z-3 overflow-hidden relative hidden md:flex'>
                    <img src={projectsData[0].project_src} alt="project" className='w-full h-full  object-cover' />
                    <div className='w-full py-3 absolute bottom-0 bg-[#00000075] text-white flex flex-col items-start px-2.5 justify-center'>
                        <h3>{projectsData[0].title}</h3>
                        <p className='line-clamp-1 '>{projectsData[0].description}</p>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 90, scale: 0 }} whileInView={{ x: 50, scale: 1, transition: { delay: 0.8 }, rotate: -15 }} className='w-[300px] aspect-[3/4]  rounded-2xl z-4 overflow-hidden'>
                    <img src={projectsData[1].project_src} alt="project" className='w-full h-full  object-cover' />
                    <div className='w-full py-3 absolute bottom-0 bg-[#00000075] text-white flex flex-col items-start px-2.5 justify-center'>
                        <h3>{projectsData[1].title}</h3>
                        <p className='line-clamp-1 '>{projectsData[0].description}</p>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 90, scale: 0 }} whileInView={{ y: -20, scale: 1, transition: { delay: 0.4 } }} className='w-[300px] aspect-[3/4]  rounded-2xl z-5 overflow-hidden'>
                    <img src={projectsData[2].project_src} alt="project" className='w-full h-full  object-cover' />
                    <div className='w-full py-3 absolute bottom-0 bg-[#00000075] text-white flex flex-col items-start px-2.5 justify-center'>
                        <h3>{projectsData[2].title}</h3>
                        <p className='line-clamp-1 '>{projectsData[0].description}</p>
                    </div>
                </motion.div>
                <motion.div initial={{ x: -90, scale: 0 }} whileInView={{ x: -50, scale: 1, transition: { delay: 0.8 }, rotate: 15 }} className='w-[300px] aspect-[3/4]  rounded-2xl z-6 overflow-hidden'><img src={projectsData[3].project_src} alt="project" className='w-full h-full  object-cover' />

                    <div className='w-full py-3 absolute bottom-0 bg-[#00000075] text-white flex flex-col items-start px-2.5 justify-center'>
                        <h3>{projectsData[3].title}</h3>
                        <p className='line-clamp-1 '>{projectsData[0].description}</p>
                    </div></motion.div>
                <motion.div initial={{ x: -90, y: 0, scale: 0 }} whileInView={{ x: -110, scale: 1, transition: { delay: 1 }, rotate: 25 }} className='w-[300px] aspect-[3/4]  rounded-2xl z-7 overflow-hidden hidden md:flex'><img src={projectsData[4].project_src} alt="project" className='w-full h-full  object-cover' />
                    <div className='w-full py-3 absolute bottom-0 bg-[#00000075] text-white flex flex-col items-start justify-center px-2.5'>
                        <h3>{projectsData[4].title}</h3>
                        <p className='line-clamp-1 '>{projectsData[0].description}</p>
                    </div></motion.div>
            </motion.div>}


            <motion.p initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }} className='text-center text-text-color-faded uppercase font-light text-sm w-[90%] md:w-[80%] md:text-xl mx-auto my-6 md:my-10'>
                Browse through some of the most challenging and rewarding
                projects I’ve worked on, showcasing my ability to tackle
                complex problems and deliver impactful solutions.
            </motion.p>
            <Link to="/projects" className='bg-white text-black py-2.5 px-5 uppercase rounded-4xl border-white border-2 hover:bg-transparent hover:text-white hover:cursor-pointer transition-all'> View all projects</Link>

        </div>
    )
}

export default Projects
