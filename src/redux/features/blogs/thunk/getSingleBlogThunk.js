import { getSingleBlog1 } from "../blog/blogReducer";





export const getSingleBlogThunk = (id) => {
    return async(dispatch) => {
        const response = await fetch(`http://localhost:8000/blog/${id}`);
        const data = await response.json();
        console.log(data)
        dispatch(getSingleBlog1(data))

   
        
        

    }
}