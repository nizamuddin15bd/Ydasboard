import React from 'react';
import { topDealUsers } from '../../menuData/data';

const TopBox = () => {
    return (
        <div className='topBox'>
            <h1 className='mb-5'>Top Deals</h1>
            <div className="List ">
                {
                    topDealUsers.map(user => (
                        <div className="Listitem flex items-center justify-between mb-8 " key={user.id}>
                            <div className="user flex items-center justify-center space-x-3">
                                <div className='img w-2 h-2 rounded-full bg-white p-3'></div>
                                <div className='userText flex flex-col '>
                                    <span className='text-sm font-bold'>{user.username}</span>
                                    <span className=' font-normal text-xs'>{user.email}</span>
                                </div>
                            </div>
                            <div className="amount text-xs">${user.amount}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TopBox;