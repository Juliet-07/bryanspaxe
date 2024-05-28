import React from "react";
import { Link } from "react-router-dom";
import ProcureImage1 from "../../assets/procure1.png";
import ProcureImage2 from "../../assets/procure2.png";
import Ready from "../../assets/improve.png";
import Vendor from "../../assets/vendor.png";
import Contract from "../../assets/contract.png";
import Order from "../../assets/order.png";
import Quality from "../../assets/qualityAssurance.png";

const Procurement = () => {
  const whyChoose = [
    {
      title: "Expertise and Experienced",
      text: "Our team has extensive experience for procurement in engineering projects",
    },
    {
      title: "Comprehensive Solutions",
      text: "We handle every aspect of procurement, from vendor selction to quality assurance",
    },
    {
      title: "Cost Efficiency",
      text: "We leverage our relationships and negotiation skills to secure best prices",
    },
    {
      title: "Reliability",
      text: "We ensure timely delivery and high quality materials, minimizing project delays",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 md:p-10 gap-6 md:gap-10">
      <p className="font-primaryRegular md:text-xl">Procurement Services</p>
      <div className="md:w-[862px] font-primaryBold text-xl md:text-4xl text-center leading-8 md:leading-10">
        Efficient and reliable procurement solutions for engineering projects
      </div>
      <div className="w-full flex items-stretch justify-evenly gap-4 my-6 md:my-10">
        <img
          src={ProcureImage1}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
        <img
          src={ProcureImage2}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="md:w-[692px] font-primaryRegular text-lg md:text-3xl leading-10">
          For your engineering projects, Bryanspaxe provides procurement
          services to enhance timely delivery of quality materials at
          competitive prices.
        </div>
        <p></p>
      </div>
      {/* Aspects */}
      <div className="w-full my-10 grid gap-10">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Vendor} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Vendor} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Vendor Selection</p>
              <hr className="w-[207px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Choosing the right vendors is critical to the success of any
                project. Our vendor selection service identifies and partners
                with the most reliable and reputable suppliers in the industry.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Benefits</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Access to network of trusted suppliers</li>
                <li>Assurance of high quality materials</li>
                <li>Competitive pricing through effective negotiations</li>
                <li>Strong long-term supplier partnerships</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Contract} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Contract} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[733px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Contract Negotiation</p>
              <hr className="w-[189px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Effective contract negotiation ensures that you get the best
                terms and conditions, protecting your interests and ensuring a
                smooth procurement process.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Benefits</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Optimal contracts terms that benefits your project</li>
                <li>Reduced risk and enhanced protection</li>
                <li>Cost saving through strategic negotiation</li>
                <li>Legal and regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Order} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Order} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[716px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Order Management</p>
              <hr className="w-[188px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Keep your projects running smoothly with our order management
                service that ensure timely processing and delivery
              </p>
              <p className="font-primarySemibold md:text-lg">Key Benefits</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Streamlined order processing and tracking</li>
                <li>On-time delivery of parts and services</li>
                <li>Effective inventory management</li>
                <li>Quick resolution of procurement issues</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Quality} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Quality} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Quality Assurance</p>
              <hr className="w-[197px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Get top-notch parts and materials with our quality assurance. We
                inspect, test, and certify everything to meet your standards
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>High quality and needs that meet specifications</li>
                <li>Reduced risk of defects and failures</li>
                <li>Compliance with industry standards and regulations</li>
                <li>Continous improvements in procurements quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* why choose */}
      <div className="font-primaryBold text-xl md:text-3xl text-center">
        Why Choose Our Procurement Services
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {whyChoose.map((why) => (
          <div className="w-[306px] md:w-[354px] h-[179px] bg-white shadow-xl shadow-[#000000]/20 flex flex-col items-center justify-center px-4">
            <p className="md:text-xl font-primarySemibold">{why.title}</p>
            <p className="font-primaryRegular leading-8 pt-3 md:pt-0 md:leading-10 text-sm md:text-base">
              {why.text}
            </p>
          </div>
        ))}
      </div>
      {/* Ready to Advance */}
      <div className="w-full h-[426px] md:h-[486px] bg-gradient-to-r from-[#01A003]/70 to-[#2F36A9]/80 rounded-3xl md:rounded-[100px] mt-10 flex flex-col-reverse md:flex-row items-center justify-around p-4">
        <div className="md:w-[486px] flex flex-col items-center ">
          <i className="text-white font-primaryBold md:text-2xl">
            Need to improve your procurement process? Chat with us about your
            engineering needs. Our reliable services can help you succeed
            efficiently.
          </i>
          <Link
            to="/contactUs"
            className="my-10 w-[125px] md:w-[254px] h-10 md:h-[54px] rounded bg-[#2F36A9] text-white font-primaryBold flex items-center justify-center text-sm md:text-xl"
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden md:block">
          <img src={Ready} />
        </div>
        <div className="block md:hidden">
          <img src={Ready} className="w-[319px] h-[137px]" />
        </div>
      </div>
    </div>
  );
};

export default Procurement;
