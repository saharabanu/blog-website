import { addBlog } from "../blogActions";

export const addBlogThunk = (blog) => {
    return async (dispatch) => {
        const response = await fetch("https://blog-website-server-api.onrender.com/blog",{
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json"
            }

        });
        const data = await response.json();

        if(data.acknowledged){
            dispatch(addBlog({
                _id: data.insertedId,
                ...blog
            }))
        }

    }
}