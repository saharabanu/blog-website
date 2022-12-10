import { getBlog } from "../blogActions";

export const getBlogThunk = () => {
    return async(dispatch) => {
        const response = fetch('https://blog-website-server-api.onrender.com/blogs');
        const data = await (await response).json();
        // console.log(data);

        if(data.data.length){
            dispatch(getBlog(data.data))
        }
        

    }
}