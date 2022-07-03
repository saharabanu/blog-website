import React from "react";
import addvertise from "../../../../../assets/Gallery/galley-img1.jpg";

const Advertise = () => {
  return (
    <>
      <h4 className="text-center px-3 py-2 border mt-5 mb-3">AdvertiseMent</h4>
      <div className="advertise ">
        <div className="text-center">
          <h3>Fashion Blog</h3>
          <p>
            Get fresh updates about <br /> my work in your inbox
          </p>
          <button className="notfound-btn" style={{ textDecoration: "none", border: 0 }}>
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Advertise;
