import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import about from "../../../../assets/about.jpg";
import Counter from "../Counter/Counter";
import AboutVision from "../AboutVision/AboutVision";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="login-header">
        <h2 className="text-center fw-bold text-white">About Me</h2>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="pt-5 ">
              <h2 className="pb-3">A Better Platform To Showcase Your Insights And Blog !</h2>
              <p>
                Vel aliquip felis duis quidem consectetur libero placeat tellus scelerisque litora
                culpa fusce feugiat asperiores cupidatat dapibus primis pede aliquam. Augue laoreet
                nibh tempor. Venenatis. Nam est justo incidunt hendrerit dolore nostra felis? Augue
                cupidatat.
                <br /> <br />
                Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias
                facilisis, habitasse culpa conubia tellus aspernatur totam, imperdiet debitis? Nec
                eius, impedit feugiat odio.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pt-5">
              <img className="w-100" src={about} alt="" />
            </div>
          </div>
        </div>

        <div className="pb-3">
          <Counter />
        </div>
        <div className="py-5">{/* <AboutVision /> */}</div>
      </div>
      <Footer />
    </>
  );
};

export default About;
