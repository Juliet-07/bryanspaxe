import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Background from "../assets/aboutHero.png";
import MobileBG from "../assets/aboutHeroMobile.png";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  //   const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };
  const [contactDetails, setContactDetails] = useState(initialValues);
  const { first_name, last_name, email, phone_number, message } =
    contactDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleContactForm = async () => {
    const url = `${apiURL}/contacts`;
    try {
      await axios.post(url, contactDetails).then((response) => {
        console.log(response, "response");
        // let virtualPass = JSON.stringify(response.data.newForm);
        // localStorage.setItem("virtual-delegate-pass-details", virtualPass);
        // setModal(true);
      });
    } catch (error) {
      console.error("Error in API call:", error);
    }
  };
  return (
    <>
      {/* hero section */}
      <div
        className="hidden w-full h-[745px] relative bg-cover md:flex flex-col items-center"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="w-full h-full flex flex-col justify-center relative z-[3] bg-red-00">
          <div className="absolute flex flex-col p-6">
            <p className="text-white text-xl font-primarySemibold py-4">
              Contact Us
            </p>
            <div className="w-[611px] font-primaryBold text-3xl text-white leading-10">
              For any service help, technical aid, or project queries, reach out
              to us
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
              Contact Us
            </p>
            <div className="w-[254px] font-primarySemibold text-xl text-white">
              For any service help, technical aid, or project queries, reach out
              to us
            </div>
          </div>
        </div>
      </div>
      {/* Get In Touch */}
      <div className="w-full flex flex-wrap flex-col md:flex-row items-stretch 2xl:justify-between gap-6 p-4 md:p-10">
        <div className="w-full md:w-[515px] border border-[#A9A5A5] flex flex-col items-center justify-center gap-10 p-4">
          <p className="font-primaryBold text-xl md:text-4xl text-[#1E1E1E]">
            Get In Touch
          </p>
          <div className="w-[289.2px] md:w-[383px] h-[230px] md:h-[251px] bg-white shadow-xl shadow-[#000000]/20 flex flex-col items-center justify-center md:gap-6 p-4">
            <p className="font-primarySemibold text-xl text-[#1E1E1E]">
              Technical Support
            </p>
            <p className="leading-8 text-sm md:text-base text-center font-primaryRegular py-4">
              For technical assistance and troubleshooting, contact our
              technical support team
            </p>
            <div className="flex items-center">
              <span className="mr-2">
                <MdLocalPhone size={20} color="#078904" />
              </span>
              <p className="md:text-lg text-[#078904] font-primarySemibold">
                Call us 0912112200
              </p>
            </div>
          </div>
          <div className="w-[289.2px] md:w-[383px] h-[230px] md:h-[251px] bg-white shadow-xl shadow-[#000000]/20 flex flex-col items-center justify-center md:gap-6  p-4">
            <p className="font-primarySemibold text-xl text-[#1E1E1E]">
              General Inquiries
            </p>
            <p className="leading-8 text-sm md:text-base text-center font-primaryRegular py-4">
              For any general questions or information
            </p>
            <div className="flex items-center">
              <span className="mr-2">
                <MdEmail size={20} color="#078904" />
              </span>
              <p className="md:text-lg text-[#078904] font-primarySemibold">
                Email us info@bryanspaxe.com
              </p>
            </div>
          </div>
          <div className="w-[289.2px] md:w-[383px] h-[230px] md:h-[251px] bg-white shadow-xl shadow-[#000000]/20 flex flex-col items-center justify-center md:gap-6  p-4">
            <p className="font-primarySemibold text-xl text-[#1E1E1E]">
              Sales Inquiries
            </p>
            <p className="leading-8 text-sm md:text-base text-center font-primaryRegular py-4">
              For questions related to sales, quotes or product information
            </p>
            <div className="flex items-center">
              <span className="mr-2">
                <MdEmail size={20} color="#078904" />
              </span>
              <p className="md:text-lg text-[#078904] font-primarySemibold">
                Email us sales@bryanspaxe.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[747px] border border-[#A9A5A5] flex flex-col items-center gap-6 p-4">
          <p className="font-primaryBold text-xl md:text-4xl text-[#1E1E1E]">
            Send Us A Message
          </p>
          <form
            className="w-full px-4"
            onSubmit={handleSubmit(handleContactForm)}
          >
            <div className="flex flex-wrap md:gap-10 -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                  for="grid-password"
                >
                  Full Name
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  id="grid-password"
                  type="email"
                  placeholder="mail@gmail.com"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  id="grid-password"
                  type="email"
                  placeholder="mail@gmail.com"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-gray-700 text-sm font-primaryMedium mb-2"
                  for="grid-password"
                >
                  Phone Number
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  id="grid-password"
                  type="number"
                  placeholder="(250)1234567654321345"
                  name="phone_number"
                  value={phone_number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  for="message"
                  class="block mb-2 text-sm font-primaryMedium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-primaryRegular"
                  // placeholder="Write your thoughts here..."
                  name="message"
                  value={message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2F36A9] text-white rounded-lg p-4 text-center font-primarySemibold mt-20"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      {/* Visit Us */}
      <div className="w-full flex flex-col items-center justify-center gap-6 p-4 md:p-10">
        <div className="font-primaryBold text-xl md:text-4xl text-[#1E1E1E]">
          Visit Us In Our Office Location
        </div>
        <div className="text-center text-[#1E1E1E]">
          <p className="font-primarySemibold text-lg md:text-2xl">
            Head Office
          </p>
          <div className="flex items-center py-4 font-primaryRegular">
            <span className="mx-3">
              <FaLocationDot color="#078904" size={30} />
            </span>{" "}
            <p>7 Marina street, Lagos Island, </p>
          </div>
          <p className="font-primaryRegular">Lagos, Nigeria</p>
        </div>
        <div className="text-center">
          <p className="font-primarySemibold text-lg md:text-2xl py-3">
            Opening Hours
          </p>
          <p className="font-primaryRegular">
            Monday - Friday: 8:00AM - 5:00PM
          </p>
          <p className="font-primaryRegular py-2">Saturday - Sunday: Closed</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
