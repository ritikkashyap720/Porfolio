import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

function Projects() {
    const [projectsData, setProjectsData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/vijayjvvc/portfolio-backend/refs/heads/main/projects_data.json").then(data => {
            setProjectsData(data.data.projects)
        }
        ).catch(error => console.log(error));

    }, [])

    return (
        <div className='flex flex-col items-center w-full text-white relative gap-5 '>
            <div className='w-full md:w-[80%] flex flex-row mt-8 items-center sticky top-0 py-2.5 bg-bg-gray gap-3 transition px-5'>
                <IoIosArrowBack size={40} onClick={() => navigate(-1)} className='hover:cursor-pointer' />
                <h1 className='text-3xl uppercase font'>Projects</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-[80%] px-5'>
                {projectsData && projectsData.map((project, index) =>
                    <Link to={"/projects/" + project.title} key={index} className='hover:bg-gray-800 rounded-3xl p-1 transition shadow-2xl'>
                        <img className='w-[100%] aspect-video rounded-3xl object-cover' src={project.project_src} alt="" />
                        <div className='py-4 px-2.5'>
                            <h1 className='text-2xl '>{project.title}</h1>
                            <p className='text-gray-400'>{project.tag}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Projects
