import React from "react";
import Background from "../assets/aboutHero.png";
import MobileBG from "../assets/aboutHeroMobile.png";
import WhoWeAre from "../assets/whoWeAre.png";
import Mission1 from "../assets/mission1.png";
import Mission2 from "../assets/mission2.png";
import Mission3 from "../assets/mission3.png";
import Arrow from "../assets/arrow.png";
import MobileArrow from "../assets/mobileArrow.png";
import Quality from "../assets/quality.png";
import Integrity from "../assets/integrity.png";
import Innovation from "../assets/innovation.png";
import Focus from "../assets/focus.png";

const About = () => {
  return (
    <>
      {/* hero section */}
      <div
        className="hidden w-full h-[750px] relative bg-cover md:flex flex-col items-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="w-full h-full flex flex-col justify-center relative z-[3] bg-red-00">
          <div className="absolute flex flex-col p-6">
            <p className="text-white text-xl font-primarySemibold py-4">
              About Us
            </p>
            <div className="w-[674px] font-primaryBold text-3xl text-white leading-10">
              Offering premium engineering parts and services. From startup to
              industry leader, driven by excellence, creativity and customer
              satisfaction
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Hero */}
      <div
        className="w-full h-[550px] relative bg-cover md:hidden flex flex-col items-center mt-10"
        style={{
          backgroundImage: `url(${MobileBG})`,
        }}
      >
        <div className="w-full h-full flex flex-col justify-center relative z-[3] bg-red-00">
          <div className="absolute bottom-10 flex flex-col p-4">
            <p className="text-white text-xl font-primaryBold py-4">
              About Us
            </p>
            <div className="w-[254px] font-primarySemibold text-xl text-white">
              Offering premium engineering parts and services. From startup to
              industry leader, driven by excellence, creativity and customer
              satisfaction
            </div>
          </div>
        </div>
      </div>
      {/* who we are */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between p-4 md:p-10">
        <div>
          <img
            src={WhoWeAre}
            className="w-[389px] md:w-[610px] h-[248px] md:h-[415px]"
          />
        </div>
        <div>
          <div className="font-primaryBold text-center text-xl md:text-4xl my-4">
            Who We Are
          </div>
          <div className="md:w-[399px] leading-10 font-primaryRegular">
            We are a premier provider of spare parts procurement and engineering
            services, dedicated to supporting industries worldwide. Our focus on
            quality, innovation, and customer satisfaction ensures that we
            deliver exceptional products and services tailored to enhance the
            efficiency and productivity of our clients.
          </div>
        </div>
      </div>
      {/* Mission */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between md:p-10">
        <div
          className="hidden w-[500px] h-[500px] bg-[#2F36A9] md:flex items-center justify-center my-20"
          style={{ transform: "skewY(30deg)" }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{ transform: "skewY(-30deg)" }}
          >
            <p className="font-primaryBold text-4xl text-white">Our Mission</p>
            <div className="p-4 font-primaryRegular text-xl text-white leading-8">
              We strive to empower enterprises by providing dependable spare
              components and state-of- the-art engineering remedies. Our goal is
              to become the dependable ally that customers depend on to
              accomplish their operational objectives with top-notch products
              and professional services.
            </div>
          </div>
        </div>
        {/* Mobile Mission */}
        <div
          className="md:hidden w-[350px] h-[350px] bg-[#2F36A9] flex items-center justify-center my-20"
          style={{ transform: "skewY(25deg)" }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{ transform: "skewY(-25deg)" }}
          >
            <p className="font-primaryBold text-xl text-white">Our Mission</p>
            <div className="p-3 font-primaryRegular text-sm text-white leading-8 text-center">
              We strive to empower enterprises by providing dependable spare
              components and state-of- the-art engineering remedies. Our goal is
              to become the dependable ally that customers depend on to
              accomplish their operational objectives with top-notch products
              and professional services.
            </div>
          </div>
        </div>
        <div className="flex p-4 gap-4">
          <div className="grid gap-4">
            <img
              src={Mission1}
              className="w-[193.4px] md:w-[322px] h-[213px] md:h-[272px]"
            />
            <img
              src={Mission2}
              className="w-[193.4px] md:w-[322px] h-[213px] md:h-[272px]"
            />
          </div>
          <img
            src={Mission3}
            className="w-[194px] md:w-[327px] h-[450px] md:h-[584px]"
          />
        </div>
      </div>
      {/* Values */}
      <div className="w-full flex flex-col items-center justify-center p-4 md:p-10">
        <div className="font-primaryBold text-xl md:text-4xl">Our Values</div>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-10 my-10">
          <div className="w-[215px] h-[232px] flex flex-col items-center justify-center">
            <img src={Quality} />
            <p className="text-xl font-primaryBold py-4"> Quality</p>
            <p className="leading-10 font-primaryRegular">
              Dedication to providing the utmost quality goods and services.
            </p>
          </div>
          <div>
            <img src={Arrow} className="hidden md:block" />
            {/* <img src={MobileArrow} className="md:hidden block" /> */}
          </div>
          <div className="w-[207px] h-[202px] flex flex-col items-center justify-center">
            <img src={Integrity} />
            <p className="text-xl font-primaryBold py-4"> Integrity</p>
            <p className="leading-10 font-primaryRegular">
              Engaging in business with integrity and openness.
            </p>
          </div>
          <div>
            <img src={Arrow} className="hidden md:block" />
          </div>
          <div className="w-[247px] h-[234px] flex flex-col items-center justify-center">
            <img src={Innovation} />
            <p className="text-xl font-primaryBold py-4"> Innovation</p>
            <p className="leading-10 font-primaryRegular">
              Consistently exploring creative solutions to address changing
              client requirements.
            </p>
          </div>{" "}
          <div>
            <img src={Arrow} className="hidden md:block" />
          </div>
          <div className="w-[257px] h-[231px] flex flex-col items-center justify-center">
            <img src={Focus} />
            <p className="text-xl font-primaryBold py-4"> Customer Focus</p>
            <p className="leading-8 font-primaryRegular">
              Dedicated to meeting the needs of our clients and striving to
              exceed their expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
