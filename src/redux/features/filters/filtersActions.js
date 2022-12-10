import { CLEAR_FILTER, FILTER_BY_CATEGORY, FILTER_BY_TITLE, FIRST_UPLOAD, LAST_UPLOAD } from "./filtersActionTypes"

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
// filter by title action
export const sortByFirstUpload = (date) => {
    return {
        type:FIRST_UPLOAD,
        payload: date
    }
}
// filter by title action
export const sortByLastUpload = (date) => {
    return {
        type:LAST_UPLOAD,
        payload: date
    }
}
// clear filter action
export const clearFilter = () => {
    return {
        type:CLEAR_FILTER,
        
    }
}