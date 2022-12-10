import { addBlog } from "../blogActions";

export const addBlogThunk = (blog) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8000/blog",{
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