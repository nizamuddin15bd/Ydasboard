import React from 'react';
import { FaSistrix, FaDelicious, FaBorderStyle, FaRegBell, FaCentos } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='navbar flex items-center justify-between p-2'>
            <div className="logo">
                <p className='text-yellow-500'>Nizam<span className='text-green-600'> uddin</span></p>
            </div>
            <div className="icons flex space-x-4">
                <FaSistrix />
                <FaDelicious />
                <FaBorderStyle />
                <div className="notifiction flex relative">
                    <FaRegBell />
                    <span className='-top-2 -right-1 absolute text-white bg-red-500 rounded-full w-3 h-3 text-sm flex items-center justify-center'>1</span>
                </div>
                <div className="users"></div>
                <FaCentos />
            </div>
        </div>
    );
};

export default Navbar;