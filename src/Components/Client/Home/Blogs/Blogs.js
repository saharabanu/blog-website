import React, { useEffect } from "react";
import BlogView from "../BlogView/BlogView";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getBlogThunk } from "../../../../redux/features/blogs/thunk/fetchBlogsThunk";


const Blogs = () => {
  // data from initial state 
  const {blogs, loading, error} = useSelector(state => state.blogs);
  const {category} = useSelector(state => state.filters);
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
   if (!loading && !error && blogs.length && (category)  ) {
     content = blogs
     .filter((blog) =>{
      if(category){
        return blog.category === category
      }
      return blog
     })
     .map(blog => <BlogView key = {blog?._id} blog={blog}/>)
     
   }
  //  if (!loading && !error && products?.length && (stock || brands.length)) {
  //    content = products
  //    .filter((product) => {
  //     if(stock){
  //       return product.status === true;
  //     }
  //     return product;

  //    })
  //    .filter((product) =>{
  //     if(brands.length){
  //       return brands.includes(product.brand);
  //     }
  //     return product;
  //    })
  //    .map(product => <ProductCard key = {product._id} product={product}/>)
     
  //  }
   

  return (
    <>
      <div className="container mb-3 " id="blogs">
        <h2 className="pb-4 text-center">Latest Blogs</h2>
        <div className="row ">
        {content}
          {/* <div className="col-md-7">
            <div className="row gap-4">
            {content}
            </div>
          </div>
          <div className="col-md-5 gap-2">
            <BlogSidebar className="">
              <h3>Sidebar</h3>
            </BlogSidebar>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Blogs;
