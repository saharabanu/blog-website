import { editBlog } from "../blogActions";

export const editBlogThunk = (id, blog) => {
    return async (dispatch) => {
        const response = await fetch(`https://blog-website-server-api.onrender.com/blog/${id}`,{
           method: "PUT",
           body: JSON.stringify({
              title: blog.title,
              image: blog.image,
              category: blog.category,
              author: blog.author,
              desc1: blog.desc1,
              desc2: blog.desc2,
              desc3: blog.desc3
           }),
           headers: {
            "Content-type": "application/json"
        }
        });
        const data = await response.json();
        console.log(data);
        dispatch(editBlog(data))


    }

}