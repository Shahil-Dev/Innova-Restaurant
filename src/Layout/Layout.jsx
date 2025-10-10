import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-20'>
                <Outlet></Outlet>
            </div>
           <div className=''>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Layout;