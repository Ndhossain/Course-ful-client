import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/logo/Logo';

const Footer = () => {
    const date = new Date();
    return (
        <footer className='bg-black text-white py-5 mt-10'>
            <div className='container mx-auto px-2 md:px-5'>
                <div className='text-md flex flex-col sm:flex-row gap-10 py-4'>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Help and Support</li>
                        <li>Affiliate</li>
                        <li>Investors</li>
                    </ul>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Settings</li>
                        <li>Sitemap</li>
                        <li>Accessibility statement</li>
                    </ul>
                </div>
                <div className='flex py-5 items-center border-t border-success'>
                    <Logo />
                    <p className='text-sm'>&copy; {date.getFullYear()} <Link to='/'>CourseFul</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;