import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { createClient } from "contentful";
import moment from "moment";

const BlogDetails = () => {
  const [blogPostDetails, setBlogPostDetails] = useState({});

  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACEID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  const { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setBlogPostDetails(entries.fields);
          console.log(blogPostDetails);
        });
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    getEntryById();
  }, []);
  return (
    <>
      {" "}
      <div className="w-full flex flex-col p-4 mt-20 2xl:px-20">
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="flex items-center p-2 w-[85px] h-10 border border-gray-100 rounded-lg"
          >
            <TbArrowBackUp color="#475467" />
            <span className="text-gray-600 mx-2">Back</span>
          </Link>
          <div className="text-sm md:text-lg font-primaryRegular text-[#1E1E1E]">
            {moment(blogPostDetails?.dateCreated).format(
              "MMMM Do, YYYY h:mm A"
            )}
          </div>
        </div>
        {/* Details */}
        <div className="w-full flex flex-col items-center justify-center gap-4 my-6">
          <div className="font-primaryBold text-xl md:text-3xl my-4">
            {blogPostDetails?.popularMachinesThatServeIndustryPurpose}
          </div>
          <div>
            <img src={blogPostDetails?.blogImage?.fields?.file?.url} />
          </div>
          <div className="leading-10 md:leading-[60px] font-primaryRegular md:text-xl">
            {blogPostDetails?.postContent}
          </div>
        </div>
      </div>
      {/* Related Articles */}
    </>
  );
};

export default BlogDetails;
