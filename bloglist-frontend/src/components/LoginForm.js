import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../reducers/loginReducer'
import loginService from '../services/login'
import blogService from '../services/blogs'

const LoginForm=(props)=>{
  const logIn= async(event)=>{
    event.preventDefault()
    try {
      props.loginUser({
        username: event.target.username.value,
        password:event.target.password.value
      })
    } catch (exception){
      console.log(exception)
    }
  }
  return (
    <div>
      <h2>kirjaudu</h2>
      <form onSubmit={logIn}>
        <div>
          username
          <input
            type="text"
            name="username"

          />
        </div>
        <div>
          password
          <input
            type="password"
            name="password"
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    blogs: state.blogs,
    login:state.login
  }
}
const ConnectLoginForm=connect(
  mapStateToProps,
  {loginUser}
)(LoginForm)
export default ConnectLoginForm
