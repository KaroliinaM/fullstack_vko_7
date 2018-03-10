import React from 'react'
import {connect} from 'react-redux'
import Notification from './components/Notification'
import Testi from './Testi'
import Blog from './components/Blog'
import BlogList from './components/BlogList'
import CreateForm from './components/CreateForm'
import LoginForm from './components/LoginForm'
import Login from './components/Login'
import {notify} from './reducers/notificationReducer'
import blogService from './services/blogs'

import {initBlogs} from './reducers/blogReducer'
import {loginUser, initializeUser} from './reducers/loginReducer'

class App extends React.Component {

  componentDidMount= async ()=>{
    this.props.initBlogs()
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
        <Login />
      </div>

    )
  }
}
const mapStateToProps=(state)=>{
  return{
    notification: state.notification,
    blogs: state.blogs
  }
}

const ConnectedApp=connect(
  mapStateToProps,
  {notify, initBlogs, loginUser, initializeUser}
)(App)

export default ConnectedApp
