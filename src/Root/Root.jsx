import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Register from '../components/Home/register';


const Root = () => {
    return (
        <>
        <div className='text-3xl text-red-300 text-center'>
            <Navbar></Navbar>
            <Register></Register>
        </div>
        <Outlet></Outlet>
       
        </>
    );
}

export default Root;

