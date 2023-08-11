import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative mt-6 bg-gradient-to-r from-slate-900 to-zinc-900 pt-11">
      <div className="px-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 space-y-6  border-b border-slate-800 pb-4">
        <div className=" text-center text-white">
          <img src={logo} alt="" className="md:w-auto w-2/4 mx-auto" />
          <p className="text-sm text-justify">
            It’s a special day when our beloved someone like any of our
            students, friends, College or University have to sit for their
            exams. Whether it is a exam for school, college just tell them to
            believe in themselves and want success and good performance.
          </p>
          <div className="md:flex items-center justify-center gap-5 mt-7">
            <p className="bg-white text-black p-3 rounded-full">
              <FaFacebookF />
            </p>
            <p className="bg-white text-black p-3 rounded-full">
              <FaTwitter />
            </p>
            <p className="bg-white text-black p-3 rounded-full">
              <FaLinkedinIn />
            </p>
          </div>
        </div>
        <div className="text-center text-white space-y-3">
          <h2 className="text-xl font-bold border-b-2 w-1/2 mx-auto border-slate-600 rounded-md md:mt-0 mt-6">
            Exam Platform
          </h2>
          <p className="hover:underline">MCQ Exam</p>
          <p className="hover:underline">Cheating</p>
          <p className="hover:underline">Student</p>
          <p className="hover:underline">Teachers</p>
          <p className="hover:underline">Testimonial</p>
        </div>
        <div className="text-center text-white space-y-3">
          <h2 className="text-xl font-bold border-b-2 w-1/2 mx-auto border-slate-600 rounded-md md:mt-0 mt-6">
            Who we service
          </h2>
          <p className="hover:underline">Schools</p>
          <p className="hover:underline">Higher education</p>
          <p className="hover:underline">University</p>
          <p className="hover:underline">Companies &Organizations</p>
        </div>
        <div className="text-center text-white space-y-3">
          <h2 className="text-xl font-bold border-b-2 w-1/2 mx-auto border-slate-600 rounded-md md:mt-0 mt-6">
            Resources
          </h2>

          <p className="hover:underline">Support</p>
          <p className="hover:underline">Exams Videos</p>
          <p className="hover:underline">Groups Chat</p>
          <p className="hover:underline">Technology</p>
        </div>
      </div>
      <p className="text-center text-slate-500 py-2">
        ©2023 Your Organization Name The Web Titans. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
