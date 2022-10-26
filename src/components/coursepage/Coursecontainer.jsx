import React from 'react';

const Coursecontainer = ({course}) => {
    const {picture, name, creator, details, price, registered} = course;
    return (
        <div className="card shadow-xl bg-base-100 border-0 rounded-md hover:shadow-2xl duration-200">
            <img src={picture} alt={name} />
            <div className="card-body p-2 py-5">
                <h2 className="card-title">{name}</h2>
                <p>Author: {creator}</p>
                <p>Price: {price}</p>
                <p>Publish Date: {registered}</p>
                <div className='flex justify-between'>
                    <span>Ratings: {details.ratings}</span>
                    <span>Total sell: {details.totalSell}</span>
                </div>
            </div>
            <button className='btn bg-slate-200 border-0 text-black hover:text-white w-full rounded-none'>Purchase</button>
        </div>
    );
};

export default Coursecontainer;