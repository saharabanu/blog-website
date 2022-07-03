import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/blogsData.json").then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
  return (
    <>
      <div className="row container g-4">
        {blogs.length ? (
          blogs.map((blog) => (
            <div className="col-md-4 px-5" key={blog.id}>
              <div className="blog-container border">
                <div className="position-relative">
                  <div className="blog_img ">
                    <img className="img-fluid " src={blog.image} alt="" />
                  </div>
                  <div className="top-category position-absolute top-0 left-0 ">
                    <h5 className="px-2 py-1" style={{ backgroundColor: "#9932cc", color: "#fff" }}>
                      {blog.category}
                    </h5>
                  </div>
                </div>

                <div>
                  <h5 className="py-3">{blog.title}</h5>
                  <p>{blog.desc1.slice(0, 100)}</p>
                  <div className="blog-btn">
                    <Link to={`blog/${blog.id}`} style={{ color: "#9932cc" }}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <Spinner animation="border" variant="warning" />
          </div>
        )}
      </div>
    </>
  );
};

export default ManageBlogs;
