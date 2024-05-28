import React from "react";
import { Link } from "react-router-dom";
import InstallImage1 from "../../assets/install1.png";
import InstallImage2 from "../../assets/install2.png";
import Ready from "../../assets/readyInstall.png";
import Site from "../../assets/site.png";
import Equipment from "../../assets/equipment.png";
import Commission from "../../assets/commission.png";
import Training from "../../assets/trainingSupport.png";

const Installation = () => {
  const whyChoose = [
    {
      title: "Experienced Team",
      text: "Our technicians and engineers have extensive experience in installing complex engineering systems.",
    },
    {
      title: "Comprehensive Solutions",
      text: "We manage the entire installation from start to finish",
    },
    {
      title: "Quality and Precision",
      text: "We adhere to the highest standards of quality and precision",
    },
    {
      title: "Customer Focused",
      text: "We prioritize your needs and ensure minimal disruption",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 md:p-10 gap-6 md:gap-10">
      <p className="font-primaryRegular md:text-xl">Installation Services</p>
      <div className="md:w-[787px] font-primaryBold text-xl md:text-4xl text-center leading-8 md:leading-10">
        Professional and reliable installation for engineering project
      </div>
      <div className="w-full flex items-stretch justify-evenly gap-4 my-6 md:my-10">
        <img
          src={InstallImage1}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
        <img
          src={InstallImage2}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="md:w-[736px] font-primaryRegular text-lg md:text-3xl leading-10">
          Our installation services guarantees flawless execution for your
          engineering projects. Our experts manage every step from site prep to
          final testing, ensuring precise set up and efficient operation.
        </div>
        <p></p>
      </div>
      {/* Aspects */}
      <div className="w-full my-10 grid gap-10">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Site} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Site} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Site Preparation</p>
              <hr className="w-[207px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                To install any system smothly, we ensure site readiness through
                detailed assessment and infrastructure preparation, along with
                proper logistics planning and safety measures.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Benefits</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Minimize risks and potential delays</li>
                <li>Ensures a solid foundation for installation</li>
                <li>Streamlined logistics and efficient use of resources</li>
                <li>Safe and compliant worksite</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Equipment} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Equipment} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[381px] md:w-[751px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Equipment Installation</p>
              <hr className="w-[173px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Our team expertly installs engineering equipment, ensuring
                precision and compliance with specifications. We offer detailed
                planning, accurate installations, seamless integration, and
                thorough testing for optimal performance.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Benefits</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Expert installation by experienced technicians</li>
                <li>Compliance with manufacturer and industry standard</li>
                <li>Smooth integration with existing systems</li>
                <li>Optimized equipment performance</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Commission} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Commission} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Commissioning</p>
              <hr className="w-[188px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Commissioning completes the installation, testing everything to
                ensure it works properly and meets standards. It include system
                tests, performance checks, documentation, and client handover
                with training.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Ensure system are fully operational and efficient.</li>
                <li>Comprehensive documentation for future reference</li>
                <li>Smooth transition to operational use</li>
                <li>Empowered and knowledgeable staff</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Training} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Training} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[731px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Training and Support</p>
              <hr className="w-[180px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                We provide tailored training sessions to meet your team’s needs
                and ensure they can operate the new systems effectively.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Enhanced knowledge and skill of your team</li>
                <li>Reduced downtime and maintenace issue</li>
                <li>Ongoing support for continuous improvement</li>
                <li>Access to comprehensive resource materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* why choose */}
      <div className="font-primaryBold text-xl md:text-3xl text-center">
        Why Choose Our Installation Services
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
        <div className="md:w-[486px] flex flex-col items-center py-3">
          <i className="text-white font-primaryBold md:text-2xl">
            Ready for a successful installation? Contact us today to discuss
            your needs and discover how our services can ensure your project
            goals are achieved reliably and efficiently.
          </i>
          <Link
            to="/contactUs"
            className="my-4 md:my-10 w-[125px] md:w-[254px] h-10 md:h-[54px] rounded bg-[#2F36A9] text-white font-primaryBold flex items-center justify-center text-sm md:text-xl"
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden md:block">
          <img src={Ready} />
        </div>
        <div className="block md:hidden">
          <img src={Ready} className="w-[319px] h-[183px]" />
        </div>
      </div>
    </div>
  );
};

export default Installation;
