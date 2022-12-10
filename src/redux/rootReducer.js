import {combineReducers} from 'redux'
import blogReducer from './features/blogs/blogReducer'
import { filtersReducer } from './features/filters/filtersReducer'

export const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: filtersReducer
})
