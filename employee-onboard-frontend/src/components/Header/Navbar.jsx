import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/login" className="text-gray-800 hover:text-gray-600 font-medium">Login</Link>
            <Link to="/signup" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-medium">Sign up</Link>
        </div>
    )
}

export default Navbar
