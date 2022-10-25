import React from 'react';

const Categorybox = ({category}) => {
    const {id, name, img} = category;
    return (
        <div className='bg-gray-100 p-5 flex flex-col items-center gap-7 cursor-pointer'>
            <img className='w-32' src={img} alt={name} />
            <h4 className='text-xl font-medium'>{name}</h4>
        </div>
    );
};

export default Categorybox;