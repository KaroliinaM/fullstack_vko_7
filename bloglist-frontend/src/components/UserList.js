import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const UserList=(props)=>{
  const users= props.users
  console.log(users)
  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr><td></td><td>blogs added</td></tr>
        </thead>
        <tbody>
        {users.map(user=>{
          return (
            <tr key={user._id}><td><Link to={`/users/${user._id}`}>{user.username}</Link></td><td>{user.blogs.length}</td></tr>
          )
        }
        )}
        </tbody>
      </table>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    users: state.users
  }
}
const ConnectedUserList=connect(
  mapStateToProps
)(UserList)
export default ConnectedUserList
