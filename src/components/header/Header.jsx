import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {FaUserCircle} from 'react-icons/fa';
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';


const Header = () => {
    const [lightToggler, setLightToggler] = useState(false);
    const {currentUser, logoutUser, loading} = useAuth();
    // console.log(currentUser);
    return (
        <nav className="border-b border-b-success sticky top-0 z-50">
            <div className="navbar bg-base-100 container mx-auto px-2 lg:px-5">
                <div className="flex-1">
                    <Link to='/' className="font-semibold normal-case text-2xl text-success px-2 py-1 border-2 border-success rounded-md">CourseFul</Link>
                </div>
                <div className="flex-none gap-3">
                    <ul className="menu-horizontal p-0 gap-3">
                        <Link className="font-medium hover:text-success" to='/'>Home</Link>
                        <Link className="font-medium hover:text-success" to='/courses'>Courses</Link>
                        <Link className="font-medium hover:text-success" to='/blog'>Blogs</Link>
                    </ul>
                    {
                        !loading && currentUser && currentUser?.uid ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-outline bg-transparent hover:bg-success avatar flex items-center gap-2 border border-success hover:border-success">
                                    <div className="w-10 rounded-full">
                                        {
                                            currentUser.photoURL ? (
                                                <img src={currentUser.photoURL} alt={currentUser.displayName} />
                                            ) : (
                                                <FaUserCircle size={40} />
                                            )
                                        }
                                    </div>
                                    <span className='none sm:block'>{currentUser.displayName}</span>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link onClick={() => logoutUser()}>Logout</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to='/login' className="btn btn-outline btn-success">Log In</Link>
                        )
                    }
                    <div className='flex gap-2 items-center'>
                        <BsFillSunFill color={!lightToggler ? '#36D399' : ''} size={24} />
                        <input onChange={() => setLightToggler(!lightToggler)} type="checkbox" className="toggle toggle-sm" checked={lightToggler} />
                        <BsFillMoonFill color={lightToggler ? '#36D399' : ''} size={24} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;