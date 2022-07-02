import React from "react";

const SliderDesign = ({ text, img, category }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="hero-part1">
              <h2>{category}</h2>
              <h3>{text}</h3>
              <button className="hero-btn"> Read More</button>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 ">
            <div className="banner-img mb-5">
              <img className="  h-25" src={img} alt={text} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderDesign;
