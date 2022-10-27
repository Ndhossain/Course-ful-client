import React from 'react';

const Blogcontainer = ({blog}) => {
    return (
        <div className='mt-5 p-2 md:p-5 bg-slate-100 rounded-lg'>
            <h4 className='text-xl font-medium'>{blog.question}</h4>
            <p className='mt-3'>Ans: {blog.answer}</p>
        </div>
    );
};

export default Blogcontainer;