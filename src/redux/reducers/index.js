import { combineReducers } from 'redux'
import success from './successReducer'
import posts from '../reducers/posts/reducer.js'

export default combineReducers({
  success,
  posts
})