import { GET_CONTENT, GET_SINGLE_CONTENT, LOADED } from "./blogActionTypes"


// fetch loaded action function 
export const loadBlogStart = () => {
    return {
        type:LOADED,
    }
};

// get blog action function 

export const getBlog = (blog) => {
    return {
        type:GET_CONTENT,
        payload: blog
    }
};
// get blog action function 

export const getSingleBlog = ( blog,id) => {
    return {
        type:GET_SINGLE_CONTENT,
        payload: {
            blog, 
            id
        }
    }
};