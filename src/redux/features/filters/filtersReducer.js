
import { FILTER_BY_CATEGORY } from "./filtersActionTypes";
import { filtersInitialState } from "./filtersInitialState";

export const filtersReducer = (state= filtersInitialState, action) => {
    switch (action.type) {
        case FILTER_BY_CATEGORY:
            return{
                ...state,
                category: action.payload

            }
    
        default:
            return state
    }

}