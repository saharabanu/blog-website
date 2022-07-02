import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
