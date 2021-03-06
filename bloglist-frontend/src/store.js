import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer=combineReducers({
  blogs: blogReducer,
  users: userReducer,
  notification: notificationReducer,
  login: loginReducer
})

const store=createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
