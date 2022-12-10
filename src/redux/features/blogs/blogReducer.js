import { ERROR, GET_CONTENT, GET_SINGLE_CONTENT, LOADED } from "./blogActionTypes";
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
            
        // get blog reducer action
        case GET_SINGLE_CONTENT:
            return{
              ...state,
            //   blogs: state.blogs.filter(blog => blog._id !== action.payload.id)
              blogs:state.blogs.map(blog => {
                if(blog._id !== action.payload.id){
                    return blog;
                }
                return{
                    ...state,
                    blogs: action.payload.id
                }
              })
            };
            
           
    
        default:
            return state
    }

}
export default blogReducer;