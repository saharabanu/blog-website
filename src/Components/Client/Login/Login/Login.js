import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "../../../Shared/Navigation/Navigation";
import Footer from "../../../Shared/Footer/Footer";

const Login = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <Navigation />
      <div>
        <div className="login-header">
          <h2 className="text-center fw-bold text-white">My Account</h2>
        </div>
        <div className="container user-login bg-light">
          <div className="border shadow rounded pt-5 my-4 ">
            <div className="row container">
              <div className="col-md-6">
                <h2 className="pb-3 ms-5">Log In</h2>
                <div className="login-part ms-5">
                  <div className="user_login-input">
                    <label className="d-block fw-bold text-muted">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      className="px-2 py-1 mb-2"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="user_login-input">
                    <label className="d-block fw-bold text-muted">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      className="px-2 py-1 mb-2"
                      style={{ outline: "none" }}
                    />
                  </div>

                  <div className="user_login-input">
                    <button onClick={handleLogin} className="notfound-btn" style={{ border: 0 }}>
                      LogIn
                    </button>
                  </div>

                  <div className="mt-4 d-flex align-items-center justify-content-between">
                    {/* <span className="border-bottom w-25"></span> */}
                    <p className="text-xs text-gray-500 uppercase">
                      Don't have account?{" "}
                      <Link to="/signUp" style={{ color: "#9932cc" }}>
                        {" "}
                        Sign Up
                      </Link>{" "}
                    </p>
                    {/* <span className="border-bottom w-25"></span> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 img-fluid">
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_xlmz9xwm.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "400px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
