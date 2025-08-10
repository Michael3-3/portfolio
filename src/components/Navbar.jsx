import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <div className="flex-1">
          
        </div>
        {/* // if the user in mobile view, the menu will be hidden and will be shown when the user clicks on the hamburger icon show a dropdown menu of options like About,myskills,projects,contact and if the user on desktop view the menu will be shown by default */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal p-0 mr-10 gap-4"> 
            <li><a href="#" className="btn btn-ghost rounded-2xl ">About</a></li>
            <li><a href="#" className="btn btn-ghost rounded-2xl ">My Skills</a></li>
            <li><a href="#" className="btn btn-ghost rounded-2xl ">Projects</a></li>
            <li><a href="#" className="btn btn-ghost rounded-2xl ">Contact</a></li>
          </ul>
        </div>
        {/* here is the mobile user show a hamburger icon and when the user clicks on it the menu will be shown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#" className="btn btn-ghost">About</a></li>
                <li><a href="#" className="btn btn-ghost">My Skills</a></li>
                <li><a href="#" className="btn btn-ghost">Projects</a></li>
                <li><a href="#" className="btn btn-ghost">Contact</a></li>
            </ul>
            </div>
      </div>
    </div>
  );

};

export default Navbar;
