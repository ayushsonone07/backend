import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp   } from "react-icons/fa";
import { useState } from 'react';
import { useAuth } from '../store/context';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <>
      <header className='shadow-xl rounded-xl md:h-14 pr-10 w-full h-full'>
        <div className="container">
          <div className="my-5 flex">
            <NavLink to="/" className="text-blue-900 font-bold ml-4 w-32">{user?user.username:"Ayush Sonone"}</NavLink>
          </div>
          <nav className='my-5 invisible md:visible'>
            <div> 
              <ul>
                <li className="text-slate-800 hover:font-bold ease-in-out duration-700 mx-7">
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li className="text-slate-800 hover:font-bold ease-in-out duration-700 mx-7">
                  <NavLink to="/About"> About </NavLink>
                </li>
                <li className="text-slate-800 hover:font-bold ease-in-out duration-700 mx-7">
                  <NavLink to="/Services"> Services </NavLink>
                </li>
                <li className="text-slate-800 hover:font-bold ease-in-out duration-700 mx-7">
                  <NavLink to="/Contact"> Contact </NavLink>
                </li>
                {isLoggedIn?
                  <li className="text-blue-500 hover:font-bold ease-in-out duration-700 mx-7">
                    <NavLink to="/Logout"> Logout </NavLink>
                  </li>:
                  <li className="text-blue-500 hover:font-bold ease-in-out duration-700 mx-7">
                    <NavLink to="/Login"> Login </NavLink>
                  </li>
                }
              </ul>

              {
                show?
                <div className='h-full content-start'>
                  <ul className='visible md:invisible grid grid-cols-12 mr-96'>
                    <li className="text-slate-800 hover:font-bold ease-in-out duration-700 col-span-12 my-9" onClick={()=>{setShow(false)}}>
                      <NavLink to="/"> Home </NavLink>
                    </li>
                    <li className="text-slate-800 hover:font-bold ease-in-out duration-700 col-span-12 my-9" onClick={()=>{setShow(false)}}>
                      <NavLink to="/About"> About </NavLink>
                    </li>
                    <li className="text-slate-800 hover:font-bold ease-in-out duration-700 col-span-12 my-9 " onClick={()=>{setShow(false)}}>
                      <NavLink to="/Services"> Services </NavLink>
                    </li>
                    <li className="text-slate-800 hover:font-bold ease-in-out duration-700 col-span-12 my-9" onClick={()=>{setShow(false)}}>
                      <NavLink to="/Contact"> Contact </NavLink>
                    </li>
                    {isLoggedIn?
                      <li className="text-blue-500 hover:font-bold ease-in-out duration-700 col-span-12 my-9" onClick={()=>{setShow(false)}}>
                        <NavLink to="/Logout"> Logout </NavLink>
                      </li>:
                      <li className="text-blue-500 hover:font-bold ease-in-out duration-700 col-span-12 my-9" onClick={()=>{setShow(false)}}>
                        <NavLink to="/Login"> Login </NavLink>
                      </li>
                    }
                  </ul>
                </div>:
                <div className='transition ease-in-out duration-1000'>
                  <ul className='visible md:invisible absolute'>
                    <button className='sm:hidden' onClick={()=>{setShow(true)}}>
                      <FaChevronDown className='visible md:invisible'/>
                    </button>
                  </ul>
                </div>
              }
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar