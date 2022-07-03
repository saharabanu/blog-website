import React from "react";

const Comment = () => {
  return (
    <>
      <div className="container mt-5 bg-white p-5 rounded mb-5">
        {/* <h5 className="pb-3">Contact Me!</h5> */}
        <form className="row g-3">
          <div className="col-md-6">
            <label for="Name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              required
              style={{ outline: "none", backgroundColor: "#f7f8f9" }}
            />
          </div>
          <div className="col-md-6">
            <label for="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              style={{ outline: "none", backgroundColor: "#f7f8f9" }}
            />
          </div>
          <div className="col-md-6">
            <label for="number" className="form-label">
              Your Number
            </label>
            <input
              type="number"
              className="form-control"
              id="number"
              required
              style={{ outline: "none", backgroundColor: "#f7f8f9" }}
            />
          </div>
          <div className="col-md-6">
            <label for="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder=""
              style={{ outline: "none", backgroundColor: "#f7f8f9" }}
            />
          </div>
          <div className="col-md-12">
            <label for="comments" className="form-label">
              Your Comments
            </label>
            <textarea
              className="form-control"
              id="comments"
              rows="6"
              required
              style={{ outline: "none", backgroundColor: "#f7f8f9" }}
            ></textarea>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              className="notfound-btn px-4 py-2"
              style={{ textDecoration: "none", border: 0 }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comment;
