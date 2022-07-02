import React from "react";
import Author from "../Author/Author";
import Gallery from "../Gallery/Gallery";
import RecentPosts from "../RecentPosts/RecentPosts";

const BlogSidebar = ({ blog }) => {
  console.log(blog);
  return (
    <>
      <Author />
      <RecentPosts />
      <Gallery />
    </>
  );
};

export default BlogSidebar;
