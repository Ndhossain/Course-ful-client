import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="border-b border-b-success">
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
                    <Link to='/login' className="btn btn-outline btn-success">Log In</Link>
                    <div className="dropdown dropdown-end hidden">
                        <label tabIndex={0} className="btn btn-ghost avatar flex items-center gap-2 border border-success hover:border-success">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                            <span className='none sm:block'>Nahid</span>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;