import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="flex-1">
            <Link to='/' className="font-semibold normal-case text-2xl text-success px-2 py-1 border-2 border-success rounded-md">CourseFul</Link>
        </div>
    );
};

export default Logo;