import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectsDiv from '../components/ProjectsDiv';
import axios from 'axios';

function ProjectDetails() {
    const { projectTitle } = useParams();
    const [projectsData, setProjectsData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/vijayjvvc/portfolio-backend/refs/heads/main/projects_data.json").then(data => {
            if (data.data.projects.find(({ title }) => title === projectTitle)) {
                setProjectsData(data.data.projects.find(({ title }) => title === projectTitle))
            }
        }
        ).catch(error => console.log(error));

    }, [])
    return (
        <div className='flex flex-col items-center w-full text-white '>
            <div className='w-full md:w-[80%] flex flex-row mt-8 items-center py-2.5 bg-bg-gray gap-3'>
                <IoIosArrowBack size={40} onClick={() => navigate(-1)} className='hover:cursor-pointer' />
                <h1 className='text-3xl uppercase font'>{projectsData ? projectTitle : "Project not found"}</h1>
            </div>
            <div className='w-full md:w-[80%] mx-5' style={{ height: "calc(100vh - 100px)" }}>
                {/* {projectsData && <ProjectsDiv data={projectsData.detailed_des} />} */}
                {projectsData ?
                    <iframe
                        srcDoc={projectsData.detailed_des}
                        frameBorder="0"
                        height="100%"
                        width="100%"
                    /> :
                    <div className="flex flex-col items-center justify-center  text-center px-4 " style={{ height: "calc(100vh - 100px)" }}>
                        <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-200">404</h1>
                        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Oops! Project Not Found</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            The project you're looking for doesn't exist or has been moved.
                        </p>
                        <button
                            onClick={() => navigate(-1)}
                            className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-300 transition hover:cursor-pointer"
                        >
                           Browse more project
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectDetails
