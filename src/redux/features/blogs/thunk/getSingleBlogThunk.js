import { getSingleBlog1 } from "../blog/blogReducer";

export const getSingleBlogThunk = (id) => {
  return async (dispatch) => {
    const response = await fetch(`https://blog-website-server-api.onrender.com/blog/${id}`);
    const data = await response.json();
    console.log(data);
    dispatch(getSingleBlog1(data));
  };
};
