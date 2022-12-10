import { getBlog } from "../blogActions";

export const getBlogThunk = () => {
    return async(dispatch) => {
        const response = fetch('http://localhost:8000/blogs');
        const data = await (await response).json();
        // console.log(data);

        if(data.data.length){
            dispatch(getBlog(data.data))
        }
        

    }
}