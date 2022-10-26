import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../layout/Layout';
import Categorybox from './Categorybox';

const HomeCategory = () => {
    const categories = useContext(CategoryContext);
    const navigate = useNavigate();
    console.log(categories);
    return (
        <div className='mt-10 flex flex-col items-center'>
            <h1 className='text-center text-3xl font-medium'>Popular Categories</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    categories.map((category, index) => {
                        if (index < 6) {
                            return <Categorybox key={category.id} category={category} />
                        }
                        return null;
                    })
                }
            </div>
            <button onClick={() => navigate('/courses')} className='btn btn-success mt-8'>View All</button>
        </div>
    );
};

export default HomeCategory;