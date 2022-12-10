import { CLEAR_FILTER, FILTER_BY_CATEGORY, FILTER_BY_TITLE } from "./filtersActionTypes"

// filter by category action
export const filterByCategory = (category) => {
    return {
        type:FILTER_BY_CATEGORY,
        payload: category
    }
}
// filter by title action
export const filterByTitle = (title) => {
    return {
        type:FILTER_BY_TITLE,
        payload: title
    }
}
// clear filter action
export const clearFilter = () => {
    return {
        type:CLEAR_FILTER,
        
    }
}