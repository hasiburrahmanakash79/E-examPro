import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
// import Wave from 'react-wavify';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ceo from "../../assets/user_img.png"
const Footer = () => {
    return (
        <div className='relative '>
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
            <div className='px-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 space-y-6 bg-slate-100 py-16 navigation-bar bg-gradient-to-r from-slate-900 to-zinc-900'>
                <div className=' text-center text-white space-y-3'>
                    <img src={logo} alt="" className='md:w-auto w-3/4 mx-auto' />
                    <p className='text-lg '>Descriptors</p>
                    <p className='text-lg text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis totam numquam tenetur illo iste repudiandae odit eligendi alias at ullam.</p>
                    <div className='w-28 h-28 mx-auto rounded-xl object-cover'>
                        <img src={ceo} alt="" className='rounded-xl' />
                    </div>
                </div>
                <div className='text-center text-white space-y-3' >
                    <h2 className='text-3xl font-sans font-semibold pb-4 border-b-2 border-slate-600 rounded-md md:mt-0 mt-6'>Exam Platform</h2>
                    <p className='footer_exam'>MCQ Exam</p>
                    <p className='footer_exam'>Cheating</p>
                    <p className='footer_exam'>Student</p>
                    <p className='footer_exam'>Teachers</p>
                    <p className='footer_exam'>Testimonial</p>
                </div>
                <div className='text-center text-white space-y-3'>
                    <h2 className='text-3xl font-sans font-semibold  pb-4 border-b-2 border-slate-600 rounded-md'>Who we service</h2>
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
                    <h2 className='text-3xl font-sans font-semibold  pb-4 border-b-2 border-slate-600 rounded-md'>Resources</h2>
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
                    <div className='md:flex items-center justify-center gap-3 md:mt-5 mt-3 text-center space-y-3'>
                        <p className='footer_social_icon md:mt-4'>
                            <FaFacebookF className='w-8 h-8 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                        <p className='footer_social_icon'>
                            <FaTwitter className='w-8 h-8 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                        <p className='footer_social_icon'>
                            <FaLinkedinIn className='w-8 h-8 mx-auto md:pt-0 translate-y-1/4' />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;