import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../../../../assets/avatar.jpg";
import Footer from "../../../Shared/Footer/Footer";

import Navigation from "../../../Shared/Navigation/Navigation";
import Comment from "../Comment/Comment";
import data from "../../../../database/blogsData.json";
const SingleBlog = () => {
  const { id } = useParams();
  // console.log(id);
  // const [singleBlog, setSingleBlog] = useState([]);

  // useEffect(() => {
  //   axios("/blogsData.json").then((data) => {
  //     const res = data.data;
  //     const foundBlog = res.filter((detail) => detail.id == id);
  //     // console.log(foundBlog);
  //     setSingleBlog(foundBlog);
  //   });
  // }, [id]);
  const foundBlog = data.filter((detail) => detail.id !== id);
  const { title, desc1, author, image, desc2, category, date, desc3 } = foundBlog[0] || {};

  return (
    <div>
      <Navigation />

      <div
        className="container 
      "
        style={{ color: "#f3efd9" }}
      >
        <h3 className="pt-5 pb-3">{title}</h3>
        <div></div>

        <div className="single-img">
          <img src={image} alt="" className="w-100" style={{ height: "400px" }} />
        </div>
        <div className="">
          <p className="pt-4 text-muted">{desc1}</p>
          <h3>Origin and History</h3>
          <p className=" text-muted">{desc2}</p>

          <p>
            Category: <span className="category">{category}</span>
          </p>
        </div>
        <div className="author">
          <div className="d-flex justify-content-start align-items-center">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <div>
              <h6 className="ms-3">By {author}</h6>
              <h6 className="ms-3">Date: {date}</h6>
              <p className="ms-3">{desc3}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="pt-5 pb-2 text-white">Leave a Reply</h3>
        <Comment />
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;
