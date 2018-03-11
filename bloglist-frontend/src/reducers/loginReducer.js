import loginService from '../services/login'
import blogService from '../services/blogs'
import {notify} from './notificationReducer'

const loginReducer=(state={user:null}, action)=>{
  switch (action.type) {
    case 'INITIALIZE' :
      return action.data
    case 'LOGIN' :
      return action.data
    case 'LOGOUT' :
      return {user: null}
    default :
      return state

  }
}
export const initializeUser=(user)=>{
  return {
    type: 'INITIALIZE',
    data: {user:user}
  }
}
export const loginUser=(credentials)=>{
  return async (dispatch)=>{
    const user=await loginService.login(credentials)

    blogService.setToken(user.token)
    window.localStorage.setItem('loggedUser', JSON.stringify(user))
    dispatch({
      type: 'LOGIN',
      data: {user:user}
    })
  }
}
export const logoutUser=()=>{
  window.localStorage.removeItem('loggedUser')
  console.log('logout')
  return {
    type: 'LOGOUT'
  }
}
export default loginReducer
