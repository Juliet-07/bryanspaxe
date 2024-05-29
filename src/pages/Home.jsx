import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/homeBg.png";
import WhyUsBg from "../assets/whyUsFrame.png";
import WhyUsBgMobile from "../assets/whyUsMobile.png";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Industry1 from "../assets/industry1.png";
import Industry2 from "../assets/industry2.png";
import Industry3 from "../assets/industry3.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import OEM from "../assets/oem.png";
import Supcon from "../assets/supcon.png";
import Hobre from "../assets/hobre.png";
import Registered from "../assets/secure.png";
import Consultation from "../assets/consultation.png";
import Procurement from "../assets/procurement.png";
import Installation from "../assets/installation.png";
import Support from "../assets/support.png";
import Axeela from "../assets/axeela.png";
import Total from "../assets/total.png";
import Navante from "../assets/navante.png";
import Dangote from "../assets/dangote.png";
import Bua from "../assets/bua.png";

const Home = () => {
  const exploreRef = useRef(null);

  const scrollToExplore = () => {
    exploreRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-[400px] md:h-[500px] relative bg-cover md:flex flex-col items-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative z-[3] bg-red-00">
          <div className="md:w-[798px] absolute bg-green-00 flex flex-col items-center justify-center md:p-4">
            <div className="font-primaryBold text-[#1E1E1E] text-lg md:text-4xl text-center">
              Simplified Procurement and Professional Installation of Automated
              Engineering Services
            </div>
            <div className="text-sm md:text-xl text-[#1E1E1E] font-primaryRegular my-4 text-center">
              Pioneering industry transformation with cutting edge automation
              solution
            </div>
            <div className="w-full flex items-center justify-center gap-4 p-4 m-4">
              {/* <div className="w-[156px] md:w-[254px] h-10 md:h-[54px] rounded-lg flex items-center justify-center font-primarySemibold text-white bg-[#2F36A9]">
                Free Estimate
              </div> */}
              <div
                onClick={scrollToExplore}
                className="w-full md:w-[254px] h-[54px] rounded-lg flex items-center justify-center font-primarySemibold text-[#2F36A9] border border-[#2F36A9] cursor-pointer"
              >
                Explore Services
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Men Section */}
      <div className="w-full flex items-center justify-center gap-4 md:gap-10">
        <img
          src={Image1}
          alt="Service Men"
          className="w-[186px] md:w-[500px] h-[232px] md:h-[500px] 2xl:w-[600px] 2xl:h-[630px] "
        />
        <img
          src={Image2}
          alt="Service Men"
          className="w-[186px] md:w-[500px] h-[232px] md:h-[500px] 2xl:w-[600px] 2xl:h-[630px] "
        />
      </div>
      {/* Why Choose Us */}
      <div
        className="hidden w-full h-[500px] md:h-[900px] 2xl:h-[1150px] relative bg-cover md:flex flex-col items-center bg-gradient-to-r from-[#0A5B17]/55 via-white to-[#08306D]/55 mt-6"
        style={{
          backgroundImage: `url(${WhyUsBg})`,
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative z-[3] bg-red-00">
          <div className="absolute bg-green-00 flex flex-col items-center justify-center md:p-4">
            <div className="font-primaryBold text-[#1E1E1E] text-lg md:text-4xl text-center p-4">
              Why Choose Us
            </div>
            <div className="md:w-[803px] md:h-[800px] flex items-center justify-center bg-gray-0 gap-4">
              <div className="grid grid-cols-3 md:gap-12 2xl:gap-20">
                <div></div>
                <div className="w-[354px] h-[179px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-4">
                  <p className="font-primarySemibold text-xl text-[#000000]">
                    Quality Assurance
                  </p>
                  <p className="text-lg text-[#1E1E1E] font-primaryRegular py-4">
                    Only the highest parts from trusted manufacturers
                  </p>
                </div>
                <div></div>
                <div className="w-[270px] h-[292px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-4">
                  <p className="font-primarySemibold text-xl text-[#000000]">
                    Expertise & Experience
                  </p>
                  <p className="text-lg text-[#1E1E1E] font-primaryRegular py-4">
                    Over 10 years of industry experience with a team of
                    certified professionals
                  </p>
                </div>
                <div></div>
                <div className="w-[270px] h-[292px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-4">
                  <p className="font-primarySemibold text-xl text-[#000000]">
                    Comprehensive Support
                  </p>
                  <p className="text-lg text-[#1E1E1E] font-primaryRegular py-4">
                    End-to-End solutions from procurements to installation and
                    ongoing maintenance
                  </p>
                </div>
                <div></div>
                <div className="w-[354px] h-[179px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-4">
                  <p className="font-primarySemibold text-xl text-[#000000]">
                    Customer Satisfaction
                  </p>
                  <p className="text-lg text-[#1E1E1E] font-primaryRegular py-4">
                    End-to-End solutions from procurements to installation and
                    ongoing maintenance
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Mobile */}
      <div
        className="md:hidden w-full h-[674px] relative bg-cover flex flex-col items-center bg-gradient-to-r from-[#0A5B17]/55 via-white to-[#08306D]/55 mt-6"
        style={{
          backgroundImage: `url(${WhyUsBgMobile})`,
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative z-[3] bg-red-00">
          <div className="absolute bg-green-00 flex flex-col items-center justify-center md:p-4">
            <div className="font-primaryBold text-[#1E1E1E] text-xl text-center p-4">
              Why Choose Us
            </div>
            <div className="h-[500px] flex items-center justify-center bg-gray-0 gap-4 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div></div>
                <div className="w-[158px] h-[110px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-3 text-xs">
                  <p className="font-primarySemibold text-[#000000]">
                    Quality Assurance
                  </p>
                  <p className="text-[#1E1E1E] font-primaryRegular leading-[20px] py-3">
                    Only the highest parts from trusted manufacturers
                  </p>
                </div>
                <div></div>
                <div className="w-[109px] h-[196.13px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-2 text-xs">
                  <p className="font-primarySemibold text-center text-[#000000]">
                    Expertise & Experience
                  </p>
                  <p className="text-[#1E1E1E] font-primaryRegular leading-[20px] py-3">
                    Over 10 years of industry experience with a team of
                    certified professionals
                  </p>
                </div>
                <div></div>
                <div className="w-[109px] h-[196.13px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-2 text-xs">
                  <p className="font-primarySemibold text-center text-[#000000]">
                    Comprehensive Support
                  </p>
                  <p className="text-[#1E1E1E] font-primaryRegular leading-[20px] py-3">
                    End-to-End solutions from procurements to installation and
                    ongoing maintenance
                  </p>
                </div>
                <div></div>
                <div className="w-[158px] h-[110px] bg-white shadow-[#000000]/10 shadow-xl flex flex-col items-center justify-center p-2 text-xs">
                  <p className="font-primarySemibold text-[#000000]">
                    Customer Satisfaction
                  </p>
                  <p className="text-[#1E1E1E] leading-[20px] font-primaryRegular py-2">
                    End-to-End solutions from procurements to installation and
                    ongoing maintenance
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Industries Served */}
      <div className="w-full hidden md:flex items-center justify-between gap-10 p-10">
        <div className="flex gap-4">
          <div className="grid gap-4">
            <img src={Industry1} className="w-[322px] h-[272px]" />
            <img src={Industry2} className="w-[322px] h-[272px]" />
          </div>
          <img src={Industry3} className="w-[327px] h-[584pxpx]" />
        </div>
        <div className="w-[489px] h-full p-4 flex flex-col">
          <p className="text-3xl font-primaryBold text-[#1E1E1E] text-center">
            Industries Served
          </p>
          <p className="text-xl font-primaryRegular text-[#1E1E1E] py-4">
            We cater to a diverse range of industries, ensuring specialized
            solutions for each sector’s unique challenges."
          </p>
          <div className="w-[240px] text-lg">
            <ul className="flex flex-col">
              <li className="flex items-center my-4">
                <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
                <div className="font-primaryRegular">Manufacturing</div>
              </li>
              <li className="flex items-center my-4">
                <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
                <div className="font-primaryRegular">Oil and Gas</div>
              </li>
              <li className="flex items-center my-4">
                <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
                <div className="font-primaryRegular">Power generation</div>
              </li>
              <li className="flex items-center my-4">
                <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
                <div className="font-primaryRegular">Water treatment</div>
              </li>
              <li className="flex items-center my-4">
                <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
                <div className="font-primaryRegular">And many more</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Industries Served Mobile */}
      <div className="w-full md:hidden flex flex-col items-center justify-center my-10 p-4">
        <div>
          <p className="text-xl font-primaryBold text-[#1E1E1E]">
            Industries Served
          </p>
          <p className="font-primaryRegular text-[#1E1E1E] py-4">
            We cater to a diverse range of industries, ensuring specialized
            solutions for each sector’s unique challenges."
          </p>
        </div>
        <div className="flex gap-4">
          <div className="grid gap-4">
            <img src={Industry1} />
            <img src={Industry2} />
          </div>
          <img src={Industry3} className="w-[194px]" />
        </div>

        <div className="w-[240px] text-lg">
          <ul className="flex flex-col">
            <li className="flex items-center my-4">
              <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
              <div className="font-primaryRegular">Manufacturing</div>
            </li>
            <li className="flex items-center my-4">
              <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
              <div className="font-primaryRegular">Oil and Gas</div>
            </li>
            <li className="flex items-center my-4">
              <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
              <div className="font-primaryRegular">Power generation</div>
            </li>
            <li className="flex items-center my-4">
              <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
              <div className="font-primaryRegular">Water treatment</div>
            </li>
            <li className="flex items-center my-4">
              <IoCheckmarkSharp size={25} color="#01A003" className="mr-6" />
              <div className="font-primaryRegular">And many more</div>
            </li>
          </ul>
        </div>
      </div>
      {/* Explore */}
      <div
        ref={exploreRef}
        className="w-full hidden md:flex flex-col items-center justify-center my-10 p-4"
      >
        <div className="font-primaryBold text-3xl">Explore Our Services</div>
        <div className="w-full grid grid-cols-2 gap-10 2xl:gap-20 p-6 2xl:p-10 mt-6">
          <div className="flex flex-col">
            <div className="w-[521px] h-[27px] my-2 flex items-baseline font-primaryBold text-xl text-[#2F36A9]">
              <p>Engineering Consultation</p>
              <hr className="w-[243px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-5xl text-[#01A003]">
                01
              </div>
              <div className="w-[454px] text-lg font-primaryRegular text-[#000000] leading-10">
                Our engineering consultation services are crafted to assist you
                from the initial idea to the ultimate execution. Our group of
                skilled engineers offers professional guidance and customized
                solutions to meet your particular requirements.
                <br />
                <Link to="/consultation">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={Consultation} />
          </div>
          <div>
            <img src={Procurement} />
          </div>
          <div className="flex flex-col">
            <div className="w-[521px] h-[27px] my-2 flex items-baseline font-primaryBold text-xl text-[#2F36A9]">
              <p>Procurement Services</p>
              <hr className="w-[243px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-5xl text-[#01A003]">
                02
              </div>
              <div className="w-[454px] text-lg font-primaryRegular text-[#000000] leading-10">
                We optimize your purchasing procedure to guarantee the
                acquisition of top-notch components at competitive rates. Our
                purchasing team utilizes an extensive network of reliable
                suppliers to fulfill your particular needs.
                <br />
                <Link to="/procurement">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[521px] h-[27px] my-2 flex items-baseline font-primaryBold text-xl text-[#2F36A9]">
              <p>Installation Services</p>
              <hr className="w-[243px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-5xl text-[#01A003]">
                03
              </div>
              <div className="w-[454px] text-lg font-primaryRegular text-[#000000] leading-10">
                Our installation services encompass all aspects, starting from
                site readiness to the ultimate activation of your systems. We
                guarantee the accurate installation of your equipment and its
                optimal functionality right from the outset.
                <br />
                <Link to="/installation">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={Installation} />
          </div>
          <div>
            <img src={Support} />
          </div>
          <div className="flex flex-col">
            <div className="w-[521px] h-[27px] my-2 flex items-baseline font-primaryBold text-xl text-[#2F36A9]">
              <p>Maintenance and Support</p>
              <hr className="w-[243px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-5xl text-[#01A003]">
                04
              </div>
              <div className="w-[454px] text-lg font-primaryRegular text-[#000000] leading-10">
                Ensure the smooth operation of your systems with our extensive
                maintenance and support solutions. We provide both regular
                maintenance and urgent repair services to reduce downtime and
                prolong the lifespan of your machinery.
                <br />
                <Link to="/support">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Explore Mobile */}
      <div
        ref={exploreRef}
        className="w-full md:hidden flex flex-col items-center justify-center my-10 p-4"
      >
        <div className="font-primaryBold text-xl">Explore Our Services</div>
        <div className="w-full grid gap-10 mt-6">
          <div>
            <img src={Consultation} className="w-[384px] h-[319px]" />
          </div>
          <div className="flex flex-col">
            <div className="w-[382px] h-[25px] my-2 flex items-baseline font-primaryBold text-lg text-[#2F36A9]">
              <p>Engineering Consultation</p>
              <hr className="w-[129px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-2xl text-[#01A003]">
                01
              </div>
              <div className="w-[342px] text-sm font-primaryRegular text-[#000000] leading-10">
                Our engineering consultation services are crafted to assist you
                from the initial idea to the ultimate execution. Our group of
                skilled engineers offers professional guidance and customized
                solutions to meet your particular requirements.
                <br />
                <Link to="/consultation">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={Procurement} className="w-[384px] h-[319px]" />
          </div>
          <div className="flex flex-col">
            <div className="w-[382px] h-[25px] my-2 flex items-baseline font-primaryBold text-lg text-[#2F36A9]">
              <p>Procurement Services</p>
              <hr className="w-[129px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-2xl text-[#01A003]">
                02
              </div>
              <div className="w-[342px] text-sm font-primaryRegular text-[#000000] leading-10">
                We optimize your purchasing procedure to guarantee the
                acquisition of top-notch components at competitive rates. Our
                purchasing team utilizes an extensive network of reliable
                suppliers to fulfill your particular needs.
                <br />
                <Link to="/procurement">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={Installation} className="w-[384px] h-[319px]" />
          </div>
          <div className="flex flex-col">
            <div className="w-[382px] h-[25px] my-2 flex items-baseline font-primaryBold text-xl text-[#2F36A9]">
              <p>Installation Services</p>
              <hr className="w-[129px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-2xl text-[#01A003]">
                03
              </div>
              <div className="w-[342px] text-sm font-primaryRegular text-[#000000] leading-10">
                Our installation services encompass all aspects, starting from
                site readiness to the ultimate activation of your systems. We
                guarantee the accurate installation of your equipment and its
                optimal functionality right from the outset.
                <br />
                <Link to="/installation">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={Support} className="w-[384px] h-[319px]" />
          </div>
          <div className="flex flex-col">
            <div className="w-[382px] h-[25px] my-2 flex items-baseline font-primaryBold text-lg text-[#2F36A9]">
              <p>Maintenance and Support</p>
              <hr className="w-[129px] border border-[#2F36A9] mx-2" />
            </div>
            <div className="flex py-4">
              <div className="mr-4 font-primaryBold text-2xl text-[#01A003]">
                04
              </div>
              <div className="w-[342px] text-lg font-primaryRegular text-[#000000] leading-10">
                Ensure the smooth operation of your systems with our extensive
                maintenance and support solutions. We provide both regular
                maintenance and urgent repair services to reduce downtime and
                prolong the lifespan of your machinery.
                <br />
                <Link to="/support">
                  <span className="underline text-[#2F36A9]">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className="w-full flex flex-col items-center justify-center md:my-12 2xl:my-20">
        <div className="font-primaryBold text-[#1E1E1E] text-xl md:text-3xl my-4">
          Our Partners
        </div>
        <div className="flex items-center">
          <img
            src={OEM}
            alt="OEM LOGO"
            className="w-20 md:w-[157.2px] h-10 md:h-[99.8px]"
          />
          <img
            src={Supcon}
            alt="Supcon LOGO"
            className="w-[123px] md:w-[272px] h-[22px] md:h-[48.6px]"
          />
          <img
            src={Hobre}
            alt="Hobre LOGO"
            className="w-[91px] md:w-[202px] h-[27.3px] md:h-[60.5px]"
          />
        </div>
      </div>
      {/* Choosing Partner */}
      <div className="w-full bg-[#08306D] my-10 p-10">
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-around">
            <div></div>
            <div className="md:w-[542px] font-primarySemibold text-lg md:text-2xl text-white">
              Choosing us as your partner for spare parts procurement and
              engineering services offers numerous advantages. Here are the key
              benefits you can expect when working with us:
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-4 mt-6">
            <div className="w-[375px] h-[284px] bg-[#92979E]/[12%] p-4 text-white border-l border-l-[#01A003]">
              <p className="text-center py-3 font-primaryBold">
                Extensive Range of Products
              </p>
              <p className="font-primaryRegular leading-10">
                A convenient destination for spare parts! Our Extensive range
                consists of high-quality mechanical, electrical, hydraulic,
                pneumatic, and customized elements to help you save time and
                energy.
              </p>
            </div>
            <div className="w-[375px] h-[284px] bg-[#92979E]/[12%] p-4 text-white">
              <p className="text-center py-3 font-primaryBold">
                Expert Engineering Services
              </p>
              <p className="font-primaryRegular leading-8">
                Our team of experienced engineers offers top-notch consulting,
                design, installation, and maintenance services. Leveraging our
                expertise, we can support you in improving your processes,
                enhancing efficiency, and ensuring the longevity of your
                equipment.
              </p>
            </div>
            <div className="w-[375px] h-[284px] bg-[#92979E]/[12%] p-4 text-white">
              <p className="text-center py-3 font-primaryBold">
                Customized Solutions
              </p>
              <p className="font-primaryRegular leading-8">
                We understand that every business has unique needs. That's why
                we offer tailored solutions to meet your specific requirements,
                whether it involves custom parts manufacturing, specialized
                equipment, or bespoke software development.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Clients */}
      <div className="w-full flex flex-col items-center justify-center my-10">
        <div className="font-primaryBold text-[#1E1E1E] text-xl md:text-3xl my-4">
          Our Clients
        </div>
        <div className="flex items-center gap-4 md:gap-10 px-4">
          <img
            src={Axeela}
            alt="Axeela LOGO"
            className="w-[67.76px] md:w-[190.23px] h-10 md:h-[120.72px]"
          />
          <img
            src={Total}
            alt="Total LOGO"
            className="w-[51pxpx] md:w-[143px] h-[22px] md:h-[61px]"
          />
          <img
            src={Navante}
            alt="Navante LOGO"
            className="w-[87px] md:w-[244.4px] h-[26.1px] md:h-[73.2px]"
          />
          <img
            src={Dangote}
            alt="Dangote LOGO"
            className="w-[63.85px] md:w-[179.3px] h-[33.13px] md:h-[93.02px]"
          />
          <img
            src={Bua}
            alt="Bua LOGO"
            className="w-[47.02px] md:w-[132px] h-[35.62px] md:h-[100px]"
          />
        </div>
      </div>
      {/* Registered */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex items-center font-primaryBold text-[#1E1E1E] text-xl md:text-3xl my-4">
          <span>
            <img
              src={Registered}
              alt="Trademark"
              className="w-6 md:w-10 h-6 md:h-10 mr-3"
            />
          </span>
          Securely Registered
        </div>
        <div className="font-primaryRegular mt-4 md:mt-10">RC: 210221251AC</div>
      </div>
    </>
  );
};

export default Home;
