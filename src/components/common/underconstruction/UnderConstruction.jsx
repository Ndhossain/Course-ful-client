import React from 'react';

const UnderConstruction = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl text-center font-bold text-success'>This page is under construction</h1>
            <img src={'https://www.a2hosting.com/blog/content/uploads/2021/01/Website-Design.jpg'} alt='page building' />
        </div>
    );
};

export default UnderConstruction;