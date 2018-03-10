import React from 'react'
import Blog from './Blog'
import {likeBlog, deleteBlog} from '../reducers/blogReducer'
import {connect} from 'react-redux'
import blogServices from '../services/blogs'

const BlogList=(props)=>{
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

  return (
    <div>
      <h2>blogs</h2>
      {props.blogs.map(blog =>{
        return(
      <Blog key={blog._id} blog={blog} whenLiked={likeaBlog(blog)} deletion={removeaBlog(blog._id)} />)}
      )}
    </div>
  )
}



const sortBlogs=(blogs)=>{
  const sortedblogs=blogs.sort(function (a, b){
    return b.likes-a.likes
  })
  return sortedblogs
}


const mapStateToProps=(state)=>{
  return{
    blogs: sortBlogs(state.blogs)
  }
}

const ConnectedBlogList=connect(
  mapStateToProps,
  {likeBlog, deleteBlog}
)(BlogList)
export default ConnectedBlogList
