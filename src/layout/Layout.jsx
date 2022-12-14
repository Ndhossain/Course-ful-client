import React, { createContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

export const CategoryContext = createContext();

const Layout = () => {
    const categories = useLoaderData();
    return (
        <CategoryContext.Provider value={categories}>
            <Header />
            <main className='container mx-auto px-2 lg:px-5'>
                <Outlet />
            </main>
            <Footer />
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </CategoryContext.Provider>
    );
};

export default Layout;