import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Nav.css'
import examPic from '../../assets/exam.jpg'


const Nav = () => {


  const navbarLink_First = (
    <>
      <li><Link>Home</Link></li>
    </>
  )

  const navbarLink_Middle = (
    <>

      <details className='z-[1]' >
        <summary>Courses</summary>
        <ul className="p-2 navigation-bar rounded-lg md:rounded-none">
          <li><Link>Free Courses</Link></li>
          <li><Link>Paid Courses</Link></li>
        </ul>
      </details>

    </>
  )

  const navbarLink_Last = (
    <>
      <li><Link>Instructors</Link></li>
      <li><Link>Blog</Link></li>
      <li><Link to={'/contact'}>Contuct Us</Link></li>
      <li><Link>Notice</Link></li>
    </>
  )

const searchData=(e)=>{
e.preventDefault()
const data= document.getElementById('search').value

console.log(data)
}

  return (
    <>
      <div className="navbar z-[20] sticky top-0  container bg-base-100 navigation-bar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 navigation-bar">
              {/* navbarFirst */}
              {navbarLink_First}
              <li>
                {/* navbar_middle */}
                {navbarLink_Middle}
              </li>
              {/* navbar Last */}
              {navbarLink_Last}
            </ul>
          </div>
          <img className='w-[200px] hover:-translate-y-0.5 duration-200' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navbarFirst */}
            {navbarLink_First}
            <li tabIndex={0}>
              {/* navbar_middle */}
              {navbarLink_Middle}
            </li>
            {/* navbar Last */}
            {navbarLink_Last}
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={() => window.my_modal_3.showModal()} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className='btn navigation-bar border-none text-white shadow-md'><Link>Login</Link></button>
        </div>
      </div>


      {/* <div className='mx-auto '>
   <input type="text" placeholder="Type here" className="input  top-20 z-10 input-bordered w-full max-w-xs" />
   </div> */}

      {/* You can open the modal using ID.showModal() method */}

      <div>
        <dialog id="my_modal_3" className="modal modal-top max-w-[400px] mx-auto mt-[68px] ">
       
          <form method="dialog" className="modal-box navigation-bar ">
          <button className="btn z-20 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <input id='search' name='search' type="text" placeholder="Type here" className="input  top-20 z-10 input-bordered w-full max-w-xs" />
            <button onClick={searchData}  className="p-4 absolute right-14">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </form>
        </dialog>
      </div>

    </>
  );
};

export default Nav;