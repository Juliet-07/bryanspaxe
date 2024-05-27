import React from "react";
import Logo from "../assets/logo.png";
import { AiOutlineCopyright } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full md:h-[487px] bg-gradient-to-r from-[#FFFFFF] to-[#2F36A9]/70 flex flex-col justify-between mt-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-around p-6 flex-grow">
        {/* 1 */}
        <div className="flex-col mb-4 md:mb-0">
          <div className="w-[155px] h-[123px] my-2">
            <img src={Logo} alt="Bryanspaxe" />
          </div>
          <div className="hidden text-base text-white font-primarySemibold w-[311px]">
            Investment opportunities in multiple markets, one account
          </div>
        </div>
        {/* 2 */}
        <div className="grid md:grid-cols-4 gap-4 text-[#1E1E1E] font-primarySemibold">
          <NavLink to="/aboutUs">About Us</NavLink>
          <div className="flex flex-col">
            <p>Services</p>
            <div className="grid text-sm text-[#2F36A9] font-primaryRegular">
              <p>Engineering Consultation</p>
              <p>Procurement Services</p>
              <p>Installation Services</p>
              <p>Maintenance & Support</p>
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
            Call us 091223344
          </div>
          <div className="text-gray-900">social media icons</div>
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
