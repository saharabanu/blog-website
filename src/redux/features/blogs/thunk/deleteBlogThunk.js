import { deleteBlog } from "../blogActions";

export const deleteBlogThunk = (id) => {
    return async(dispatch) => {
        const response = await fetch(`http://localhost:8000/blog/${id}`,{
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