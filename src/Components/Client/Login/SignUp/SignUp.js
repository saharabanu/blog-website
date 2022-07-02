import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";

const SignUp = () => {
  return (
    <>
      <Navigation />
      <div>
        <div className="login-header">
          <h2 className="text-center fw-bold ">My Account</h2>
        </div>
        <div className="container user-login">
          <div className="border mt-4 shadow rounded py-5">
            <div className="row">
              <div className="col-md-6">
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_xlmz9xwm.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "400px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="col-md-6 ps-5">
                <h2>Sign Up</h2>
                <div className="login-part">
                  <div className="user_login-input">
                    <label className="d-block fw-bold">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      className="px-2 py-1 mb-2"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="user_login-input">
                    <label className="d-block fw-bold">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      className="px-2 py-1 mb-2"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="user_login-input">
                    <label className="d-block fw-bold">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      className="px-2 py-1 mb-2"
                      style={{ outline: "none" }}
                    />
                  </div>

                  <div className="user_login-input">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="notfound-btn"
                      style={{ border: 0 }}
                    />
                  </div>

                  <div className="mt-4 d-flex align-items-center justify-content-between">
                    {/* <span className="border-bottom w-25"></span> */}
                    <p className="text-xs text-gray-500 uppercase">
                      Already have an Account{" "}
                      <Link to="/login" style={{ color: "#9932cc" }}>
                        {" "}
                        <span>Sign In</span>
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
