import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import Footer from "../../../Shared/Footer/Footer";
import Location from "../Location/Location";
import Comment from "../Comment/Comment";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="login-header">
        <h2 className="text-center fw-bold text-white">Contact</h2>
      </div>
      <Location />
      <Comment />

      <Footer />
    </>
  );
};

export default Contact;
