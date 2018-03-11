import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../reducers/loginReducer'
import {notify, actionNotified} from '../reducers/notificationReducer'
import loginService from '../services/login'
import blogService from '../services/blogs'

const LoginForm=(props)=>{
  const logIn= async(event)=>{
    event.preventDefault()
    try {
      await props.loginUser({
        username: event.target.username.value,
        password: event.target.password.value
      })
      props.notify({message: 'login succesful', messageType: 'success'})
      //props.actionNotified('login')
      //console.log(result)
      //
      // result.name!==event.target.username.value ?
      //   props.notify({message: 'login failed', messageType: 'error'}) :
      //   props.notify({message: 'login succesful', messageType: 'success'})

    } catch (exception){
      console.log(exception)
    }
  //  console.log(props.login)
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
    login:state.login,
    notification: state.notification
  }
}
const ConnectLoginForm=connect(
  mapStateToProps,
  {loginUser, notify, actionNotified}
)(LoginForm)
export default ConnectLoginForm
