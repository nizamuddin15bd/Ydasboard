import React from 'react';
import { FaClinicMedical, FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { menu } from '../../menuData/data';

const Menu = () => {
    return (
        <div className='menu'>
            {
                menu.map((item) =>
                    <div className="item mb-3">
                        <span className='title text-soft-color text-sm '>{item.title}</span>
                        {
                            item.listItems.map((listItem =>
                                <Link className='flex space-x-3 items-center  text-sm pb-3 hover:bg-soft-bg hover:rounded-sm' to={listItem.url}>
                                    <span>{listItem.icon}</span>
                                    <span>{listItem.title}</span>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Menu;