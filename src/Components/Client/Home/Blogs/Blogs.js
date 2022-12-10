import React, { useEffect } from "react";
import BlogView from "../BlogView/BlogView";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getBlogThunk } from "../../../../redux/features/blogs/thunk/fetchBlogsThunk";
import { clearFilter } from "../../../../redux/features/filters/filtersActions";


const Blogs = () => {
  // data from initial state 
  const {blogs, loading, error} = useSelector(state => state.blogs);
  const {category, title} = useSelector(state => state.filters);
  // console.log(blogs);

  // dispatch  
  const dispatch = useDispatch();

  
//  load and get data blog 
  useEffect( () => {
    dispatch(getBlogThunk())
  }, [dispatch]);

  let content;
 
   if (loading) {
     content = <div>
     <Spinner animation="border" variant="warning" />
   </div>
     
   }
   if (error) {
     content = <p className="bg-red-500 text-white">Something went wrong.......</p>
     
   }
   if (!loading && !error && blogs?.length === 0) {
     content = <p> No Blogs Found.......</p>
     
   }
   if (!loading && !error && blogs?.length ) {
     content = blogs.map(blog => <BlogView key = {blog?._id} blog={blog}/>)
     
   }
   if (!loading && !error && blogs.length && (category || title)  ) {
     content = blogs
     .filter((blog) =>{
      if(category){
        return blog.category === category
      }
      return blog
     })
     .filter((blog) =>{
      if(title){
        return blog.title ===title
      }
      return blog
     })
     .sort((a, b) => a.date > b.date).map(blog => <BlogView key = {blog?._id} blog={blog}/>)
     
   }
  
   

  return (
    <>
      <div className="container mb-3 " id="blogs">
        <h2 className="pb-4 text-center">Latest Blogs</h2>
        {(category || title) &&<button onClick={() => dispatch(clearFilter())}> Clear</button>}
        <div className="row ">
        {content}
          
        </div>
      </div>
    </>
  );
};

export default Blogs;
