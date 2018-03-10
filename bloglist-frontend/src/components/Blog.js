import React from 'react'
import ToggleBlog from './ToggleBlog'
import {connect} from 'react-redux'

const Blog = ({blog, whenLiked, deletion}) => {

  const showDeletion={display: (blog.user.username ===(JSON.parse(window.localStorage.getItem('loggedUser')).username))||(blog.user.username===undefined) ? '' : 'none'}

  return (
    <div>


   <ToggleBlog linkText={blog.title+ " " +blog.author} >
     <div> {blog.url} <br /> {blog.likes}<button onClick={whenLiked} value={blog._id} >like</button> <br />
     <div style={showDeletion}><button onClick={deletion}>delete</button></div></div>
   </ToggleBlog>


    </div>
  )
}

export default Blog
