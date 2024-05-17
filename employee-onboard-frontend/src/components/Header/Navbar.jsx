import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className=' h-screen border-r flex justify-evenly items-center flex-col w-3/12 bg-slate-600 text-white text-xl'>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            <div>
                OnBoardings
            </div>
            <div>
                Tasks
            </div>
        </div>
    )
}

export default Navbar
