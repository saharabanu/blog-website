import React, { useEffect, useState } from "react";
import BlogView from "../BlogView/BlogView";
import axios from "axios";
import BlogSidebar from "../../Pages/BlogSidebar/BlogSidebar/BlogSidebar";
import Spinner from "react-bootstrap/Spinner";
import data from "../../../../database/blogsData.json";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios.get("./blogsData.json").then((res) => {
//       console.log(res.data);
//       setBlogs(res.data);
//     });
//   }, []);
const Blogs = () => {
  return (
    <>
      <div className="container mb-3 " id="blogs">
        <h2 className="pb-4 text-center">Latest Blogs</h2>
        <div className="row ">
          <div className="col-md-7">
            <div className="row gap-4">
              {data.length ? (
                data.slice(0, 8)?.map((blog) => <BlogView blog={blog} key={blog.id} />)
              ) : (
                <div>
                  <Spinner animation="border" variant="warning" />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-5 gap-2">
            <BlogSidebar className="">
              <h3>Sidebar</h3>
            </BlogSidebar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
