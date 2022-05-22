import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../utilities/icons/logo.png';

const Header = () => {
   const navBar = (
     <>
       <li className="hover:bg-secondary hover:text-white text-secondary font-semibold rounded-lg">
         <Link to="/">Home</Link>
       </li>
       <li className="hover:bg-secondary hover:text-white text-secondary font-semibold rounded-lg">
         <Link to="/about">About us</Link>
       </li>
       <li className="hover:bg-secondary hover:text-white text-secondary font-semibold rounded-lg">
         <Link to="/myportfolio">My Portfolio</Link>
       </li>
       <li className="hover:bg-secondary hover:text-white text-secondary font-semibold rounded-lg">
         <Link to="/blogs">Blogs</Link>
       </li>
       <li className="hover:bg-secondary hover:text-white text-secondary font-semibold rounded-lg">
         <Link to="/reviwes">Reviwes</Link>
       </li>
       <li className="hover:bg-secondary hover:text-white text-secondary font-semibold rounded-lg">
         <Link to="/contactus">Contact Us</Link>
       </li>
     </>
   );
  return (
    <div>
      <div class="navbar bg-base-100 px-5 ">
        <div class="navbar-start">
          <div class="dropdown text-secondary ">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary font-semibold"
            >
              {navBar}
            </ul>
          </div>
          <Link to="/home" class="btn btn-ghost normal-case text-xl">
            <div className="grid justify-items-center">
              <img className="h-10 w-10" src={logo} alt="" />
              <p className="text-sm text-primary ">All Time Car Parts</p>
            </div>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-semibold ">{navBar}</ul>
        </div>
        <div class="navbar-end">
          <Link
            to="/log in"
            class="btn bg-secondary text-white hover:bg-white hover:text-secondary"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;