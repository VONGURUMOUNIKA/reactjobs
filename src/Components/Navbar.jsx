import React from 'react'
import logo from '../assets/images/jobs.png'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  
  const LinkClass = ( {isActive} ) => 
    isActive ? 'text-white bg-teal-400 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' 
   : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';


  return (
    <nav className="bg-teal-950 border-b ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-12 w-auto brightness-300 hover:brightness-150 transition duration-300" src={logo} alt="React Jobs" />
                <span className=" md:block text-teal-300 text-2xl font-bold ml-3">
                  WorkNest
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={LinkClass}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    className={ LinkClass}
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/add-job"
                    className={LinkClass}
                  >
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar