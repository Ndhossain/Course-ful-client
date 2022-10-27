import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    console.log(error);

    return (
        <div className='min-w-screen min-h-screen flex flex-col justify-center items-center gap-2'>
            <h1 className='text-9xl font-bold text-success'>{error.status}</h1>
            <p className='text-xl font-medium'>Page {error.statusText}</p>
            <p className='text-base'>The page you are looking for does not seem to exist.</p>
            <button onClick={() => navigate('/')} className="btn btn-success hover:bg-transparent">Go To Home</button>
        </div>
    );
};

export default ErrorPage;