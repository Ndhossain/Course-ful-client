import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../layout/Layout';

const Sidebarcategory = () => {
    const categories = useContext(CategoryContext);
    return (
        <div>
            <h4 className='text-xl font-medium'>Categories</h4>
            <div>
                <ul className='flex flex-col gap-3 mt-5'>
                    {
                        categories.map(category => <Link key={category.id} to={`/courses/${category.id}`}>{category.name}</Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebarcategory;