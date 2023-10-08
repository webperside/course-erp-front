import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default MainLayout;