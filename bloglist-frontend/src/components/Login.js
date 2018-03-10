import React from 'react'
import {connect} from 'react-redux'

import LoginForm from './LoginForm'
import CreateForm from './CreateForm'
import BlogList from './BlogList'
import Togglable from './Togglable'

import {logoutUser} from '../reducers/loginReducer'

const Login=(props)=>{
  if(props.login===null) {
    return (
      <div>
        <LoginForm />
      </div>
    )
  } else {
    return (
      <div>
        <p>{props.login.name} logged in <button onClick={()=> props.logoutUser()}>logout</button></p>
        <Togglable buttonLabel = "create entry">
          <CreateForm />
          <br />
        </Togglable>
        <BlogList />
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    login: state.login
  }
}

const ConnectedLogin=connect(
  mapStateToProps,
  {logoutUser}
)(Login)
export default ConnectedLogin
