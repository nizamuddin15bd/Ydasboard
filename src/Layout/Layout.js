import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='main font-serif bg-main-bg text-main-color'>
            <Navbar />
            <div className="container flex">
                <div className="menuContainer w-60 py-1 px-5 border-r-2 border-r-soft-bg">
                    <Menu />
                </div>
                <div className="contactContainer w-full py-1 px-5">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;