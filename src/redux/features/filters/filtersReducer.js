
import { CLEAR_FILTER, FILTER_BY_CATEGORY, FILTER_BY_TITLE } from "./filtersActionTypes";
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