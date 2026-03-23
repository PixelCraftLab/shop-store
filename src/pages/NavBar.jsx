import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div>
        <Link to="/login" 
        className="bg-black text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link to="/register" 
        className="bg-white text-black px-4 py-2 rounded">
          Register
        </Link>
    </div>
  )
}

export default NavBar