import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    // <>
    //   <Navbar />
    //   <div className="flex-1">
    //     <main className="mt-10">{children}</main>
    //   </div>
    //   <Footer />
    // </>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-10 md:mt-0 md:pt-20 overflow-y-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
