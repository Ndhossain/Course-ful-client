import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroman from '../../assets/heroman.png';
import useAuth from '../../hooks/useAuth';

const Herosection = () => {
    const navigate = useNavigate();
    const { currentUser, loading } = useAuth();

    return (
        <div className='flex mt-10 justify-between gap-10 items-center basis-2/4'>
            <div className='p-5 lg:p-10 hidden md:block'>
                <div className='bg-success rounded-full'>
                    <img className='rounded-full'  src={heroman} alt="Man" />
                </div>
            </div>
            <div className='p-5 text-center md:text-left md:basis-3/4'>
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-semibold'>Learn with no limits</h1>
                <p className='mt-8 text-gray-500 text-base md:text-lg'>
                    Start, switch, or advance your career with courses. Learn in depth and grow your career. Proffesional courses that can inhance your knowladge, Beginner friendly courses to make a solid basic.
                </p>
                <button onClick={() => navigate(!loading && currentUser && currentUser.uid ? '/courses' : '/login')} type='button' className="btn-lg btn-success border border-success rounded text-white mt-8 hover:bg-transparent hover:text-black">{!loading && currentUser && currentUser.uid ? 'View Our Courses' : 'Join Now'}</button>
            </div>
        </div>
    );
};

export default Herosection;