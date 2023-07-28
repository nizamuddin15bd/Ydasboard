import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ChartsBox = () => {
    return (
        <div className='chartsBox flex  w-full h-full'>
            <div className="boxInfo flex flex-col flex-1 w-2/4 justify-between">
                <div className="title flex  items-center justify-center ">
                    <div className='totalUser flex items-center justify-center  space-x-2'>
                        <FaUserCircle />
                        <span className='text-xs'>Total Users</span>
                    </div>
                </div>
                <h1>11.238</h1>
                <Link to={'/'}> View all</Link>
            </div>
            <div className="chartsInfo flex flex-col items-center justify-between  flex-1 w-2/4">
                <div className="charts w-2/3 h-2/3">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2}
                                dot={false}
                            />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text flex flex-col space-y-2 text-right">
                    <span>45%</span>
                    <span>this month</span>
                </div>
            </div>
        </div>
    );
};

export default ChartsBox;