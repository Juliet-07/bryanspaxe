import React from "react";
import { Link } from "react-router-dom";
import SupportImage1 from "../../assets/support1.png";
import SupportImage2 from "../../assets/support2.png";
import Ready from "../../assets/readySupport.png";
import Schedule from "../../assets/scheduled.png";
import Emergency from "../../assets/emergency.png";
import Spares from "../../assets/spareParts.png";
import Technical from "../../assets/technicalSupport.png";

const Support = () => {
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
      <p className="font-primaryRegular md:text-xl">Maintenance and Support</p>
      <div className="md:w-[829px] font-primaryBold text-xl md:text-4xl text-center leading-8 md:leading-10">
        Comprehensive maintenance and support for optimal performance
      </div>
      <div className="w-full flex items-stretch justify-evenly my-6 md:my-10">
        <img
          src={SupportImage1}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
        <img
          src={SupportImage2}
          className="w-[186px] md:w-[634px] h-[232px] md:h-[620px]"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="md:w-[875px] font-primaryRegular text-lg md:text-2xl leading-10">
          Our maintenance and support services are designed to help you keep
          your engineering systems in top shape, ensuring smooth operations and
          equipment longetivity
        </div>
        <p></p>
      </div>
      {/* Aspects */}
      <div className="w-full my-10 grid gap-10">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Schedule} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Schedule} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[761px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Scheduled Maintenance</p>
              <hr className="w-[167px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Stay ahead of issues with our scheduled maintenance services
                that include inspections and timely repairs, and detailed
                documentation of all activities.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Benefits</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Reduced risks of unexpected breakdowns</li>
                <li>Prolonged equipment lifespan</li>
                <li>Consistent performance and efficiency</li>
                <li>Detailed maintenance history for future reference</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Emergency} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Emergency} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Emergency Repairs</p>
              <hr className="w-[207px] md:w-[496px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Quick fixes when issues pop up- Our team is on call 24 hours
                speedy response times to keep your systems running smoothly.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Minimized downtime and operational disruption</li>
                <li>Rapid resolution of unexpected issues</li>
                <li>Expert repair services available at any time</li>
                <li>
                  Continued operation with temporary solution when needed.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="hidden md:block">
            <img src={Spares} />
          </div>
          <div className="block md:hidden w-[383px] h-[278px]">
            <img src={Spares} />
          </div>
          <div className="md:w-[718px] flex flex-col">
            <div className="w-[380px] md:w-[707px] h-[22px] md:h-[27px] my-2 flex items-baseline font-primaryBold md:text-xl text-[#2F36A9]">
              <p>Spare Parts Management</p>
              <hr className="w-[160px] md:w-[434px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="grid gap-4">
              <p className="font-primaryRegular md:text-lg leading-10 md:leading-[50px]">
                Keep your operations running smoothly with our spare parts
                management services.We ensure you have the parts you need when
                you need them.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Benefits</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Reduced downtime with readily available spare parts</li>
                <li>Assurance of high quality replacements</li>
                <li>Cost-effective inventory management</li>
                <li>Smooth and efficient parts replacements</li>
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
                Get expert assistance for system issues with our technical
                support services. Features include help desk support, on-site
                visits, remote monitoring, and training.
              </p>
              <p className="font-primarySemibold md:text-lg">Key Aspects</p>
              <ul className="font-primaryRegular list-disc px-6 text-sm md:text-lg leading-10">
                <li>Immediate access to technical expertise</li>
                <li>Proactive identification and resolutions of issues</li>
                <li>Enhanced skills and knowledge of your team</li>
                <li>Continuous support for uninterrupted operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* why choose */}
      <div className="font-primaryBold text-xl md:text-3xl text-center">
        Why Choose Our Maintenace and Support
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
            Need help maintaining optimal performance? Reach out to chat about
            maintenance and support.
          </i>
          <Link
            to="/contactUs"
            className="my-6 md:my-10 w-[125px] md:w-[254px] h-10 md:h-[54px] rounded bg-[#2F36A9] text-white font-primaryBold flex items-center justify-center text-sm md:text-xl"
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden md:block">
          <img src={Ready} />
        </div>
        <div className="block md:hidden">
          <img src={Ready} className="w-[319px] h-[192px]" />
        </div>
      </div>
    </div>
  );
};

export default Support;
