import React from "react";

const Location = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-5">
            <h3>Get In Touch And Contact Now To Reach !</h3>
          </div>
          <div className="col-md-7">
            <p>
              Iusto aliqua duis, conubia vitae voluptas, non repellat doloremque rutrum! Habitant
              cillum, cras massa? Lobortis magnis eget itaque officiis ratione at hic amet semper
              tellus scelerisque quisquam.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-5">
                <lottie-player
                  src="https://assets9.lottiefiles.com/private_files/lf30_kxkxycqz.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "300px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="col-md-7 ">
                <div className="location">
                  <h4>Location Details</h4>
                  <p>Moghbazar, Dhaka-1207</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-5">
                <lottie-player
                  src="https://assets3.lottiefiles.com/packages/lf20_veki9s25.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "300px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="col-md-7 ">
                <div className="location">
                  <h4>Email Address</h4>
                  <p>youremail@company.com, company@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-5">
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_u3ascu0i.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "300px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="col-md-7 ">
                <div className="location">
                  <h4>Phone Numbers</h4>
                  <p>(+977)-1234-567-55 / (+977)-123-567-87</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
