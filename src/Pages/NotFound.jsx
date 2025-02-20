import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-200">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={()=>navigate(-1)}
        className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-300 transition hover:cursor-pointer"
      >
        Go Back Home
      </button>
    </div>
  )
}

export default NotFound
