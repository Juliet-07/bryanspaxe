import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <main className="mt-10">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
