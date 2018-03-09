import React from 'react'
import {connect} from 'react-redux'
import Notification from './components/Notification'
import Testi from './Testi'
import Blog from './components/Blog'
import BlogList from './components/BlogList'
import CreateForm from './components/CreateForm'
import LoginForm from './components/LoginForm'
import {notify} from './reducers/notificationReducer'

class App extends React.Component {


  render() {
    return (
      <div>
        ...
        {this.props.notification.message}
        {this.props.notification.messageType}
        <CreateForm />
        <BlogList />

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
  {notify}
)(App)

export default ConnectedApp
