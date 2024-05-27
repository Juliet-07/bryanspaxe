import React, { useEffect, useState } from "react";
import moment from "moment";
import Background from "../../assets/contactHero.png";
import MobileBG from "../../assets/contactHeroMobile.png";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACEID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries.items);
        });
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hidden w-full h-[745px] relative bg-cover md:flex flex-col items-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="w-full h-full flex flex-col justify-center relative z-[3]">
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
        className="w-full h-[400px] relative bg-cover md:hidden flex flex-col items-center mt-10"
        style={{ backgroundImage: `url(${MobileBG})` }}
      >
        <div className="w-full h-full flex flex-col justify-center relative z-[3]">
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
      {/* BlogList Proper */}
      <div className="w-full p-4 md:p-10">
        <div className="overflow-auto max-h-[500px] md:max-h-[700px]">
          <div className="grid gap-10">
            {blogPosts.map((post) => (
              <>
                {" "}
                <div
                  key={post?.sys?.id}
                  className="flex flex-col md:flex-row items-stretch justify-center"
                >
                  <div>
                    <img
                      src={post?.fields?.blogImage?.fields?.file?.url}
                      alt="Blog Post"
                    />
                  </div>
                  <div className="md:p-4 my-4 md:my-0 mx-4">
                    <p className="font-primaryBold text-[#01A003] md:text-2xl">
                      {post?.fields?.popularMachinesThatServeIndustryPurpose}
                    </p>
                    <p className="py-2 font-primaryRegular text-sm md:text-lg text-[#837C7C]">
                      {moment(post?.fields?.dateCreated).format(
                        "MMMM Do, YYYY h:mm A"
                      )}
                    </p>
                    <p className="font-primaryRegular text-sm md:text-lg text-[#1E1E1E] leading-8 md:leading-10">
                      {post?.fields?.blogSummary}
                    </p>
                    <Link
                      to={`/blogDetails/${post?.sys?.id}`}
                      className="font-primarySemibold underline pt-4 text-[#2F36A9]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <hr className="border border-[#A9A5A5]" />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
