export const LOADED = "singleBlog/LOADED";
export const ERROR = "singleBlog/ERROR";
export const GET_SINGLE_CONTENT = "blog/GET_SINGLE_CONTENT";

export const initialState = {
   
}



// get blog action function 

export const getSingleBlog1 = ( blog) => {
    return {
        type:GET_SINGLE_CONTENT,
        payload: blog
    }
};


export const singleBlogReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SINGLE_CONTENT:
            return{
                ...state,
                blog: action.payload

            }
        
           
    
        default:
            return state
    }

}