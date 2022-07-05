import React from "react";
import { Link } from "react-router-dom";

const BlogView = ({ blog }) => {
  const { id, image, title, category, desc1 } = blog;
  return (
    <>
      <div className="col-md-12">
        <div className="blog-container">
          <div className="row">
            <div className="col-md-6">
              <div className="position-relative">
                <div className="blog_img ">
                  <img className="img-fluid " src={image} alt="" />
                </div>
                <div className="top-category position-absolute top-0 left-0 ">
                  <h5 className="px-2 py-1" style={{ backgroundColor: "#9932cc", color: "#fff" }}>
                    {category}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h4>{title}</h4>
                <p>{desc1.slice(0, 100)}</p>
                <div className="blog-btn">
                  <Link to={`blog/${id}`} style={{ color: "#9932cc" }}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
