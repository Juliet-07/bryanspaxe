import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
