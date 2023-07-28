import React from 'react';
import TopBox from '../../components/TopBox/TopBox';
import ChartsBox from '../../components/ChartsBox/ChartsBox';
import BarChat from '../../components/BarChat/BarChat';
import PieChart from '../../components/PieChart/PieChart';

const Home = () => {
    return (
        <div className='home grid grid-cols-4 gap-5 auto-rows-2fr'>
            <div className="box box1 p-2 rounded-t-sm border border-1  border-soft-bg  row-span-3"><TopBox /></div>
            <div className="box box2 p-3 rounded-t-sm border border-1  border-soft-bg"><ChartsBox /></div>
            <div className="box box3 p-5 rounded-t-sm border border-1  border-soft-bg"><ChartsBox /></div>
            <div className="box box4 p-5 rounded-t-sm border border-1  border-soft-bg row-span-3"><PieChart /></div>
            <div className="box box5 p-5 rounded-t-sm border border-1  border-soft-bg"><ChartsBox /></div>
            <div className="box box6 p-5 rounded-t-sm border border-1  border-soft-bg"><ChartsBox /></div>
            <div className="box box7 p-5 rounded-t-sm border border-1  border-soft-bg row-span-2 col-span-2">box7</div>
            <div className="box box8 p-5 rounded-t-sm border border-1  border-soft-bg"><BarChat /></div>
            <div className="box box9 p-5 rounded-t-sm border border-1  border-soft-bg"><BarChat /></div>
        </div>
    );
};

export default Home;