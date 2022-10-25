import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='container mx-auto px-2 lg:px-5'>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;