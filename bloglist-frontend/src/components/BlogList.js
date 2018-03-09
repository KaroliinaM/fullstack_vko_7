import React from 'react'
import Blog from './Blog'
import {likeBlog, deleteBlog} from '../reducers/blogReducer'
import {connect} from 'react-redux'

const BlogList=(props)=>{

  return (
    <div>
      <h2>blogs</h2>
      {props.blogs.map(blog =>{
        return(
      <Blog key={blog._id} blog={blog} whenLiked={()=>props.likeBlog(blog._id)} deletion={()=>props.deleteBlog(blog._id)} />)}
      )}
      {console.log(props)}
    </div>
  )
}


const mapStateToProps=(state)=>{
  return{
    blogs: state.blogs
  }
}

const ConnectedBlogList=connect(
  mapStateToProps,
  {likeBlog, deleteBlog}
)(BlogList)
export default ConnectedBlogList
