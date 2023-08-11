import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='relative mt-6 bg-gradient-to-r from-slate-900 to-zinc-900 pt-11'>
            <div className='px-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 space-y-6  border-b border-slate-800 pb-4'>
                <div className=' text-center text-white space-y-1'>
                    <img src={logo} alt="" className='md:w-auto w-3/4 mx-auto' />
                    <p className='text-sm text-justify'>It’s a special day when our beloved someone like any of our students, friends, College or University have to sit for their exams. Whether it is a exam for school, college just tell them to believe in themselves and want success and good performance.</p>
                    <div className='md:flex items-center justify-center gap-5 text-center space-y-3'>
                        <p className='footer_social_icon md:mt-4'>
                            <FaFacebookF className='w-5 h-5 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                        <p className='footer_social_icon'>
                            <FaTwitter className='w-5 h-5 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                        <p className='footer_social_icon'>
                            <FaLinkedinIn className='w-5 h-5 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                    </div>
                </div>
                <div className='text-center text-white space-y-3' >
                    <h2 className='text-xl font-sans font-semibold pb-4 border-b-2 border-slate-600 rounded-md md:mt-0 mt-6'>Exam Platform</h2>
                    <p className='footer_exam'>MCQ Exam</p>
                    <p className='footer_exam'>Cheating</p>
                    <p className='footer_exam'>Student</p>
                    <p className='footer_exam'>Teachers</p>
                    <p className='footer_exam'>Testimonial</p>
                </div>
                <div className='text-center text-white space-y-3'>
                    <h2 className='text-xl font-sans font-semibold  pb-4 border-b-2 border-slate-600 rounded-md'>Who we service</h2>
                    <div>
                        <Link to='' className='footer_res'>Schools</Link>
                    </div>
                    <div>
                        <Link to='' className='footer_res'>Higher education</Link>
                    </div>
                    <div>
                        <Link to='' className='footer_res'>University</Link>
                    </div>
                    <div>
                        <Link to='' className='footer_res'>Companies &Organizations</Link>
                    </div>
                </div>
                <div className='text-center text-white space-y-3'>
                    <h2 className='text-xl font-sans font-semibold  pb-4 border-b-2 border-slate-600 rounded-md'>Resources</h2>
                    <div className=''>
                        <Link to='' className='footer_res '>Support</Link><br />
                    </div>
                    <div>
                        <Link to='' className='footer_res'>Exams Videos</Link>
                    </div>
                    <div>
                        <Link to='' className='footer_res'>Groups Chat</Link>
                    </div>
                    <div>
                        <Link to='' className='footer_res'>Technology</Link>
                    </div>
                </div>
            </div>
                <p className='text-center text-slate-500 py-2'>©2023 Your Organization Name The Web Titans. All rights reserved.</p>
        </div>
    );
};

export default Footer;