import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebarcategory from '../../components/coursepage/Sidebarcategory';

const CoursePage = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-center font-medium'>Our Courses</h1>
            <div className='flex mt-8'>
                <Sidebarcategory />
                <Outlet />
            </div>
        </div>
    );
};

export default CoursePage;