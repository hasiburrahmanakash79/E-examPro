import React from 'react';
import Nav from '../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Main;