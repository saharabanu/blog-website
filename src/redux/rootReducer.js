import {combineReducers} from 'redux'
import { singleBlogReducer } from './features/blogs/blog/blogReducer'
import blogReducer from './features/blogs/blogReducer'
import { filtersReducer } from './features/filters/filtersReducer'

export const rootReducer = combineReducers({
    blogs: blogReducer,
    blog: singleBlogReducer,
    filters: filtersReducer
})
