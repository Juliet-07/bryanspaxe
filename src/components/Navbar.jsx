import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

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
      <Link to="/">
        <img src={Logo} alt="Bryanspaxe" className="w-[60px] md:w-[98px]" />
      </Link>

      <nav className="text-[#1E1E1E] font-primaryRegular hidden md:flex">
        <NavLink to="/" className="p-2" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/aboutUs" className="p-2" style={activeStyle}>
          About us
        </NavLink>
        <Menu as="div" className="relative inline-block text-left p-2">
          <div>
            <MenuButton className="inline-flex items-center justify-between font-primaryRegular">
              Services
              <BiChevronDown className="h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white grid gap-4 p-2 shadow-lg">
              <MenuItem>
                <NavLink
                  to="/consultation"
                  style={activeStyle}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Engineering Consultation
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/procurement"
                  style={activeStyle}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Procurement Services
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/installation"
                  style={activeStyle}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Installation Services
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/support"
                  style={activeStyle}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Maintenance & Support
                </NavLink>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        <NavLink to="/blog" className="p-2" style={activeStyle}>
          Blog
        </NavLink>
        <NavLink to="/contactUs" className="p-2" style={activeStyle}>
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
            ? "fixed left-0 top-20 w-[414px] h-[400px] ease-in-out duration-500 bg-white z-20"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex flex-col items-center justify-center p-4 uppercase">
          <NavLink
            to="/"
            className="p-4 font-primarySemibold"
            style={activeStyle}
            onClick={() => setNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="p-4 font-primarySemibold"
            style={activeStyle}
            onClick={() => setNav(false)}
          >
            About us
          </NavLink>
          <Menu
            as="div"
            className="relative inline-block text-left p-4 font-primarySemibold"
          >
            <div>
              <MenuButton className="inline-flex items-center justify-between uppercase">
                Services
                <BiChevronDown className="h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute left-1/2 z-10 mt-2 w-[300px] transform -translate-x-1/2 origin-top-left rounded-md bg-white grid gap-4 shadow-lg">
                <MenuItem>
                  <NavLink
                    to="/consultation"
                    style={activeStyle}
                    onClick={() => setNav(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Engineering Consultation
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    to="/procurement"
                    style={activeStyle}
                    onClick={() => setNav(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Procurement Services
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    to="/installation"
                    style={activeStyle}
                    onClick={() => setNav(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Installations Services
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    to="/support"
                    style={activeStyle}
                    onClick={() => setNav(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Maintenance & Support
                  </NavLink>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
          <NavLink
            to="/blog"
            className="p-4 font-primarySemibold"
            style={activeStyle}
            onClick={() => setNav(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contactUs"
            className="p-4 font-primarySemibold"
            style={activeStyle}
            onClick={() => setNav(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
