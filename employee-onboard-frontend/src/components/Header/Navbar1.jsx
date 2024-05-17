import React from 'react'
import { useContext } from 'react';
import AuthContext from "../../contexts/AuthContext";
import { Link } from 'react-router-dom';



function Navbar1() {

    const { user, logoutUser } = useContext(AuthContext);

    // logout user
    const handleLogout = () => {
        logoutUser();
    };

    if(user){
        console.log(user.first_name)
    }

    return (
        <div className=' h-16 border-b-2'>
            {user ? (
                <>
                    <div className=' flex justify-end'>
                        <div className='w-2/6 flex justify-around items-center h-16'>
                        <h1> Welcome! {user.first_name}</h1>
                        <button className='p-1 rounded bg-orange-600 px-2' onClick={handleLogout}>logout</button>
                        </div>
                    </div>
                </>
            ) : (
                <div className=' flex justify-end'>
                        <div className='w-2/6 flex justify-around items-center h-16'>
                        <Link to="/login" className="text-gray-800 hover:text-gray-600 font-medium">Login</Link>
                    <Link to="/signup" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-medium">Sign up</Link>
                        </div>
                </div>
            )}

        </div>
    )
}

export default Navbar1
