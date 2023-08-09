import React, { useEffect, useState } from 'react';
import Nav from '../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import examPic from '../assets/exam.jpg'
const Main = () => {
    const [showMainContent, setShowMainContent] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > -1) {
            setShowMainContent(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    if (showMainContent) {
        const a = () => {
            window.scrollTo(0, 0)
        }
        a()
    }

//className={` hero min-h-[100vh]  transition-opacity duration-300 ${showMainContent ? 'absolute -translate-y-96  opacity-0 hidden' : 'opacity-100'}`}





    return (
        <div className='relative'>

            <div className={` hero min-h-[100vh]  transition-opacity duration-700 ${showMainContent ? '  opacity-0 ' : 'opacity-100'}`}style={{ backgroundImage: `url(${examPic})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl text-white font-bold">Welcome to E-ExamPro</h1>
                        <p className="mb-5  text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
             
                    </div>
                </div>
            </div>
{/* className={`${showMainContent ? 'z-[10]' : 'hidden'} `} */}
            <div className={`transition-opacity duration-700 ${showMainContent ? ' absolute top-0  opacity-100' : 'opacity-0'} `}>
                <Nav />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;