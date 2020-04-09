import { combineReducers } from 'redux'
import success from './successReducer'
import postReducer from '../reducers/posts/reducer.js'

export default combineReducers({
  success,
  postReducer
})