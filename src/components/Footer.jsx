import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/footerLogo.png";
import { AiOutlineCopyright } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-[#FFFFFF] to-[#2F36A9]/70 flex flex-col justify-between mt-10">
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-evenly my-10 p-6 flex-grow">
        {/* 1 */}
        <div className="flex-col mb-4 md:mb-0">
          <div className="w-[300px] my-2">
            <img src={Logo} alt="Bryanspaxe" />
          </div>
          <div className="hidden md:flex flex-col text-base text-black font-primaryRegular">
            <div className="flex gap-4 text-gray-900 my-4">
              <a
                href="https://www.linkedin.com/company/bryanspaxe-integrated-services-limited/mycompany/"
                target="_blank"
              >
                <BsLinkedin size={30} />
              </a>
              <BsFacebook size={30} />
            </div>

            <p>Terms of Use and Privacy Policy</p>
          </div>
        </div>
        {/* 2 */}
        <div className="grid md:grid-cols-4 gap-4 text-[#1E1E1E] font-primarySemibold">
          <NavLink to="/aboutUs">About Us</NavLink>
          <div className="flex flex-col">
            <p>Services</p>
            <div className="grid gap-4 my-3 text-sm text-[#2F36A9] font-primaryRegular">
              <Link to="/consultation">Engineering Consultation</Link>
              <Link to="/procurement">Procurement Services</Link>
              <Link to="/installation">Installation Services</Link>
              <Link to="/support">Maintenance & Support</Link>
            </div>
          </div>
          <div>Blog</div>
          <NavLink to="/contactUs">Contact Us</NavLink>
        </div>
        {/* 3 */}
        <div className="flex flex-col md:items-center gap-6 my-4 md:my-0 text-[#078904] font-primarySemibold">
          <div className="flex items-center">
            <span className="mr-2">
              <MdOutlineLocalPhone size={20} />
            </span>
            Call us +2348172839005
          </div>
          <div className="flex gap-4 md:hidden text-gray-900">
            <a
              href="https://www.linkedin.com/company/bryanspaxe-integrated-services-limited/mycompany/"
              target="_blank"
            >
              <BsLinkedin size={30} />
            </a>
            <BsFacebook size={30} />
          </div>
        </div>
      </div>
      <hr className="border-t border-[#A9A5A5] w-full" />
      <div className="flex items-center justify-center md:uppercase text-[#373435] text-sm md:text-lg font-primaryRegular p-4">
        <span className="mx-2">
          <AiOutlineCopyright />
        </span>
        Copyright Bryanspaxe {new Date().getFullYear()} - All rights reserved
      </div>
    </div>
  );
};

export default Footer;
