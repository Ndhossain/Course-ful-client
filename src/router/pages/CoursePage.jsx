import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebarcategory from '../../components/coursepage/Sidebarcategory';

const CoursePage = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-center font-medium'>Our Courses</h1>
            <div className='flex flex-col md:flex-row mt-8 bg-slate-100 rounded-xl'>
                <Sidebarcategory />
                <Outlet />
            </div>
        </div>
    );
};

export default CoursePage;