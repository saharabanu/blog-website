import { ADD_CONTENT, DELETE_CONTENT, ERROR, GET_CONTENT, GET_SINGLE_CONTENT, LOADED, UPDATE_CONTENT } from "./blogActionTypes";
import { blogInitialState } from "./blogInitialState";

const blogReducer = (state= blogInitialState, action) =>{
    switch (action.type) {
        // loading reducer action
        case LOADED:
            return{
              ...state,
              loading: true,
              error: false
            };
        // error reducer action
        case ERROR:
            return{
              ...state,
              loading: false,
              blogs:[],
              error: true
            };
        // get blog reducer action
        case GET_CONTENT:
            return{
              ...state,
              blogs:action.payload
            };
        // add blog reducer action
        case ADD_CONTENT:
            return{
              ...state,
              blogs:[...state.blogs, action.payload]
            };
        // delete blog reducer action
        case DELETE_CONTENT:
            return{
              ...state,
              blogs: state.blogs.filter(blog => blog._id !== action.payload)
            };
        // edit blog reducer action
        case UPDATE_CONTENT:
          return {
            ...state,
            blog: action.payload
            
        };
            
        default:
            return state
    }

}
export default blogReducer;