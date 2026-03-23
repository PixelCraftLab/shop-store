import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-14 py-2 ">
      

      <h1 className="text-black text-xl ">
        Welcome to the smart stoor
      </h1>

      
      <div className="flex gap-4">
        <Link 
          to="/login" 
          className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Login
        </Link>

        <Link 
          to="/register" 
          className="bg-neutral-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Register
        </Link>
      </div>

    </div>
  )
}

export default NavBar