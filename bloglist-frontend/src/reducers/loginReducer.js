import loginService from '../services/login'
import blogService from '../services/blogs'

const loginReducer=(state=null, action)=>{
  switch (action.type) {
    case 'INITIALIZE' :
      return action.data
    case 'LOGIN' :
      return action.data
    case 'LOGOUT' :
      return null
    default :
      return state

  }
}
export const initializeUser=(user)=>{
  return {
    type: 'INITIALIZE',
    data: user
  }
}
export const loginUser=(credentials)=>{
  return async (dispatch)=>{
    const user=await loginService.login(credentials)
    console.log(user)
    blogService.setToken(user.token)
    window.localStorage.setItem('loggedUser', JSON.stringify(user))
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}
export const logoutUser=()=>{
  window.localStorage.removeItem('loggedUser')
  return {
    type: 'LOGOUT'
  }
}
export default loginReducer
