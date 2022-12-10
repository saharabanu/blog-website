import { getSingleBlog } from "../blogActions";

export const getSingleBlogThunk = (id,data) => {
    console.log(data);
    return async(dispatch) => {
        const response = fetch(`http://localhost:8000/blog/${id}`);
        const data = await (await response).json();
        console.log(data);

       if(data.acknowledged){
            dispatch(getSingleBlog({
                _id: data.insertedId,
                data}))
            }
        
        

    }
}