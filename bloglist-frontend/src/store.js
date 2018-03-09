import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import {createStore, combineReducers} from 'redux'

const reducer=combineReducers({
  blogs: blogReducer,
  notification: notificationReducer
})

const store=createStore(reducer)

export default store
