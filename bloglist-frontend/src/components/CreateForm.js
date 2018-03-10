import React from 'react'
import {connect} from 'react-redux'
import {createNewBlog} from '../reducers/blogReducer'
import blogServices from '../services/blogs'

const CreateForm=(props)=>{
  const  createBlog= async (event)=>{
      event.preventDefault()

      const blogObject={
        title: event.target.title.value,
        author: event.target.author.value,
        url: event.target.url.value,
        likes: 0
      }
      event.target.title.value=''
      event.target.author.value=''
      event.target.url.value=''
      const blogCreated=await blogServices.create(blogObject)
      props.createNewBlog(blogCreated)      
    }


  return (
    <div>
      <form onSubmit={createBlog}>
        title <input name="title" /> <br />
        author
        <input name="author" /> <br />
        url <input name="url" /><br />
        <button type="submit">post</button>
      </form>
    </div>
  )
}

const  createBlog=(event, props)=>{
    event.preventDefault()

    const blogObject={
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value
    }
    console.log(blogObject)
    console.log(props)
  }
const mapStateToProps=(state)=>{
  return {
    blogs: state.blogs
  }
}

const ConnectedCreateForm=connect(
  mapStateToProps,
  {createNewBlog}
)(CreateForm)
export default ConnectedCreateForm
