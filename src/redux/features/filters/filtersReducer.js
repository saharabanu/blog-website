
import { CLEAR_FILTER, FILTER_BY_CATEGORY, FILTER_BY_TITLE, FIRST_UPLOAD, LAST_UPLOAD } from "./filtersActionTypes";
import { filtersInitialState } from "./filtersInitialState";

export const filtersReducer = (state= filtersInitialState, action) => {
    switch (action.type) {
        // filter by category reducer 
        case FILTER_BY_CATEGORY:
            return{
                ...state,
                category: action.payload

            }
        // filter by title reducer 
        case FILTER_BY_TITLE:
            return{
                ...state,
                title: action.payload

            };
        // filter by title reducer 
        case FIRST_UPLOAD:
            return{
                ...state,
                date: action.payload

            };
        // filter by title reducer 
        case LAST_UPLOAD:
            return{
                ...state,
                date: state.blogs.date === action.payload

            };
        // clear filter reducer 
        case CLEAR_FILTER:
            return{
                ...state,
                category: "",
                title:""

            };
    
        default:
            return state
    }

}