import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectsDiv from '../components/ProjectsDiv';
import axios from 'axios';

function ProjectDetails() {
    const { projectTitle } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [projectsData, setProjectsData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/vijayjvvc/portfolio-backend/refs/heads/main/projects_data.json").then(data => {
            setIsLoading(false)
            if (data.data.projects.find(({ title }) => title === projectTitle)) {
                setProjectsData(data.data.projects.find(({ title }) => title === projectTitle))
            }
        }
        ).catch(error => console.log(error));
    }, [])
    return (
        <div className='flex flex-col items-center w-full text-white '>
            <div className='w-full md:w-[80%] flex flex-row items-center py-2.5 bg-bg-gray gap-3 px-5'>
                <IoIosArrowBack size={40} onClick={() => navigate(-1)} className='hover:cursor-pointer' />
                <h1 className='text-3xl uppercase font line-clamp-1'>{projectsData ? projectTitle : "Project not found"}</h1>
            </div>
            <div className='w-full md:w-[80%] mx-5' >
                {/* {projectsData && <ProjectsDiv data={projectsData.detailed_des} />} */}
                {!isLoading && <>
                    {
                        projectsData ? <>
                            {projectsData.detailed_des !== "" ? <iframe
                                srcDoc={projectsData.detailed_des}
                                // style={{height:"calc(100vh - 100px)",overflow:"hidden"}}
                                // height="calc(100vh - 100px)"
                                // width="100%"
                                className='iframe'
                                style={{
                                    position: "fixed",
                                    top: "60px",
                                    bottom: "0px",
                                    right: "0px",
                                    width: "100%",
                                    border: "none",
                                    margin: "0",
                                    padding: "0",
                                    overflow: "hidden",
                                    zIndex: "999999",
                                    height: "calc(100% - 60px"
                                }}
                            /> : <div className="flex flex-col items-center justify-center  text-center px-4 " style={{ height: "calc(100vh - 60px)" }}>
                                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Coming soon..😉</h2>
                                <p className="text-gray-500 dar k:text-gray-400 mt-2">
                                    The project you're looking for is currently under building process and will be available soon.
                                </p>
                                <button
                                    onClick={() => navigate(-1)}
                                    className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-300 transition hover:cursor-pointer"
                                >
                                    Browse more project
                                </button>
                            </div>}
                        </>

                            :
                            <div className="flex flex-col items-center justify-center  text-center px-4 " style={{ height: "calc(100vh - 100px)" }}>
                                <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-200">404</h1>
                                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Oops! Project Not Found</h2>
                                <p className="text-gray-500 dar k:text-gray-400 mt-2">
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
                </>}

                {isLoading && <div className="flex flex-col items-center justify-center  text-center px-4 " style={{ height: "calc(100vh - 100px)" }}>                 
                    <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Loading...</h2>
                </div>}
            </div>
        </div>
    )
}

export default ProjectDetails
