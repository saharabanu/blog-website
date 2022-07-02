import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="">
        <div className=" d-flex align-items-center justify-content-center mt-5 bg-secondary w-50 mx-auto text-white">
          <div className="notfound-content py-5 bg-secondary">
            <h4>404</h4>
            <h2>Oops! That page can’t be found</h2>
            <p>Sorry, but the page you were looking for could not be found.</p>

            <Link to="/" className="notfound-btn">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
