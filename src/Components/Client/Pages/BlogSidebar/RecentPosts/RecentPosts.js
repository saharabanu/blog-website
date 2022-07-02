import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("./blogsData.json").then((res) => {
      // console.log(res.data);
      setBlogs(res.data);
    });
  }, []);

  return (
    <>
      <h4 className="text-center px-3 py-2 border mt-5">Popular Posts</h4>

      <div className="">
        <div className="row">
          {blogs.slice(7, 10).map((blog) => (
            <div className="col-md-12" key={blog.id}>
              <div className="d-flex border mb-3 pt-3 justify-content-start align-items-center">
                <div className="w-50">
                  <img className="w-75 h-50" src={blog.image} alt="" />
                </div>
                <div className="w-100">
                  <h6 style={{ color: "#9932cc", cursor: "pointer" }}>{blog.title}</h6>
                  <p className="text-muted">Date: {blog.date}</p>
                  {/* <Link to={`blog/${id}`} style={{ color: "#9932cc" }}>
                    Read More
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
