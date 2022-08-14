import React, { useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Navigation from "../../../Shared/Navigation/Navigation";
import Footer from "../../../Shared/Footer/Footer";
import useAuth from "../../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert } from "react-bootstrap";
const Login = () => {
  let navigate = useNavigate();
  const {user,loginUser,signinWithGoogle,isLoading,error} = useAuth();
  const location = useLocation();

  const emailRef = useRef();
  const psdRef = useRef();
  const handleSubmit = (e) => {
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    const data = {
      email,
      password,
    };

    e.preventDefault();
    loginUser(data.email, data.password,location,navigate);
   
    // navigate("/dashboard", { replace: true });
    // console.log(data);
  };
  const handleGoogleSignIn =()=>{
    signinWithGoogle(location,navigate);
  }

  // const handleLogin = () => {
  //   navigate("/dashboard", { replace: true });
  // };

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
                <form onSubmit={handleSubmit}>
                <div className="login-part ms-5">
                  <div className="user_login-input">
                    <label className="d-block fw-bold text-muted">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      ref={emailRef}
                      required={true}
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
                      ref={psdRef}
                      required={true}
                      className="px-2 py-1 mb-2"
                      style={{ outline: "none" }}
                    />
                  </div>

                  <div className="user_login-input">
                    <button className="notfound-btn" style={{ border: 0 }}>
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
                
                
                </form>
                {user?.email && <Alert
      variant="success">Create user successfully</Alert>}
      {error && toast(' your email or password does not match!'

)}
{/* <ToastContainer /> */}


                <button onClick={handleGoogleSignIn} className="notfound-btn ms-5" style={{border:0}}>Google SignIn</button>
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
