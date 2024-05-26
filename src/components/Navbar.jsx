import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#2F36A9" : "black",
    };
  };

  return (
    <div className="w-full h-20 fixed top-0 left-0 flex items-center justify-between mx-auto p-4 px-6 md:px-10 2xl:px-20 z-10 text-black border-b-[#A9A5A5] bg-white">
      <img src={Logo} alt="Bryanspaxe" className="w-[60px] md:w-[98px]" />

      <nav className="text-[#1E1E1E] font-primaryRegular hidden md:flex">
        <NavLink to="/" className="p-2" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/aboutUs" className="p-2" style={activeStyle}>
          About us
        </NavLink>
        <NavLink to="/investmentPlans" className="p-2" style={activeStyle}>
          Services
        </NavLink>
        <NavLink to="/faq" className="p-2" style={activeStyle}>
          Blog
        </NavLink>
        <NavLink to="/contact-us" className="p-2" style={activeStyle}>
          Contact Us
        </NavLink>
      </nav>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineAlignRight size={20} color="#2F36A9" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-20 w-[414px] h-[350px] ease-in-out duration-500 bg-white z-20"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex flex-col items-center justify-center p-4 uppercase">
          <NavLink
            to="/"
            className="p-4 font-primarySemibold"
            style={activeStyle}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="p-4 font-primarySemibold"
            style={activeStyle}
          >
            About us
          </NavLink>
          <NavLink
            to="/investmentPlans"
            className="p-4 font-primarySemibold"
            style={activeStyle}
          >
            Services
          </NavLink>
          <NavLink
            to="/faq"
            className="p-4 font-primarySemibold"
            style={activeStyle}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact-us"
            className="p-4 font-primarySemibold"
            style={activeStyle}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
