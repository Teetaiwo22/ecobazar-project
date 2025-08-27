import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black ">
      <div className="flex justify-between text-xs py-3">
        <div className="flex flex-row gap-6">
        <NavLink to="Home" className= "text-white">Home</NavLink>
        <NavLink to="Shop" className= "text-red-100">Shop</NavLink>
        <NavLink to="Pages" className= "text-red-100">Pages</NavLink>
        <NavLink to="Blog" className= "text-red-100">Blog</NavLink>
        <NavLink to="About Us" className= "text-red-100">About Us</NavLink>
        <NavLink to="Contact Us" className= "text-red-100">Contact Us</NavLink>
      </div>

      <div className="text-white">
        <p>(219) 555-0114</p>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
