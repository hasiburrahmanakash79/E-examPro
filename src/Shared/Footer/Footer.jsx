import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='relative mt-6'>
            {/* <Wave className='h-24 absolute -top-8 ' mask="url(#mask)" fill="url(#gradient)" >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%" stopColor="#1277b0" />
                        <stop offset="90%" stopColor="#fff" />
                    </linearGradient>
                    <mask id="mask">
                        <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
                    </mask>
                </defs>
            </Wave> */}
            <div className='px-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 space-y-3 bg-slate-100 py-16 bg-gradient-to-r from-slate-900 to-zinc-900'>
                <div className='text-center text-white space-y-3'>
                    <h2 className='text-2xl md:text-3xl font-serif font-extrabold tracking-wider text-white italic'><span className=''>E</span>-<span>Exam</span><span className='text-orange-600'>Pro</span></h2>
                    <p className='text-lg '>Descriptors</p>
                    <p className='text-lg text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis totam numquam tenetur illo iste repudiandae odit eligendi alias at ullam.</p>
                    <p className='w-20 h-20 pt-3 mx-auto rounded-lg bg-sky-400'><span className='mt-6'>CEO Img</span></p>
                </div>
                <div className='text-center text-white md:space-y-3 space-x-1' >
                    <h2 className='text-2xl font-sans font-semibold  pb-4'>Exam Platform</h2>
                    <p className='footer_exam'>MCQ Exam</p>
                    <p className='footer_exam'>Cheating</p>
                    <p className='footer_exam'>Student</p>
                    <p className='footer_exam'>Teachers</p>
                    <p className='footer_exam'>Testimonial</p>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-2xl font-sans font-semibold pb-4'>Who we service</h2>
                    <Link to='' className='footer_ser'>Schools</Link><br />
                    <Link to='' className='footer_ser'>
                        Higher education</Link> <br />
                    <Link to='' className='footer_ser'>University</Link> <br />
                    <Link to='' className='footer_ser'>Companies & Organizations</Link>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-2xl font-sans font-semibold  pb-4'>Resources</h2>
                    <Link to='' className='footer_res'>Support</Link><br />
                    <Link to='' className='footer_res'>
                        Exams Videos</Link> <br />
                    <Link to='' className='footer_res'>Groups Chat</Link> <br />
                    <Link to='' className='footer_res'>Technology</Link> <br />
                    <div className='md:flex items-center justify-center gap-3 md:mt-5 mt-3 text-center space-y-3'>
                        <p className='footer_social_icon mt-[12px]'>
                            <FaFacebookF className='w-6 h-6 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                        <p className='footer_social_icon'>
                            <FaTwitter className='w-6 h-6 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                        <p className='footer_social_icon'>
                            <FaLinkedinIn className='w-6 h-6 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;