import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <div className="about-count  py-5 border px-3 rounded" style={{ backgroundColor: "#f8f6f0" }}>
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className="count-1 border-end" style={{ borderColor: "#E5C18F94" }}>
              <h2 className="text-muted">
                <CountUp end={35} suffix="+" />
              </h2>

              <h5>Posted Stories</h5>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="count-1 border-count border-end ">
              <h2 className="text-muted">
                <CountUp end={20} suffix="+" />
              </h2>

              <h5>Completed Project</h5>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="count-1 border-count">
              <h2 className="text-muted">
                <CountUp end={50} suffix="+" />
              </h2>
              <h5>Happy Customer</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
