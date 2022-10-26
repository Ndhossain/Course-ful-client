import React, { useContext, useState } from 'react';
import { AiFillCaretDown,AiFillCaretUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../layout/Layout';

const Sidebarcategory = () => {
    const [categroyMenu, setCategoryMenu] = useState(false);
    const categories = useContext(CategoryContext);
    return (
        <div className='p-4 md:basis-4/12 lg:basis-3/12'>
            <h4 className='hidden md:block text-xl font-medium text-center'>Categories</h4>
            <button 
                className='md:hidden btn bg-slate-900 w-full gap-3'
                onClick={() => setCategoryMenu(!categroyMenu)}
            >
                Select Categories
                {categroyMenu ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </button>
            <div className='sticky top-[65px]'>
                <ul 
                    className={`${categroyMenu ? 'h-full' : 'h-0'} md:h-full overflow-hidden flex flex-col gap-3 mt-5`}
                >
                    {
                        categories.map(category => <Link className='p-3 hover:bg-success/10' key={category.id} to={`/courses/${category.id}`}>{category.name}</Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebarcategory;