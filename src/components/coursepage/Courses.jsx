import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coursecontainer from './Coursecontainer';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-5 md:basis-8/12 lg:basis-9/12'>
            {
                courses.map(course => <Coursecontainer key={course._id} course={course} />)
            }
        </div>
    );
};

export default Courses;