
import { HiRocketLaunch, HiMapPin } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useRef, useState } from "react";


const Contact = () => {
    const form = useRef();
    const [msg, setMsg] = useState('')
    const sendEmail = (e) => {
        e.preventDefault();
        setMsg('')
        emailjs.sendForm('service_sccjrni', 'template_qrbc4xn', form.current, 'tYJtdAx20n3Bxru2l')
            .then((result) => {
                if (result.text) {
                    setMsg('Message Sent')
                    toast.success('Message Sent.', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                    })
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setMsg('Message Limit is Over')
            });
    };

    return (


        <div className="navigation-bar2 min-h-[80vh]">
            <form ref={form} onSubmit={sendEmail} className="pt-20">
                <div className="w-1/2 mx-auto  ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-white text-lg">Name</span>
                        </label>
                        <input required name='name' type="text" placeholder="Name" className="input bg-slate-200 input-sm border-2 border-slate-600 " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-white">Email</span>
                        </label>
                        <input required name='email' type="text" placeholder="Email" className="input bg-slate-200 input-sm border-2 border-slate-600 " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-white">Message</span>
                        </label>
                        <textarea required name='message' className="textarea border-2 border-slate-600 bg-slate-200 " placeholder="Message"></textarea>

                    </div>
                    <div className="mt-6">
                        <button className="btn flex  hover:-translate-y-1 btn-sm hover:bg-slate-900 bg-slate-800 text-white "><span>Send Message</span> <HiRocketLaunch></HiRocketLaunch></button>
                        <p className='text-green-600 mt-3 z-20'>{msg}</p>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </form>
        </div>


    );
};

export default Contact;