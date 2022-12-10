import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, GET_SINGLE_CONTENT, LOADED } from "./blogActionTypes"


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
// add blog action function 

export const addBlog = ( blog) => {
    return {
        type:ADD_CONTENT,
        payload: blog
    }
};
// delete blog action function 

export const deleteBlog = ( id) => {
    return {
        type:DELETE_CONTENT,
        payload: id
    }
};