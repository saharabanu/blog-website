import React from "react";
import about1 from "../../../../assets/about1.jpg";

const AboutVision = () => {
  return (
    <>
      <div className="vision">
        <div className="row">
          <div className="col-md-4">
            <div className="bg-white p-5 about-mision-tex1">
              <h3>My Vision .....</h3>
              <p>
                Vel aliquip felis duis quidem consectetur libero placeat tellus scelerisque litora
                culpa fusce feugiat asperiores cupidatat.
                <br /> <br />
                Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias
                facilisis, habitasse culpa conubia tellus.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-vision-img">
              <img className="img-fluid" src={about1} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-white p-5 about-mision-tex2">
              <h3>My Mision .....</h3>
              <p>
                Vel aliquip felis duis quidem consectetur libero placeat tellus scelerisque litora
                culpa fusce feugiat asperiores cupidatat.
                <br /> <br />
                Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias
                facilisis, habitasse culpa conubia tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVision;
