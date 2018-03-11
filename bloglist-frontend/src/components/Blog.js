import React from 'react'
import ToggleBlog from './ToggleBlog'
import {connect} from 'react-redux'

import {likeBlog, deleteBlog} from '../reducers/blogReducer'

const Blog = ({blog, whenLiked, deletion, comm}) => {
const hidden={display:'none'}
  const showDeletion={display: (blog.user.username ===(JSON.parse(window.localStorage.getItem('loggedUser')).username))||(blog.user.username===undefined) ? '' : 'none'}
//
  return (
    <div>
    <h1>{blog.title} {blog.author}</h1>
     {blog.url} <br /> {blog.likes} likes<button onClick={whenLiked} value={blog._id} >like</button> <br />
     added by: {blog.user.name}
     <div style={showDeletion}><button onClick={deletion}>delete</button></div>
     <div>comments: {blog.comments.map(c=>{
       return(<div key={c._id}>{c.comment}</div>)
     }) }
     </div>
     <form onSubmit={comm}>
     <input name="ident" value={blog._id} style={hidden} readOnly />
      <input name="comment" />
      <button type='submit'>send</button>
     </form>
    </div>
  )
}
export default Blog
