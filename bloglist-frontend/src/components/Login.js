import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import User from './User'


import LoginForm from './LoginForm'
import CreateForm from './CreateForm'
import BlogList from './BlogList'
import Togglable from './Togglable'
import UserList from './UserList'
import Blog from './Blog'

import {logoutUser} from '../reducers/loginReducer'
import {notify, actionNotified} from '../reducers/notificationReducer'
import {likeBlog, deleteBlog} from '../reducers/blogReducer'






const Login=(props)=>{
    if(props.loggeduser===null) {
    return (
      <div>
        <LoginForm />
      </div>
    )
  } else {
    const findById = (id, array) =>  array.find(user => user._id === id)
    const likeaBlog=(blog)=>{
      return ()=>{
        props.likeBlog(blog)
      }
    }
    const removeaBlog=(id)=>{
      return ()=>{
        props.deleteBlog(id)
      }
    }
    const commentaBlog=(event)=>{
      event.preventDefault()
      console.log(event.target.ident.value)
      console.log(event.target.comment.value)
    }
    return (
      <div>
      <Router>
      <div>
        <p>&nbsp;
        <Link to="/blogs">blogs</Link>&nbsp;
        <Link to="/users">users</Link>&nbsp;
        {props.loggeduser.name} logged in <button onClick={()=> props.logoutUser()}>logout</button></p>
        <Togglable buttonLabel = "create entry">
          <CreateForm />
          <br />
        </Togglable>

          <div>
            <Route exact path="/blogs" render={()=> <BlogList />} />
            <Route exact path="/users" render={()=> <UserList />} />
            <Route exact path="/users/:id" render={({match})=>
              <User user={findById(match.params.id, props.userList)} />} />
            <Route exact path="/blogs/:id" render={({match})=>
              <Blog blog={findById(match.params.id, props.blogList)} whenLiked={likeaBlog(findById(match.params.id, props.blogList))} deletion={removeaBlog(findById(match.params.id, props.blogList)._id)} comm={commentaBlog} />} />

          </div>
          </div>
        </Router>

        {console.log(props)}
      </div>
    )

  }
}
const checkAction=(props)=>{
  if (props.notification.actionToNotify!==''){
    console.log('tiedotettavaa')
    props.actionNotified('')
  }
}
const mapStateToProps=(state)=>{
  return{
    loggeduser: state.login.user,
    notification: state.notification,
    userList: state.users,
    blogList: state.blogs
  }
}

const ConnectedLogin=connect(
  mapStateToProps,
  {logoutUser, notify, actionNotified, likeBlog, deleteBlog}
)(Login)
export default ConnectedLogin
