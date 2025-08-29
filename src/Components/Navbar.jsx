import React from "react";
import { NavLink } from "react-router-dom";
import downArrow from "../assets/images/Group (3).jpg";


const Navbar = () => {
  return (
    <nav className="bg-black px-80">
      <div className="flex justify-between items-center text-xs py-3">
        <div className="flex flex-row gap-6">
          <div className="flex flex-row items-center gap-1">
            <NavLink to="Home" className="text-white">
              Home
            </NavLink>
            <img src={downArrow} alt="" className="h-1.5" />
          </div>
          <div className="flex flex-row items-center gap-1">
            <NavLink to="Shop" className="text-red-100">
              Shop
            </NavLink>
            <img src={downArrow} alt="" className="h-1.5" />
          </div>
          <div className="flex flex-row items-center gap-1">
            <NavLink to="Pages" className="text-red-100">
              Pages
            </NavLink>
            <img src={downArrow} alt="" className="h-1.5" />
          </div>
          <div className="flex flex-row items-center gap-1">
            <NavLink to="Blog" className="text-red-100">
              Blog
            </NavLink>
            <img src={downArrow} alt="" className="h-1.5" />
          </div>
          <NavLink to="About Us" className="text-red-100">
            About Us
          </NavLink>

          <NavLink to="Contact Us" className="text-red-100">
            Contact Us
          </NavLink>
        </div>

        <div className="text-white">
          <p>(219) 555-0114</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
