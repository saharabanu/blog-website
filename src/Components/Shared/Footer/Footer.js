import React from "react";
import { Link } from "react-router-dom";
// import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  const handleClick = () => {
    window.scroll({
      top: 10,
      right: 10,
      behavior: "smooth",
    });
  };
  // window.scroll({
  //   top: 100,
  //   left: 100,
  //   behavior: "smooth",
  // });
  return (
    <div className="">
      <button onClick={handleClick} className="scroll-btn">
        <i className="fa-solid fa-arrow-up scroll-icon"></i>{" "}
      </button>
      {/* <ScrollToTop smooth top="50" color="#4abd00" /> */}
      <div className="container footer">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="part-1">
              <h3 className="logo">Fashion Blog</h3>
              <p>
                we have been providing quality natural, organic and zero residue farm inputs to help
                growers meet their organic and sustainable farming objectives.
              </p>
              <div className="address">
                <p>
                  <i className="fa-solid fa-phone"></i> +8801752810246
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-envelope"></i> saharabanungn@gmail.com
                </p>
                <p>
                  <i className="fa-solid fa-location-dot"></i> MoghBazar, Dhaka-1207, Bangladesh
                </p>
                <p>
                  <i className="fa-solid fa-clock"></i> 10:00 - 18:00, Mon - Sat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <h4>Categories</h4>
            <div className="part-2 ">
              <Link to="/" className="link ">
                FASHION
              </Link>
              <br /> <br />
              <Link to="/" className="link">
                SPORTS
              </Link>
              <br /> <br />
              <Link to="/" className="link">
                TRAVEL
              </Link>
              <br /> <br />
              <Link to="/" className="link">
                TECHNOLOGIES
              </Link>
              <br /> <br />
              <Link to="/" className="link">
                LIFESTYLE
              </Link>
            </div>
          </div>
          <div className="col-md-3 ">
            <h4>Information</h4>
            <div>
              <Link to="/about" className="link ">
                About Me
              </Link>
              <br /> <br />
              <Link to="/contact" className="link ">
                Contact Me
              </Link>
              <br /> <br />
              <Link to="/login" className="link ">
                Login
              </Link>
              <br /> <br />
              <Link to="/home#blogs" className="link ">
                Blogs
              </Link>
            </div>
          </div>
          <div className="col-md-3 ">
            <h4>Social Links</h4>
            <div className="part-4">
              <form action="" className="footer-form">
                <input type="text" className="input" placeholder="Enter Email " />
                <input type="submit" className="footer-btn" value="Subscribe" />
              </form>
              <br />
              <div className="footer-links">
                <h5>Follow Us</h5>
                <hr className=" w-75" />
                <div className="">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom text-center pb-2">
        <p>
          Copyright © 2022 All Rights Reserved by <span>Sahara Banu</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
