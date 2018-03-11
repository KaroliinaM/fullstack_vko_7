import React from 'react'
import {connect} from 'react-redux'
import Notification from './components/Notification'
import Testi from './Testi'
import Blog from './components/Blog'
import BlogList from './components/BlogList'
import CreateForm from './components/CreateForm'
import LoginForm from './components/LoginForm'
import Login from './components/Login'
import UserList from './components/UserList'
import User from './components/User'
import {notify, actionNotified} from './reducers/notificationReducer'
import blogService from './services/blogs'
import userService from './services/users'

import {initBlogs} from './reducers/blogReducer'
import {loginUser, initializeUser} from './reducers/loginReducer'
import {userListInitialization} from './reducers/userReducer'

class App extends React.Component {

  componentDidMount= async ()=>{
    this.props.initBlogs()
    const users=await userService.getAll()
    this.props.userListInitialization(users)
    const loggedUserJSON=window.localStorage.getItem('loggedUser')
    if(loggedUserJSON) {
      const user=JSON.parse(loggedUserJSON)
      this.props.initializeUser(user)
      blogService.setToken(user.token)
    }
  }

  render() {
    return (
      <div>
        <Notification />
        <Login />
        <br />

        {console.log(this.props)}
      </div>

    )
  }
}
const mapStateToProps=(state)=>{
  return{
    notification: state.notification,
    blogs: state.blogs,
    userlist: state.users
  }
}

const ConnectedApp=connect(
  mapStateToProps,
  {notify, initBlogs, loginUser, initializeUser, actionNotified, userListInitialization}
)(App)

export default ConnectedApp
