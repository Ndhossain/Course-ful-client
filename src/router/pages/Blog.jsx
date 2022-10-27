import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blogcontainer from '../../components/blogpage/Blogcontainer';

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div className='mt-10'>
            <h1 className='text-center text-3xl font-medium'>My Blogs</h1>
            <div className='mt-10'>
                {
                    blogs.map((blog) => <Blogcontainer key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default Blog;