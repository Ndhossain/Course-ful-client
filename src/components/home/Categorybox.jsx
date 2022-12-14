import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categorybox = ({category}) => {
    const navigate = useNavigate();
    const {id, name, img} = category;
    return (
        <div onClick={() => navigate(`/courses/${id}`)} className='bg-gray-100 p-5 flex flex-col items-center gap-7 cursor-pointer rounded-xl shadow-md hover:shadow-xl duration-300'>
            <img className='w-32' src={img} alt={name} />
            <h4 className='text-xl font-medium'>{name}</h4>
        </div>
    );
};

export default Categorybox;