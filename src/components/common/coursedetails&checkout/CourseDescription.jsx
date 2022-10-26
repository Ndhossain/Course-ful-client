import React from 'react';

const CourseDescription = ({ courseDetail }) => {
    const {picture, name, creator, details, price, description, registered, language} = courseDetail;

    return (
        <div className="max-w-3xl mx-auto bg-slate-50 p-4">
                <div className='flex flex-col-reverse sm:flex-row justify-between items-center border-b border-success py-2'>
                    <div>
                        <h1 className='text-xl font-medium'>Course Name: {name}</h1>
                        <p className='mt-2'><span className='font-medium'>Author:</span> {creator}</p>
                        <p className='mt-2'><span className='font-medium'>Published:</span> {registered}</p>
                    </div>
                    <img src={picture} alt={name} />
                </div>
                <div className='mt-5'>
                    <p><span className='font-medium'>Rating:</span> {details.ratings}</p>
                    <p><span className='font-medium'>Language :</span> {language}</p>
                    <p><span className='font-medium'>Price:</span> {price}</p>
                    <p className='mt-2'><span className='font-medium'>About this Course:</span> {description}</p>
                </div>
        </div>
    );
};

export default CourseDescription;