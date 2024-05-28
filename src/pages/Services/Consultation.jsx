import React from "react";
import { Link } from "react-router-dom";
import ConsultImage1 from "../../assets/consult1.png";
import ConsultImage2 from "../../assets/consult2.png";
import Ready from "../../assets/ready.png";
import Feasibility from "../../assets/feasibility.png";
import System from "../../assets/system.png";
import Project from "../../assets/project.png";
import Technical from "../../assets/technical.png";

const Consultation = () => {
  const whyChoose = [
    {
      title: "Experienced Team",
      text: "Our engineers bring decades of combined experience to every project.",
    },
    {
      title: "Customized Solutions",
      text: "We tailor our services to meet your specific needs.",
    },
    {
      title: "Proven Track Record",
      text: "Successful projects across various industries.",
    },
    {
      title: "Client-Centric Approach",
      text: "We prioritize your goals and work closely with you to achieve them.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 md:p-10 gap-6 md:gap-10">
      <p className="font-primaryRegular md:text-xl">Engineering Consultation</p>
      <div className="md:w-[768px] font-primaryBold text-xl md:text-4xl text-center leading-8 md:leading-10">
        Receive expert assistance at every stage of your project with our
        guidance
      </div>
      <div className="w-full flex items-stretch justify-evenly my-6 md:my-10">
        <img
          src={ConsultImage1}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
        <img
          src={ConsultImage2}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="md:w-[875px] font-primaryRegular text-lg md:text-3xl leading-10">
          Bryanspaxe offers engineering consultation services that support you
          from concept to completion with our team of expert engineers
        </div>
        <p></p>
      </div>
      {/* Aspects */}
      <div className="w-full my-10 grid gap-10">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Feasibility} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Feasibility} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Feasibility Studies</p>
              <hr className="w-[207px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Prior to initiating any project, it is essential to evaluate its
                feasibility. Our feasibility assessments offer thorough analysis
                and perspectives to ascertain the practicality of your project,
                enabling you to make well-informed choices.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>
                  Evaluating the technical requirements and potential
                  challenges.
                </li>
                <li>
                  Analyzing costs, financial benefits and financial viability
                </li>
                <li>
                  Accessing the practicality of the project in terms of
                  operation and resources.
                </li>
                <li>
                  Ensuring compliance with all relevant regulations and
                  standard.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={System} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={System} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>System Design</p>
              <hr className="w-[207px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Our system design services are tailored to create efficient and
                reliable systems that meet your specific operational needs. We
                work closely with you to develop designs that optimize
                performance and cost-effectiveness.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Tailored solutions to meet your unique requirements.</li>
                <li>
                  Seamless integration with existing systems and infrastructure
                </li>
                <li>Leveraging the latest technologies and best practices</li>
                <li>
                  Comprehensive documentation to support implementation and
                  maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Project} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Project} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Project Management</p>
              <hr className="w-[188px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Effective project management is essential for the successful
                completion of any engineering project. Our project management
                services ensure that your projects are completed on time, within
                budget, and to the highest standards.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>
                  Detailed plans and schedules to keep everything on track
                </li>
                <li>Efficient allocation and managing of resources</li>
                <li>Identifyinh and mitigating potential loss</li>
                <li>
                  Ensuring all aspects of the projects meet quality standards
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Technical} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Technical} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Technical Support</p>
              <hr className="w-[207px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Our technical support services provide ongoing assistance to
                help you overcome any challenges that arise during the project
                lifecycle. From troubleshooting to optimization, our team is
                here to support you.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Rapid troubleshooting of technical issues</li>
                <li>Enhancing system performance and maintenance</li>
                <li>Providing training and support to the team</li>
                <li>
                  Ongoing support to adopt to training needs and technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* why choose */}
      <div className="font-primaryBold text-xl md:text-3xl text-center">
        Why Choose Our Engineering Consultation
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
            Ready to advance your project? Talk to us about your engineering
            needs and how we can assist you in achieving your goals.
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

export default Consultation;
