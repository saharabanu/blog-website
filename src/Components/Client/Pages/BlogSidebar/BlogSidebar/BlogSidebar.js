import React from "react";
import Advertise from "../Advertise/Advertise";
import Author from "../Author/Author";
import Gallery from "../Gallery/Gallery";
import RecentPosts from "../RecentPosts/RecentPosts";

const BlogSidebar = () => {
  return (
    <>
      <Author />
      <RecentPosts />
      <Gallery />
      <Advertise />
    </>
  );
};

export default BlogSidebar;
