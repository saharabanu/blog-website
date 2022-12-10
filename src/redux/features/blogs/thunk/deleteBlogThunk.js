import { deleteBlog } from "../blogActions";

export const deleteBlogThunk = (id) => {
    return async(dispatch) => {
        const response = await fetch(`https://blog-website-server-api.onrender.com/blog/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type": "application/json"
            }

        });
        const data = await response.json();

        if(data.acknowledged){
            dispatch(deleteBlog(id))
        }

    }
}